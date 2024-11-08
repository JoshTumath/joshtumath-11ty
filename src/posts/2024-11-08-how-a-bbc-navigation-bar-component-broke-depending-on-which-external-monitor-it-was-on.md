---
layout: layouts/post.njk
title: 'How a BBC navigation bar component broke depending on which external monitor it was on'
date: 2024-11-08
---

Recently, my team and I fixed an absolutely bizarre bug that only one person in the team could reproduce. And to make it even weirder, she was only able to reproduce the issue when using her work laptop at home; it worked fine with the same laptop in the office.

## So what was the bug?

The BBC's UK website uses a `click` event to respond to when a user activates the 'More' button. `click` events aren't just activated by the click of a mouse; they can also be activated by touch and the 'enter' or 'space' keys on a keyboard.

![Screenshot of BBC global navigation bar opened using the 'more' button.](/images/2024-11-08-bbc-global-nav.png)

Our 'more' button should open a menu. However, when she was clicking on it at home, the `click` event didn't seem to do anything. Instead, the menu opened using our no-JavaScript fallback behaviour.

_That's strange._ 💭

When we looked into it a bit more, we found out that the bug only happened when her web browser window was on one of her external monitors. She had two external monitors and it happened on both. But when she clicked the button on her laptop screen, the button worked as expected.

_What?_ 🤯

And to make it even stranger, the bug didn't happen in Safari.

_What? What? What?_ 🤯 🤯 🤯

So why on earth was something like a user's external monitor set up affecting `click` events on our website? And why was this bug not happening to everyone else in our team who used an external monitor? It was very strange indeed.

## Reproducing the issue

We wanted to be able to reproduce the bug to properly investigate it, so we needed to understand what it was in her home environment that triggered it.

Since the bug only occurred on her external monitors, we noticed that it stopped if she repositioned them in the OS settings. Her external monitors were positioned above her laptop, so once we replicated that arrangement in our OS settings, we were finally able to reproduce the bug, too.

_Bingo!_

![Screenshot of macOS display settings. Second monitor is shown arranged top left of the built-in laptop monitor.](/images/2024-11-08-multi-monitor-negative.png)

## Our investigation

We had two clues to begin our investigation:

- **1st clue:** <mark>The bug didn't occur on Safari</mark>.
- **2nd clue:** <mark>The bug only happened when the external monitors were positioned above and left of the main monitor</mark>.

Our next step was to investigate our 'more' button's `click` event handler function.

While reproducing the issue, a `console.log` of our 'more' button's click event showed our **3rd clue:** that, <mark>on Chrome and Firefox, the `screenX` and `screenY` properties were negative numbers</mark>.

> **Note:**\
> Even though they can be triggered by any kind of input, `click` events are a type of `PointerEvent`, so their `event` objects include information about the mouse or touch pointers that trigger the clicks. For example, the `screenX` and `screenY` properties show the coordinates (in pixels) for what point on the screen gets clicked on.

That surprised me, because I didn't know those properties were allowed to have negative numbers. I checked the [DOM UI Events spec](https://w3c.github.io/uievents/#dom-mouseevent-screenx) to see if that was correct, but there didn't seem to be any specific information about it.

With some [Ace Attorney Investigations-style logic](https://www.youtube.com/watch?v=iwzOhHFGZKw), when we put together the fact that <mark>the bug didn't occur on Safari</mark> and that, <mark>on Chrome and Firefox, the `screenX` and `screenY` properties were negative numbers</mark>, we could deduce that browsers have an interoperability issue in how they represent screen coordinates in multi-monitor set ups.

![Animation of the logic sequence in Ace Attorney Investigations. The player picks from clues to connect and the game shows if they successfully connected.](/images/2024-11-08-aai-logic.gif)

> **Note:**\
> I ended up reporting the interoperability issue to the WebKit team on [WebKit bug 281430](https://bugs.webkit.org/show_bug.cgi?id=281430).

That knowledge gave rise to our **4th clue:** <mark>the bug only occurred if `screenX` and `screenY` were negative</mark>.

With some more Ace Attorney Investigations-style deductions, when we combined that with our 2nd clue – that <mark>the bug only happened when the external monitors were positioned above and left of the main monitor</mark> – we could deduce our **5th clue:** <mark>on Chrome and Firefox, the `screenX` and `screenY`'s (0,0) coordinate is the top left of the main monitor</mark>.

On a multi-monitor set up, browsers' screen coordinate systems treat multiple monitors as if it were one big monitor. So two 800px wide monitors positioned horizontally would have _x_ coordinates ranging of 0 to 1600. On Safari, that range is always a positive number starting from the top left most monitor, but it looks like, in Chrome and Firefox, they are relative to the main monitor instead and use negative coordinates.

We needed to find the `click` event handler in our code and see how it was reading the `screenX` and `screenY` coordinates from the `event` object.

This is what we found:

```js
const isInvokedByMouse = event => event.screenX > 0 || event.screenY > 0;
const isInvokedByKeyboard = event => isEnterKey(event) || isSpaceKey(event);

// ...

const toggleMenu = event => {
  if (isInvokedByMouse(event) || isInvokedByKeyboard(event)) {
    event.preventDefault();

    // Do stuff to open the menu...
  }
};
```

The `isInvokedByMouse` was checking whether the `click` event was invoked by a mouse or touch pointer – rather than a keyboard – by checking if the `screenX` or `screenY` coordinates were a positive number.

That gave us our **final clue:** <mark>the code assumes `click` events invoked by pointers have positive `screenX` and `screenY` coordinate numbers</mark>.

When a user clicked the 'more' button on a monitor with negative screen coordinates, the event handler wasn't acknowledging the click and instead falling back to the default behaviour of the 'more' button.

We could finally finish our investigation. We could deduce from our final two clues the solution: **we need to check for negative numbers as well as positive numbers when checking the `screenX` and `screenY` coordinates.**

## The fix

As is often the case with bugs, the problem was very complex to figure out, but the solution was very simple.

All we had to do was change the `isInvokedByMouse` to check that `screenX` and `screenY` don't equal 0, rather than checking if they are greater than 0.

```js
const isInvokedByMouse = event =>
  event.type === 'click' && (event.screenX !== 0 || event.screenY !== 0);
```

Now everyone with weird multi-monitor layouts can enjoy the BBC website's navigation bar in peace.

We should probably do further refactoring of the event handler function, since it's complicated by the fact that it also handles `keydown` events. For now, though, this fix will do just fine.

So that was fun! Who would have thought web developers could break an experience for users because of which monitor they're viewing the page on?

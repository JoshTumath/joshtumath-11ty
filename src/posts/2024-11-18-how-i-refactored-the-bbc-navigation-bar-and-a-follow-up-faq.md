---
layout: layouts/post.njk
title: 'How I refactored the BBC navigation bar; and a follow-up FAQ'
date: 2024-11-18
---

My post two weeks ago on [How a BBC navigation bar component broke depending on which external monitor it was on](/posts/2024-11-08-how-a-bbc-navigation-bar-component-broke-depending-on-which-external-monitor-it-was-on) has had a lot of discussion and feedback, including today on Hacker News. After reading the comments, I wanted to clarify some things.

Also, thank you to Patrick H. Lauke from TetraLogical (editor of the Pointer Events Level 2 spec) for [his comment on Mastodon](https://mastodon.social/@patrick_h_lauke/113460817557336178) that suggested improving the offending code by checking for `pointerType` in the `PointerEvent` interface instead of `screenX` and `screenY`.

After my team have finished reviewing it, I will be releasing a refactor of our navigation component's event handling code which I worked on last week. So in this follow-up to that blog post, I want to explain what I changed and then respond to some of those questions.

## Refactoring

In the blog post, I presented our event handler for the menu button. Here it is again with slightly more code:

```js
const isInvokedByMouse = event => event.screenX > 0 || event.screenY > 0;
const isInvokedByKeyboard = event => isEnterKey(event) || isSpaceKey(event);

// ...

const toggleMenu = event => {
  // ...

  if (isInvokedByMouse(event) || isInvokedByKeyboard(event)) {
    event.preventDefault();

    // Do some other things...

    setDrawerState({
      open: !drawerState.open,
      viaKeyboard: isInvokedByKeyboard(event)
    });
  }
};
```

(There is another `keydown` event listener elsewhere in the code for closing the menu using the <kbd>Escape</kbd> key.)

### The investigation

Although we fixed the multi-monitor related issue, I said I wanted to refactor this code here, because it bothered me. If we're responding to a `click` event, _why is it checking that the code is either invoked by a mouse or keyboard and then running the same code to open the menu either way?_ [Something smells.](https://en.wikipedia.org/wiki/Code_smell)

The code for our navigation component is about four years old and a number of developers have iterated on it over the years. While investigating last week, I found one of those changes was to support closing the navigation's menu using the <kbd>Escape</kbd> key.

The navigation's menu originally only used `click` events to open and close it, but responding to an <kbd>Escape</kbd> key required adding an event listener for the `keydown` event as well. So it looked like the `if` statement that checks `isInvokedByMouse` and `isInvokedByKeyboard` was added about a year ago to defensively guard against opening the menu because of a `keydown` event triggered by some other key than <kbd>Enter</kbd> or <kbd>Space</kbd>.

However, upon investigation, it seemed that the `toggleMenu` function wasn't triggered by a `keydown` event listener anyway! So while refactoring, I was able to remove the `toggleMenu` function's seemingly redundant `if` statement.

> **Note:**\
> I should also clarify that the `isInvokedByMouse` function wasn't originally intended to be used in this part of the code shown above. See the Questions section below for how it was originally intended to be used and why we wanted to distinguish between mouse and keyboard inputs for the menu.

### The changes

So below is the new event handler code (simplified for the sake of the article). We use React, so there is a React state hook called `drawerState`.

```js
const isClosedWithKeyboardShortcut = event => isEscapeKey(event);

// Even though a click event object uses PointerEvent/MouseEvent properties, it
// can also be triggered by non-pointer devices like keyboards.
const isClickEventInvokedByKeyboard = event => {
  // If the browser supports PointerEvent properties, we can reliably check for
  // non-pointer input (i.e. keyboard) invocation because pointerId will be set
  // to -1.
  if (typeof event?.nativeEvent?.pointerId === 'number') {
    // react-dom does not support the PointerEvent properties for its synthetic
    // events yet, so we have to use nativeEvent.
    return event.nativeEvent.pointerId < 0;
  }

  // Otherwise, we fallback to MouseEvent properties. Most browsers and
  // assistive tech set screenX/Y to 0 on non-pointer input (i.e. keyboard)
  // invocation. It doesn't work on some browsers and assistive tech like
  // Safari, which set artificial screenX/Y coordinates.
  // See also: https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API/Multi-screen_origin
  return event.screenX === 0 && event.screenY === 0;
};

// ...

const toggleMenu = event => {
  event.preventDefault();

  // Do some other things...

  setDrawerState({
    open: !drawerState.open,
    viaKeyboard: isClickEventInvokedByKeyboard(event)
  });
};

// ...

const closeMenuViaKeyboardShortcut = event => {
  if (isClosedWithKeyboardShortcut(event)) {
    event.preventDefault();

    // Do some other things...

    setDrawerState({
      open: false,
      viaKeyboard: true
    });
  }
};
```

With this change, the event handlers for the `click` event on the 'menu' button and the `keydown` event on the menu itself are separated out and much more simplified. The way the event listeners are set up is also cleaned up, so we no longer need to guard against accidentally responding to the <kbd>Escape</kbd> key (or any other irrelevant key) in the `toggleMenu` function.

Also, we try to follow many of the [clean code principles](https://openlibrary.org/books/OL26222911M/Clean_Code) at the BBC to make sure our code is readable and easily maintainable. This includes trying to write self-explanatory function names and avoiding comments except where needed to warn or clarify. In this case, some functions had been renamed so they don't just explain _what_ they do but indicate _why_ or _when_ you would use them.

In particular, the infamous `isInvokedByMouse` function was renamed to `isClickEventInvokedByKeyboard` to make clear that it should only be used for `click` events and is not useful on any other type of event. I also thought it made sense to add some comments to explain the weirdness around how we were distinguishing between pointers (i.e. mouse, pen, touch) vs keyboards.

As Patrick H. Lauke from TetraLogical suggested, I used one of the newer `PointerEvent` properties to check if the click was via a pointer. It's a far better solution; much more reliable than checking `screenX` and `screenY`. For older browsers, though, we can still fall back to using `screenX` and `screenY`.

I decided to check `pointerId === -1` rather than `pointerType === ""` which he suggested, because the [Pointer Events spec](https://w3c.github.io/pointerevents/#dom-pointerevent-pointerid) says 'The `pointerId` value of `-1` _must_ be reserved and used to indicate events that were generated by something other than a pointing device.' It was very specific that `-1` is for non-pointer devices only. Whereas the spec suggested that there could possibly be other situations where `pointerType` might be an empty string. `pointerId` seemed more unambiguous to me.

Hopefully these changes will mean future developers working on the navigation component will better understand why it works the way it does and more easily follow the logic of how it works. And for our users, the code is now much more robust and less likely to lead to bug reports.

## Questions

### Why are you doing different behaviour depending on keyboard or mouse?

Actually, the behaviour is mostly identical: the user uses some kind of input method to 'click' on the button and it opens or closes a menu.

There is a slight difference between keyboard and pointer devices for two reasons:

1. We wanted to turn off the opening animation for keyboard users so they can immediately see where the focus ring has moved to.
2. We wanted screen reader users to have their focus programmatically moved to the first menu item, because it is the most convenient place to move the focus to. Whereas for mouse/pen/touch users, we don't want them to see the first menu item because they're less likely to be familiar with the concept of 'focus' and could be confused why the first item is highlighted (due to the focus styles being applied on it).

But if we're not able to properly detect if it's a pointer input and we fall back to the keyboard behaviour, we're OK with that because it won't break the user experience; this is just an enhancement.

If I recall correctly, these minor enhancements were suggested by the BBC's accessibility team at the time.

At the BBC, we often spend extra effort on enhancements like this above the usual accessibility box ticking. We don't want disabled users to be disabled by our website; we want their experience to be equitable to non-disabled users. These improvements might come from user research or prior experience from accessibility experts within the BBC or the wider industry.

### Why are you blaming Safari/WebKit for the issue?

I am not – quite the opposite. The multi-monitor bug that we were trying to fix wasn't happening on Safari. The interoperability issue just happened to be a useful clue, showing that the bug was caused by the code that checked for `screenX` and `screenY`.

> **Note:**\
> It's worth emphasising that when the navigation component was first written four years ago, we already knew through testing that WebKit did not represent keyboard-triggered `click` events in `screenX` and `screenY` the same way as Chromium and Firefox did.

### Why did you check `screenX` and `screenY` if you knew that it wouldn't work on Safari?

Since all we're doing is slight enhancements to the experience (depending on the input method the user uses to open the menu), if the user is given the wrong experience, it doesn't really matter that much in this case. It doesn't affect a critical path.

If a the keyboard user actually did notice, their reaction is only going to be: 'Oh no, there was an animation,' or 'Oh no, I have to press <kbd>Tab</kbd> one extra time.'

> **Note:**\
> The multi-monitor bug described in the original blog post was causing a separate problem to this. Instead of falling back to the mouse or keyboard behaviours, it was falling back to the behaviour of the 'menu' button when JavaScript has failed to execute, as explained above.

### Wasn't it obvious that the `if` statement was a code smell? Why wasn't this caught earlier, even before knowing about the bug on certain multi-monitor set-ups?

Maybe. I wasn't involved in adding or reviewing the change that caused the regression, so I can't comment specifically on how it got into the codebase.

But I wouldn't want to blame anyone either. Our codebase is worked on by many different teams with developers who have various levels of experience with Web APIs, React and accessibility and they're all trying their best for our users. Even with our system of requiring two code reviewers and extensive automated and sometimes manual testing, sadly sometimes code smells can get through.

We're all only human after all. All we can do is keep learning from our mistakes, assume everyone's best intentions and try to improve our processes as we go.

I will say, though, that our navigation component has been tested quite extensively on all major browsers and various assistive technology tools during an [accessibility swarm.](https://bbc.github.io/accessibility-news-and-you/guides/accessibility-swarms.html) The bug we observed on particular multi-monitor set-ups was very rare and could not be reproduced in our various testing methods.

### Is Safari's behaviour with `screenX` and `screenY` really incorrect?

So there are two differences in behaviour:

1. What values `screenX` and `screenY` should have **when a `click` is triggered by a keyboard.** Should the coordinates be (0,0) or an arbitrary value like the centre of the clicked element?
1. What values `screenX` and `screenY` should have **on a multi-monitor set-up.** Should the (0,0) origin be the top left of the main monitor or the top left of the top left most monitor?

The original `isInvokedByMouse` function was written with the first interop issue in mind, but not the second.

Personally, I don't mind if browsers follow Chrome and Firefox's approach or follow Safari's approach as long as they are interoperable.

But while working on the fix, it seemed prudent to report the first interop issue to the WebKit team (in [bug 281430](https://bugs.webkit.org/show_bug.cgi?id=281430)), since [browser vendors are always seeking to tackle interoperability issues.](https://wpt.fyi/interop-2024) I only regret not reporting it four years ago when I first became aware of it.

> **Note:**\
> Even if the WebKit team did fix the first interop issue, the multi-monitor bug described in the original blog post would still be happening.

Regarding the second interop issue, as [Schepp pointed out on Mastodon,](https://mastodon.social/@Schepp/113465217716704956) the reason for Chrome and Firefox's negative coordinates on multi-monitor set-ups seems to stem from [the new Window Management API, which defines how browsers should define a virtual screen arrangement.](https://w3c.github.io/window-management/#concept-virtual-screen-arrangement)

I actually haven't reported the multi-monitor interop issue. I probably should…

### Why can't you use `pointerdown`/`mousedown` and `keydown` instead of `click`?

[The `click` event section of the UI Events spec](https://w3c.github.io/uievents/#event-type-click) recommends using `click` over other `keydown` or `mousedown` because it is device-independent:

> For maximum accessibility, content authors are encouraged to use the click event type when defining activation behavior for custom controls, rather than other pointing-device event types such as mousedown or mouseup, which are more device-specific. Though the click event type has its origins in pointer devices (e.g., a mouse), subsequent implementation enhancements have extended it beyond that association, and it can be considered a device-independent event type for element activation.

We could have used `pointerdown` and `keydown`, but `click` is universally supported and recommended by the spec. I see no need to add multiple event handlers that would all do the same thing when `click` will suffice and is more reliable for the use case of opening a menu. (Although the regression that broke the `click` handler entirely on some multi-monitor set-ups was unfortunate.)

That said, if you're working on functionality that has a major difference in behaviour between pointer clicks and keyboard 'clicks', it would totally make sense to use `pointerdown` and `keydown`.

### Why didn't you check for the `PointerEvent` property `pointerId` four years ago when the `isInvokedByMouse` function was originally written?

At the time this code was originally written four years ago, not all browsers treated `click` events as `PointerEvent`s. They used the `MouseEvent` interface, so `pointerId` or `pointerType` wasn't an option.

We had to use `screenX` and `screenY` and check if they equalled 0, because that was the only way to distinguish keyboard and pointer clicks. For the reasons explained above, we were OK with using it despite it being unreliable, because it was just to enable an enhancement to the user experience; not a critical path.

### What if the user clicked on the (0,0) coordinate?

Theoretically they could, but that is extremely unlikely. It would be very contrived to do that, considering the 'menu' button is always positioned on the right side of the page.

### Why didn't you use `clientX` and `clientY` instead of `screenX` and `screenY`?

You could argue it would have been better to use `clientX` and `clientY` because they also return a (0,0) coordinate in Chromium and Firefox on keyboard 'clicks' and they'll never get negative coordinates.

My memory of why we chose `screenX` instead is hazy, but I think it was because the user could theoretically click on the (0,0) coordinate of the viewport, but the (0,0) coordinate of the screen is always outside of the viewport so they can never click on a 'menu' button that's outside of the viewport anyway.

That said, we could have totally used `clientX`. As explained in the previous question, the 'menu' button was positioned on the right side of the page anyway, so it would be impossible for it to even be in the (0,0) coordinate.

## A final point

I love being a part of the web design and development community. I've been a part of it for over ten years. Through it, I've met some amazing people who have inspired me in so many ways. I also love how open and accessible it is. It's why I wanted to join the CSSWG this year, where I can hopefully in some way give back.

It's wonderful when people want to share their learnings with others on blogs. I hope my blog post two weeks ago on how my team and I approached investigating the weird multi-monitor bug was helpful. I hope this post's explanation about how the refactor was done to make the code more robust is helpful, too.

Reading people's feedback on BlueSky and Mastodon was really helpful and encouraging, and sometimes even lead to valuable insights. Thanks to one commenter in particular, I was able to improve how keyboard 'clicks' were identified using `pointerId`, so thank you so much to everyone who replied!

I'm not going to lie, though. Whenever I have a blog post shared on [Hacker News,](https://news.ycombinator.com/item?id=42173233) it can fill me with dread. There can sometimes be a culture of picking everything apart, there, in a way that is not uplifting or constructive and comes across as unkind and unwelcoming. It assumes a lack of experience or assumes the context, instead of asking questions for more information.

I love discussions and disagreements, but not in a way that is unhelpful and demoralising. I wouldn't want anyone to feel regret for wanting contributing to our web design and development community. We all have to ask ourselves: would I speak to someone in-person the same way I'm writing about them in a comment online?

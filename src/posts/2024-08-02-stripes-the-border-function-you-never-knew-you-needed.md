---
layout: layouts/post.njk
title: 'Stripes(): the border function you never knew you needed'
date: 2024-08-02T00:37:45.384Z
---

As long ago as the year 2018, the [CSS Working Group at the W3C agreed to add a new function](https://github.com/w3c/csswg-drafts/issues/2532#issuecomment-402327492) to the `border-color` and `outline-color` properties. The function is called `stripes()`.

The syntax is actually fairly simple. Let's say you want to make a blue and white border. All you have to do is:

```css
border: 4px solid stripes(white, dodgerblue);
```

Sounds great, doesn't it? A simple and effective way to make richer borders and outlines.

And it's particularly valuable in one very important use case: making a focus ring more visible. Being able to make a focus ring that is both black and white means it will be visible any kind of background colour.

'So how long has this been supported in browsers?' you may ask. The answer, sadly, is that _it never has been_.

Despite `stripes()` being added to the CSS Images specification almost six years ago, browser vendors have never supported it. I'm not even aware of how much interest they've shown towards it. One thing I can say for certain is that it's not coming to browsers any time soon.

## What about the alternatives?

One objection or compromise to the need for the `stripes()` function that I often hear is, 'Maybe you don't need it. You could achieve the same effect with just the `box-shadow` property'.

Well that's exactly what we tried at the BBC. A couple of years ago, we created a standardised focus ring design to use across our entire website. It is a 2px inner white stripe and a 2px outer black stripe. The colour order is inverted in dark mode.

When we first set out to build our standard focus ring, we decided to use `box-shadow`, since it supports a list of multiple shadows, and therefore we could use it to fake the effect.

Here's a screenshot of the BBC's focus ring in action:

![Screenshot of a focussed button surrounded by a black and white outline.](/images/2024-08-02-bbc-focus-ring.png)

So let's see how it looks in Windows 11's high-contrast mode:

![Screenshot of the high contrast theme in Windows 11 enabled and a focussed button without any kind of focus indicator.](/images/2024-08-02-bbc-focus-ring-high-contrast.png)

Oh, it's gone!

The problem is: in forced colours mode, [all `box-shadow` properties are effectively disabled.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors#properties_affected_by_forced-color_mode) So we couldn't build our BBC focus ring using `box-shadow` alone.

And there were other issues using `box-shadow`:

- The `outline` property is really reliable for drawing a rectangle around some content – no matter the shape, whereas `box-shadow` is not. For example, if the focusable element is an inline box, but the content inside it is in a block box, the shadow that gets rendered is broken up like in the example below. The `outline` property does not share that issue.

  ![Screenshot of a calendar with two shadows in little squares above and below a circular button. It's not appearing as one shadow around the circle.](/images/2024-08-02-calendar-broken-focus-ring.png)

- Outlines and shadows are layered differently. Outlines are always on top, whereas shadows can get obscured by content overflowing out of the box and by surrounding content.

  ![Screenshot of a thick box-shadow around a link. The paragraph text around the shadow is getting rendered over the shadow.](/images/2024-08-02-big-shadow.png)

- The `box-shadow` can't be offset. It must come out from the very edge of the box. If I want there to be a 2px gap between the edge of the box and the start of a shadow, that's not possible.

## A workaround

As a workaround to the lack of support for `stripes()`, we had to use a mixture of `outline` and `box-shadow`. The outer stripe is the outline and the inner stripe is created by the shadow.

```css
:focus-visible {
  box-shadow: 0 0 0 2px white;
  outline: 2px solid black;
  outline-offset: 2px;
}
```

This workaround works fairly well, but falls apart when a focusable element on the page also sets a `box-shadow`, thereby removing the `box-shadow` used to create the focus ring. And there's nothing, really, that can be done about that.

I'm quite sure focus rings are not the only use case for `stripes()`, either. There are, no doubt, many aesthetic reasons why it would be useful to have a `border` made up of multiple stripes.

## The `stripes()` function can save the day

In conclusion, our users would all clearly benefit if we were able to use the `stripes()` function. Having it would allow us to make much more accessible websites for partially sighted users, keyboard-navigation users, while unlocking more design options as well.

In the world of web standards, you can write as many specifications as you want, but without interest from browser vendors, a proposal is unlikely to be supported. There are currently quite a few of [unresolved issues on the CSSWG's GitHub repo](https://github.com/w3c/csswg-drafts/issues?q=is%3Aissue+is%3Aopen+stripes) around how `stripes()` will work, none of them are stopping browser vendors from expressing interest in supporting it. And with interest, there will be greater priority from them in resolving any issues that are blocking implementation.

I know accessibility may not be as exciting as [mesh gradients](./2024-06-11-mesh-gradients-in-css.md) or [view transitions](https://developer.chrome.com/docs/web-platform/view-transitions), but it's obviously a priority for all of us. So, web developers, if you want to see support for `stripes()`, please start banging the drum! Start talking about your own use cases and interest in it. With enough interest from web developers, the browser vendors _will_ notice.

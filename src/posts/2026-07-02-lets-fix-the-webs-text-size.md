---
layout: layouts/post.njk
title: "Talk: Let's fix the web's text size"
date: 2026-07-02
---

<script src="https://cdn.jsdelivr.net/npm/baseline-status@1/baseline-status.min.js" type="module"></script>

_This is a summary of my talk at CSS Day 2026._

<iframe src="https://slidr.io/JoshTumath/let-s-fix-the-web-s-text-size?embed=true" allow="fullscreen" width="560" height="490" style="border: none; width: 100%; height: auto; aspect-ratio: 19/14;"></iframe>

This talk is about a new feature in the CSS Fonts specification.

## The text scaling problem

The Web Content Accessibility Guidelines 2.2 give us these two success criteria: _1.4.4 Resize Text_ says that we should be able to let the user increase their text size by at least 200%. _1.4.10 Reflow_ says that content shouldn't overflow the viewport and cause the user to have to scroll horizontally as well as vertically.

As Web developers, we've been taught that - to meet these guidelines - we should follow these best practises:

1. Design our website to be 'mobile first' following responsive design practises
2. Size everything in font relative units like `em` and `rem`.

However, we had a complaint at the BBC! An iPhone user who uses the BBC Sport app increased the text size in the iOS accessibility settings. When they did that, the text _did_ get bigger on index pages and ordinary article pages. But on live feed pages, the text didn't get bigger. Why is that? What went wrong? The difference is that the live feed pages are rendered in a WebView, which is a kind of iframe embedded in the native app.

Now, if all of our users we're experiencing this problem, that would be bad because about 37% of users change their OS text size settings on Android and iOS devices. We should be respecting that setting.

So we were asking ourselves: why didn't this work? After all, we followed all the best practises. Well, it turned out those best practises were all a lie. Except, not really... it's a bit more complicated than that.

You'll find that this issue happens on all mobile web browsers. When you increase the OS text size and go into any mobile web browser, nothing happens. Interestingly in Firefox it does something a bit special. It _does_ respond to the OS text size settings, but it's doing a full zoom rather than just increasing the text. And on macOS, nothing happens at all when you increase the text size; not just on the web but also on pretty much any native macOS app. On Windows, when you increase the text size, the entire browser app zooms in; so not just the content like with Firefox, but the chrome of the browser as well. So pretty much across the board, the OS tech scale setting is not respected.

But at least you can do it on desktop browser settings. Chromium, Firefox and Safari all offer ways to do this.

So how can we fix it? Well, just after I started in the CSS Working Group around two years ago, I opened an issue asking why a web page's default text size doesn't just increase in response to the OS text scale setting.

Well, what would happen if you just made all browsers scale the default text size on a web page with the OS text scale?

You can try this out yourself by going on Firefox and enabling the 'zoom text only' mode.

If you do that, you'll find that pretty much all websites across the web fail in some way. Often navigation bars get truncated and content is is hidden or covered. Sometimes a column doesn't get larger to accommodate the larger text inside it.

But of course, the BBC website looks perfect...... in this very specific example that I have. 😉

Clearly all of our websites are not ready to support text scaling, so if we're going to fix this, we need a way for developers to opt-in.

## How can we fix it?

Along with David Grogan and Phil Rogers from the Google Chrome team, we put together an Explainer doc for the CSSWG, proposing a new environment variable called `env(preferred-text-scale)`. If the user doesn't increase the text scale setting, then `env(preferred-text-scale)` equals 1. If they double it, `env(preferred-text-scale)` equals 2. Although browsers might not give the precise value due to fingerprinting concerns.

The idea was that this would give you the text scale value that the user has set in their settings and you can use it in a `calc()` function.

```css
.button {
  font-size: calc(16px * env(preferred-text-scale));
}
```

We also considered a new unit called `pem` (preferred `em`). The idea was this would save developers time by doing the `calc()` for them. However, we dropped it because we had feedback from authors that they didn't want to have to recode their websites again in a new unit when they've already rolled out using `rem`.

But the user's text size preference needs to be respected across the whole website - not just certain parts. So we created another Explainer to propose a new HTML `meta` tag called `text-scale` which would change the default text size to whatever the user has set in their OS or browser text size settings.

So in summary, here's what developers can do now:

- They can set the `<meta name="text-scale" content="scale">` tag to opt in their entire page so that the default font size respects the user's text scale preference
- If they need to apply the text scale preference more selectively, they can use `env(preferred-text-scale)`.

The great thing about this is that - when developers opt in with the meta tag - as long as they've been following best practises around using mobile first responsive web design and using font relative units like `rem` and `em`, everything just works; they don't have to change anything.

But what about when you use font relative units in a media query and why does that matter?

So this is how it works: the default font size comes from the initial value of the `font-size` property which is `medium`. `medium` computes to `16px` by default, but with `<meta name=text-scale>`, the browser can now change that value to based on the user's text scale preference. So if I use `1rem` on an element, I get `16px` by default. If I use `10rem` inside a media query, that's equivalent to `160px`.

```css
:root {
  font-size: medium; /* = 16px */
}

.box {
  height: 1rem; /* = 16px */
}

@media (min-width: 10rem) /* = 160px */ {
  /* ... */
}
```

But what if I hard code the root `font-size` to be 20 pixels? Well, `1rem` equals `20px` as you would expect, but if I set `10rem` in a media query, it still equals `160px` - not `200px`!

```css
:root {
  font-size: 20px; /* = 20px */
}

.box {
  height: 1rem; /* = 20px */
}

@media (min-width: 10rem) /* = 160px */ {
  /* ... */
}
```

Why is that? This is what the [Media Queries specification](https://www.w3.org/TR/mediaqueries-5/#units) says:

> Relative length units in media queries are based on the initial value, which means that units are never based on results of declarations.
>
> For example, in HTML, the `em` unit is relative to the initial value of `font-size`, defined by the user agent or the user’s preferences, not any styling on the page. Note that this will also take into account additional restrictions the user might apply, such as minimum font sizes.

🥲

So that's why the CSSWG needed a solution that changed the browser's default `font-size`, rather than having developers simply override it ourselves with the user's text size preference: the browser needs to change the default text size so that font-relative units in media queries will respect the user's text scale.

As of writing, the `<meta name="text-scale">` tag and `env(preferred-text-scale)` environment variable are supported on Chromium browsers like Chrome and Edge. The functionality currently only works on mobile, but the Chrome team are working on Windows support. There's unlikely to be macOS support, since other native macOS apps don't respond to the OS text scale preference anyway.

<baseline-status featureId="meta-text-scale"></baseline-status>

## How to test text scaling

Before we work out how to test our own websites' text scaling, let's remind ourselves about what the Web Content Accessibility Guidelines 2.2 say. They say the user should be able to increase their font size to at least 200% without causing the page to horizontally scroll.

But we can do better than 200%! Most operating systems let the user increase the text scale beyond 200% - even on mobile devices.

Before we add the `<meta name="text-scale">` tag to our pages, we can simulate how they will behave by using desktop browsers and changing the default font size on desktop browsers:

- In Chrome and Edge, you can find it in the Appearance tab in settings
- in Firefox, you can tick/check the 'Zoom text only' option
- In Safari you can hold down <kbd>Option</kbd> + <kbd>Command</kbd> and press <kbd>+</kbd> or <kbd>-</kbd> on your keyboard.

Then, using the viewport emulator in your dev tools, you can decrease the viewport width to 320 pixels then you can scale the text UI to at least 200% and see how your web page looks.

Ask yourself: is the content readable, and are all interactive elements still accessible? Is the content overflowing the viewport horizontally, causing horizontal scroll?

## Let's fix our websites' text scaling

So what can we do to fix our websites to support text scaling?

### Tip 1: Design your website 'mobile and scaled up first'

Instead of designing your website _mobile first_, design it _mobile and scaled up_ first. Design it first for someone who has increased their text size by 200%, and then do expand your design out for normal text size at larger viewports, using richer layouts and design features.

### Tip 2: Don't change the default font size

This means avoid setting the root element's font size to a hard coded pixel value like `10px` or `16px`. Instead, you could change it relatively using percentages. So some people like to do `62.5%`, which computes by default to `10px`. But I recommend not changing it at all.

### Tip 3: Be careful using pixel units for layouts

This is why it's useful to have font relative units in media queries.

Let's say you're building a website with a sidebar layout. If the user increases their text scale, the text in the sidebar will become quite squashed. So naturally, you might set the width of the sidebar column using font relative units so that it expands to accommodate the wider text, but if you do that, you'll find that now the main column is too squashed to accommodate this larger sidebar.

Therefore, you should use font relative units in your media query as well so that the responsive layout only creates the sidebar Based on the text scale.

### Tip 4: Only use `px` units for spacing

So when you want to size your content - using properties like `font-size`, `width`, `height`, `grid-template-*`, `flex-basis`, etc - that's when you should use font relative units like `rem` and `em`.

But when setting spacing, such as `gaps`, `margins`, `padding` and maybe even `border-width`, use absolute units like `px`, so that they don't increase in size when the user increases their text scale. It's important to make sure they don't scale so that the content has more room to breathe when it scales and doesn't get squashed.

### Tip 5: Only use single column layouts on very small viewports

On small viewports like cheaper mobile devices, when the user doubles their text scale, you typically don't have enough room to show content in multiple columns. In that situation, you should always switch to a single column layout.

Rather than using `320px` as the breakpoint, I recommend using `300px` because that gives slightly more breathing room for slightly larger devices that would still fit more content in multiple columns.

Of course, if you use container queries, that makes this so much easier. You can change your content relative to the width of the space it's contained in, rather than the width of the entire viewport.

### Tip 6: Be careful when setting fixed lengths

Try to always let the content dictate the height of something.

So in this example on the Disneyland Paris website, after doubling the text scale, the content is overflowing out of the navigation bar. That's probably happening because the navigation bar has been given a fixed height in pixels. Instead, you can just give the navigation bar a minimum height. Or better still, don't set a height at all and let the content dictate the height.

Ahmad Shadeed has lots more useful tips on how to design your layouts to be more flexible based on their content. Check out his website [defensivecss.dev](https://defensivecss.dev).

### Tip 7: Watch out for massive headings

Headings and other large pieces of text are typically already large enough for the kinds of users who need text scaling. So if the text is scaled up consistently across all text, headings become too large and struggle to fit a word on a single line.

To combat that, you can use a formula to reduce the rate at which they scale:

> font size × (rate of increase × (preferred text scale - 1) + 1

You can use it like so:

```css
h1 {
  font-size: calc(3rem * (0.5 * (env(preferred-text-scale) - 1) + 1));
}
```

It's going to be repetitive to use that everywhere, so you could use the formula in a CSS function:

```css
@function --font-size-scaling-rate(--font-size <length>, --scaling-rate <number>) {
  result: calc(
    var(--font-size) * (var(--scaling-rate) * (env(preferred-text-scale) - 1) + 1)
  );
}

h1 {
  font-size: --font-size-scaling-rate(3rem, 0.5);
}
```

You don't have to use this formula. I'm sure you can think of other ways of doing it. I think this is a great opportunity for the web community to share different ideas on how to do this, but it's also probably an issue that the CSS working group need to tackle.

### Tip 8: Be ready to opt-in to text scaling

[You can find documentation for `<meta name=text-scale>` MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/text-scale) so you can check it out there.

So let's do what we can to fix the Web's text size!

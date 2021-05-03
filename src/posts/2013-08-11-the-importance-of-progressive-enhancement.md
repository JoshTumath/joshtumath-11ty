---
title: The importance of progressive enhancement
date: '2013-08-11'
tags:
- web
---

The Web has a problem. An old problem. It’s the same problem that it’s had for a decade. *Fragmentation*. If Web users all used the latest versions of their favourite Web browsers, life would be simple. But they don’t. Companies insist on using old versions of Windows that come with equally old Web browsers. And mobiles have the same problem, as there are hundreds of millions of Android phones that can’t be upgraded to the latest version of Android, due to lazy OEMs not being bothered to incorporate updates their heavily modified version of the OS.

So we as Web developers have a problem: how can we deal with fragmentation whilst taking advantage of what modern browsers are offering?

One technique is known as *progressive enhancement*. It’s a practice that has become so popular, it even has its own [Wikipedia article](http://en.wikipedia.org/wiki/Progressive_enhancement). But progressive enhancement isn’t just an idea. It’s the single most important concept in Web development at the moment, and it’s vital that we as Web developers embrace it.


## How it works

[Christian Heilmann explained progressive enhancement very well](http://christianheilmann.com/2012/02/16/stumbling-on-the-escalator/). It’s like an escalator. Even if they break and aren’t moving, they are still function very well as stairs. You’ll have to actually use energy to walk up them, but at least you can still get to where you want to go! And that should be the case for Web pages as well. Even if the user has JavaScript turned off or certain newer CSS features are unsupported, the page is still viewable and interactive.

To do it, you start simple, and assume the worst case scenario about the environment that the user is using to view your Web page. Start with the HTML. But don’t be placing `div` elements left, right and centre. Remember what HTML is about: semantics; explaining to a Web browser what each bit of text on a Web page is, or means, or represents.

Keep the mark up purely semantic. Start off with a `header`, the `main` content and the `footer`. Split the main content into one or more `section`s. Add headings (`h1`, `h2`, `h3`) and paragraphs (`p`). Order it all chronologically. Don’t change the order for stylistic purposes.

Then move on to the styles. Use the basic CSS properties that you know work in all Web browsers, first. If you plan on making something like a hidden menu or accordion, don’t immediately use `display: none` and assume that the user will have JavaScript enabled to make it visible again later on. Style that content as if it were intended to be visible in the first place. If an older browser doesn’t support CSS transitions and animations, don’t work hard to get the animation to work in older browsers; just leave the content static. Users with older browsers don’t know any better if a boxes doesn’t have rounded corners or some text isn’t slightly rotated by 5 degrees, and why would they care?

Then move on to the scripting. But consider how the user is able to browse *without* scripts, first. If a form relies on JavaScript to display an output, create a server-side method for generating an output as well. If a browser doesn’t support newer JavaScript features or DOM APIs, use feature detection to fall back to using older features (or use a library like jQuery).

Progressive enhancement also goes hand-in-hand with responsive Web design, which I will discuss in a later article.


## Graceful degradation

The opposite to progressive enhancement is graceful degradation. This is the traditional practice that we’re all used to, where we concentrate on creating a wonderful, fully featured Web site for our big desktop computers; and then backwards compatibility and support for mobiles are an afterthought.

This leads to many difficulties; especially if your Web site is complex and built-up.


## The future

The concept of progressive enhancement has actually existed for almost a decade. It’s not new. But with the increasing amount of devices that proliferate our world, it’s never been more important.

Some may argue that many future Web sites that will heavily rely on JavaScript just won’t work with progressive enhancement. That’s partly true. Web sites that use the `canvas` element and its APIs to make games, for example, simply cannot display a lesser alternative for older Web browsers. But what they can do is implement what error message these users will see *before* you start adding the JavaScript code that newer Web browsers can run to play the game.

It makes development a lot easier, because it solves problems before they get created. If you want to know more about how it’s done, [a Google search will give you plenty of resources](https://www.google.co.uk/search?q=progressive+enhancement). There’s nothing more to say on progressive enhancement other than one last thing: *use it!*

- - - - - -

**Update:** Even the UK Government have begun to enforce progressive enhancement on government Web sites! Their [service manual](https://www.gov.uk/service-manual/making-software/progressive-enhancement.html) is worth a read, an explains the concept far better than I have.

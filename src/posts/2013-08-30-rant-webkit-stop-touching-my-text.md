---
title: 'Rant: WebKit, stop touching my text!'
date: '2013-08-30 18:30:45'
tags:
- web
---

Normally, when I’m developing a Web site, I can’t test it on Safari on iOS. I don’t own an Apple device. However, when I finally got a chance to do that today as I was finalising site, I was very surprised by what happened.

When a Web browser is used on a device with a small screen (like a smartphone or an iPod), the browser zooms out to show the full width of the page when viewing a Web site that’s made for large screens. This makes the text very tiny, so the browser tries to enlarge small text if it can. However, if we’re using [responsive Web design](http://joshtumath.me.uk/2013/08/14/the-importance-of-responsive-web-design/ "The importance of responsive web design") to support small screen sizes, we can use a non-standard type of metadata to tell the browser “Please don’t treat my page as if it were made for desktop PCs. I’ve designed it to support different viewport sizes.”

```html
<meta name="viewport" content="width=device-width">
```

Because this tag is non-standard, it’s implemented slightly differently in each browser. However, the W3C are working to standardise this behaviour in CSS instead, in the <cite>[CSS Device Adaptations](http://dev.w3.org/csswg/css-device-adapt/)</cite> spec.

What annoys me, though, is that WebKit thinks it knows better. It sometimes  enlarges some of your text even if you’re using responsive design and had set reasonably sized text. Sometimes, it bizarrely resizes the text when you change the orientation of your device from portrait to landscape.

And to make things worse, the only way to stop this is by using a proprietary CSS property called `-webkit-text-size-adjust`. **It should not be the job of a Web developer to fix the mistakes of a browser engine.** This is yet another example of how [WebKit is creating a proprietary Web platform on mobile devices](http://joshtumath.me.uk/2013/02/17/webkit-vs-the-web/ "WebKit vs. the Web"). There are still too many Web sites that are “made for WebKit” instead of “made for the Web”.

There is no “mobile Web” and “desktop Web”. There is only The Web. The whole point of Web standards is that we as Web developers can write our code once and expect it to run on any device identically.

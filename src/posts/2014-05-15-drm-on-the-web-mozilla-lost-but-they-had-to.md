---
title: 'DRM on the Web: Mozilla lost, but they had to'
featured: true
date: '2014-05-15'
tags:
- mozilla
- web
---

If you thought there was still a shred of hope that EME would never be supported in all major browsers, I’m afraid that all changes as of today. [Mozilla have announced that they’ve had to back down and support EME in Firefox](https://hacks.mozilla.org/2014/05/reconciling-mozillas-mission-and-w3c-eme/). They originally vowed to stand against it, but it’s become clear that it’s implementation and use on Web site is increasing too much for them to boycott it now.

This may seem like a loss, but Mozilla are doing the right thing for users. EME is sadly going to be the norm on large content providers. We can still avoid it, but not always. At least Mozilla are making an effort to remove some of the “evils” associated with EME by using a sandboxed implementation of the CDM that they are using. It’s worth reading their article on the implementation details if you haven’t already, and [my previous article on EME](http://joshtumath.me.uk/2013/07/06/drm-on-the-web-it-begins/ "DRM on the Web: it begins") for some background on the problems surrounding it and how it can harm the openness of the Web platform.

I was quite shocked by how emotional some of the backlash was towards Mozilla’s announcement. It is paramount for Mozilla to have a high browser market share for the sake of their charitable goals, and they can’t win everywhere. It’s also worth mentioning that Adobe’s CDM (the CDM they have chosen to support in Firefox) won’t be enabled by default.

***Edit:** Those who doubt Mozilla’s decision should read [Ben Moskowitz’s post](http://www.benmoskowitz.com/?p=982).*

*DRM is software that – by design – cannot be implemented in open source software, because revealing the source shows how it works and makes it crackable. The Web is Open and the W3C only allows the Web to work using Open APIs. So EME doesn’t define a DRM implementation, but rather an API to hook any CDM (i.e. DRM software) that’s built into your browser.Each browser will have different CDMs, so companies like Netflix will have to make sure they support every browser’s CDM. But what if they choose not to? Because they can. There’s nothing stopping them.*

## How we got here
One thing that was so concerning about EME was how quickly it was pushed through the standards process. You can imagine secret meetings with Microsoft, Google, Netflix and other video service providers on how this would be done. With the rise of the *Open* Web with features that are killing the need for plug-ins, they needed a way to add DRM to the HTML5 video element.

The open nature of the standards process at the W3C was clearly a hindrance to what they were trying to achieve. They needed DRM to be supported quickly in all browsers, but they couldn’t *just do it*, because they don’t have a collective monopoly on browser usage share (thanks to Mozilla). So they had to create a standard specification and push through the expected waves of controversy that it would bring.

Yet ultimately, their plan worked, because a standard is only a standard when it’s implemented. And Google and Microsoft wasted no time in implementing it in Chrome and Internet Explorer with their own proprietary DRM systems. Now we have Netflix proudly boasting that it has its Web player implemented plug-in free using the HTML video element and EME. But what they cannot boast is that they have a cross-browser Web app.

Only Chrome and Internet Explorer are supported by Netflix’s HTML video player at the moment.


## The implications

Thankfully, I don’t think EME usage will become too widespread. This doesn’t change the fact that DRM is generally considered to be ineffective and immoral, and we can expect any company that uses it will be fought against. Additionally, the CDMs are all proprietary, and it won’t be simple for anyone to just use them. It’s possible that CDM providers will charge for their use.

We can’t be certain how common EME will become. But like or not: it’s happening.

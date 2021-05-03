---

title: 'DRM on the Web: it begins'
date: '2013-07-06 21:38:24'
tags:
- web
---

Encrypted Media Extensions. Anyone that knows what they are knows that they are synonymous with one thing: <abbr title="Digital Rights Management">DRM</abbr> And those that know that also know the controversy that ensues. The problem is this: DRM restricts users from viewing a video or listening to an audio track unless they are given permission by the media content’s owner (such as by signing into an account and paying to view it). That seems very reasonable from a business sense, but does that kind of practice belong on an *Open* Web Platform?

Last week, the Internet Explorer team at Microsoft released Internet Explorer 11 – the second Web browser to support the <abbr title="Encrypted Media Extensions">EME</abbr> standard in a stable browser release (despite the fact that the standard’s specification isn’t stable yet, but never mind). The first browser to support it was Google Chrome. This shouldn’t be a surprise, as Google and Microsoft are the ones writing the spec on behalf of the HTML Working Group at the W3C.

There is a third company in the editing of that spec. That company is Netflix.

Following the release of IE11, Netflix have become the first company with a Web site that has the first real-world usage of EME. In other words, *they are the first to use DRM on the Web*. For those of us that have been fighting to remove DRM from the Web platform, this means one thing: we have lost. There are two implementations of the EME spec in browser engines and there is a Web site making use of it. That’s it folks. There’s nothing we can do about it, now. DRM is here to stay.

This is perhaps the most hated feature of EME: the standard in itself is not a method of creating DRM. Rather, it is a set of APIs that allows proprietary DRM plug-ins (called key systems) that are installed or built-into a Web browser to interact with a Web page. A sort of middle-man between the Web server and the client’s DRM system. IE11 uses a key system called PlayReady.

This is what it looks like in a script:

```javascript
video.setMediaKeys(new MediaKeys("com.microsoft.playready"));
```

To be honest, I don’t mind DRM. It doesn’t do its job very well anyway – it can always be cracked – but it keeps the media content producers happy.

But I *hate* EME. The Open Web Platform is open for a reason: it allows the platform to be implemented on *any* Web browser on *any* operating system without the implementers having to buy *any* patent licenses. But now, the EME has introduced fragmentation to the platform and caused many to be locked out. Sure, it’s great that we can now watch videos on Netflix without using plug-ins like Silverlight or Flash, but what difference does it make if you can’t watch it unless you happen to be using a browser that has the right key system. This doesn’t help anyone. We’re now back to square one, where it’s up to the plug-in developers (now the developers of the proprietary key systems) decide what browsers and operating systems their plug-in will work on.

You may ask: why can’t we support multiple key systems so that we can support multiple Web browsers and operating systems? That means we get into a situation like this:

```javascript
function selectKeySystem() {
  if (MediaKeys.isTypeSupported("com.example.somesystem", "video/webm; codecs='vp8, vorbis'")) {
    licenseUrl = "https://license.example.com/getkey";
    keySystem = "com.example.somesystem";
  } else if (MediaKeys.isTypeSupported("com.foobar", "video/webm; codecs='vp8, vorbis'")) {
    licenseUrl = "https://license.foobar.com/request";
    keySystem = "com.foobar";
  } else {
    throw "Key System not supported";
  }
}
```

That block of code was taken directly from the current working draft of the EME specification, dated 2 July 2013. It may seem innocent at first, but this is no different to browser sniffing. Only IE will ever support the `com.microsoft.playready` key system, and we may find that – in the future – there will be a key system that only Safari or only Chrome will support. If that’s the future of the Web, then that’s appauling.

And what is Mozilla going to do? The Mozilla Foundation is a charity; they make an *open source* Web browser used on hundreds of millions of devices. Can an open source Web browser have a proprietary key system built-into it? No. This probably means that if you want to watch a video on Netflix in Firefox, you will have to download a plugin. Perhaps the open source community will find a solution to this; the details of how DRM works isn’t something I’m familiar with, so I can’t be sure if that’s possible. And if you’re a new guy planning on building a new open source browser engine and Web browser from scratch, all I can say is good luck to you.

I probably seem like I’m contradicting myself by explaining why we should hate Internet Explorer after previously writing an article entitled [Why we need to stop hating Internet Explorer](http://joshtumath.me.uk/articles/why-we-need-to-stop-hating-internet-explorer.html), so I’m going to play the devil’s advocate here and blame the W3C for this mess. Microsoft aren’t solely at fault here. Sure, they chose to implement this standard, but that’s the thing: they were implementing a *standard*. They weren’t implementing a non-standard API that they’ve made up just to make Netflix happy. This is a standard, and they were following the same specification that everyone else will have to follow.

In fact, it’s been quite shocking to hear what the W3C have to say about this. Dr Jeff Jaffe, CEO of the W3C, had this to say to [ZDNet](http://www.zdnet.com/reject-drm-and-you-risk-walling-off-parts-of-the-web-says-w3c-chief-7000017388/):

> We would like the Web platform to be a universal platform. We don’t think it’s good when content finds its way into walled gardens or into closed apps.
>
> We’re not going to standardise proprietary DRM systems, but on the other hand we don’t want it to be excluded from the web platform. The compromise is a set of open APIs that give a standard framework to bring in this content via plug-in, but where we don’t standardise the plug-in.

OK. So you’re going to prevent consumers from suffering from walled gardens by introducing a means of creating walled gardens on the Web? I’d love to see how you will accomplish such a contradiction. In trying to make everyone happy (and by “everyone”, I mean the paying members of the W3C), users have been left in the dust.

That’s all I can say on the matter. Since the WHATWG came along, there has been a massive revival in Web standards development, and the future of the Web platform is – for the most part – brighter than ever. But the one area where the Web standards community has had difficulty is multimedia – video and audio. The media companies always have a spanner to put in the works, and it doesn’t seem as if that’s going to change any time soon.

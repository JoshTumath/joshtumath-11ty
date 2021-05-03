---
title: 'Presentation: WebKit vs. the mobile Web'
date: '2013-03-23'
tags:
- presentations
- web
---

This was originally presented at [Aberystwyth University](http://www.aber.ac.uk/) on 2013-02-22.

<script async="" class="speakerdeck-embed" data-id="a399720080ff0130d10012313d21dce8" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>


## Slide 1

WebKit vs. the mobile Web


## Slide 2

Before I go into detail about this, I just want to give a quick summary of the state of how the Web works today.

Obviously, you access the Web using a Web browser, and these are the five most popular ones: Internet Explorer, Firefox, Chrome, Safari and Opera.

All browsers have an underlying layout engine (or rendering engine) to make them work. Its job is to basically deal with HTTP requests, receive HTML, CSS and JavaScript files, parse them and turn them into the Web pages that the user sees and interacts with. Internet Explorer uses Trident, Firefox uses Gecko, Chrome and Safari use WebKit and Opera uses Presto. WebKit is worked on by Adobe, Apple and Google in a somewhat cooperative manner. It’s supposedly open source, but the companies still work on it quite secretively before they push their final code into the WebKit trunk builds.

However, it was actually announced in the news on Ash Wednesday that Opera will be moving over to WebKit over the next few months.

So lets look at the platform that these layout engines run…


## Slide 3

All of these layout engines support the Open Web Platform, which are technologies like HTML and the DOM API. Every layout engine has to support the same standard technologies, because otherwise Web pages would be a nightmare to develop. And this is why the Web platform is such as success: in theory, you can write one piece of HTML or CSS and expect it to look and work in exactly the same way on every layout engine in every browser on every operating system.

The Open Web Platform is defined in specifications written by members of organisations like the W3C. Its members are from companies like Google, Microsoft, Mozilla and the BBC.

I’ll explain how standards are created at the W3C…


## Slide 4

Standards are defined in specifications. At the W3C, specifications start out as Working Drafts. As they’re being written and refined, anyone can give feedback and suggest changes or additions.

Once the spec is mostly feature complete, it goes into the Last Call stage, where everyone is given a deadline like six months or so to sort out any remaining issues.

When a spec reaches Candidate Recommendation, it’s pretty much done. Now browser vendors can implement the new feature as a finished product, so it doesn’t need to be marked as “experimental”.


## Slide 5

In the beginning of the Web, Sir Tim created the first Web browser which he imaginatively called the WorldWideWeb.

Two years later, Mosaic was created and it became very popular. The companies Microsoft and Netscape were very interested in this, and used it to create their own Web browsers. It didn’t take long before they were very aggressively competing with each other. One of the ways they competed was by adding the Web platform. While both browsers supported basic HTML elements like `h1` and `a`, they started adding their own.

Actually, who remembers the `marquee` element?

Microsoft practically stabbed Netscape in the back when they bundled IE4 in Windows. The Web was full of Web sites that worked only in IE. Does anyone remember back when most sites used to say in their footers “Best viewed in Internet Explorer 6” or something like that? If you wanted to browse the Web, you had pretty much no choice but to buy a Windows PC and use Internet Explorer.

As a result of the war, technologies like CSS and JavaScript were rapidly created in order to compete. However, because they were rushed, the Web platform is now a mess. And while that can’t be fixed, Sir Tim quit his job at CERN and created the W3C to make sure this never happens again.

But recently, two well-known companies have started to ignore the W3C. Now there is a new browser war, but this time it’s on smartphones.


## Slide 6

After Microsoft released IE6, they said they weren’t going to develop any new versions. They thought they now had control over the Web and that they had killed it. That meant that innovation in the Open Web Platform had stopped, because the only dominant Web browser – IE6 – wasn’t being updated to support the newest standards. Now that was a scary time! It took five years before Microsoft released IE7, but by then the damage was done.

Thankfully, the market share is much healthier now and Microsoft have realised that they need to comply with standards to compete with other browsers. But it took a decade for us to get to this point, thanks to the efforts of Mozilla and eventually other browser vendors.

Now lets look at the market share on smartphones and tablets…


## Slide 7

I’m just wondering: What type of smartphone does everyone here have? What’s their default Web browser on it?

Let’s have a look at the market share for mobile devices.

Does this look familiar? This graph almost exactly matches the same one from 2001. Am I the only person that finds this scary? Users aren’t being given much browser choice on their phones, and look what’s happened as a result! Just like Microsoft in the late 90s, now Apple and Google have the power to control the Open Web Platform for their own selfish needs. It gives them control over the Web platform; they alone get to decide what technologies get added and removed. WebKit’s dominance has encouraged Web developers to only test their Web sites in WebKit; and to use proprietary features that only work in WebKit – without any compatibility for other layout engines. And that has a knock-on effect that discourages users from switching browsers.

People always ask me why I don’t use Chrome. Well this is why: I don’t want to be a part of this 86%! Those of you that are using Safari or the built-in Android browser: you should be ashamed! :P A lot of Web developers make the mistake of thinking that market share is important when designing Web sites, but it’s not. They need to design for all Web browsers equally. However, you do need to consider market share when you’re using experimental technologies.


## Slide 8

I’ll give you an example of the experimental features that I was talking about. One of the newest CSS features is transitions, which lets you do things like let backgrounds slowly fade from one colour to another. When browser vendors implement an experimental feature in a W3C spec, they have to put what’s called a “vendor prefix” in front of it. Here’s an example of what a prefix looks like. Once a spec becomes a Candidate Recommendation and a browser vendor has fully implemented it, the prefix has to be removed from their layout engine.

However, there’s just one problem with this example. This CSS rule will only work in WebKit, despite the fact that other layout engines also support transitions. Also, when WebKit stops using the prefix, this rule will no longer work. This is how the rule should be implemented. This one uses prefixes for the most common layout engines, and once the prefix is no longer needed, the standard CSS property is used.

The problem is: this has example on the left has become a really common practice in the Web development community, and it really annoys me. Lazy and ignorant Web developers working for large companies think that this is acceptable, because WebKit has the majority in market share on smartphones. Any Web developer that does this should be ashamed! Experimental features are called “experimental” for a reason: they could change any time; and they have. They shouldn’t really be used in mainstream Web sites anyway, because they just exist as a beta test to allow Web developers to test them and report any bugs.

But what’s interesting is that the “transition” property – for reasons I’ll explain later – doesn’t have to have the experimental prefix anymore. That means the browser vendors are allowed to stop requiring Web developers to use the prefixes. But – surprise, surprise – WebKit still uses them. Google and Apple are still enforcing authors to use the proprietary prefixes. The whole point of prefixes is to remove them ASAP once the feature is no longer experimental.


## Slide 9

Web developers also make this kind of mistake in JavaScript. The Open Web Platform has been gaining loads of new APIs in the past five years, but not every layout engine will support them straight away.

What some developers do to get around this is to check what layout engine you’re using. This is called browser sniffing. If you’re using WebKit, you get to use the new feature, and if you’re not, you have to use a horrible workaround that probably doesn’t work as well. The problem with this approach is… well… What if you’re using Gecko, and Gecko one day supports the new API? Because the Web developer that made this script used browser sniffing, you’ll still have to put up with the work around.

A better way to do this is using feature detection. With this technique, the developer checks if your layout engine supports the feature he wants you to use. If the engine doesn’t support it, then he uses the workaround.


## Slide 10

And what’s the result of this? If you browse the mobile Web on anything other than WebKit, you will have a crappy experience on many Web sites.

For example, here’s how Facebook’s mobile Web site appears in WebKit. Now here’s how Facebook appears in Firefox for Android and Internet Explorer for Windows Phone. What’s basically happened here is that Facebook can’t be bothered creating their Web site using a technique we call “progressive enhancement”, where Web pages are designed to work on older layout engines, but progressively improve with richer features if your layout engine supports newer and newer technologies. Instead, Facebook has created two versions of their Web site. If you use WebKit, you can use the awesome version. If you use anything else, you get to use the crappy old Web site that was originally designed to be used on feature phones.


## Slide 11

It was decided that emergency action needed to be taken to fix the problems caused by WebKit’s dominance. Mozilla and Opera decided that they would support some of the proprietary `-webkit-` prefixed properties in Gecko and Presto. But that’s obviously bad, because that means these non-standard features will have become standard.

Daniel Glazman, who’s the co-chairman of the W3C’s CSS Working Group thought that was a step too far, and published an official Call For Action, where he basically pleaded to Web developers to stop using all these experimental CSS properties that only work in WebKit. He explained how it is too late to fix the mobile Web and that we may not recover.

Thankfully, Mozilla and Opera didn’t follow through with their plan. Instead, the CSS Working Group decided break their own policy and allow browser vendors to ship animations, transitions, transforms and gradients without vendor prefixes before their specs became candidate recommendations. This plan didn’t work, though, because – as I said earlier – WebKit is still using the prefixes on them. But there are still loads of properties that have prefixes, and to make matters worse, we can’t remove the prefixes on some of them because Apple has intellectual property rights on them!

Mozilla now has a policy that they won’t release experimental features in Gecko unless they’re switched off by default in Firefox releases. But you can still use them in their Aurora and Nightly builds.


## Slide 12

Despite all the efforts and evangelism made by the W3C, the problem still exists. I don’t know if the situation has improved since this time last year, but the problem is still there and it’s still a threat to the standards of the Open Web Platform. We can’t let Apple, Google and Microsoft control it; the control should belong to everyone.

So in conclusion…

Don’t design Web sites just to work on WebKit. You need to test them in all popular modern browsers.

If you use good practices in Web design like progressive enhancement and feature detection, you’re not likely to get any problems in the different layout engines.

And finally, we need to stop letting WebKit have the majority of the market share, so we need to encourage people to switch browsers. Now that’s kind of hard when the only browser you can get on iOS is Safari, but you do have more choice on Android. Firefox and Opera are on there (but Firefox is the best, obviously!). Also, you could encourage people to get a Windows Phone and force them to use IE10.

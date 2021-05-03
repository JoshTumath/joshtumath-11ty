---
title: Why we need to stop hating Internet Explorer
date: '2013-05-06 21:45:07'
tags:
- web
- microsoft
---

Ever since the mid-noughties, there has been a general disdain for Internet Explorer. Everyone from Web developers to your tech-savvy grandad hates the browser. Back in the day, IE was by far the most widely used Web browser; owning a monopoly in the browser market. Today, however, the situation is very different. NetApplications reports it to be at a much healthier market share of 56%, as of April 2013.

In 2001, Internet Explorer 6 was used by almost *everyone*. Therefore, every Web developer had to ensure their Web sites worked in IE, and testing their sites in other Web browsers wasn’t really very important. This gave Microsoft the power to create their own *de facto* Web standards. Compliance with the <abbr title="World Wide Web Consortium">W3C</abbr>‘s *de jure* Web standards weren’t important to Microsoft. After all, a standard isn’t a standard unless it’s actually widely used.

Quite clearly, one company having control over Web standards is a problem. At the time, Microsoft didn’t particularly care about the Web, and they literally completely ceased development of Internet Explorer after IE6 was released. The Web stagnated with a messy Web platform.

And the W3C weren’t doing anything about it. They appeared to turn a blind eye to it; instead spending their time creating their <abbr title="Extensible Markup Language">XML</abbr>-based standards that no one wanted to use, like XLink, XForms and XSL. So who was going to rise up to the challenge, call Internet Explorer’s bluff and bring us back to a Web of open standards?

When the browser Netscape pretty much died after Internet Explorer’s market share became too much, the Mozilla Foundation formed from former Netscape employees to take back the Web. They created Firefox. A fast, light-weight and simple Web browser that had Web standards compliance at its heart. The Mozilla Foundation’s mostly word-of-mouth-based marketing campaigns allowed Firefox to succeed. This new diversity in browsers gave other browser vendors a chance in the limelight too, such as Safari, Opera and – eventually – Chrome.

By this point, people started to understand that Internet Explorer was a bad browser for its poor standards compliance and slow performance compared to other browsers. Some people didn’t even know *why* it was bad. They just knew it was bad.


## From bad to good

Can we then conclude that Internet Explorer remains to be a terrible browser by an evil company and must never be used by anyone ever again? Well no. Things change quickly on the Web. You could even say that Microsoft have turned over a new leaf!

Around the development of Windows Vista, Microsoft brought back the Internet Explorer team. Apparently, Microsoft’s executives had noticed that they were losing market share to Firefox quite rapidly and realised that they needed to take the Web more seriously. They began work on IE7, which was beginning of IE’s slow but eventual turnaround.

I can still remember back in December 2007 when IE8 was in development and the IE team announced that they had just [passed the Acid2 test in a trunk build](http://channel9.msdn.com/Blogs/Charles/IE-8-On-the-Path-to-Web-Standards-Compliance-ACID-2-Test-Pass-Complete) (i.e. an early development build). The [Acid2 test](http://acid2.acidtests.org/) was a popular standards compliance test, at the time, written by the current editor of the [HTML Living Standard](http://www.whatwg.org/html), Ian Hickson. It tested for standards compliance at a time when a lot of Web browsers were missing support for new features or supported them in a non-standard way.

The fact that IE8 past the test did not prove that IE was now suddenly a really good browser with loads of standards support, but it was a sign to the world that Internet Explorer means business.

While IE8 was a massive improvement over its predecessors, there was still some flaws in it that meant I, as a Web developer, still couldn’t recommend it to others.

To make matters worse, by the time IE8 was released, the other browsers had added support for many more new features in the Web platform. Microsoft were known, at the time, to have a *very* slow release cycle for all of their products (mainly because enterprises didn’t like regularly updating their software out of fear of having to re-train all their staff). I should point out that while IE passed the Acid2 test in December 2007, it wasn’t until March *2009* that the browser was finally released.*

<small>*These days, Microsoft use a yearly release cycle. A bi-monthly release cycle similar to Mozilla and Google would have been more ideal, but keeping it yearly is a compromise to keep both consumers and enterprises happy.</small>

## Finally in it to win it

Microsoft really upped their game with IE9. This was during the time when the HTML5 movement was in full swing, and many Web developers started to see the Web as a rich app development platform. So did Microsoft.

For the first time in a while, the IE team began to *innovate*, instead of just catching up with other browsers. IE became the first Web browser to render Web pages using hardware acceleration; meaning they were rendered like a video game; using a computers GPU (the chip designed specifically for drawing graphics) instead of the CPU (the chip for general calculations) to draw a Web page’s content. This was vastly quicker than before, and allowed Web devs to make Web pages much more animated and graphically intense.

IE9 implemented many new HTML5 and CSS features that could take advantage of IE’s new graphics engine. They even began a marketing campaign to turn around Web developers negative perceptions of the browser. The campaign was done through [IE Test Drive](http://ietestdrive.com) – a Web site the IE team created that basically showed off IE’s improved perfomance and standards compliance through cool-looking demos. News about it quickly spread across social media. And, of course, many of the tests were designed so that IE would pass them with flying colours, while other browsers were likely to fail.

Finally, we reach IE10. This release was a big milestone, as it made IE’s interoperability on-par with competing browsers. IE10’s most important new feature was actually the *removal* of old legacy features, such as proprietary DirectX-based filters and transitions, VML (similar to SVG) and conditional HTML comments. IE10 added the HTML5 parser, so it always uses “standards mode” when dealing with Web sites. It won’t have any of the quirks that were in the pseudo-standards mode in previous versions.

Now, before I start sounding like an outright Internet Explorer fan, the browser still has a while to go. There’s still some standards support that it would be preferable to support. That said, I wouldn’t get the urge to tell someone using it to switch to a different browser (but if I saw them using IE6 I would probably tell them to jump off a cliff :-) ). According to leaked builds of Windows 8.1, IE11 supports WebGL – a technology used for generated 3D graphics on the Web (which Microsoft didn’t want to support, originally, over security concerns). The future seems bright for Internet Explorer, and I have no concerns about the effect it will have on the Web platform going forward.

The only problem is: too many people are still using old versions of IE. Therefore, people’s general disdain for the browser is still there. If we could wave a magic wand and upgrade every user to IE10, life would be a lot easier for Web devs, but that’s never going to happen. Microsoft have changed a lot since the IE6 days. Their IE team care a lot about open Web standards and understand how Microsoft can still benefit from the Web without controlling it, and there are various examples of how the company use the Open Web Platform in their own platforms, like Windows 8, Windows Azure and even Office.

I think we can be certain that, at least for the rest of the decade, the Web is safe from Microsoft; even benefiting from them! However, there is a new enemy to worry about in new device platforms that the Web is appearing on. More specifically, Apple currently have a huge market share on mobile devices with their WebKit browser engine (see [WebKit vs the Web](http://joshtumath.me.uk/articles/webkit-vs-the-web.html)).

I’m not saying the solution is to increase Internet Explorer’s market share on the desktop. At the moment, it’s got plenty. However, the current resentment for Internet Explorer has got to stop. Microsoft are not our enemy any more. They’ve changed. We have new enemies to worry about, and that is where we need to focus our attention.

Ten years ago, Mozilla began a campaign to fulfil the vision of an open and interoperable Web. They tried to remove Internet Explorer’s majority of the market share by educating the public why the browser is bad and why Firefox is a better alternative. It worked. Ten years later, we need to bring that IE’s popularity back.

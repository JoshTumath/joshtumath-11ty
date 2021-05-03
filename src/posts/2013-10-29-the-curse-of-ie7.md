---
title: The curse of IE7
date: '2013-10-29 19:47:06'
tags:
- web
---

Since a couple of years ago, I haven’t been supporting any version of Internet Explorer below IE8 in any personal Web projects. [Microsoft have started to really care about standards and interoperability](http://joshtumath.me.uk/2013/05/06/why-we-need-to-stop-hating-internet-explorer/ "Why we need to stop hating Internet Explorer") since they began development on IE8, so supporting it is much easier than in the past. There are a few annoying quirks, but nothing major, and thankfully its usage share will likely be dropping dramatically next year as Microsoft end support for Windows XP. [Google even announced last June that they would be retiring Chrome Frame](http://blog.chromium.org/2013/06/retiring-chrome-frame.html), because “today, most people are using modern browsers that support the majority of the latest web technologies”.

Over the summer, I was doing an internship at a Web and Marketing company. However, as they were unfortunately contractually obliged to support IE7 (like the majority of Web and Marketing companies), development was greatly hindered and a lot of hours were spent on interoperability testing. And it’s not fun to implement modern responsive design on a Web site whilst also perfectly supporting old versions of IE. There was a heavy reliance on using jQuery to do pretty much anything on the scripting side. *Everything* had to look exactly the same on IE7, where possible, which included even transitions and animations.

And to be honest, supporting limited or buggy browser engines took some of the fun out of Web development. Modern Web browsers have moved to rapid release cycles. A new version of IE and Safari is released each year, and Firefox and Chrome are updated about every six weeks. Users using these modern Web browsers get updated to the latest version automatically (as they should be), so Web devs shouldn’t have to worry as much as they used to when they want to use more cutting-edge features in the Web platform, like WebGL.

But an idealistic future like that still isn’t possible for Web firms that *must* support older browsers perfectly. I was very shocked when one of my colleagues showed me that about 7% of visitors to the company’s Web site still use IE7, despite the fact that [NetApplications reports that only 1.5% desktop computers worldwide use it](http://netmarketshare.com/). This old browser usage mostly comes from businesses using Windows XP on their IT infrastructure. We need greater evangelism to businesses in Britain that using older browsers not only increasing security risks, but also prevents Web developers from being on the cutting edge and reduces the Open Web Platforms competitiveness with native app platforms.

A few years ago, Microsoft created a [countdown for the death of IE6](http://www.ie6countdown.com/). Now maybe it’s time to do the same for IE7. But until we can finally get companies to move on from these ancient operating system that they cling so strongly to, there’s little we can do to move the Web forward.

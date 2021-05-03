---

title: WebKit vs. the Web
date: '2013-02-17 22:07:25'
tags:
- web
---

Opera Software announced yesterday that their [Opera Web browser now has over 300 million users](http://www.opera.com/press/releases/2013/02/13/) spread across various devices that the application supports. However, hidden within that press release was far more serious news.

Since 2003, Opera has used its own layout engine called Presto. Presto is famous in the Web developer community for its rigorous compliance with Web standards. This will soon change, though, as Opera will cease development of the engine.

> To provide a leading browser on Android and iOS, this year Opera will make a gradual transition to the WebKit engine, as well as Chromium, for most of its upcoming versions of browsers for smartphones and computers.

We don’t actually know the fate of Presto, yet, but we at least know that the Opera Web browser will no longer use the layout engine on both its desktop and mobile apps any more. Opera’s press release seems to have been carefully written so that the press will dismiss the relevancy of this when in fact it is far more serious than the revelation that Opera has users measured in the hundreds of millions.

Now, I don’t use Opera, and nor does most of the Internet population. It’s estimated that it only has about 1.75% of the desktop Web browser market as of January 2013. If that is the case, why should we care that Presto is gone? What difference will it make?

Well, quite a big difference actually. If you think otherwise, then you need to be aware of the serious ramifications this will have on the Open Web Platform.


## Browser Wars: The Sequel

While Opera’s market share on desktops may be small, on mobiles it’s a whole different story. The Opera Mini Web browser (which renders Web sites in the cloud and sends them to the client in a compressed format) has a much stronger share at 9.84% as of January 2013. However, that’s not important. What *is* important is that it has any market share at all.

What many people in the Web development community are failing to notice at the moment is that the *Open* Web Platform is dying. Or — at least — it is on the mobile device market. If we look at the market share recently, we’ll see that most phones and tablets run either iOS or Android.

On iOS, users are — of course — restricted as to what they can do on the phone by a “walled garden”. Each app must be downloaded via Apple’s App Store. An app won’t be accepted in the store unless it approved by the company. If an app uses certain APIs that they don’t want third-party developers to use (e.g. the APIs needed to support a Web browser’s layout engine), it can’t appear in the App Store, and users can’t have it. Therefore, users have no choice but to use Safari for Web browsing. Now I know there are some Web browsers in the App Store like Google Chrome, but these are just running an embedded version of WebKit with a different UI around it. They are not running a different layout engine. Opera Mini doesn’t use a layout engine at all; instead, it runs Presto in the cloud and then sends the rendered Web page to the client. The consequence of this is that interactive and animated content normally doesn’t work.

The situation on Android is different. The stock Android browser is used by most Android users. However, Android has a more open app store, and accepts Web browsers with different layout engines. So what’s the second most popular browser on Android? Google Chrome. Oh wait, that uses WebKit as well. The only viable alternative to WebKit browsers is Firefox for Android, which has a negligable market share; even despite some believing that it performs better than the Android browser.

The result of WebKit’s dominance on these two operating systems is that WebKit now commands 86% of the mobile Web as of January 2013. With Opera gone, your only way of using an alternative to WebKit is to either buy an Android phone that is compatible with Firefox for Android or buy a Windows Phone, which only runs Internet Explorer 10. If *you* are an iOS or Android user, I very much doubt you’re going to do that.

WebKit now has a monopoly over the Open Web Platform.


## So what?

At this point, it’s worth giving a background on what WebKit *is*. WebKit is technically open source. The main contributors in its development are Apple and Google (and perhaps soon Opera Software). Other companies such as Adobe and Nokia also contribute to the code repository, but not as much.

It may seem nice that all these large corporations are coming together to work on an open source project. In reality, these companies are all contributing for their own benefits and profits. Compliance with Web standards isn’t necessarily their concern. And they tend to clash a lot about new features. From my understanding, Apple tends to be the one with the loudest voice.

This situation harks back to the first browser wars, where Netscape and Microsoft were in a vicious brawl over market share. Both browser vendors realised that they could attract the most developers to supporting their browser by supporting the best features in the Web platform. As a result, we saw many ridiculous features being added with little thought gone into them. There are many examples, such as the `marquee` element, the `blink` element and the `valign` attribute for table captions. In the end, Internet Explorer won the war and Netscape’s layout engine died (giving rise to Firefox; but that’s another story). The aftermath of that war was a lot of rubble and dead features in the Open Web Platform. It took ten years to bring the Web to a healthy market share again, but the consequences of these left over features are still affecting the standards process after all these years.

The same thing has already started to happen with WebKit. When Apple introduced the “Retina display” on iPhones, they added the CSS media query `-webkit-min-device-pixel-ratio` to let Web developers add high-DPI images to their Web sites. They did not go through the W3C’s standards process in order to do this. Also, notice that this new media query contains the prefix `-webkit-`.

<aside> If you’ve never seen that before, it’s called a vendor prefix. The group at the W3C that makes and maintains CSS is called the CSS Working Group. Working Groups have many representatives from each browser vendor and other interested organisations that meet in order to write new standards specifications. While a standard is still being written and critiqued, browser vendors can implement new features defined in the specifications as long as they put a prefix in front of them, like `-moz-` or `-o-` or `-webkit-`. This is to show that the new feature is experimental, and stop Web developers from relying on them in their Web sites.By using prefixes, it’s theoretically safe for the CSS Working Group to change the syntax of the new feature in the specification. Once a specification becomes a Candidate Recommendation and a browser vendor has finished fully implementing the new feature as defined in the specification, browser vendor must stop using the prefix.

</aside>However, there’s two problems:

1. WebKit has lot of CSS properties that will never be standardised, like `-webkit-min-device-pixel-ratio`. Apple and Google have created these properties for their own purposes.
2. The WebKit developers have a policy that they never remove vendor prefixes from WebKit. For example, the CSS Working Group have decided to allow vendors to remove their prefixes for the `transition` property. However, WebKit still hasn’t; despite the fact that the rest of the layout engines have supported the unprefixed version for months.

Since WebKit has a monopoly in the mobile Web browser market, it’s not uncommon to see Web sites for mobile devices using these proprietary and experimental features; also without implementing the standard properties as well. As a result, you won’t be happy if you browse the Web on

<aside> The issue with WebKit’s non-standard CSS properties became so serious that Mozilla (who make Firefox) and Opera considered implementing the experimental (but not the proprietary) CSS properties that WebKit refuses to remove from its code. This concerned Daniel Glazman, the co-chairman of the CSS Working Group, so much that he published a [Call For Action](http://www.glazman.org/weblog/dotclear/index.php?post/2012/02/09/CALL-FOR-ACTION%3A-THE-OPEN-WEB-NEEDS-YOU-NOW) on <time datetime="2012-02-09">2012-02-09</time> to ask Web developers to stop using WebKit’s proprietary prefixes.
</aside>Eventually, the W3C’s CSS Working Group did specify a standard CSS media query that does the same job, but it was called `min-resolution`. Because the standard property had a different (and better) name, many Web developers that rushed ahead and used WebKit’s proprietary one had no idea that `min-resolution` existed. And even if they did know it existed, WebKit *still doesn’t support it.* Many claim that WebKit has fantastic support for new Web standards, but the truth is that their support is nothing but shoddy! Then again, why should Apple and Google care? WebKit has a monopoly, so Web developers think they only *need* to use features WebKit supports.

A Web controlled by *de facto* standards is bad. On the desktop, this story is different. Web browsers have a more balanced market share, so Web developers know that they need to follow *de joure* standards. When *de joure* Web standards are used, Web developers can be mostly confident that they can write their code once and it will work in all desktop browsers. It’s still important to test in all Web browsers, but problems only usually crop up when using cutting-edge new features that aren’t widely supported; or when testing in older browsers.

In a world where the market share is evenly split between multiple layout engines, it’s easy to point the finger at a browser vendor that poorly implements a standard feature; and that usually gives them the incentive to fix it. Even Microsoft has brilliant support of Web standards With the loss of Opera, we have one less incentive for WebKit’s developers to support Web standards correctly.


## Why can’t everyone use WebKit?

Many people have suggested that all browser vendors should just scrap their own layout engines and use WebKit. At first consideration, it seems like that would make sense. We wouldn’t need vendor prefixes. We would be faster at adding new features to the Web Platform. We wouldn’t need to spend months making sure that Web browsers fully support new features.

But at what cost?

Firstly, I have already given examples of WebKit’s proprietary and experimental features that have been rushed without being discussed at a W3C Working Group. Having only one layout engine would mean new feature after new feature would be created only for the selfish desires of the companies working on WebKit. Would there be any reason to listen to input from third-parties about the direction of the Open Web Platform? Would it even be called the *Open* Web Platform? Would we even need a standards process if only one vendor implements the “standard”?

Competition between browsers is healthy and important. When browsers are competing for their support of standards, we see benefits for users and Web developers. We see companies like Microsoft feeling proud that they are the ones that first proposed a new standard rather than the ones that created a new awesome feature that they’re keeping to themselves. The competition becomes a race over who can implement a specification first and who gets left behind. Those who *are* left behind are encouraged to pick up the slack and improve their support for more popular new standards.

Secondly, let’s not forget that all Web browsers are updated independently. Internet Explorer is updated yearly, Firefox is updated every six week, and the various WebKit browsers on mobile devices are updated differently as well. Safari on iOS and the stock Android browser are only updated when the OS receives a feature update. Do device makers care about upgrading your phone’s OS so that you can use the latest version of WebKit? Don’t be silly! Of course they don’t! They’ve got you stuck on a contract for two years. Why should they care about your experience using the phone during that time?

There are hundreds of forks of Android out in the wild, and they are all running different versions ranging from Android 2.0 to 4.2. Apple are a lot better at updating iOS, but they’ll almost always ceise providing updates to a phone after two to three years. If you ever knew how horrible it used to be to have to support versions 5, 6, 7 of Internet Explorer at the same time, you’ll now be able to experience that feeling once again. Different versions and variants of WebKit are fragmented over many different devices.

To make that fragmentation worse, each browser can use WebKit differently. For example, Safari and Chrome use different JavaScript engines. Safari uses Nitro and Chrome uses V8. They can have varying amounts of support for new features in ECMAScript.

There are many other reasons why using one layout engine is bad. See the articles in the [see also](http://joshtumath.me.uk/articles/webkit-vs-the-web.html#see-also) section for more.

The Web standards community is now in a very dangerous and frightening situation. We are now heavily depending solely on Mozilla and Microsoft to fix Web standards on the mobile Open Web Platform and bring the mobile browser market share to healthier values. Mozilla is a trustworthy charity that develops Firefox. They care about supporting Web standards and *want* an even market share. On the other hand, Microsoft is a company that almost ruined the Web during the first browser wars, but appears to have turned over a new leaf. They also have the money and might to bring Windows RT and Windows Phone devices with Internet Explorer 10 to greater market share. If these two organisations fail in increasing their browsers’ market share, our only other hope is to continue encouraging Web developers follow *de joure* Web standards on both desktop *and* mobile, and that plan hasn’t been going well so far.

Is there still hope for *Open* Web Platform on mobile devices? I don’t know, and — to be honest — I’m quite scared about how this will end.


## See also

- [Strange day for the Open Web](http://www.glazman.org/weblog/dotclear/index.php?post/2013/02/13/Strange-day-for-the-Open-Web)<span class="author">Daniel Glazman</span>
- [And Then There Were Three](http://robert.ocallahan.org/2013/02/and-then-there-were-three.html)<span class="author">Robert O’Callahan</span>
- [Why Mozilla Matters](https://brendaneich.com/2013/02/why-mozilla-matters/)<span class="author">Brendan Eich</span>
- [Browser Wars, the game](https://blog.mozilla.org/sfink/2013/02/14/browser-wars-the-game/)<span class="author">Steve Fink</span>
- [Why software monocultures are bad](http://quetzalcoatal.blogspot.co.uk/2013/02/why-software-monocultures-are-bad.html)<span class="author">Joshua Cranmer</span>
- [Opera Switches to WebKit](http://seanmonstar.com/post/43031350906/opera-switches-to-webkit)<span class="author">Sean McArthur</span>
- [Hey -o-, let’s go!](http://generatedcontent.org/post/43036827576/hey-o-lets-go)<span class="author">David Storey</span>
- [Tragedy of the WebKit Commons](http://blog.methvin.com/2013/02/tragedy-of-webkit-commons.html)<span class="author">Dave Methvin</span>
- [I will miss the “Douglas Crockford of browsers”](http://christianheilmann.com/2013/02/13/i-will-miss-the-douglas-crockford-of-browsers/)<span class="author">Christian Heilmann</span>
- [The WebKit culture & web rendering engine diversity](http://robertnyman.com/2013/02/13/the-webkit-culture-web-rendering-engine-diversity/)<span class="author">Robert Nyman</span>
- [WebKit: An Objective View](http://robertnyman.com/2013/02/14/webkit-an-objective-view/)<span class="author">Robert Nyman and Rob Hawks</span>
- [Opera switching to WebKit: thoughts and guesses](http://www.quirksmode.org/blog/archives/2013/02/opera_switching.html)<span class="author">Peter-Paul Koch</span>
- [It’s not about Webkit, silly. It’s about evolution.](http://dutherenverseauborddelatable.wordpress.com/2013/02/20/its-not-about-webkit-silly-its-about-evolution/)<span class="author">David Rajchenbach-Teller</span>

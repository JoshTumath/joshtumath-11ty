---
title: Teaching the Web in 2013
date: '2013-07-12 21:34:27'
tags:
- web
---

When I first went to study Computer Science at university, I was curious exactly how my department would approach teaching the students of today about our modern and now very powerful Open Web Platform. So much had changed from the days when I was learning about the Web; back when Web sites were just moving away from the “Microsoft Web” that Internet Explorer 6 had created. Many Web pages would say in their footers either “Best viewed in Internet Explorer” or “Best viewed in Firefox”.

In those days, it was very difficult for someone coming from no programming background trying to figure out how to make a Web page and what the best practices are. I remember my first Web sites – now long gone – would use the typical kinds of practices we would scoff at today, such as table layouts and features such as the `center` element and the `bgcolor` attribute.

In fact, I remember once trying to create a box for containing articles or news bulletins or something. In the header, I tried to use a table to create a thick heading with a red gradient. The middle cell would store the title and the left and right cells would store the images for the two rounded corners. I even thought to myself I was doing it properly because I was specifying the size and the backgrounds using CSS. While it rendered exactly the way I wanted in Firefox 2, Internet Explorer 6 left a massive gap between each cell for no apparent reason! People told me afterwards on an internet forum that I should use `div` elements, instead, and use CSS positioning.

Obviously, they were right. While they were more knowledgeable than me about best practices, most of my skills came from reading outdated tutorials (and being quite young, I didn’t really want to read them in full either). However, best practices have changed once again since then. In our HTML markup, we should be using the least amount of styling hooks as possible. By “styling hooks”, I mean meaningless elements like `div`s that are there only to be styled rather than to provide semantic meaning to their content. If I was recreating that tabular heading today, it would have been so much easier using `border-radius` and `linear-gradient()`.

Today, we see a lot of Web sites avoiding bad practices, and newcomers have a lot more guidance to help them relatively quickly learn about how to use the Open Web Platform. All Web browsers have brilliant developer tools built into them to show anyone who’s curious how a Web site’s markup fits in with its CSS code and how they come together to render in a Web browser. There’s also new educational resources such as [Codecademy](http://www.codecademy.com/) and [WebPlatform.org](http://www.webplatform.org/).

So teaching the Web platform today should be clearer than it was a decade ago. It’s used far more widely now and supported interoperably on major Web browsers. We can now concentrate less on how to get people to use the Web platform *correctly* and more on getting them to write for just one simple Open Web Platform.


## Getting priorities straight

With that in mind, the way that my year group at university was taught about the Open Web Platform was not in the way that I expected. Our first lecturer cared very much about the openness of the Web, and went over many important areas such as the browser wars and the separation of “structure” and “presentation”.

However, I felt as if he was teaching it as if we were in 2005. It was as if we were still suffering from the short-term aftermath of the browser wars, as he kept warning us not to use obsolete features such as the `center` and the `align` attribute. But most shockingly, use of XHTML1 was encouraged, despite the fact that the industry has been using HTML5 for the past three or four years now. He kept discussing the clean markup that XHTML Web pages have and how important it is to maintain that clean markup. And while – yes – clean and well-written markup is very important, there are good reasons why it was pretty much abandoned when the industry moved to HTML5. The language was actually *too* strict, and was unsuitable for things like Web apps and user-generated content.

<aside>It is worth pointing out that – during the time when XHTML markup was the norm – most XHTML pages never *truly* used XHTML. The reason why XHTML emphasises the importance of clean and consistent markup is because XHTML pages are parsed using XML parser; a parser that is described frequently as very “draconian”. If a Web page is uses incorrect syntax even once, a syntax error is thrown and the page is not parsed.However, for backwards compatibility, the W3C allowed the HTML parser to be used, which defeated the whole point. Ever since, Web developers have always used the HTML parser for XHTML, and have never suffered the errors they would have potentially had with the XML parser. In XHTML5, authors are required to use the XML parser.</aside>

The lecturer would say that, because HTML5 was not considered a Recommendation by the W3C, it shouldn’t be used yet, in his opinion. However, the way that Web standards are developed has changed quite a bit.

Ever since the W3C introduced the “Candidate Recommendation” stage to their standards process, it has become safe to use new Web standards even before they become widely supported in Web browsers. The need for new APIs and features in the Open Web Platform is growing at a far more rapid pace than before, and authors have needed to use the more bleeding-edge new features. The HTML5 spec at the WHATWG is now called the “HTML Living Standard”, meaning that it will never be finalised and will always be bleeding-edge. Therefore, authors need to be able to know which parts of the spec are stable and which are too new and could change in an incompatible way.

And the same can be said for CSS. While my lecturer was weary of using new CSS3 features for the same reason, such an opinion makes no sense, because there is no such thing as “CSS3″. Following CSS2.1, CSS was modularised. Rather than spending *many* years having new CSS features defined in one large specification, new features were defined in smaller specifications which are developed and improved independently on each other. So while the spec for fonts could still be on Level 3, the spec for backgrounds and borders could be on Level 4. The decision by the CSS Working Group to do that has sped up innovation on the Web and has allowed a lot of newer standards to be used much earlier than we normally would have been able to.

Let me clarify: the lecturer was not a poor teacher. He taught many of the important fundimental areas that the class needed for Web development, and made it engaging enough to encourage the class to look more into the topic. He clarified what was just his opinion, and encouraged critical thinking on the subject.

After that lecturer had finished his section of the module, another lecturer began their section, which then focused on the newer HTML5 features.

It never made sense to me why we were taught about the Web platform in this order. When creating a HTML5 Web page, the way it is marked up is changed fundamentally, because new semantic elements such as `header` and `nav` change the way pages are initially marked up, and some elements from HTML4.01 have been given new semantics. Students should be taught to write pages that are HTML5 *by default*. They should only ever need to know how to create a page using HTML5 semantics.

In my opinion, the most fundamental concepts that new Web developers must be taught are (in order of priority):

* **The history of the Web platform:** By learning about the browser wars, Web devs will understand the reasons behind the platform’s various quirks and deprications. And more importantly, they’ll understand the importance of why the *Open* Web Platform is a *de jure* standard formed out of use cases, colloration between various companies and extensive interoperability testing.
* **The importance of semantic markup:** While there are various approaches by which Web devs can go about semantics on the Web, at a basic level, all content on the Web has its meaning explained through semantic markup in HTML. Web devs should understand the importance of why the semantics are kept seperate from the layout and aesthetics.
* **Supporting for different devices:** When I was learning how to develop for the Web, the only users I had to think about were ones browsing to my Web site on a desktop PC using a keyboard and mouse on a 800 x 600 display. Today, however, Web devs should be thinking all through the creation of their Web site how their Web site will be visited in different browsing contexts. There are different inputs, including mouse, touch and even voice. And users will be browsing on various devices from small smartphone screens to large laptop monitors with high-DPIs. Their Web sites must work the same on all of these. Responsive design should be used everywhere.

## Understanding the madness

There are also certain CSS features that I wish I knew when I was starting off. These very important behaviours are often forgotten about in teaching, but are important in understanding how styling works.

For example, before I learned about [specificity](http://www.w3.org/TR/selectors/#specificity), it was not clear how one CSS rule was prioritised over another (but basically, the more complicated or specific the selector is, the higher the rule’s priority is).

But that is a simple concept once understood. What’s worse is the box model. All elements that don’t have the `display: none` property specified on them are called boxes. All page content is presented in different boxes, which is good; it provides many opportunities for styling. However, laying out those boxes can be quite a chore – and not just for beginners. While there are many types of boxes, the main ones authors need to think about are `block` and `inline`.

Blocks by default stretch out as wide as they can and are positioned one below the other. Inlines are positioned within lines of text nodes and can have whitespace characters around them. If you want to give a block a fixed width and centre it, it’s not obvious that you can do that by setting its left and right margins to `auto`.

And if you want to lay out multiple blocks side-by-side, there’s a lot more to it than you would expect. [CSS flexboxes](http://www.w3.org/TR/css3-flexbox/) and [CSS grid layouts](http://www.w3.org/TR/css3-grid-layout/) will make that a lot easier, but they aren’t widely supported, so there’s only two ways this can be done. The first and most preferred is to use `float: left` on all of the boxes you want side-by-side. However, you can’t use `float: right`, because that will reverse the order of your boxes. However, that method has limitations, like if you want to centre the boxes horizontally or vertically. The other method is to use `display: inline-block`, which allows authors to align the blocks like text. However, because the blocks are treated like text nodes, there may be text nodes containing whitespace in between each box, so you will need to change your markup. Also, you may need to play around with `vertical-align` so that there isn’t a strange gap below each box.

One problem with using floating boxes is that they float above their containing box (hence the name). That means that their containing box won’t stretch to increase its height in order to contain them. You can prevent this by using the `clear` property, but that’s not ideal in most cases. There is a trick to get around this, however, and it’s not what you would expect. Simply by adding `overflow: hidden`, the problem is solved. The container box contains the floating boxes without any issue.

Finally, absolutely positioned boxes are also very important. Many designs would not be possible without them. These can, of course, be positioned using the `top`, `right`, `bottom` and `left` properties. However, these properties only position the box relative to the edges of the Web page. For CSS positioning to be really useful, authors need to be able to position boxes relative to other boxes within their Web page as well. As a beginner, it took me a while to figure out that this is possible simply by appending `position: relative` to the box you want the absolutely positioned box relative to (it doesn’t have to be `relative`, of course; this works with `absolute` and `fixed` boxes too).


## Conclusion

There’s probably much more that should be taught to the up-and-coming Web developers of this generation, but my main point is this: Web development is currently still taught as how to create simple Web pages for the keyboard and mouse we’ve been using for the past two decades.

However, we need Web developers that understand the versatility and power of the Open Web Platform; we need Web developers that are not afraid to jump into the latest Web standards; we need Web developers that know how to create a Web site that works on all device types *by default*. Because they are the demands of 2013.

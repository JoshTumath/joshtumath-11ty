---
title: The importance of responsive web design
date: '2013-08-14 23:10:33'
tags:
- web
---

When the Web was created, it ran on one Web browser that ran on one type of desktop PC. But the technologies behind it all ran on open standards, so it didn’t take long before the Web proliferated into all of the devices we now use it on. Web developers don’t just have to worry about 640 × 480 desktop PC monitors. The Web runs on large monitors, small laptop monitors, TVs, high-DPI displays, mobiles, tablets, printed paper, screen readers…. The list goes on.

Originally, the way to support mobile Web browsers on feature phones and smartphones was to create a separate Web site that only had one column of content, less CSS and (usually) no client-side scripting. While this solution usually worked well, it had a number of major issues.

For starters, the user tended to get a lesser experience than on the main site. Some content or pages would always be missing. Secondly, the user would be redirected from the main site to the mobile site by sniffing the <abbr title="User agent">UA</abbr> string, which didn’t always work. Thirdly, maintaining two Web sites at once can be expensive and increase workload.


## Write once. Run everywhere.

In May 2010, Ethan Marcotte published [an article on A List Apart entitled “Responsive Web Design”](http://alistapart.com/article/responsive-web-design).[^1] He discusses the limitations that Web developers have in getting a Web site to scale to devices of various resolutions. In an example page that had been designed to be flexible, he shows how unpleasant it looks at any resolution lower than 800 × 600. This article introduced to the Web development community a new concept: making one Web site that could scale its content for any device.

A responsive Web site allows the user to get the same content and experience on any device by adapting to the features of the device that the user has.

It’s done using *media queries*. Media queries are strings of text that test what conditions the user’s device has. They used to be very simple; just checking what type of media the user was viewing the Web page on, such as a `screen`, or on a `print` of paper, or on a `tv`. But a few years ago, browsers began to support newer, more specific conditions. Once these were supported, it didn’t take long before responsive Web pages started springing up across the Web.

Media queries look like this:

```
screen and (min-width: 480px)
```

Using that string, you can use a set of CSS rules or run a script *only if* the user is viewing your site on a viewport that’s at least 480 pixels wide.

But knowing how it works isn’t enough. It’s important to know how to use it too.


## Progressive enhancement 2.0

There are two ways of implementing a responsive design. The first is called graceful degradation, where you implement the page in its most complex form first and figure out ways to fit the content into a small feature phone. The second method is progressive enhancement, which goes the opposite way. You start with mobile first and move up.

I discussed this method in my previous article, [The importance of progressive enhancement](http://joshtumath.me.uk/2013/08/11/the-importance-of-progressive-enhancement/ "The importance of progressive enhancement"). If you’re unfamiliar with the method, you might want to read it before continuing.

But before implementing a responsive Web site, it needs to be designed. How this is done isn’t very important, but you must consider how the exact same content can be viewed on various device types. It may be easier craft the design for the largest screen first. Think about how you can use the entire real-estate. Then think about how you can present that same content on smaller screen sizes. If your page is laid out in columns, it may just be a case of reducing the number of columns. For example, you may decide to move the sidebar to below the main content.

Once the design is finalised, you can begin your implementation. Start with a basic page that uses only HTML. Even if the style is removed, the HTML content should still have a good heading structure and [semantic validity](http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#semantics-0).

The CSS comes next. In your first CSS file, don’t apply any media queries. This is the default, basic style that all devices will use. Typically, a Web browser on a small screen never has a viewport thinner than 320px, so don’t worry about supporting screens any thinner.

After this, you can create stylesheets for larger screen sizes. Each stylesheet will inherit the styles from stylesheets for smaller screens. For example:

```html
<link rel="stylesheet" href="css/320.css">
<link rel="stylesheet" href="css/480.css" media="(min-width: 480px)">
<link rel="stylesheet" href="css/600.css" media="(min-width: 600px)">
<link rel="stylesheet" href="css/768.css" media="(min-width: 768px)">
<link rel="stylesheet" href="css/960.css" media="(min-width: 960px)">
```

Doing it this way has the following benefits:

- It reduces the chance of writing duplicate code
- Users on smaller screens (who will likely be on a slower connections) will only be given the styles they need. They won’t download the stylesheets for larger screens.
- If this had been done using graceful degradation, users on smaller screens may have had to download images specified in the stylesheets for larger screens *and* the images for smaller screens.
- Users on larger screens are usually able to change the size of their browser window, so they’ll have already downloaded the stylesheets for smaller screens.

The *de facto* standard widths used for responsive “breakpoints” are 320px, 480px, 600px, 768px and 960px, but you are of course free to use whatever values you need.[^2]

If there is any interactive content that requires JavaScript (such as an expandable main menu), make sure all content is presentable without any JavaScript before you add any. If, in your scripts, you need to change what the scripts do based on the screen size, use an API, such as `document.documentElement.clientWidth`. It will return the viewport’s width so that you can scale accordingly. For example, you may want an accordion to be used on smaller screens, but not larger screens.


## That’s a wrap!

That’s the basics of responsive web design. Responsive design and progressive enhancement go hand-in-hand, so it’s important to use both of them effectively.

Users appreciate Web sites that use responsive design, because they don’t target specific devices. No user is left out and stuck with viewing the desktop layout. Also, there are increasing use cases where desktop and laptop users will want to view Web sites in smaller windows. If you’re not already, now is the time to start using responsive design.

[^1]: Interestingly, the article foreshadows the soon-to-be dominating WebKit browser engine that has become so commonplace on smartphones and tablets. As I discussed in [a previous article](http://joshtumath.me.uk/2013/02/17/webkit-vs-the-web/ "WebKit vs. the Web"), this had very serious consequences for the Open Web Platform.
[^2]: Internet Explorer 8 and below do not support media queries with conditions. You may want to use `<!--[if lt IE 9]>` and `<![endif]-->` to respecify your stylesheets without any media queries.

## See also

* [How to Approach a Responsive Design](http://upstatement.com/blog/2012/01/how-to-approach-a-responsive-design/) - <small>Tito Bottitta</small>

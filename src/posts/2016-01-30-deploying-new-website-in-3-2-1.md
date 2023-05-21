---
title: Deploying new website in 3... 2... 1...
date: '2016-01-30'
tags:
  - website
---

Hooray! After a year in my sandwich placement at [GloverSure](//www.gloversure.co.uk/) and a busy first semester during my final year at University, I've finally gotten round to a much needed upgrade to my website.

I've been dying to redo my entire <abbr title="Virtual Private Server">VPS</abbr> setup for ages. I ended up buying a new 10 GB SSD VPS from [OVH](//ovh.co.uk/) last week. I set it up with nginx instead of Apache and Ghost instead of WordPress.

I also finally have a HTTPS connection set up, thanks to [Let's Encrypt](https://letsencrypt.org/). I've been looking forward to Let's Encrypt for over a year, after Mozilla and other organisations began the project. Finally, everyone can enable SSL on their websites for free with no hassle!

Setting up Ghost was quite nice. I was initially considering [Bolt](//bolt.cm/) as a replacement for WordPress. It seemed to have a great amount of customisation while not being as bulky as WordPress. It also supported alternative databases to MySQL, which I really wanted to get away from. But Ghost has become quite popular in recent years. I quite liked the idea of being able to write my blog posts with just a simple Markdown editor rather than fiddling with inserting HTML into WordPress's WYSIWYG. So far, I'm loving it!

Importing all of my blog posts from WordPress was straightforward too, but I can imagine there might be problems with some links that I'll have to check over. I've also moved the blog itself to the homepage, since the homepage was originally serving the role of another 'about me' page.

The only issue I have with the new site is how the Responsive Web Design has been implemented in the CSS. I created the Ghost theme as a modification of the default Casper theme with the addition of some features from my new site's theme. Casper's responsive design was originally made using the graceful degradation technique[^1]. However, I'm more of a supporter of [using progressive enhancement for RWD](//joshtumath.uk/2013/08/15/the-importance-of-responsive-web-design/). Plus, using progressive enhancement means site visitors on small screens don't have to download the additional CSS for styling larger screens.

But anyway, it's finally finished! Now I can move on to starting on my dissertation. Over the next 15 weeks, I'll be blogging about my progress on my Major Project titled _An agile project management system to aid digital agencies to apply agile methodologies_[^2].

[^1]: Designing for the biggest, best device first and then adding conditions to handle situations where certain features aren't supported.
[^2]: Which, depending on who you talk to, is either the dullest idea fora dissertation ever or 'actually quite interesting'.

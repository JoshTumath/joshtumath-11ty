---

title: Is responsive Web design not possible on "real" Web apps?
date: '2013-12-17 02:03:39'
tags:
- web
---

There have been many times that I hear people say: responsive Web design cannot be done on “real” Web applications or Web sites that want to provide a rich, content-heavy user experience. Is that really so? Is that really the pessimistic attitude we should have towards our ever-evolving Open Web Platform?

Today, I updated my Web site to the latest version of WordPress. Version 3.8 has a new admin dashboard that is completely responsive. Now I can edit any page of my Web site, change the theme, disable plug-ins or anything else using any small-screened device. My smartphone is not being treated as a second-class citizen.

But you could say that WordPress’s admin dashboard has only very simple functionality. One argument against RWD-everywhere is that Web site’s with more complex features and designs cannot be translated into RWD. Doesn’t RWD require us to “dumb-down” our Web pages in order for it to be possible?

Well, perhaps a better question would be: Why do your Web pages have such a complex layout in the first place? All the user wants to see is one main bit of content per page. GOV.UK gives us an excellent example of this. On the [bank holidays](https://www.gov.uk/bank-holidays) page, our eyes are instantly focused to the column containing the main content.

To be fair, it’s quite ignorant to just say that any Web page can be made responsive by simplifying its content. Let’s take Facebook, for example. Facebook maintains both a mobile Web site and a desktop Web site. The mobile version is modern and was built from the ground-up to be light-weight and fast-loading, but doesn’t contain all the features of the desktop version. The desktop version, meanwhile, has all the bells-and-whistles, but as a result has many features that aren’t possible — or at least would be very clunky — on a smartphone. The photo uploader can do things like let you tag and name photos while the rest are being uploaded. And there are many Facebook apps that just could be made to magically work on small-screens.

In this case, it appears having a mobile and desktop Web site is the best solution. *Is that really so? Is that really the pessimistic attitude we should have towards our ever-evolving Open Web Platform?* The mobile version of Facebook’s Web site’s lightweight design and fast-loading isn’t just beneficial to smartphone users. Desktop users would find it very useful too. What is preventing the Facebook devs from building up the mobile version until it equals the desktop version feature-to-feature? If there are any deficiencies in the Web platform preventing that goal, they are members of the W3C, so they should be encouraged to use that membership to add the functionality they require to the Web platform for the benefit of all.

That’s not an unreasonable suggestion. The BBC are doing the same for the BBC News Web site — [and they’re blogging about it](http://responsivenews.co.uk/)!

But what about something genuinely difficult to convert to a responsive layout. Web applications like Microsoft Office Web Apps and Google Docs have understandably very JavaScript-heavy and DOM-heavy Web pages. Like with the BBC News’s Web dev team, it’s worth starting from scratch and designing for mobile-first, but it’s unreasonable to expect users to edit spreadsheets or presentations on smartphones.

This is one of the few use-cases where it may be right to treat smartphone users as second-class citizens: because that’s how they want to be treated (in this context, at least). Therefore, it would make sense to use [progressive enhancement](http://joshtumath.me.uk/2013/08/11/the-importance-of-progressive-enhancement/ "The importance of progressive enhancement"), offering the user very basic functionality (or maybe just a read-only mode) and only loading the more advanced features and layout if the viewport is large enough.

It would be unfair to say that we as Web developers can resist RWD-everywhere simply out of laziness or fear of greater development time and cost. However, I believe it would be wrong to have the attitude that it’s an impossible goal. It might not be easy, and it may take time, but we’ve got to try.

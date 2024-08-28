---
layout: layouts/post.njk
title: 'My first week in the CSS Working Group'
date: 2024-08-21
---

Last week, I joined the [CSS Working Group](https://www.w3.org/Style/CSS/) at the W3C, representing the BBC.

The CSSWG is where the new features and improvements to CSS are agreed on and decided through consensus between all of its members.

As with all W3C working groups, the CSSWG is made up of members from different organisations and also individual invited experts. So that includes the browser vendors like Apple, Google, Microsoft and Mozilla, but also companies like Adobe and invited experts like [Hidde de Vries](https://hiddedevries.nl/), [Lea Verou](http://lea.verou.me/) and [Miriam Suzanne](https://www.miriamsuzanne.com/).

## My story

My first forays into web development were about 18 years ago, using tools like Microsoft FrontPage and Dreamweaver, making table layouts designed to work on IE6. In those days, it was common to see websites proclaiming in their footers that they'd been validated by the [W3C Validator](https://validator.w3.org/) and that they work best in Firefox. From this, I read up about standards compliance and the [browser wars](https://en.wikipedia.org/wiki/Browser_wars) and learnt a lot about web standards, which led me to spend a lot of time over the years reading the specifications to learn about new features.

I'd met a few of the CSSWG members over the years at various conferences - especially CSS Day in Amsterdam. They were all clearly passionate about the web platform and I would always enjoy hearing how they went about solving problems to meet the needs of developers.

So meeting people from the working group was quite inspiring for me. And if it wasn't for a chat with Alan Stearns, one of the CSSWG co-chairs, at the end of CSS Day 2024 last May, this never would have happened.

The reason why I've been able to meet so many amazing people at conferences and meetups is because we have a fantastic community around our little world of web design and development (and because I'm fortunate that my employer is willing to invest in its employees' development by sending them to training and conferences). I can't think of any other platform in software development that has this close of a relationship with its users. Anyone can participate in web standards and the web community, and there are so many ways to do it. I love it!

To be a part of the CSSWG is a huge privilege. As a member, I'll be representing the BBC and the organisation's needs around accessibility, design aesthetics and layout. But on a personal level, it's exciting for me, as well, because it feels like a way to give back to the web community when it has given me so much.

## Joining the W3C and CSSWG

As an outsider, I'd already been quite familiar with how the CSSWG generally operated: they would discuss ideas from each other and members of the public asynchronously on their [GitHub repo](https://github.com/w3c/csswg-drafts) and discuss and agree on things in [meetings with CSSWG members](https://lists.w3.org/Archives/Public/www-style/2024Aug/) synchronously. Since I was joining, I was looking forward to finding out how it worked in practice.

Every member organisation of the W3C has an 'advisory committee representative' who, amongst many other things, nominates members of their organisation to join W3C working groups. The BBC's AC rep is Chris Needham. The BBC has been an active member of the W3C for a long time and we even have staff who co-chair the Media Working Group (Chris), Audio Working Group and Timed Text Working Group.

For me to join the CSSWG, Chris needed to have a chat with me to discuss our aims for participating as an organisation and take me through the W3C's processes, and was then able to nominate me. There is no other approval process; no interview with other CSSWG members or anything like that.

This surprised me. As soon as Chris added me to the working group, the W3C's IT system immediately added me to some mailing lists and GitHub teams and sent me some welcome documents and policies to read, but there wasn't really anything else to it. You're just 'in'.

Later, Alan sent me a welcome email with some more helpful links, such as to [fantasai's 'about:csswg' blog post series,](https://fantasai.inkedblade.net/weblog/2011/inside-csswg/) which explains how the CSSWG does things (it later started to make more sense as I began to experience things first-hand).

As Chris and I expected, it seemed like a lot of my first few months was going to be [reading the air](https://en.wikipedia.org/wiki/Ba_no_kuuki_wo_yomu), learning as I go and seeing how things are done. All there was to do at this stage was wait until the first meeting, and now that I was a CSSWG member, I was able to join.

## My first telecon

The CSSWG meets every Wednesday. The day before each meeting, the co-chairs send out [an agenda of GitHub issues to discuss.](https://lists.w3.org/Archives/Public/www-style/2024Aug/0008.html)

The meeting was on Zoom. I was one of the first to arrive and had my camera on. I'm very used to the work culture at the BBC, where it's common at the start of a meeting to greet people and have a bit of small talk and jokes; but I didn't know what to expect here. Quite a lot of people joined the call, but pretty much everyone had their camera off and quietly waited for the meeting to start, so I quickly turned mine off too.

For historical reasons, CSSWG and most other W3C working groups take their minutes on IRC, which is an old instant messaging protocol. Everyone present at the meeting writes `present+` to record that they are present. Someone offers to take the minutes and will try to summarise what people say. This week, it was [Keith Cirkel](https://www.keithcirkel.co.uk/), who was very careful to ask people to repeat themselves to make sure important details were recorded (which was very helpful).

The agenda items are always GitHub issues. There is no time limit on how long everyone in the meeting can discuss an issue; it takes as long as it takes. Therefore, there is no guarantee everything on the agenda will be discussed, and any issues remaining roll over to the next week's agenda. In my first meeting, we got through the first four agenda items out of ten. The first two items were just to approve two editor's drafts progressing to First Public Working Draft. After that was a discussion about an [Open UI proposal](https://open-ui.org/components/popover-hint.research.explainer/) and two nuanced changes to how CSS selectors interact with the Shadow DOM which required approval.

Being a part of the meeting showed me why the standards process can sometimes seem slow. Proposals for new features are coming to the CSSWG at a record pace, but ultimately things don't go into specifications without agreement from working group members.

Nothing is done without consensus at the W3C. That may seem like a nice platitude, but no, seriously, _nothing_ is done without consensus. And the W3C has processes in place for determining that a proposal has consensus. Typically, as issues are discussed, the chair determines that the meeting attendees have reached a 'proposed resolution'. Provided there are no objections, the resolution is caried.

## My first agenda item

Recently at the BBC, our iOS users who increase their device's font size in their accessibility settings have been experiencing problems on our BBC News and BBC Sport apps. Web pages shown in a WebView in the apps did not respect the font size setting.

Before I joined the CSSWG last week, [I submitted an issue on the CSSWG GitHub repo about the font-size problem.](https://github.com/w3c/csswg-drafts/issues/10674) It turned out that the font size problem had been discussed in a previous issue and a solution was agreed on in a CSSWG telecon, but the issue was closed. To me, it seemed like the issue needed to be discussed again.

For an issue to be queued up for discussion at a CSSWG meeting, it needs to be given an 'Agenda+' label.

One thing that confused me was how we decide what issues should get the Agenda+ label. I asked Alan about it. He explained that there are lots of reasons for when to do it, but, effectively, any CSSWG member can choose to add something to the agenda queue.

It made me realise something about how working group participation W3C works: if I think an issue is important to the BBC and it needs a decision or to be discussed synchronously, it's up to me to bring it to the rest of the membership and try to bring everyone to consensus. There's no select group of people who decide when something is 'ready' for the meeting. All members of the CSSWG are equal and all of us can decide what is important.

So with that knowledge, I added the issue to the agenda.

Now I just need to wait until the issue makes it to the top of the agenda so that it can be discussed. That probably won't be for a couple of months, but it's exciting!

## Onto the next week

I hope that was an interesting insight into how the CSSWG works. I really enjoyed my first week. As I gradually get the hang of things, I'm looking forward to seeing how I can serve the web community here.

If you're a CSS author and there's anything you'd like CSS to do, please do [file an issue on the CSSWG GitHub repo](https://github.com/w3c/csswg-drafts/issues) with your use case and the problem that you're trying to solve. I'm also happy for you to reach out to me on DMs if you need help with an issue.

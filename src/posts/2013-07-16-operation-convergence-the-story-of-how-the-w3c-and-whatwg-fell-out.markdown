---

title: 'Operation convergence: the story of how the W3C and WHATWG fell out'
date: '2013-07-16 21:30:44'
tags:
- web
---

On 19th July 2012, a fissure was created between the W3C and the WHATWG; the two most important standards organisations leading the development of the Open Web Platform.


## A history lesson

The WHATWG was set up in 2004 by Apple, Mozilla and Opera to rescue the future of the Web platform (yes, Apple cared about the Web back then!) after Sir Tim Burners-Lee and the W3C became increasingly focused on their vain obsession with pure XHTML and the Semantic Web whilst ignoring the needs of actual Web developers and users. They began on what has today become known as the HTML5 specification.

Ultimately, a Web standard is only a standard if Web browsers support it in their browser engines. The W3C realised this, and the HTML Working Group (HTMLWG) was rechartered in 2007.

The two working groups worked well together in forming and shaping HTML5, with both parties’ interests in mind. The WHATWG ultimately handled the editing of the spec, and the W3C would copy it, split it up into smaller modular specifications where appropriate, and publish the specifications in Working Drafts in the W3C process that we’re all so used to. Both groups had means of allowing non-members from contributing to their discussions, and, if there was a general disagreement at the HTMLWG with something in the WHATWG spec, the HTMLWG chairs would ask the WHATWG editor to change it.


## Tensions rising

Of course, it was never happy families. The W3C process involved members from many companies and organisations trying to reach consensus on various issues. On the other hand, the WHATWG process is *Ian Hickson*.

Ian Hickson is the sole Editor of the [HTML Living Standard](http://www.whatwg.org/html) spec, and it’s a very large spec to edit! Many of his ideas have been the foundation of HTML5, such as the standard HTML parser that is now used in all major browser engines.

<aside>If you’d like to know more Ian Hickson, I recommend reading this [interview](http://html5doctor.com/interview-with-ian-hickson-html-editor/) with him in January 2013. It’s definitely worth a read.</aside>The problem with the WHATWG process is that it revolves around Hickson. If you propose a change to the WHATWG spec, that change must ultimately go through him. He will certainly try to listen to yours and others opinions, but he makes the final call.

This is something I have experienced a few times myself. Sometimes with success, like my [proposal for a `defer` for delaying the loading of images](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17842) and sometimes with failure, like my quite foolish [suggestion to add a `poster` attribute to the `audio` element](https://www.w3.org/Bugs/Public/show_bug.cgi?id=11136).

This is how the [WHATWG’s official FAQ](http://wiki.whatwg.org/wiki/FAQ#How_does_the_WHATWG_work.3F) summaries the group’s process:

> People send e-mail to the mailing list. The editor then reads that feedback and, taking it into account along with research, studies, and feedback from many other sources (blogs, forums, IRC, etc) makes language design decisions intended to address everyone’s needs as well as possible while keeping the language consistent.
>
> This continues, with people sending more feedback, until nobody is able to convince the editor to change the spec any more (e.g. because two people want opposite things, and the editor has considered all the information available and decided that one of the two proposals is the better one).
>
> This is not a consensus-based approach — there’s no guarantee that everyone will be happy! There is also no voting.

While that’s obviously more tongue-and-cheek, there is some truth in it. In my opinion, Hickson pretty much always makes the right call.

However, there are some times where *many* have disagreed with him, but he has stuck with his decision because he believes it is the right call. Anyone that knows about the controversies surrounding `time`, `hgroup`, `srcset` and `main` knows the kind of incidents I’m referring to. Those four have been the most high-profile incidents where Hickson has put his foot down. I’ll get back to them in a moment.


## Fragmentation

There was a famous quote that Ian Hickson made where he said that HTML5 likely won’t become a W3C Recommendation. He said this because, in order for that to happen, every single part of the specification must be implemented by at least two browser engines. As HTML5 was extremely large, that was going to take a while.

However, in January 2011, Ian Hickson announced that there would no longer be a HTML5 and that the spec would instead be called the [HTML Living Standard](http://blog.whatwg.org/html-is-the-new-html5). The WHATWG came to terms with the fact that the HTML5 spec would always be on the bleeding edge of development and would always need updating to keep up-to-date with the needs of Web developers and browser vendors. The idea was that – instead of trying to stabilise the entire specification and then move onto HTML6, individual sections of the specification would be considered stable if they were widely implemented in Web browsers.

This was incompatible with the W3C’s model. However, that was fine, as the HTMLWG now had a new role of creating a stable snapshot of HTML5 while the WHATWG ploughed ahead with new ideas. The system could be compared to app development, where – in a code repository – new features were added to the trunk and branches are created from that trunk with just bug fixes added in order to release the app to the general public.

There were fears from many Web developers that this would cause fragmentation; that we would have two specifications telling us two different things. And those fears were correct.

And then the situation got worse.

In July 2012, [Hickson announced he would no longer edit the W3C HTML5 specification](http://lists.w3.org/Archives/Public/public-whatwg-archive/2012Jul/0119.html). Instead, he would just be editing the WHATWG version. The situation remains the same today. Now there is nothing left to prevent the specifications from diverging. Ironically, the work done at the time to prepare for this was called “operation convergence”.

Let me give you an example of how bad the fork is. I proposed my idea for `defer` attribute to the HTMLWG about a year before project convergence. Following the fork, my proposal was discussed separately by both groups. On the HTMLWG side, one of the new W3C HTML5 spec editors immediately resolved that it is too late for my idea for HTML5 but that it would definitely be reconsidered at a later date for future specifications. I accepted that resolution, and my proposal is now being drafted by the Web Performance Working Group in the [Resource Priorities](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/ResourcePriorities/Overview.html) specification. Meanwhile, on the WHATWG side, there was a massive discussion between contributors about the merits of the attribute and specifically how it would work. It was eventually resolved by Ian Hickson that feedback from implementers (i.e. browser vendors) was needed (and we’re still waiting for that implementer feedback today).

So in other words, there were two separate discussions about the pros and cons of my suggestion (I didn’t see the W3C’s discussions because it was eventually dealt with by a different working group), and both discussions probably mentioned many of the same things. I dread to think of the many other redundant discussions that took place as a result of operation convergence.


## The aftermath

In the aftermath of operation convergence, things seem to have turned very bitter.

For many years now, a HTML element has been proposed called `main`, but it was never included in the HTML spec because Ian Hickson didn’t see a need for it. However, following the split, the new HTMLWG editors *did* see a need for it, and included it in HTML5. The element quickly became widely used, so Hickson was given no choice but to include it in the WHATWG spec.

However, there was a huge difference in each spec’s definition of the element.

* **W3C definition:** The `main` element represents the main content of the `body` of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.
* **WHATWG definition:** The `main` element can be used as a container for the dominant contents of another element. It represents its children.

According to the W3C, the `main` element represents the main content of the Web page. This is useful, mainly because it allows blind users using assistive technology to skip through a page’s logo and navigation and get to the content of the page. However, the WHATWG’s definition is ambiguous and makes the element no more useful than a `div`. It’s no surprise that Web developers go by the W3C’s definition.

If you’d like something to read in bed this evening, read this [childish argument between Steve Faulkner, editor of the W3C HTML spec, and Ian Hickson](http://html5doctor.com/the-main-element/#comment-35758). The debate gets to the point where Hickson remarks: “I’m not responding to Steve any more since he’s obviously just trolling me with statements he must surely know are incorrect.)” In this case, I shared my opinion with Faulkner. However, there are some times where I believe that the WHATWG spec uses a better definition of a feature. There is no clear side to turn to. And when you see members from both groups arguing like that, that makes it even more appalling.


## Conclusion

I’ve only scratched the surface of this topic, but I’ve said enough as it is. At the end of the day, what does this mean for Web developers?

Web developers have no clear picture any more of exactly how HTML and its related APIs work; no clear specification to turn to. The way the Web platform works is now ultimately down to how Web browser vendors choose to implement them, and we have to look to them to get the true picture.

---
title: 'WebPaper: Can the Web replace LaTeX?'
date: '2013-12-18'
tags:
  - projects
---

A couple of weeks ago, I was writing a document for a university assignment in LaTeX. Learning the syntax isn’t too bad, but can take a while. It is similar to HTML; especially in the sense that it is a semantic mark-up language. But it’s old, and mostly used by academia. Meanwhile, CSS has – for years – supported styling printed documents. I’m planning an experiment to see if it would be possible to create a stylesheet and a HTML syntax for creating documents, and I’m calling it [WebPaper](https://github.com/JoshTumath/web-paper).

## The problem

The TeX typesetting system was created in 1978 – that’s 35 years ago! It was made for an era before WYSIWYG word processors where commonplace; when the world was in the middle of moving from the ye olde printing press to digital printing. These days, LaTeX is mainly used for writing academic documents that are then outputted as a PDF and printed out.

But that doesn’t fit in with the world we live in today. Today, we are eco-friendly tree-huggers who share documents with our friends and colleagues on the Web. We like to read documents online, and avoid printing them out. And if we do want to print them out, we want them to look good with minimal effort.

Personally, I don’t like begin given a document to read in PDF format if I’m only going to read it on a screen. It’s needlessly split into different pages when all I want to do is scroll down and read one continuous page.

The UK Government got this right when developing GOV.UK. They created a HTML format for publishing official government documents, like the [National Curriculum](https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study). But one problem with GOV.UK’s document format is that it does not look good if you actually want to print it.

## The solution

WebPaper is going to allow anyone who understands basic HTML to create printable documents that feel at home being read in a Web browser as well. Just write your content, wrap with it with the usual semantic HTML elements, attach the WebPaper stylesheet and you’re done. (Assuming it’s possible!)

You can share them however you want: host them on your Web site, print them in using Web browser, attach them in emails using a ZIP file, export them as a PDF. It will satisfy the use cases for being able to read them comfortably on large desktop computer screens to small smartphone screens and printed paper.

This isn’t intended as a framework or scaffolding for creating Web sites. This would just be used for creating documents intended for printing that can be viewed on the Web as well. It’s intended as a replacement for using LaTeX to produce standalone documents, because I believe that HTML is easier to learn due to its wider use.

And there’s lots of possibilities to extend this! Once Web Components become more mainstream, custom elements could be used to make editing easier. For example, an element like `<paper-titlepage>` could be used for marking up title pages.

This is an exciting project that could prove to be very helpful to many people. I’m looking forward to working on it!

---

**Update:** Much of this project relies on new at-rules in the CSS Paged Media Module, which haven’t been implemented yet in browsers. These allow developers to control the content of the header and footer of a page. I’ll hopefully return to this project once the module has wider support, but that probably won’t be for a couple of years.

---
title: 'There''s Rust in my browser: part 2'
date: '2014-02-04 12:00:27'
tags:
- programming
- web
---

At [Mozilla Research](https://www.mozilla.org/en-US/research/), two research projects are underway – probably two of the most important things going on with the Web today. These projects are Rust and Servo. In part two of this series, I’m going to be talking about Servo.

A browser engine is very unusual first choice of application to build using a brand new language. No one wants to build browser engines. They’re complex, and have to conform to more standards than any other type of software would ever have to – and all of those standards have to work together seamlessly, dispute not all being designed with each other in mind. Servo presents a very unique opportunity to start the browser engine from scratch and doing it safely – designing it in ways that the developers of Trident, Gecko, WebKit and Blink could only dream of.

The greatest problem with browser engines today is that they’re old. Very old. No one wants to make new engines, but we still need them, so we’re stuck with the ones we’ve got. They were first written in a time when computers where sitting on desktops with single-core processors and probably with no GPU. We’ve seen browsers make efforts to use GPU accelerated rendering of Web pages since the release of IE9, but it’s not easy to fully refactor them to take advantage of the capabilities that modern hardware has to offer.

That’s why Servo is so exciting. It’s a clean break. It’s going to be fast, it’s going to use less memory and it’s rarely ever going to leak memory. Also, it’s being developed for Android at the same time as it is for desktop OS’s, so making it lightweight is also a priority.

Mozilla continue to emphasise that Servo is just a research project and that it might never see the light of day. But one-by-one, more and more of their staff are being tasked to the project. Additionally, we’re seeing large companies such as Samsung getting involved. Just a few days ago, [Nick Cameron](http://featherweightmusings.blogspot.co.uk/2014/02/changing-roles.html) – very experienced in the graphics and layout side of the Gecko browser engine – has been moved to work on Rust. So, we can clearly see that Mozilla has a lot of faith in the project.

How can we be sure, though, that a browser engine created using an unstable and constantly changing language will have good code quality and design by the time Rust has its first stable release? As new coding concepts are introduced to the language, old code structures in the codebase may be better served by them. Maybe Servo is just a prototype, and a more stable version would be very different.

One thing we can be certain of, though, is that – with the amount of resources Mozilla are putting into it – it seems almost certain that Servo is going to make a huge difference to the future of Firefox, and it’s pretty exciting to watch.

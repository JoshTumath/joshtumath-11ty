---

title: 'Web browsers, Windows RT and the EU: what it''s really about'
date: '2012-09-11 22:14:43'
tags:
- web
- microsoft
---

As you no doubt already know, Microsoft has had a number of spats with the European Union this past summer. While they sorted out the disappearance of the browser ballot screen on Windows 7 SP1 and Windows 8, a more recent issue still remains. However, this issue is not with Windows 8 as such, but, rather, Microsoft’s newest operating system: the confusingly named Windows RT. While this OS may look the same as Windows 8 on the covers, underneath it actually runs on the ARM processor architecture and therefore cannot run desktop apps.

Recently, Mozilla and Google both raised a complaint to the EU that they won’t be allowed to run their desktop Web browser apps on Windows RT. While perfectly legitimate arguments have been raised for why their complaints are invalid (e.g. the fact that Windows RT is not Windows 8, so it has no market share), there is more to this debate than what most people understand.

I wanted to write this article to help people understand exactly what Mozilla and Google are actually complaining about, because there is one technical aspect of Windows 8 and Windows RT that I have never seen any of the press mention. Windows 8 has two types of apps, right? The new Windows Store apps based on the WinRT APIs and desktop apps based on the Win32 APIs? Wrong! There is a third type app, and this is one that Microsoft don’t want to mention much because most developers won’t be able to make this type of app anyway. It’s called a “New experience enabled desktop browser” (which is clearly the most long-winded and unimaginative name for an app-type ever).


## New experience enabled desktop browsers

Now before I go into detail on what a “new experience enabled desktop browser” is, let’s be clear on something: *Mozilla and Google are not interested in putting the desktop version of their apps on Windows RT.* All they want is to be able to let users install the Windows Store app versions of Firefox and Chrome on Windows RT.

I remember when the Windows 8 Developer Preview was first announced at Build 2011. Now, being a not-for-profit, Mozilla like to do their software development out in the open, so I was able to watch as the Moz Devs looked all over the new app platform to see how they could get Firefox to work on it. They showed excitement at the possibility of re-writing parts of Firefox in the new WinRT APIs. But during their research, they realised that the WinRT APIs had certain limitations that prevented them from putting Firefox on Windows 8. They couldn’t use things like JIT compilation, which is basically something they use to make Web pages with heavy use of JavaScript run faster. They also couldn’t have multiple background processes running inside one app. Loads of limitations like these kept cropping up during their research, despite the fact that the old APIs for making desktop apps — the Win32 APIs — allowed them to do this.

But then, that raised a question: Why is it that Internet Explorer 10’s Windows Store app is able to do these things and yet the Moz Devs couldn’t? The answer to this question was not revealed until the Windows 8 Consumer Preview was released in January 2012, when Microsoft published a whitepaper called [ Developing a Metro style enabled Desktop Browser ](http://go.microsoft.com/fwlink/?LinkID=243079) (this has since been renamed after a trademark dispute over the use of the word “Metro”). While the document didn’t give every detail, it explained exactly how browser vendors would be able to make a Windows Store app version of their desktop browsers without sacrificing any of the advanced features they had with the old Win32 APIs. It explained that it would work in exactly the same way as IE10: by turning desktop apps into new experience enabled desktop browsers.

So what is a new experience enabled Desktop Browser? It’s basically a hybrid of Windows Store apps and desktop apps. It lets browser vendors use the Win32 API for all of the special features they need, while also letting them use the WinRT APIs for implementing the Microsoft design language UI features like live tiles, the splash screen, the app bar and the Share Charm.

However, there was a catch. The Windows Store app version of a Web browser can only be used if it is set as the default browser. This is why IE10’s live tile becomes an ordinary desktop app tile when you set a different browser as the default browser. But why would Microsoft have this restriction? The reason is simple: new experience enabled desktop browsers have special privileges that no other apps can enjoy. Microsoft can’t let other Windows Store apps pretend that they are new experience enabled desktop browsers just so that they can access these special functions. This would compromise the security of the new development platform and negate the need for an app store in the first place.

New experience enabled desktop browsers also have an important limitation: because they are still desktop apps underneath, they cannot be installed directly from the Windows Store. They must be installed the traditional way.


## What about the EU?

So it’s quite clear that Mozilla and Google have no issue with implementing their browsers on Windows 8; they have just as many capabilities as IE10 has available. But on Windows RT, it’s a different story. The fact is that you will not be able to install Windows Store app versions of Firefox and Chrome on Windows RT. Is this because Microsoft doesn’t want you to install third-party Web browsers on Windows RT, as with Apple and iOS? No. The reason why is because new experience enabled desktop browsers are still part-desktop apps, and Microsoft doesn’t allow any type of desktop app to be installed on Windows RT. While I’m sure they would *want* to allow browser vendors to install new experience enabled desktop browsers on Windows RT in order to get the EU off their backs, the only way they can is by enabling the installation of *any* desktop app, which is clearly not the ideal solution (or rather, not *their* ideal solution).

So if the EU rule that Microsoft *must* allow browser vendors to install new experience enabled desktop browsers on Windows RT, Sinofsky and the gang will be left with a puzzle: How can they allow new experience enabled desktop browsers to be installed on Windows RT without allowing other third-party apps on the desktop?

And that’s what this boils down to. I hope that helped to give you now have a better understanding of what this debate is really about.

_If you’re interested in my opinion, I agree that the EU doesn’t have the right to force Microsoft to allow different browsers to run on Windows RT, because it’s a different operating system that currently has no market share. On the other hand, iOS has a huge market share, yet the EU don’t seem to have a problem with the fact that everyone is limited to using Safari*. That said, I believe everyone should have a choice of Web browsers on *all* of their devices, so I’m not complaining about the anti-trust investigation if it means we could have better browser choice on Windows RT.*Yes, I know that you can install Chrome on iOS, but the Chrome app only has Chrome’s front-end UI. Underneath, the app still uses Safari’s browser engine, WebKit. Chrome on desktops and Android uses a modified version of WebKit with Google’s own JavaScript engine. This is why you don’t see Firefox with the Gecko engine or Opera with its Presto engine on iOS._

**Update 2012-10-24:** Reuters has reported that [ the EU ruled that they will not investigate the lack of support for third-party Web browsers on Windows RT](http://www.reuters.com/article/2012/10/24/us-eu-microsoft-tablet-idUSBRE89N0KS20121024). Sadly, this means it is thusfar unlikely that Microsoft will have any legal reason to allow for the development of new experience enabled desktop browsers on Windows RT.

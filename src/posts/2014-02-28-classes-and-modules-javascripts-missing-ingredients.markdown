---

title: 'Classes and modules: JavaScript''s missing ingredients'
date: '2014-02-28 19:32:03'
tags:
- programming
- web
---

The development of EcmaScript 6 is coming along smoothly. But with so much talk about iterators, generators, more useful variable declarations using `const` and `let`, arrow functions, default parameters and rest parameters (which are  – admittedly – very exciting new features), there’s very little talk on what – I think – will be the most exciting and influential features of ES6: classes and modules.

In reality, JavaScript already has classes… sort of. By its very nature as a “prototype-based” object orientated language, it’s quite easy to create a raw object using the `{ "curley": "bracket" }` syntax. In a dynamically typed language like JavaScript where anything goes, raw objects kind of make sense. But classes are still nice to have to ensure order and consistency between objects.

One surprising feature of JavaScript is that functions can be used as constructors. For example:

```javascript
function Animal(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

var animal = new Animal("Ben", 20, 31);
animal.name = "Jerry";
```

While classes in other languages are fixed and unchanging, in JavaScript, you would create a constructor and then append methods to them later on as prototypes. For example:

```javascript
Animal.prototype.toString = function () {
  return this.name + " " + this.age + " " + this.height;
}
```

Class attributes are defined within the constructor. Because JavaScript is very dynamically typed, object attributes can be created and destroyed on-the-fly, so there’s no need to pre-define every single attribute that will be used in the constructor. This is a very odd concept to those used to strictly typed language, but it’s common practice in JavaScript.

While defining “classes” like this seems OK, programmers who are used to C++-like classes will be disappointed that there is no obvious concept of privacy – no private or public methods. And having methods defined outside of the constructor seems confusing. There’s no overall block combining the separated attributes, constructor and methods. Inheritance is possible, but it’s not obvious how it’s done.

So while classes in a sense are possible in JavaScript, you may have noticed that, in most libraries, they aren’t actually used.


## Enter ES6 classes

Clearly, there’s a need for a nicer (and less error-prone) syntax for defining classes. However, very little has been written about this, so what follows us my understanding on how one of the most unstable parts of the ES6 spec actually works.

Classes are really just a syntactic sugar for constructor functions. There’s nothing in the new classes syntax than what’s already possible. Here’s our Animal example again:

```javascript
class Animal {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  toString() {
    return this.name + " " + this.age + " " + this.height;
  }
}

var animal = new Animal("Ben", 20, 31);
animal.name = "Jerry";
```

Attributes are still defined in the constructor rather than outside it. However, the constructor is now a specially named method within the class, and methods are simply added without a `function` prefix.

Classes make inheritance much easier. Like Java, ES6 uses the `extends` keyword to inherit properties from other classes. Also, there’s a new special method called `super()` for inheriting from the superclass (this was more difficult in the old way).

But we still have the issue that there is no concept of privacy. Privacy is an integral part of classes. Without it, it defeats the whole point of classes, which is abstraction through encapsulation.


## Let’s have a bit of privacy

Classes make the creation of libraries easy. All of the code relating to the class can only be accessed by that class, and an abstraction of APIs allows the class to be used easily. So if there’s no concept of privacy, what’s the point?

There’s a number of ways privacy can be simulated. By convention, private variables are prefixed with an underscore, so you can trust developers using your class not to touch attributes with underscores.

But that doesn’t seem enough.

ES6 doesn’t give a fool-proof solution to privacy. It allows the creation of a new object called `Name`, which would then get applied as a variable key, like so:

```javascript
var private = new Name();

class Animal {
  constructor() {
    this[private].name;
    this[private].age;
    this[private].height;
  }

  toString() {
    return this[private].name + " " + this[private].age + " " + this[private].height;
  }
}

var animal = new Animal();
animal.name = "Jerry"; // ERROR!
```

`Name` doesn’t seem like the best solution to privacy in JavaScript. It doesn’t give runtime-level privacy of variables, and seems more like a hacked together solution to the problem.

Apparently, [we can expect a new keyword for privacy in ES7](http://esdiscuss.org/topic/es6-problem-with-private-name-objects-syntax#content-1), but that means at least a couple-of-years wait before we see that being prototyped in browsers.

So for now, I think trusting developers is the best solution at the moment. Maybe someone will come up with a macro.


## Import “modules”;

In most programming languages, it’s good practice to separate classes into different files. With languages like C++, Java and Python, using different classes is easy.

But JavaScript is different. JavaScript is a language that was created in the days of the browser wars when developers wanted to add cheap little effects to their Web sites. 18 years later, we are now running the Unreal Engine (the massive game engine that runs games like Bioshock and Mass Effect) in pure JavaScript with the WebGL API. That’s quite a big jump for a language designed for very small scripts in Web pages.

As a result, JavaScript has changed a lot. But one problem it still suffers from is that it runs on the Web. JavaScript scripts can’t link to other scripts. If you wanted to split you classes into multiple files, you would need to link to every single file in every single HTML document where you’d like to use them. That’s not ideal.

And so we now have modules! Let’s see how this is done in our Animal.js file.

```javascript
export class Animal {
  constructor() {
    this.name;
    this.age;
    this.height;
  }

  toString() {
    return this.name + " " + this.age + " " + this.height;
  }
}
```

Simply by adding the `export` keyword, the file that contains our class is now a module, and any developer that wants to use our class can simply import it.

Importing is simple too. Let’s say this is our directory structure for our Web site:

- / - index.html
- scripts/ - main.js
- classes/ - Animal.js

Normally, we’d have to add two `script` elements to link to both of these files. However, using modules, there’s just one thing we need to add to the main.js file:

```javascript
import "classes/Animal";

var animal = new Animal();
// do stuff...
```

Modules are named after their relative directory structure, but don’t include a file extension.

There’s so much more capability that modules have, but that’s the basics of how they work. They are a very powerful tool.


## And now we wait

Classes and modules are the only features of ES6 that are not yet experimentally implemented in browsers. It’s still early days before we can start using them.

Once we can, though, Web development is going to become a lot more exciting. Scripts won’t have to be so closely tied to the Web pages that use them. Code will be more shareable, leading to simpler or more abstract libraries. Script files can be split up, so they won’t be so long and unorganised like they used to be.

But as always, while we wait, the Web developer community have provided us with solutions for the interim. Google’s [Traceur](https://github.com/google/traceur-compiler/) can compile ES6 code for classes and modules into more widely supported JavaScript. Microsoft’s [TypeScript](http://www.typescriptlang.org/) offers a similar solution: a new scripting language based off JavaScript but with support for optional static typing.

So let’s get ready for a more class-based encapsulated Web!

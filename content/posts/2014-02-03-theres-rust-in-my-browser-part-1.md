---
title: "There's Rust in my browser: part 1"
date: '2014-02-03'
tags:
  - programming
  - web
---

At [Mozilla Research](https://www.mozilla.org/en-US/research/), two research projects are underway – probably two of the most important things going on with the Web today. These projects are Rust and Servo. In part one of this series, I’m going to be talking about Rust.

Rust is a programming language that’s still under development. It’s at version 0.9, as of writing. You could say it’s a very unique mixture of procedural-ish programming with object-orientation-ish methods and pure functional programming. But, more importantly, it’s designed to be completely memory-safe (i.e. prevents memory leaks by design) and easily concurrent (i.e. multi-processing and multi-threading) – all without having a complex and bulky runtime system _cough_ Java _cough_ running behind-the-scenes.

That’s not to say Rust is basic and bare-bones like C, either. The syntax may be similar, but it’s fundamentally different in many ways.

## Testing the water

Let’s start with a Hello World:

```rust
fn main() {
  let thing = "World";
  println!("Hello {}", thing);
  // Output: Hello World
}
```

We’ve got the typical main function, so it seems OK so far. All functions seem to start with start with “fn” and variables are declared with the keyword “let”, kind of like many other programming languages. But what’s this exclamation mark in the call to `println`?

Firstly, all variables are immutable (i.e. not changeable) by default. The variable types are also inferred (i.e. he compiler guesses the type) by default.

When writing functions in other languages, many local variables that I write don’t actually have their values change, but I don’t normally bother to declare them as immutable. Rust encourages a good practice this way. If a mutable variable is required, the `mut` keyword can be used after `let`.

However, in a language that prioritises “safety”, dynamically typed variables don’t seem to be very safe. Absolutely any value could be passed in and stored, which can especially be a problem when trying to enforce what data can be passed into a function via a parameter. Luckily, Rust comes to the rescue and allows us to declare types for variables too.

```rust
fn main() {
  let mut thing: ~str = "World";
  println!("Hello {}", thing);
  // Output: Hello World

  thing = 123;
  println!("Hello {}", thing);
  // Compiling error: 123 is not a string
}
```

Earlier, I mentioned `println` has an exclamation mark. This means it is actually a macro. These extend the syntax to allow you to do repetitive actions that couldn’t be put in a normal function.

## Getting deeper

I mentioned earlier that Rust is object-orientated, but not exactly. The language has structs (like structs in C) and it has enums (like a combination of enums and unions in C). On the other hand, purely object-orientated languages such as Java have classes, which contain a set of fields (variables) that are local to that class, and a set of methods (functions) that are “attached” to that class. They can also have a relation with other classes through super-classes and interfaces. This means it allows programmers to specify a function that asks for an `Animal` object, and it would accept inheriting classes like `Cat` or `Dog`.

Rust doesn’t have classes. But it does have structs and enums, and something known as traits. Here’s how “object-orientation” works in Rust:

```rust
enum Gender {
  Male,
  Female
}

struct Person {
  name: ~str,
  age: int,
  gender: Gender
}

impl Person {
  fn have_a_birthday(self) {
    self.age++;
  }

  fn new(new_name: ~str, new_age: int, new_gender: Gender) {
    // Creates a new instance of Person and returns it
    Person {
      name: new_name,
      age: new_age,
      gender: new_gender
    }
  }
}

fn main() {
  let john = Person::new("John", 18, Gender::Male);

  println!("This person is {} years old", john.age);
  // Output: This person is 18 years old

  john.have_a_birthday();
  println!("This person is {} years old", john.age);
  // Output: This person is 19 years old
}
```

In a sense, classes in languages like C++ and Java really are just structs with functions attached to them. In the above example, the `impl` keyword (meaning “implement”) associates functions to the `Person` struct in the same way that the keyword `prototype` can associate functions to objects in JavaScript. However, unlike in JavaScript, you can use `impl` with pretty much anything. Even raw data types.

Traits extend this even more. They’re similar to interfaces and abstract classes in C++-like languages. They allow specifying what functions should appear in an `impl`, and – optionally – what code they should run.

Typical for loops do not exist in Rust for safety reasons. Normally, for loops are used to increment an integer each cycle and then stop after reaching a certain value. However, Rust _does_ have what other languages would call “for each” loops. These are much easier to use. You can simulate a typical C-like loop like so:

```c
// ANSI C
void my_loop() {
  int i;

  for (i = 0; i < 10; i++) {
    // ...
  }
}
```

```rust
// Rust
fn my_loop() {
  for i in range(0, 9) {
    // ...
  }
}
```

`range()` is a function in the standard library that creates an iterator through the values you specify. In this case: 0 to 9. It fills in for most of the use-cases of a typical C-like for loop, and is much easier to understand.

The language also has an optional garbage collector, and – by optional – I mean you can choose which functions use it (but you’re probably better off without it).

## Rust is hard

I won’t shy away from the fact that I don’t understand much about how Rust works. It’s a difficult language. Even [rust-lang.org](http://rust-lang.org)‘s FAQ admits it doesn’t have a good user experience. At first glance, you might think “Great! A new language that stops me from creating memory leaks and uses simple functions and dynamic typing. It’s just like JavaScript.” But it’s resemblance to JavaScript stops right there!

As Rust is still under development, nothing in it is finalised, so there aren’t many guides for the language. This makes it difficult when to use different features of the language. When is it appropriate to use methods instead of functions? Should we be trying to use a combination of both? There are so many different methodologies to Rust to what C and C++-like programmers are used to, so it’s unclear what are the most appropriate features to use for each situation.

One thing I didn’t particularly like about C was the reliance on abbreviations for identifier names in the standard library. Abbreviated or ambiguously named identifiers make code less self-documenting, and it’s not nice having to search through documentation to understand what something does. Rust follows a similar patten. For example, “fmt” supposedly stands for “format”. But Rust isn’t as bad in that regard.

No matter how difficult Rust is, though, it’s probably the most important and most exciting new language of the decade. What I’ve mentioned about it is just a brief look at how it works and what it can do. Rust may not be the most intuitive language, but it’s got an exciting future ahead of it, and a lot more revisions to go through before it reaches 1.0.

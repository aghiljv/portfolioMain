---
title: "Design Patterns - Why and How?"
description: "A brief explanation of the need and use of design patterns."
date: 2020-09-07
image: /assets/images/blog/070920/dpTitle.jpg
minRead: 5
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

Design patterns are bound to pop up in the horizon of most software engineers
sooner or later. Undoubtedly on of the most powerful weapon in one’s arsenal
if used correctly.

Now, a design pattern is not a piece of reusable code or library that you can
incorporate in your software. It is more like a way of thinking about a
problem and coming up with a good strategy of execution to solve the same.

Obviously, they didn’t just pop out of somewhere overnight. They are the
result of lessons learned, years of experience, learning from mistakes as well
as sharing those experiences with other engineers.

In short, design patterns try to solve the issues that come along with change.

## Ever Changing Software

![change](/assets/images/blog/070920/change.jpg)

Version 1.0 is just an incomplete software. Every good software that stood the
trial of time has undergone constant evolution. Google and Apple just didn’t
release Android and iOS respectively stood back. Both Operating Systems went
constant upgrades and are at stable versions of version 10 and 13 right now
and they are still evolving.

All this just doesn’t happen by magic. They were required careful analysis,
planning and changes in the source code.

Changing any source can result in make rise to a number of problems. It is
common knowledge that when you make changes to your source code to accommodate
new features, it might result in unwelcome breakage at someplace else. The
technical explanation for this is, the code is tightly coupled in the
object-oriented programming.

In object-oriented programming, application is broken down into tiny pieces
called classes which are responsible for taking care of certain functionality
of the software. One class could be handling logging while another is taking
care of database management.

By breaking it down like this, the engineer avoids creating a giant monolithic
application. The resulting application and its components will be easier to
understand to not only the engineer/s who creates this, but also the engineers
who then later inherit the responsibility of maintaining the same. It also
helps understand how the components interact with each other.

But object-oriented programming does have its perils. Chief among them being –
tight coupling. As mentioned before, classes will interact with each other to
make the software work. Classes cannot exist as independent and self-isolated
in object-oriented programming.

Since one class may need to depend on the services and functionality of one or
more other classes, changing the definition or functionality could cause
unwanted rippling effect on the classes that depend on them and that is called
tight coupling.

This is where the knowledge of design patterns comes in handy. An engineer
could analyze the problem and then implement appropriate design pattern/s.
When implemented appropriately, this will make the code easier to modify. A
code that is easier to change is easy to maintain as well.

But the design patterns have also opened doors for new problems as well.
Caused by the abuse of the same. They are called Anti-patterns.

** Anti-Patterns** \*\*

Throughout the brief history of software design and development, every new
programming language, every methodology was always thought by most to be the
ultimate solution. But as time goes on, every engineer would realize that
there has never been an ultimate solution or an “ultimate silver bullet
solution”.

As in most, one thing that constant for software engineering is also change.
There will always be newer technology stacks, new programming languages and
new software design methodologies. Agile and Scrum are relatively new to the
game, but one day they too shall be replaced by something else. Something
better.

But we can safely say that there is but one golden and universal design
pattern – KISS (Keep It Simple, Stupid).

## KISS (Keep It Simple, Stupid)

![kiss](/assets/images/blog/070920/kiss.jpg)

Every new line of code that we write is a new potential thing which can go
wrong. So, logically, the less we write, the time and effort we need to spend
fixing, maintaining or refactoring it will also be less. Any code you write
should be simple, easy to read by other engineers and easy to change, which is
easier said than done.

But we might be inspired to do it always right if we think like the following.

### Always code as if the guy who ends up maintain your code will be a violent psychopath who knows where you live.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.

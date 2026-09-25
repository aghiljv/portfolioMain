---
title: "Processes for Better Software Volume 3"
description: "Best practices for software engineers."
date: 2020-11-01
image: /assets/images/blog/021120/title.webp
minRead: 4
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.webp
    alt: Aghil Jose
---

There are many ways to write code to do something. But only when we do follow
certain ways, does the code remains maintainable and thus usable for a long
time to come.

## 1. Limit method/function arguments.
It is always a better practice to limit our arguments/parameters to 3 or less.
This improves the readability and in extension, maintainability. If it is
crossing a number, then it is time to refactor the code. As an example, if we
can accommodate multiple arguments into an object, in a meaningful way, then
we can effectively decrease the number of arguments passed, while still
retaining the same result.

## 2. Simplify conditional expressions.
We all need to use conditional expressions in our codes. The trick is
simplifying it in a way that it remains readable. The following two methods
takes in same argument and gives same output, only the function on the second
one does it in a much simpler way.

Method 1:

function isPersonAdult(person) {

if (person.age >= 18) {

return true;

} else {

return false;

}

}

Method 2:

function isPersonAdult(person) {

return person.age >=18;

}

## 3. Declare variables near to their usage.
Some of us (including myself), usually have a tendency to declare all the
variables at one place. Usually at the top. Even if the variables are
following good naming conventions such that one look will give you the idea
what it is used for, it is still a better way and a good practice to declare
it near to where it is being used. One adverse effect of declaring all
variables in one place is we might scroll up and down a lot while trying to
understand the variable and it is highly likely to get distracted during that
process. We might be in the middle of creating a feature or fixing a bug and
it is always better to finish the job at hand before jumping into another.

## 4. Avoid unintended consequences in your function.
If you are creating a function with a name associated with its job, then that
particular function should do just that. Nothing more, nothing less. Again, in
the long run this makes the code more maintainable. For example,

function addNumbers(numberOne, numberTwo){

emailService.send(“Addition is done.”);

return numberOne + numberTwo;

}

Usually, there is no need for the line “emailService.send(“Addition is
done.”);” inside this function. Either change the name of the function
accordingly or just remove the line to make a more sensible, readable and
maintainable function.

## 5. Avoid zombie code.
This is simply dead code but with a chance to come alive. In layman’s terms,
zombie code is usually commented code, kept by engineers, who cannot decide
whether it should be deleted or not because there might be a slight chance
that they might have to use it at some point in the future. This again will
most probably distract any other engineer who comes into maintain the code.
They will not be sure whether to keep it not, mainly because they do not know
why it was created in the first place and will spend a lot of time on the
same. One thing for sure is we must never put this inside a production code.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.


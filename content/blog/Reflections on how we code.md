---
title: "Reflections on how we code"
description: "What are some of the factors that help the way we evolve as an engineer."
date: 2020-10-04
image: /assets/images/blog/051020/title.jpg
minRead: 5
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

It is no secret that different engineers or team of engineers have different
standards for what they consider as quality in code. Sometimes, some engineers
consider something as the way to do it. But that opinion might not be shared
by many others.

Now, there are a lot of things I mean from them like paradigms, how we
separate concerns or even whether using nested ternaries is good or bad. Not
just the use of semicolons, tabs vs. spaces or formatting. Most of these
preferences and ideals are influenced by our environments, technologies we use
and coworkers.

### Coworkers

![coworkers](/assets/images/blog/051020/coworkers.jpg)

In our careers, almost all of us will encounter people from many spectrums.
There will be people who are extremely motivated and passionate about what
they are building. Also, there are people who are just the opposite. Yes, it
is not just black and white, there is a lot of grey in between.

No engineer can’t do it all by themselves. There might be someone who reads
this and having a smirk saying, I am a team of one or I code this many hours a
day, I turned my startup to unicorn all by myself. But you still might have
used open source frameworks or might have stumbled upon a problem and had
help. Point is, you have had help from other human beings. (Oh, if you have
done it without any of these. Respect!)

The people we work with, greatly influences the way we code. Certain
engineers, as all humans do, will have predilections. For example, whoever
started building the product might have loved a certain framework and would
have refused to let it go even though its time has come and gone long ago. Or
they didn’t like seeing style.css files in your project and done all the
styling with inline CSS. Now, you might have to follow through as this may be
the available option.

But it goes beyond that. Even the choices of people working on the product
from another team will also mold your code. If you are a front-end engineer,
you will probably need some data. Those data will be usually from the back-end
engineers. They are going to tell you, how and when you are going to get it
and in which format. So, this will influence how you write your interactions
with the API and your data layer, if you might.

Also, if you are working with people who are significantly smarter, with more
experience and cares about us and our code getting better, you will find
yourself writing better code through time.

### Environmental influences

![environment](/assets/images/blog/051020/environment.jpg)

Your priorities are going mainly to be a function of the size of your company
or your team. Consider two teams, one might be weighted under the bureaucracy
of middle or upper management and enterprise release cycles while the other
might be struggling to release a product before they run out of resources.

The matter of urgency also contributes to this. If there isn’t any, you might
not get things done as quickly as you could have. Instead, you might write
more tests or write less future legacy codes. Now the following are how the
size of your team or company could influence your code.

## Small Companies

![small](/assets/images/blog/051020/small.jpg)

You have to get things done. This could mean you writing less unit tests. The
number of people who look and review your code will be less. There might not
even be a manual Quality Assurance before the release. You will have to find a
way to write less brittle code or find an efficient and effective way of
writing automation that delivers what it is supposed to.

You will deal with legacy code more. You might be writing code that might have
to be thrown out completely and start over. Ideally you keep in mind that
every chunk of code has a timeline and you should write it accordingly.

## Big Companies

![big](/assets/images/blog/051020/big.jpg)

Horizontal organisational structures are rare in big companies. This means
there could be someone on your team that will only merge code if it satisfies
their definition of ‘good code’. Now, this could be good or bad.

You are most probably not in a hurry. Your output will be diminished. Your job
usually won’t be on the line because money is usually not an issue in an
established, profitable company.

You will still have to work with legacy code. You might be dealing with
technologies that aren’t well documented or easy to work with. This will add
time to your work and make you slower.

CI/CD will just work if someone senior or more involved has done their job.
You wouldn’t have to spend time with the hassles around the infrastructure.
This could make you faster.

### Good engineers who learns constantly will observe radical changes in the way they write code.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.

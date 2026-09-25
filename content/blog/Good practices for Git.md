---
title: "Good practices for Git"
description: "What are the good practices to make git work in our favor."
date: 2020-10-18
image: /assets/images/blog/191020/title.webp
minRead: 3
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.webp
    alt: Aghil Jose
---

Git has become the most preferred Version Control System (VCS) by software
engineers. It adds great value to engineering teams, where several personnel
work together and is a need for integrating everyone’s code reliably.

Git is a powerful tool. “But with great power, comes great responsibility”. If
we do not follow certain conventions, it could end up as a bite in the back.
So, here are some best practices for Git.

## 1. Make clean, single-purpose commits.
There is a great chance for engineers to get sidetracked and do something else
when they are working on something. For example, you might be fixing a bug.
Then you find another bug. You probably cannot resist the urge to fix that as
well, and another and another. Soon, you will end up with so many changes
going in one commit.

Commits are better kept small and focused as possible for many reasons:

- It makes easier for anyone looking at your change, making code reviews more
efficient.

- It is easier to roll back.

- It is straightforward to track these changes with your ticketing system.

## 2. Commit early and often
Git works best and, in our favor, when we commit our work often. It is better
to work in small chunks and keep committing our work rather than to wait for
making the perfect commit. It could help us mitigate conflicts when we are
working on a feature that might take a long time to finish. Git will only take
responsibility for the data we commit. It will help us from losing our work,
reverting changes and help trace what we did when.

## 3. Write meaningful commit messages
This is the simplest of all. Descriptive and insightful commit messages that
concisely describe what changes are being made as part of a commit make life
easier for others as well as for our future self. If you are using a ticketing
system, you should also include the ticket id in the description.

## 4. Don’t commit generated files
The files actually worth committing are the ones that was created with manual
effort and cannot be generated. Usually, the generated files can be
re-generated at will and normally do not work with line-based diff tracking as
well. We always need to make sure to add a .gitignore file in our repositories
to automatically tell git which files or paths we do not want to track.

## 5. Don’t alter published history
Once a commit has been merged to an upstream default branch, it is strongly
advised not to alter history. Git and other VCS tools do allow to rewrite
branch history, but doing so is problematic for everyone who has access to the
repository. git-rebase is a useful feature. But it should only be used on
branches that only one person is working with. Nevertheless, there would
inevitably be some situations where there is a need for a history rewrite on a
published branch. But do it with extreme care.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.


---
title: "How do browsers work"
description: "How does a typical browser loads and displays a webpage."
date: 2020-10-11
image: /assets/images/blog/121020/title.jpg
minRead: 4
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

Without the modern browsers, the internet will be pretty much a boring place.
You just enter an address and the browser will take care of everything. Ever
wondered what is going on behind the scene?

**Here is a high-level view of what happens.

## 1. Resource Gathering.
**![domTree](/assets/images/blog/121020/domTree.jpg)

When you provide an address to the browser, provided you have the access
rights to the said address, the browser will start resource gathering. The
resources will include everything from HTML, CSS, JS, images, etc. Simply put,
the browser will gather everything that needs to be displayed.

## 2. Parse HTML and create DOM tree.
**![layout](/assets/images/blog/121020/layout.jpg)

As you know, HTML works in the DOM (Document Object Model). As you can see in
the image above, there is a root html element. Then, head and body. Then there
are more and more nested tags inside both and it goes on and on. The browser
will create this DOM from the html resource that was gathered in step 1. DOM
is regulated by W3 and well documented. Even if the one(s) who wrote the code
for got to close some tags, the browser will still go ahead with rectifying
those small mistakes and displaying the page.

## 3. Create Render Tree from DOM tree.
**![painting](/assets/images/blog/121020/painting.jpg)

In this step, the browser applies styles to the objects in the DOM tree and
creates a render tree. The CSS files gathered will be made use of to do this
action. The CSS file(s) will contain the styling for all the elements in the
DOM tree. One major difference between the DOM tree and render tree would be,
the render tree would only contain the elements that are to be displayed in
the browser. So, if a DOM object has its styling as “display:none;”, it will
not be present in the render tree.

## 4. Layout.
**![renderTree](/assets/images/blog/121020/renderTree.jpg)

All the HTML elements can be considered as boxes. The CSS box model is
essentially a box that wraps around every HTML element consisting of margins,
borders, padding and the actual content. All of these will be applied to the
elements in the previous step. But even after that, the browser needs to
“size” and “position” these elements. In this step the browser does that and
forces the DOM and render tree to be rebuilt.

## 5. Painting.
![resources](/assets/images/blog/121020/resources.jpg)

Now, the browser knows which elements are to be displayed and their computed
styles and geometry. In this final step, this information is then converted to
actual pixels on the screen with the help of the operating system and graphics
engine of the device. The z-coordinate or z-index in CSS terms are also
finalized in this step. The previous step will determine the position I the
x-y plane. This step is also called rasterization.

These are just the steps involved in loading and showing the page for the
first time. These steps are undergone every time you load a new page. There is
obviously a lot more. The JS files are responsible for adding interactivity
and behavior to the page.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.


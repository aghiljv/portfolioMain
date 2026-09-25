---
title: "Computer Vision"
description: "How does a computer see the world"
date: 2020-11-29
image: /assets/images/blog/301120/title.jpg
minRead: 7
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

Human vision is amazingly beautiful and complex. It all started billions of
years ago when small organisms developed a mutation that made them sensitive
to light.

Fast forward to today, and there is an abundance of life on the planet which
all have very similar visual systems. They include eyes for capturing light,
receptors in the brain for accessing it, and a visual cortex for processing
it. Genetically engineered and balanced pieces of a system which help us do
things as simple as appreciating a sunrise.

But this is really just the beginning. In the past 30 years, we've made even
more strides to extending this amazing visual ability, not just to ourselves,
but to machines as well. The first type of photographic camera was invented
around 1816 where a small box held a piece of paper coated with silver
chloride. When the shutter was open, the silver chloride would darken where it
was exposed to light. Now, 200 years later, we have much more advanced
versions of the system that can capture photos right into digital form. So,
we've been able to closely mimic how the human eye can capture light and
colour. But it's turning out that that was the easy part. Understanding what's
in the photo is much more difficult.

Consider this picture.

![flower](/assets/images/blog/301120/flower.jpg)

A human brain can look at it and immediately know that it's a flower. Our
brains are cheating since we've got a couple million years worth of
evolutionary context to help immediately understand what this is.

But a computer doesn't have that same advantage. To an algorithm, the image
looks like this.

![flowerComputer](/assets/images/blog/301120/flowerComputer.jpg)

Just a massive array of integer values which represent intensities across the
colour spectrum. There's no context here, just a massive pile of data.

It turns out that the context is the crux of getting algorithms to understand
image content in the same way that the human brain does. And to make this
work, we use an algorithm very similar to how the human brain operates using
machine learning.

Machine learning allows us to effectively train the context for a data set so
that an algorithm can understand what all those numbers in a specific
organization actually represent. And what if we have images that are difficult
for a human to classify? Can machine learning achieve better accuracy?

Computer vision is taking on increasingly complex challenges and is seeing
accuracy that rivals humans performing the same image recognition tasks. But
like humans, these models aren't perfect. They do sometimes make mistakes.

The specific type of neural network that accomplishes this is called a
convolutional neural network or CNN. CNNs work by breaking an image down into
smaller groups of pixels called a filter. Each filter is a matrix of pixels,
and the network does a series of calculations on these pixels comparing them
against pixels in a specific pattern the network is looking for.

In the first layer of a CNN, it is able to detect high-level patterns like
rough edges and curves. As the network performs more convolutions, it can
begin to identify specific objects like faces and animals.

How does a CNN know what to look for and if its prediction is accurate? This
is done through a large amount of labelled training data. When the CNN starts,
all of the filter values are randomized. As a result, its initial predictions
make little sense. Each time the CNN makes a prediction against labelled data,
it uses an error function to compare how close its prediction was to the
image's actual label. Based on this error or loss function, the CNN updates
its filter values and starts the process again. Ideally, each iteration
performs with slightly more accuracy.

What if instead of analysing a single image, we want to analyse a video using
machine learning? At its core, a video is just a series of image frames. To
analyse a video, we can build on our CNN for image analysis. In still images,
we can use CNNs to identify features. But when we move to video, things get
more difficult since the items we're identifying might change over time. Or,
more likely, there's context between the video frames that's highly important
to labelling.

For example, if there's a picture of a half full cardboard box, we might want
to label it packing a box or unpacking a box depending on the frames before
and after it. This is where CNNs come up lacking. They can only take into
account spatial features, the visual data in an image, but can't handle
temporal or time features - how a frame is related to the one before it.

To address this issue, we have to take the output of our CNN and feed it into
another model which can handle the temporal nature of our videos. This type of
model is called a recurrent neural network or RNN. While a CNN treats groups
of pixels independently, an RNN can retain information about what it's already
processed and use that in its decision making. RNNs can handle many types of
input and output data.

For example, we train the RNN by passing it a sequence of frame descriptions -
empty box, open box, closing box - and finally, a label - packing.

![RNN](/assets/images/blog/301120/RNN.jpg)

As the RNN processes each sequence, it uses a loss or error function to
compare its predicted output with the correct label. Then it adjusts the
weights and processes the sequence again until it achieves a higher accuracy.

![wolf](/assets/images/blog/301120/wolf.jpg)

The challenge of these approaches to image and video models, however, is that
the amount of data we need to truly mimic human vision is incredibly large. If
we train our model to recognize a picture of a wolf, as long as we're given
this one picture with the same lighting, colour, angle, and shape, we can see
that it's a wolf. But if you change any of that or even just rotate the wolf,
the algorithm might not understand what it is anymore.

Now, this is the big picture problem. To get an algorithm to truly understand
and recognize image content the way the human brain does, you need to feed it
incredibly large amounts of data of millions of objects across thousands of
angles all annotated and properly defined.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.


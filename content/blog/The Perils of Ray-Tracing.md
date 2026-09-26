---
title: "The Perils of Ray-Tracing"
description: "There are certain perils for ray tracing among most of the advances it provides."
date: 2020-08-17
image: /assets/images/blog/170820/rtPerilsTitle.jpg
minRead: 7
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

Ray tracing is arguably the most significant change to the real-time graphics
pipeline in the last decade. It gives developers new tools in the box of
tricks they use to carefully persuade today’s GPUs to draw immersive,
realistic, high-quality scenes at high performance.

Within the last couple of years, products have hit the high-end PC market that
support Microsoft’s DirectX Ray Tracing (DXR) specification. A number of
high-profile games that use DXR showcase the potential of the technology.

The great folks at Khronos have also recently released their view of ray
tracing as it applies to Vulkan. The resulting API will feel familiar to
students of DXR, giving developers another ray-tracing API to target and a
means to expand over time to platforms that aren't Windows.

However, at the time of writing, all of the public implementations come from a
single vendor, Nvidia. Consequently, developers have a rather narrow view of
what makes an accelerated ray-tracing implementation based on DXR or Vulkan
ray tracing tick.

That's no fault of Nvidia, the graphics giant taking advantage of their
ability to strong arm their view of ray tracing into DirectX and therefore
robustly influence the resulting capabilities in Vulkan. Any other vendor in
Nvidia's position would do the same, and the company's ability to productize
the output of its incredible research team is second to none.

However, if that's how a new graphics capability comes into being, driven
almost completely by a single vendor in the beginning, resulting in a narrow
spectrum of implementations with limited market share, developers need to be
careful as that landscape of implementations broadens over time.

**Multiple Design Paths** \*\*

That's especially true when it comes to a largely black box feature like ray
tracing. What do we mean by black box? For any given hardware and software
specification in the semiconductor world, and that isn't limited to GPUs,
there's a huge design space you can explore to implement it.

There's no one way to build a CPU for example, leading to a wide range of
practical instruction set architectures (ISAs) that can all run roughly the
same software. GPUs enjoy an even wider range of potential implementations
from different vendors because there's no standard ISA from which the industry
designs its implementations.

GPU vendors take advantage of that to innovate more rapidly under the hood
compared to CPUs. That’s because the combination of hardware and software at
work can more readily hide what's under the hood doing the work at the silicon
level.

So, when Nvidia proposed what became DXR to Microsoft, when specifying the
programming model and API that developers need to target to perform ray
tracing in their renderer, they left certain parts of it almost completely
undefined.

That lack of guidance in parts of the specification is completely on purpose.
Why? It allows the underlying implementation of that bit of the specification
to be entirely specific to a given GPU and its driver. In fact, parts of DXR
and Vulkan ray tracing don't even need to run on the GPU at all!

And therein lies the rub: because of that, unlike almost every other feature
ever added to the real-time graphics pipeline in GPU history, ray tracing will
be very difficult for developers to target in a uniform way.

That's further complicated by the fact that ray tracing is also bifurcating
from the developer's point of view, too, with a simpler model having emerged
from the full ray pipelines first specified. This allows for easier
implementation of some specific effects, particularly ray-traced shadows.

## Advice for Developers

So, with two ray-tracing programming models for developers to target and still
only one generation of shipping accelerators to try it out on, and with key
parts of DXR and Vulkan ray tracing specified as completely
implementation-dependent, what should developers be aware of as things develop
in the ray-tracing acceleration space?

As a company developing ray-tracing acceleration for its future GPUs, where
our solution will have microarchitectural performance characteristics that are
necessarily different—and better by far, we hope—to those implementations from
other vendors, we have some simple advice.

First, avoid any marketing claims about ray-tracing performance since there's
no standard way to describe it. The black box nature of the ray-tracing
specifications makes it almost impossible to do so anyway. Let's pick on one
of the most impressive GPUs ever made to push home the point: Nvidia's TU102
in GeForce RTX 2080 Ti form. It's a competing product so I shouldn't really
say this, but woof, it's one heck of a GPU.

Nvidia says there's a peak ray flow of 10 Grays/sec in that product, which is
an incredibly impressive headline number. Sadly, though, it doesn't actually
say anything concrete that you can understand as a consumer, developer, or
anyone else interested in the technology and how it works.

Does it only measure miss-only rate with empty rays, or is it measuring
real-world usable ray flow on rays with a proper payload? It's a marketing
number, so it's definitely a lot closer to the former than the latter,
unfortunately. It also doesn't tell you anything about the location of the
performance cliffs. Nor does it tell you how ray-tracing throughput degrades
with complexity of ray, hierarchy, or any of the other moving parts of the
ray-tracing system, and how it's all integrated with the rest of the rendering
workload.

As a result, you're left with testing and measuring as your only realistic way
to determine what's possible with a given level of ray-tracing performance in
a GPU. That’s because Nvidia's 10 Grays/sec won't mean the same thing as the
same number quoted by Imagination, or any of the other vendors that will try
their hand at useful DXR or Vulkan ray-tracing acceleration for that matter.
It won't even mean the same thing generationally for Nvidia!

Lastly, does that mean the graphics market now has a need for public software
that tests meaningful peak microarchitectural ray flow to expose
implementation-specific details, along with some measures of real-world
performance in idiomatic game-like settings? Absolutely, and we'd love to talk
to anyone who wants to tackle that problem, since it's a big missing piece of
the puzzle.

### Real-time graphics has entered a new era with the advent of ray tracing, which delivers more realistic scenes than ever before. But all current implementations centre around one vendor—and that raises issues, especially when the competitive field expands.

Disclaimer : The views and opinions expressed in the article belong solely to the
author, and not necessarily to the author's employer, organisation, committee
or other group or individual.

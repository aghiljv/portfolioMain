---
title: "Shaders"
description: "Why do we need shaders and what types of shaders are out there."
date: 2021-02-07
image: /assets/images/blog/080221/title.jpg
minRead: 4
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

A shader is a program used to render different pixels. Shaders are used when
detailing shadows, lighting, texture gradients and more. However, they can do
a lot more than just their namesake. You can often see shaders being packaged
as mods for games, transforming the dull, pixelated games into stunning,
sun-soaked landscapes.

Shader is a set of instructions that runs on the GPU (Graphics Processing
Unit). GPU is a processing unit or a circuit, specially designed for faster
and efficient computer graphics operation or image manipulation.

Shaders are categorised based on their functionality.

## Vertex Shader

Vertex shader transforms each vertex's 3D position in virtual space to the 2D
coordinate at which it appears on the screen (as well as a depth value for the
Z-buffer). Vertex shaders can manipulate properties such as position, colour
and texture coordinates, but cannot create new vertices. The output of the
vertex shader goes to the next stage in the pipeline, which is either a
geometry shader if present, or the rasterizer. Vertex shaders can enable
powerful control over the details of position, movement, lighting, and colour
in any scene involving 3D models.

## Pixel Shader

Pixel shaders, also known as fragment shaders, compute colour and other
attributes of each "fragment"- a unit of rendering work affecting at most a
single output pixel. The simplest kinds of pixel shaders output one screen
pixel as a colour value. More complex shaders with multiple inputs/outputs are
also possible. Pixel shaders range from simply always outputting the same
colour, to applying a lighting value, to doing bump mapping, shadows, specular
highlights, translucency and other phenomena.

## Tessellation Shader

As of OpenGL 4.0 and Direct3D 11, a new shader class called a tessellation
shader has been added. It adds two new shader stages to the traditional model-
tessellation control shaders (also known as hull shaders) and tessellation
evaluation shaders (also known as Domain Shaders), which together allow for
simpler meshes to be subdivided into finer meshes at run-time according to a
mathematical function. The function can be related to a variety of variables,
most notably the distance from the viewing camera to allow active
level-of-detail scaling. This allows objects close to the camera to have fine
detail, while further away ones can have coarser meshes, yet seem comparable
in quality. It also can drastically reduce required mesh bandwidth by allowing
meshes to be refined once inside the shader units instead of down-sampling
very complex ones from memory.

## Geometry Shader

The geometry shader is responsible for the creation of new rendering
primitives parting from the output of the vertex shader. A geometry shader is
executed once per primitive, which is, in the worst case (when it is used to
emit point primitives), the same as the vertex shader. The best-case scenario
is when it is used to emit triangles, because only then will it be executed
three times less than the vertex shader, but this complexity is relative.
Although the geometry shader's execution could be cheap, it always increases
the scene's complexity, and that always translates into more computational
time spent by the GPU to render the scene.

## Compute Shader

The compute shader is a general-purpose shader that is used outside of a
rendering pipeline. That means they are not used to draw a primitive or to
shade a pixel. They are used for using GPUs parallel processing capability for
general-purpose tasks. Additional stages in animation or lighting algorithms
can be examples of compute shaders.

### Shaders transform dull and dreary environments that may have lacked a cohesive look to staggeringly beautiful works of art.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.

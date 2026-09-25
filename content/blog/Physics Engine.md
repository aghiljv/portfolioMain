---
title: "Physics Engine"
description: "How do physics engines help create a better experience for games and simulations."
date: 2021-02-12
image: /assets/images/blog/150221/title.jpg
minRead: 4
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

A physics engine describes a software program that is used to simulate
physical phenomena. The first physics engines were used in military
simulations, predicting where artillery shells would land. These engines
factored in the shells' weights, forces and trajectories to simulate the
result. Since then, they have also been employed in the design of aircraft,
watercraft and land vehicles.

There are generally two types of physics engines.

## High-precision physics engines
High-precision physics engines require more processing power to calculate very
precise physics and are usually used by scientists and computer animated
movies.

## Real-time physics engines
Real-time physics engines are used in video games and other forms of
interactive computing. They use simplified calculations and decreased accuracy
to compute in time for the game to respond at an appropriate rate for game
play.

In most computer games, speed of the processors and gameplay are more
important than accuracy of simulation. This leads to designs for physics
engines that produce results in real-time but that replicate real world
physics only for simple cases and typically with some approximation. More
often than not, the simulation is geared towards providing a "perceptually
correct" approximation rather than a real simulation.

Physically-based character animation in the past only used rigid body dynamics
because they are faster and easier to calculate, but modern games and movies
are starting to use soft body physics. Soft body physics are also used for
particle effects, liquids and cloth. Some form of limited fluid dynamics
simulation is sometimes provided to simulate water and other liquids as well
as the flow of fire and explosions through the air.

Some applications of game physics engine are the following.

## Collision detection
Most objects in games are represented by two separate meshes or shapes. One of
these meshes is the highly complex and detailed shape visible to the player in
the game, such as a vase. For purpose of speed, a second, simplified invisible
mesh is used to represent the object to the physics engine so that the physics
engine treats the example vase as a simple cylinder. The simplified mesh used
for physics processing is often referred to as the collision geometry. This
may be a bounding box, sphere or convex hull. Engines that use bounding boxes
or bounding spheres as the final shape for collision detection are considered
extremely simple.

## Brownian motion
In the real world, there is a constant Brownian motion jitter to all particles
in our universe as the forces push back and forth against each other. For a
game physics engine, such constant active precision is unnecessarily wasting
the limited CPU power, which can cause problems such as decreased framerate.
Thus, games may put objects to "sleep" by disabling the computation of physics
on objects that have not moved a particular distance within a certain amount
of time. The object will remain frozen until physics processing reactivates
for the object after collision occurs with some other active physical object.

## Game physics engines enhance the player's enjoyment by simulating the
complex physical characteristics of a virtual world while scientific physics
engines use an approximation of real-world physics to quickly simulate complex
world interactions.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.


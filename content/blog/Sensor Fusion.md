---
title: "Sensor Fusion"
description: "The method and advantages of using multiple sensors together."
date: 2021-03-21
image: /assets/images/blog/220321/title.webp
minRead: 4
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.webp
    alt: Aghil Jose
---

Sensor fusion is combining of sensory data or data derived from disparate
sources such that the resulting information has less uncertainty than would be
possible when these sources were used individually. The resulting model is
more accurate because it balances the strengths of the different sensors.
Systems can then use the information provided through sensor fusion to support
more-intelligent actions.

The data sources for a fusion process are not specified to originate from
identical sensors. One can distinguish direct fusion, indirect fusion and
fusion of the outputs of the former two.

## Direct fusion
Direct fusion is the fusion of sensor data from a set of heterogeneous or
homogeneous sensors, soft sensors and history values of sensor data.

## Indirect fusion
Indirect fusion uses information sources like “a priori” knowledge about the
environment and human input.

Each sensor type has inherent strengths and weaknesses. Radars are very strong
at accurately determining distance and speed - even in challenging weather
conditions - but cannot read street signs or distinguish the colour of a
stoplight. Cameras do very well reading signs or classifying objects, such as
pedestrians, bicyclists or other vehicles. However, they can easily be blinded
by dirt, sun, rain, snow or darkness. LiDARs can accurately detect objects,
but they do not have the range or affordability of cameras or radar.

Sensor fusion brings the data from each of these sensor types together, using
software algorithms to provide the most comprehensive and therefore accurate,
environmental model possible. It can also correlate data pulled from inside
the cabin, through a process known as interior and exterior sensor fusion.

A vehicle could use sensor fusion to fuse information from multiple sensors of
the same type as well - for instance, radar. This improves perception by
taking advantage of partially overlapping fields of view. As multiple radars
observe the environment around a vehicle, more than one sensor will detect
objects at the same time. Interpreted through perception software, detections
from those multiple sensors can be overlapped or fused, increasing the
detection probability and reliability of objects around the vehicle and
yielding a more accurate and reliable representation of the environment.

It goes without saying, the more sensors on a vehicle, the more challenging
fusion becomes, but also the more opportunity exists to improve performance.
The process can be done more efficiently while making use of a centralised
domain controller. Some of the benefits include:

## 1. Reduced sensor sizes
Not so long ago, the processing power to analyse sensor data to determine and
track objects has been packaged with the cameras or radars. With a centralised
domain controller present, sensor data can be collected from each sensor and
fused within, which will result in reduced sensor sizes as the sensors now
does not need to process the information that they collect.

## 2. Increased data sharing
With traditional systems, smart sensors process environmental inputs
independently, which means any decisions made when using the information are
only as good as what that individual sensor can see. Now, all the data coming
from the sensors is shared centrally, there is more opportunity for active
safety applications in the domain controller to make use of it. By applying
Artificial Intelligence (AI) tools, useful information could be extracted that
would otherwise be discarded.

## 3. Reduced Latency
The domain controller does not have to wait for the sensor to process data
before acting upon it. This could help in increased speed in response and thus
reduced latency. This will be a huge advantage in situations where even a
fraction of a second matters.

## By embracing a vehicle architecture that allows for a high number of sensors
and then synthesizes the data through sensor fusion, vehicles can become
smarter, faster.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.


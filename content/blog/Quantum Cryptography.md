---
title: "Quantum Cryptography"
description: "The need for quantum cryptography at the impending dawn of quantum computing."
date: 2021-02-26
image: /assets/images/blog/010321/title.webp
minRead: 7
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.webp
    alt: Aghil Jose
---

Quantum cryptography, also called quantum encryption, applies principles of
quantum mechanics to encrypt messages in a way that it is never read by anyone
outside of the intended recipient. It takes advantage of quantum’s multiple
states, coupled with its "no change theory", which means it cannot be
unknowingly interrupted.

Performing these tasks requires a quantum computer, which have the immense
computing power to encrypt and decrypt data. A quantum computer could quickly
crack current public-key cryptography.

Companies and governments around the world are in a quantum arms race, the
race to build the first usable quantum computer. The technology promises to
make some kinds of computing problems much easier to solve than with today’s
classical computers.

One of those problems is breaking certain types of encryption, particularly
the methods used in today’s Public Key Infrastructure (PKI), which underlies
practically all of today’s online communications. Instead of solving one
problem at a time, with quantum computing we can solve thousands of problems
at the same processing speed, with the same processing power. Things that
would take hundreds of days today could take just hours on a quantum computer.

The commercial quantum computers available today are still far from being able
to do that. The theories have advanced farther than the hardware. However, we
shouldn’t wait for the hardware to motivate the switch to post-quantum
cryptography.

Longer keys are the first line of defence against quantum encryption and
pretty much everybody is on board with that. Longer keys make encryption
slower and more costly and the key length will have to increase substantially
to stay ahead of quantum computers.

Another option is to use symmetric encryption for the messages themselves,
then use asymmetric encryption just for the keys. This is the idea behind the
Transport Layer Security (TLS) online standard.

Many researchers are also looking at ways to create new kinds of encryption
algorithms that would still allow public and private keys but be proof against
quantum computers. For example, it’s easy to multiply two prime numbers
together but very difficult to break a large number back up into its prime
factors. Quantum computers can do it and there are already known quantum
techniques that could solve the factoring problem and many similar approaches.

However, there’s no known quantum method to crack lattice-based encryption,
which uses cryptographic algorithms built around lattices. Lattice
cryptography is the one that looks to be the favourite at the moment, simply
because it’s the most practical to implement.

The best solution could be a combination of post-quantum algorithms like
lattice-based encryption for the initial communication to securely exchange
keys, then using symmetric encryption for the main messages.

Can we really rely on lattice-based encryption or similar algorithms to be
safe? You can’t guarantee that your post-quantum algorithm will be secure
against a future quantum computer that uses some unknown quantum algorithm.

This is where the laws of quantum physics can come to the rescue. Quantum key
distribution (QKD) is a method of sending encryption keys using some very
peculiar behaviours of subatomic particles that is, in theory at least,
completely unhackable. The land-based version of QKD is a system where photons
are sent one at a time through a fibreoptic line. If anyone is eavesdropping,
then, according to the principles of quantum physics, the polarization of the
photons is affected, and the recipient can tell that the message isn’t secure.

However, the technology is extremely slow and requires expensive equipment to
send and receive the individual photons. A customer would need to buy a
transmitter and a receiver - both very costly as of now. It’s not too terribly
different from other high-speed fibre optics communication equipment and the
price will come down over time as more companies provide the hardware.

The big breakthrough last year was that QKD systems no longer require special
pipes. Now it looks like they’ll be able to use existing fibre networks, so
they don’t have to lay new fibre.

Then there’s the satellite-based approach. This one uses the principle of
entanglement, which Einstein called “spooky action at a distance” and refused
to believe was real. Turns out, it is real and there is a quantum
communication satellite up and working for a couple of years now.

Entanglement isn’t about instantaneous communications that break the speed of
light speed limit. The way that it works is that two particles become
entangled so that they have the same state and then one of these particles is
sent to someone else. When the recipient looks at the particle, it’s
guaranteed to be the same state as its twin.

If one of those particles changes, it doesn’t mean that the other particle
instantly changes to match - it’s not a communication system. Plus, the state
of the two entangled particles, while identical, is also random. So, you can’t
send a message, but you can send an encryption key, because what you really
want in a key is a sequence of random digits.

Now that the sender and the receiver both have the same random key, they can
then use it to send messages using symmetric encryption over traditional
channels. To receive the signals, companies would need to put something that
looks like a telescope on their rooftops and then install some processing
equipment.

Neither ground-based nor satellite-based quantum key distribution is practical
for general use since both require very specialised and expensive equipment.
It could, however, be useful for securing the most critical and sensitive
communications.

If the integrity of the keys can be perfectly guaranteed by QKD, does that
mean that unhackable communications are within our reach?

Most hackers, when they break into things, they hardly go head-on. They go
around the side, and that's where you'll find problems with these
implementations. Today’s attackers, while they could, in theory, listen in to
traffic over fibreoptic lines, typically don’t do that.

There are far easier ways to read the messages, such as getting to the
messages before they are encrypted or after they are decrypted or using
man-in-the-middle attacks.

Additionally, QKD requires the use of relays. Unless the sender and the
recipient build a pipe that goes directly between their two offices, and the
distance is short enough that the messages don’t degrade — about 60 miles or
less with current technology — there will be plenty of opportunities for
hackers. QKD networks will need repeaters when messages travel long distances.
Those repeaters are going to become weak points and someone could hack in and
get the key.

Also, QKD networks will need to be able to route messages, and that means
routers and hubs, each of which is also a potential point of vulnerability.
Physicists can say, this is absolutely secure, but there’s a danger in that,
in thinking that just because you’re using QKD that you’re secure. Sure, the
laws of physics apply, but there might be ways around them.

Besides the security problems, it’s not realistic to expect that every
internet user will have access to an QKD endpoint anywhere in the near future.
That means, except for the most sensitive, high-value communications, better
encryption algorithms are the way to go.

## We are probably decades away from the point at which quantum computers can
be used to break today’s RSA encryption. There’s plenty of time to upgrade to
newer encryption algorithms.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.


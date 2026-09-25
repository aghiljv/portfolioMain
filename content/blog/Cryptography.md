---
title: "Cryptography"
description: "What is cryptography and why do we need it now more than ever."
date: 2021-02-21
image: /assets/images/blog/220221/title.jpg
minRead: 5
author:
  name: Aghil Jose
  avatar:
    src: /assets/images/about.jpg
    alt: Aghil Jose
---

Cryptography is a method of protecting information and communications through
the use of codes, so that only those for whom the information is intended can
read and process it. In computer science, cryptography refers to secure
information and communication techniques derived from mathematical concepts
and a set of rule-based calculations called algorithms, to transform messages
in ways that are hard to decipher. These deterministic algorithms are used for
cryptographic key generation, digital signing, verification to protect data
privacy, web browsing on the internet and confidential communications such as
credit card transactions and email.

Cryptography is closely related to the disciplines of cryptology and
cryptanalysis. It includes techniques such as microdots, merging words with
images and other ways to hide information in storage or transit. However, in
today's computer-centric world, cryptography is most often associated with
scrambling plaintext (ordinary text, sometimes referred to as cleartext) into
ciphertext (a process called encryption), then back again (known as
decryption). Individuals who practice this field are known as cryptographers.

Modern cryptography concerns itself with the following four objectives:

## 1. Confidentiality
The information cannot be understood by anyone for whom it was unintended.

## 2. Integrity
The information cannot be altered in storage or transit between sender and
intended receiver without the alteration being detected.

## 3. Non-repudiation
The creator/sender of the information cannot deny at a later stage his or her
intentions in the creation or transmission of the information.

## 4. Authentication
The sender and receiver can confirm each other's identity and the
origin/destination of the information.

Procedures and protocols that meet some or all of the above criteria are known
as cryptosystems. Cryptosystems are often thought to refer only to
mathematical procedures and computer programs. However, they also include the
regulation of human behaviour, such as choosing hard-to-guess passwords,
logging off unused systems, and not discussing sensitive procedures with
outsiders.

Cryptosystems use a set of procedures known as cryptographic algorithms or
ciphers, to encrypt and decrypt messages to secure communications among
computer systems, devices such as smartphones and applications. A cipher suite
uses one algorithm for encryption, another algorithm for message
authentication and another for key exchange. This process, embedded in
protocols and written in software that runs on operating systems and networked
computer systems, involves public and private key generation for data
encryption/decryption, digital signing and verification for message
authentication, and key exchange.

Cryptographic algorithms can be broadly classified to two types.

## Single-key or symmetric-key encryption
Single-key or symmetric-key encryption algorithms create a fixed length of
bits known as a block cipher with a secret key that the creator/sender uses to
encipher data (encryption) and the receiver uses to decipher it. Types of
symmetric-key cryptography include the Advanced Encryption Standard (AES), a
specification established in November 2001 by the National Institute of
Standards and Technology as a Federal Information Processing Standard (FIPS
197), to protect sensitive information. The standard is mandated by the U.S.
government and widely used in the private sector. In June 2003, AES was
approved by the U.S. government for classified information. It is a
royalty-free specification implemented in software and hardware worldwide. AES
is the successor to the Data Encryption Standard (DES) and DES3. It uses
longer key lengths (128-bit, 192-bit, 256-bit) to prevent brute force and
other attacks.

## Public-key or asymmetric-key encryption
Public-key or asymmetric-key encryption algorithms use a pair of keys, a
public key associated with the creator/sender for encrypting messages and a
private key that only the originator knows (unless it is exposed or they
decide to share it) for decrypting that information. The types of public-key
cryptography include RSA, used widely on the internet, Elliptic Curve Digital
Signature Algorithm (ECDSA) used by Bitcoin, Digital Signature Algorithm (DSA)
adopted as a Federal Information Processing Standard for digital signatures by
NIST in FIPS 186-4 and Diffie-Hellman key exchange. To maintain data integrity
in cryptography, hash functions, which return a deterministic output from an
input value, are used to map data to a fixed data size. Types of cryptographic
hash functions include SHA-1 (Secure Hash Algorithm 1), SHA-2 and SHA-3.

## Attackers can bypass cryptography, hack into computers that are responsible
for data encryption and decryption, and exploit weak implementations, such as
the use of default keys. However, cryptography makes it harder for attackers
to access messages and data protected by encryption algorithms.

Disclaimer : The views and opinions expressed in the article belong solely to
the author, and not necessarily to the author's employer, organisation,
committee or other group or individual.


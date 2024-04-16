---
id: 27
title: "Slow slow slow shipment! Why?"
date: 2024-15-04 09:03:00
tags: 
  - programming
---


Interesting read! Most featured problems are:

- Complicated code base
- High coupling between different services and libraries
- Aligning with different stakeholders
- Waiting for code reviews
- Writing tests


![slow-shipment-reasons](./slow-shipment-reasons.png)

![short-slow-shipment-reasons](./short-slow-shipment-reasons.png)


Personally, I find "writing tests" a little bit awkward given that it provides good amount of confidence and safety. And, always pays off in the long run. But, obviously writing tests to legacy code base is a pain in the back.

Other than that, it seems like excessive meeting culture and having a large codebase which didn't get enough attention are the main reasons for slow shipment. I think both of them can be addressable by 

- having less people in the loop
- making teams more autonomous
- having less "micro" microservices.
- establishing a pair-programming culture

One way or another, every developer should understand we're paid by the value **we actually deliver**. Therefore, anything that blocks us to do so should be questioned and addressed.

[I asked 100 devs why they aren’t shipping faster. Here’s what I learned?](https://greptile.com/blog/100-devs?utm_source=tldrnewsletter)
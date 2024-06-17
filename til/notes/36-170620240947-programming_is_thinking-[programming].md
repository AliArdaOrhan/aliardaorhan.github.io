---
id: 36
title: "Programming is a Thinking Activity"
date: 2024-06-17 13:40:00
tags:
  - programming
---

There's a niche discussion in software circles about the nature of software engineering, which I'm delighted to be part of. It basically revolves around whether software is a traditional engineering discipline and whether we can apply the same principles of engineering to software development.

Although there's a camp that argues software is an engineering discipline, another camp remains unconvinced. They argue that software engineering represents a radical novelty.

The main arguments are:

- Programming is a design activity, meaning every single line of code is a design decision at its essence. Programmers are not just throwing code at a well-defined problem. They first understand the problem, then apply design decisions at different levels. Sometimes it's an architectural decision, sometimes it's an OOP abstraction, and sometimes it's just a simple if-else statement. But in every case, developers are applying their design skills to a vague problem.
- The build phase of programming activity is very different from manufacturing or construction. To understand this better, let's look at it from the other way around. In manufacturing/production, we have to build a blueprint to scale production. That blueprint is carefully designed by engineers and tested many times in different conditions. After the designers of a bridge or physical product are satisfied with the latest design, it's sent to a factory where it's multiplied by heavily optimized machines, and no additional design decisions can be made. In software engineering, design activity and production activity are not separated. When you finish the design activity, its production becomes trivial. You just compile it, which is basically a zero-cost operation. Therefore, anything related to repetition and optimization is not a concern in software engineering. When the design activity is finished, production is finished.
- Design itself is also problematic in software engineering. Imagine all the entity charts, architectural diagrams, Miro boards, or Jira tickets you have. You can't test any of them. In manufacturing, any design is validated before it goes to production by using simulations, prototypes, real-world tests, etc. And until it's validated to work as expected, it's not sent to production. In programming, we have no way to validate any so-called design artifact. There's no tool that you can feed requirements and an entity-relation diagram to tell you whether you're solving the given problem correctly. When you think about a small scoped ticket, it's not easy to reason about it. But if you start to think on a project level, then you'll understand better what I'm talking about.
- Every product is a new product even if you're replicating one in the market. Imagine a Mercedes Benz car. Every one of them is exactly the same. You can't get two Mercedes-Benz cars where the engines, electrical systems, or ECUs are wired differently. If they're the same model, they're exactly the same. However, when you're copying an open-source CMS project, you might pick additional or fewer features written in a completely different language, architectural style, and design principles. Yes, you can use some libraries or frameworks to provide some standardization and speed up the process, but the way the solution is built will be very different from the original one.
- It's almost unnecessary to say it nowadays, but software projects don't scale linearly like manufacturing, where if you add more resources, you get more output. In programming, contextual knowledge is critical for productivity. There's no need for factory workers to understand the process or tools they're building. The only thing they need to do is follow the instructions. However, in programming, in order to come up with a functional solution, you need knowledge. You need to know how to fetch data, which libraries to use to process it, how to store it, how to present it, and most importantly, you need to know which problem you're solving. More people mean more communication overhead, where you need to align more people together. And it takes its toll on productivity. As the famous saying goes, you can't make a baby in one month by adding more developers to the project.
- Interesting trivia: the term "software engineering" was coined by Margaret Hamilton to make the profession cooler as it couldn't draw enough attention from college students. Therefore, the etymology of software engineering is not rooted in its nature but in its marketing strategy.

So, long story short, programming, or software engineering as we're used to calling it, is dramatically different from other engineering principles. It requires its own understanding, and trying to import other engineering principles under the brand name of agile won't work. It's not about the process you're applying; it's about the mindset your engineers have.

Some good articles around the topic:

- [A radical novelty](https://dl.acm.org/doi/pdf/10.1145/255471.255589).
- [What is Software Design?](https://www.bleading-edge.com/Publications/C++Journal/Cpjour2.htm)
- [Why Simple is so Complex?](https://itnext.io/why-simple-is-so-complex-362bc835b763)
- [Software is Different](https://wiki.c2.com/?SoftwareIsDifferent)
- [The Source Code Is The Product](https://wiki.c2.com/?TheSourceCodeIsTheProduct)

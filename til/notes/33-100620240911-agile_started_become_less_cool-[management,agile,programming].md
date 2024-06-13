---
id: 33
title: "Agile becomes less cool?"
date: 2024-10-06 08:12:00
tags:
  - agile
  - programming
  - management
---

[Came across an interesting article]((https://www.theregister.com/2024/06/05/agile_failure_rates)) about the failure rates in agile projects. It seems like if requirements **are not** gathered clearly, agile projects tend to have higher failure rates compared to its counterparts. Quoting from the author Dr. Junade Ali: 

>"Our research has shown that what matters when it comes to delivering high-quality software on time and within budget is a robust requirements engineering process and having the psychological safety to discuss and solve problems when they emerge, whilst taking steps to prevent developer burnout."

My practical experiences on the field also supports this. Whenever we do diligent requirements engineering, projects tend to be more smooth and more succesful. But, the contrast is actually more striking. When we don't do requirements engineering very well, we exactly know it'll fail in different ways and it won't be smooth sailing. The latest ticket I've worked on actually demonstrates it very well. 

I was tasked to create a robot file without a diligent requirements engineering, therefore I've added links whatever actually make sense for the team. As if that wasn't enough, we've changed the implementation many times as we didn't discuss the requirements for subdomains and other affiliates we have. So, it was like while we were solving the problem, we were designing the solution again and again with each new information we've came across. So, It wasn't pleasant experience to work on something you don't know what needs to be done and you don't know how it'll be done. Could we have avoided this by simply discussing the requirements in a more detailed way? Absolutely.

[Another interesting point made against Scrum is coming from Meijer](https://www.theregister.com/2015/01/08/erik_meijer_agile_is_a_cancer_we_have_to_eliminate_from_the_industry/) where he argues that agile practices and TDD ignores real world practicalities, and focuses on short-term gains. Imagine you're writing an application where you think it'll last for at least 5 years. In this scenario, coming up with a short-cut solution under the name of MVP would be beneficial to realize the value in short time, but its longer term consequences would be paid by more maintenance and more technical debt. And, working in 2 weeks cycle makes it harder as you need to focus on the task at the hand rather than architectural **illities.**

On the other side, waterfall projects have heavy emphasis on requirements engineering which actually focuses teams to build comphrensive documentation rather than thinking solution's practical aspects. It tends to lead over-documentation and over-engineering.

But, I think there's a middle ground between those 2 extremes. In agile team's mindsets, I think it's important to make distinction between requirements engineering and big-up front designs. One of them for removing unknowns and helping developers to start their work with a clear understanding of what needs to be done. The latter is for defining how it'll be done and it's mostly futile as there're too much information to process on paper. A setup where product managers and tech leads work together before the sprint to prepare the requirements in a way that team can actually make sense improves productivity significantly. For that purpose, we've set up a meeting each week with product manager to discuss the requirements and, if necessary, to detail them.

Long story short, I'm suggesting agile teams to spend more time on requirement engineering in order to make development experience smoother.





---
id: 30
title: "Google Code Review: Too many steps?"
date: 2024-21-05 07:59:00
tags:
  - google
  - programming
---

I have to say I'm amazed by the number of steps google take to review any new PR - CL in google context- . They have 2 different tools called Critique and Gerrit. The latter one is used for open-sourced projects meanwhile the first one is used internally. They're very capable and provides good amount of metrics to understand impact radius of the change. You can get a glimpse of Gerrit from [this link](https://chromium-review.googlesource.com/q/status:open+-is:wip).

![Gerrit-Screenshot](./gerrit-screenshot.png)


But, most interesting part is the approval process which requires 3 different set of people. First one is peer-review, where your code is reviewed by your team mates. Second you need to get approval from code owners. And, last but not least you need to get an approval for readability which is very google-specific concept. The idea is that ensuring that the committed code adheres to best possible standards defined in [a lengthy document](https://google.github.io/styleguide/pyguide.html).

However, suprisingly instead of increasing cycle time, it actually decreases it. According to researches, google developers spend ***%78 less time than AMD, %75 less than Chrome OS, %79 from Microsoft developers*** on code reviews. Impressive, isn't it?
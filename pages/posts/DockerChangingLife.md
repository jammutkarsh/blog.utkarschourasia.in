---
title: 3 ways Docker changed my life!
date: 2022/06/12
description: Containerisation technology as a whole can be leveraged to reap multiple benefits.
author: Utkarsh Chourasia
---

My goal with this article is to motivate you to try a new technology or maybe use it in a more personal way(than the usual 'this will get me a job' way).

**Article TLDR;**

1. Much more organized.
2. Zero-breaking packages.
3. Testing and learning made easy.

## **The Story**

One of the steps to becoming a 'DevOps Engineer' I had to be comfortable with GNU/Linux and [Docker](https://www.docker.com/). I was amazed by the concept of containerization. This solved a few problems, or I should say improved, the way I organized my files, programs, software, and the way I worked. Less clutter(at least I experienced it).

I liked the methodology so much that I format my mac, and

<blockquote class="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Now my laptop is full of containers and images rather than packages. 😶</p>&mdash; Utkarsh (@JammUtkarsh) <a href="https://twitter.com/JammUtkarsh/status/1463160276828700685?ref_src=twsrc%5Etfw">November 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So let's get started 🏁🏁🏁

*Side Note: I am gonna use the word **'package'** for development kits like go, python, JDK, etc.*

### 1. Install and track

If I wanted to learn something, the very first thing I needed to do was to install its package.
Here is the step count of the process.
`Visit their website -> Download the package -> Install it -> Open IDE and try it.`

![Normal Method](/images/DockerChangingLife/NormalMethod.png)

This whole one-time process takes up a lot of time. Especially installation if you are on a slow laptop and here comes the baggage:

1. Now I have to keep track of a package on my laptop.
2. Search how to uninstall it *( because every package has a different method and is sometimes difficult too)* and make sure there are no files left in my limited storage space.

With Docker, it's as easy as:
`Find the docker image to run -> docker run -d -it  IMG-name -> Open IDE and try it.`

![Docker Method](/images/DockerChangingLife/DockerMethod.png)

Not to mention, I am doing this with just a terminal and sometimes a [hub.docker.com](http://hub.docker.com/) tab. Now,

1. `docker image ls` and here is the list of things I was working on.
2. `docker remove IMG-name(s)` and it's gone.
3. With containerization technology, it is taking up less space.

### 2. Possibility of software breaking or interference

This might be a small issue, possibly you or I might never encounter it but now, I have a package installed on my machine which can intervene with other packages or software.

The best real-life example that I have been in is python.
`brew install python@3` and boom I have python3 installed but there is a program that runs on python2. So I have to install and change the default python version.
This is annoying. What if I have a project in py3, `python main.py`, and throws an error or something.

### 3. Learning GNU/Linux

I advocate for everyone on learning Linux, and the best way to learn Linux is by getting their hands dirty. After convincing one to understand, the question of where is the dirt?

Earlier, my most straightforward recommendation was

- WSL/WSL2 for windows *(Medium Difficulty)*
- Using a VM *(Fairly Difficult)*
- Native Install *(Fairly Difficult)*
- Using Cloud *(Expensive and a little complex)*

All these come with their level of difficulty and challenge, which might be fun if you are interested or just 'don't want to learn Linux' pain.

Docker is easy to recommend because:

1. Easy to install
2. Easy to manage
3. I could give predefined commands to enter the shell.

## Hold up

Let's be real, there are some downsides to it

1. **No GUI interaction**: You will only be learning Linux in the shell (Although that's where you will be working in production).
2. **Bandwidth Consumption**: downloading a docker image and installing the remote server in VSCode consumes a lot of bandwidth. When there is no internet, even if you have an image downloaded, you can't open and run on an IDE. You can't even use vim.
3. **Processing Power**: You do need a good workstation to run docker, which consumes a significant amount of power, memory, and CPU on Mac and windows especially.

That's all from my side, see you in the next one 🚀!

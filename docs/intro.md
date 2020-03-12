---
title: Introduction
---

BSM (Bundled Software Manager) is developed in order to simplify the
deployment and usage of software which has many packages and
dependencies. It could be very suitable for High Energy Physics softwares.


## BSM is a framework

BSM itself does not provide a real application for your project.
It is a framework which could help you to build a fully functional
application with simple configuarions and handlers.

[BSMDemo](https://github.com/bsmsoft/bsmdemo) is a very simple
example which shows how to create an application.


## Git as software repository

BSM utilizes git as the software repository.
Different software versions are distinguished by git tags.
The details of software are defined in the git repository including
installation instructions, environment, dependencies, etc.


## Command

Commands are supported for various shells, including bash, csh, zsh, tcsh and more
could be extended. Json output and python API are also available for
advanced development. The installation of each package could be
configured separately and extended with customized handler. BSM manages
the environment variables and the version cleaning and switching are
easy. It also has fine environment control on a single package. Users
can also define their own packages easily and these packages will be
managed by BSM with simple configuration.

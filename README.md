# BSM Documentation

BSM (Bundled Software Manager) is developed in order to simplify the
deployment and usage of software which has many packages and
dependencies.

## Features

### Git as software repository

BSM utilizes git as the software
repository. Different software versions are distinguished by git tags.
The details of software are defined in the git repository including
installation instructions, environment, dependencies, etc. Commands are
supported for various shells, including bash, csh, zsh, tcsh and more
could be extended. Json output and python API are also available for
advanced development. The installation of each package could be
configured separately and extended with customized handler. BSM manages
the environment variables and the version cleaning and switching are
easy. It also has fine environment control on a single package. Users
can also define their own packages easily and these packages will be
managed by BSM with simple configuration.

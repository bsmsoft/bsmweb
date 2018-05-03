---
title: App Development Guide
---

# Default Value should be all False for a category

# Action Return Value

* `None -> False`
* `True/False`
* `{'success': True, 'env_package': True}`

# All config

* operation
* app
* user
* control
  * shell
  * output format
  * verbose
* command
  * app id
  * config app

  * config user

  * shell
  * output format
  * verbose

  * option
  * operation
  * scenario/version name
  * software root

  * release repo
  * release info dir
* option
* info
* scenario
* release
  * version
  * setting
  * package

# Other

* Please make sure the version in release is exactly the same as
  scenario version
* Do NOT edit config directly in handler and transformer
* Each step can have several sub-steps

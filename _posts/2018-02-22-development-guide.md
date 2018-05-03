---
title: App Development Guide
---

# Default Value should be all False for a category

# Action Return Value

* `None -> False`
* `True/False`
* `{'success': True, 'env_package': True}`

# All config

* command
  * app id
  * config app

  * config user

  * output format (plain, sh, csh, python, json, ...)
  * verbose

  * operation

  * option
  * scenario/version name
  * software root
  * release repo
  * release info dir
* operation
* app
* user
* control
  * output format
  * verbose
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

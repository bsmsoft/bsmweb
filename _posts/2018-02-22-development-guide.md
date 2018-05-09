---
title: App Development Guide
---

# Default Value should be all False for a category

# Action Return Value

* `None -> False`
* `True/False`
* `{'success': True, 'env_package': True}`

# All config

* entry
  * app id
  * config app

  * config user

  * output format (plain, sh, csh, python, json, ...)
  * verbose

  * option
  * scenario/version name
  * software root
  * release repo
  * release info dir

* app
* user
* info

* control
  * output format
  * verbose

* scenario
  * option
* release
  * version
  * setting
  * package

* operation, (not config)

# Other

* Please make sure the version in release is exactly the same as
  scenario version
* Do NOT edit config directly in handler and transformer
* Each step can have several sub-steps
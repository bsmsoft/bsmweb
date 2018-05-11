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
  * config app file
  * config app
  * app id

  * config user file
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

* output
  * format
  * verbose

* scenario
  * option
* release
  * version
  * setting
  * package

* operation, (not config)

# Output

* value

* env
  * current release
    * app
      * solo
      * path
      * path_overwrite
    * release
      * solo
      * path
      * path_overwrite
  * origin
  * current final
  * change
    * set
    * unset

# Other

* Please make sure the version in release is exactly the same as
  scenario version
* Do NOT edit config directly in handler and transformer
* Each step can have several sub-steps

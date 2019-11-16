---
name: Getting Started with Git
route: /git
menu: Source control
---

# Git cheatsheet

To avoid git tracking your local changes, you could just tell git to assume the file is unchanged. Useful if you need to set secrets in files.

 * `git update-index --assume-unchanged filename` stops tracking changes
 * `git update-index --no-assume-unchanged filename` starts tracking changes again.

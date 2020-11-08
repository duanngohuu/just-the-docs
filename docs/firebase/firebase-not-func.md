---
layout: default
title: Issue 'firebase not function'
nav_order: 1
has_children: false
permalink: /docs/firebase/firebase-not-func
parent: Firebase
---

# Issue
After include config firebase
> Uncaught TypeError: firebase.database is not a function

{: .fs-6 .fw-300 }

# [How?](https://github.com/firebase/codelab-friendlychat-web/issues/396){:target="_blank"}
> Current setting
```javascript
    <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>
```

> Using instead of above
```javascript
    <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase.js"></script>
```

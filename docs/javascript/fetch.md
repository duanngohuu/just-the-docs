---
layout: default
title: Fetch API用語
nav_order: 1
has_children: false
permalink: /docs/javascript/fetch
parent: Javascript
---

# [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch){:target="_blank"}

使用

```javascript
    fetch('http://localhost:8080/authenticate', options*)
        .then(response => response.json())
        .catch(console.error)
        .then(console.log);
        .catch(console.error)
```

又は

```javascript
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:8080/authenticate', options*);
            const body = await response.json();

            return body;
        } catch(error) {
            throw new TypeError(error);
        }
    }
```

Above, I use *options*, so what are the *options* ?

```javascript
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
```

{: .fs-6 .fw-300 }

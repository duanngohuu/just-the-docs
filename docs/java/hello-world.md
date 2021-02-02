---
layout: default
title: Hello World with java
nav_order: 1
has_children: false
permalink: /docs/java/hello-world
parent: Java
---

# Java

To make it as easy as possible to write documentation in plain Markdown, most UI components are styled using default Markdown elements with few additional CSS classes needed.

```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }
```

# Date format

```Format

yy = year (2 digit)
yyyy = year (4 digit)
M = month of the year
MM = month of the year (leading 0)
MMM = month of the year (short text)
MMMM = month of the year (full text)
d = day of the month
dd = day of the month (leading 0)
h = hour (1-12)
H = hour (0-23)
m = minute of the hour
s = second of the minute
S = milisecond
E = day of the week (short)
EEEE = day of the week (full)
D = day of the Year

```
-> https://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html

{: .fs-6 .fw-300 }

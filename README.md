borschik-tech-jade
==================

jade plagin for borschik

Format for insert file
```jade

include ./content.jade

```
## How use?

Install borschik in project
```javascript
sudo npm instal borschik
```

Check:
```bash
ls ./node_modules | grep borschik # exists it is ok!
```

And you can run:
```bash
# -t = tech
# -i = path to file input
# -o = path to file output
node_modules/borschik/bin/borschik -t ./jade.js -i ./test/page.jade -o ./test/index.jade
```

Example *page.jade*:
```jade
doctype 5
html(lang="en")
    head
        title= pageTitle
        script(type='text/javascript').
          if (foo) {
             bar(1 + 5)
          }
    body
        h1 Jade - node template engine
        #container.col
            include ./content.jade

        #footer
            include ./footer_content.jade
```


Example *content.jade*:
```jade
if youAreUsingJade
    p You are amazing
    else
        p Get on it!
    p.
      Jade is a terse and simple
      templating language with a
      strong focus on performance
      and powerful features.
```

Example *footer_content.jade*:
```jade
&copy; pavelpower
```

Result:
```jade
doctype 5
html(lang="en")
    head
        title= pageTitle
        script(type='text/javascript').
          if (foo) {
             bar(1 + 5)
          }
    body
        h1 Jade - node template engine
        #container.col
            if youAreUsingJade
                p You are amazing
                else
                    p Get on it!
                p.
                  Jade is a terse and simple
                  templating language with a
                  strong focus on performance
                  and powerful features.

        #footer
            &copy; pavelpower
```


### LICENSE

The MIT License (MIT)

Copyright (c) 2013 Pavel Akhmetchanov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

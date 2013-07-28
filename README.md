borschik-tech-jade
==================

jade plagin for borschik

Format for insert file
```jade

//- borschik:include:./content.jade

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
            //- borschik:include:./content.jade

        #footer
            //- borschik:include:./footer_content.jade
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

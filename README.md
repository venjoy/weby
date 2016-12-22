# WEBY

Build websites fast.


## Few Points


### Namespacing

Every project build with WEBY is namespaced by the website shortname.
Example for xorlabs.in => `xl-`

OR you can use the default `wb-`


### File Structure

The files are structured by AngularJS style. This is done to minimize code duplacability.

The base layout is `index.html` which included other files.

`Partials` contain fragements of web pages.
`Pages` contain the specific page content.


### Style Priciples

`Every thing is a compononent`.

Based upon the above principle all the styles are arranged in compononents folder `assets/scss/compononents`


## gala.js

gala.js turns simple HTML markup into an elegant slideshow that gives the appearance that images are sliding back and forth behind the actual page body.

### Example

The `example` directory in this repository provides a working example of gala.js. Alternatively, you can use the following HTML as a reference:

```html
<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="gala.css"/>
  <link rel="stylesheet" href="font-awesome-4.3.0.min.css">
</head>
<body>

  <div class="gala">
    <img src="img/applejack.png" alt="Applejack"/>
    <img src="img/fluttershy.png" alt="Fluttershy"/>
    <img src="img/pinkie-pie.png" alt="Pinkie Pie"/>
    <img src="img/rainbow-dash.png" alt="Rainbow Dash"/>
    <img src="img/rarity.png" alt="Rarity"/>
  </div>

  <script type="text/javascript" src="jquery-2.1.3.min.js"></script>
  <script type="text/javascript" src="gala.js"></script>
</body>
</html>
```

### Dependencies

gala.js uses [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and [jQuery](http://jquery.com) to create the slideshows. Make sure you include both on any page you use gala.js (the example above shows how to do this).

### Background

The goal for gala.js was to produce a nice-looking slideshow that fit the theme of [The Gillespie Project](http://gillespieproject.com). The articles on this blog are written using Markdown, so the goal was to keep the embedded HTML surrounding Markdown images as small as possible. Markdown is also the reason the captions use the `alt` attribute for each `img` in the slideshow instead of the `title`.

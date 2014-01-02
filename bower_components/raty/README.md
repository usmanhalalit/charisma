# jQuery Raty - A Star Rating Plugin - [wbotelhos.com/raty](http://wbotelhos.com/raty)

jQuery Raty is a plugin that generates a customizable star rating.

## Version

```
@version        2.5.2
@since          2010.06.11
@author         Washington Botelho
@documentation  wbotelhos.com/raty
@twitter        twitter.com/wbotelhos
```

## Required Files

+ jquery.raty.min.js
+ star-on.png
+ star-off.png

## Options

```js
cancel      : false                                          // Creates a cancel button to cancel the rating.
cancelHint  : 'Cancel this rating!'                          // The cancel's button hint.
cancelOff   : 'cancel-off.png'                               // Icon used on active cancel.
cancelOn    : 'cancel-on.png'                                // Icon used inactive cancel.
cancelPlace : 'left'                                         // Cancel's button position.
click       : undefined                                      // Callback executed on rating click.
half        : false                                          // Enables half star selection.
halfShow    : true                                           // Enables half star display.
hints       : ['bad', 'poor', 'regular', 'good', 'gorgeous'] // Hints used on each star.
iconRange   : undefined                                      // Object list with position and icon on and off to do a mixed icons.
mouseout    : undefined                                      // Callback executed on mouseout.
mouseover   : undefined                                      // Callback executed on mouseover.
noRatedMsg  : 'Not rated yet!'                               // Hint for no rated elements when it's readOnly.
number      : 5                                              // Number of stars that will be presented.
numberMax   : 20                                             // Max of star the option number can creates.
path        : ''                                             // A global locate where the icon will be looked.
precision   : false                                          // Enables the selection of a precision score.
readOnly    : false                                          // Turns the rating read-only.
round       : { down: .25, full: .6, up: .76 }               // Included values attributes to do the score round math.
score       : undefined                                      // Initial rating.
scoreName   : 'score'                                        // Name of the hidden field that holds the score value.
single      : false                                          // Enables just a single star selection.
size        : 16                                             // The size of the icons that will be used.
space       : true                                           // Puts space between the icons.
starHalf    : 'star-half.png'                                // The name of the half star image.
starOff     : 'star-off.png'                                 // Name of the star image off.
starOn      : 'star-on.png'                                  // Name of the star image on.
target      : undefined                                      // Element selector where the score will be displayed.
targetFormat: '{score}'                                      // Template to interpolate the score in.
targetKeep  : false                                          // If the last rating value will be keeped after mouseout.
targetText  : ''                                             // Default text setted on target.
targetType  : 'hint'                                         // Option to choose if target will receive hint o 'score' type.
width       : undefined                                      // Manually adjust the width for the project.
```

## Usage

```html
<div id="star"></div>
```

```js
$('#star').raty();
```

```html
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
```

```js
$('.star').raty();
```

## Functions

```js
$('#star').raty('score');                   // Get the current score.

$('#star').raty('score', number);           // Set the score.

$('#star').raty('click', number);           // Click on some star.

$('.star').raty('readOnly', boolean);       // Change the read-only state.

$('#star').raty('cancel', boolean);         // Cancel the rating. The last param force the click callback.

$('#star').raty('reload');                  // Reload the rating with the current configuration.

$('#star').raty('set', { option: value });  // Reset the rating with new configurations.

$('#star').raty('reload');                  // Destroy the bind and give you the raw element.
```

## Contributors

+ Andreas Köberle
+ Armin Primadi
+ Daniel Faria
+ Douwe Maan
+ Eric Wendelin
+ Francisco Souza
+ Gabriel Benz
+ hpgihan
+ janapol
+ jeongee
+ joe1chen
+ Murat GUZEL
+ Olle Jonsson
+ packowitz
+ Toni Uebernickel

## Licence

The MIT License

Copyright (c) 2010 Washington Botelho

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate

You can do it via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Raty). Thanks! (:

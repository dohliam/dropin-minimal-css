# Modular switcher for previewing drop-in minimal CSS frameworks

This is a quick CSS switcher to allow for previewing some of the many minimal CSS-only frameworks out there. See the [demo](https://dohliam.github.io/dropin-minimal-css) or [drop the switcher](#Usage) into your own page to see how [different frameworks](#list-of-frameworks) would look together with your content.

This project only includes "drop-in" minimal frameworks, in other words, boilerplate frameworks that require no adjustment of the corresponding HTML and can be simply dropped into the project to provide a starting point for further design. No additional javascript, compiling, pre-processors, or fiddling with classes should be required for these to look good and be responsive.

## Usage

The switcher is fully modular, so you can easily drop it into your own pages to quickly preview the effect of using different CSS frameworks. You can even add your own frameworks to the list and use the dropdown menu to switch between them.

To use the CSS switcher, just clone or download the project and then copy your html file into the main project folder (you can replace `index.html` if you want, since it's just the demo).

Include the js for the switcher in the header of the page:

        <script src="switcher.js" type="text/javascript"></script> 

Then, add the following code wherever you want the dropdown to appear:

          <div id="switcher">&nbsp;</div>
          <script type="text/javascript">inline_switcher();</script>

That's it! You should now be able to cycle through the different frameworks by choosing them from the dropdown.

## Custom frameworks

You can easily add your own frameworks to the dropdown, or replace the default ones entirely. Just copy the minified css file for each framework into the `vendor` directory and add the framework names to the list at the top of `switcher.js`, separated by commas. They will be automatically pulled into the switcher dropdown and loaded when you select them.

## List of frameworks

* [bullframe](https://github.com/marcopontili/bullframe.css) by @marcopontili ([MIT](http://opensource.org/licenses/MIT))
* [caiuss](https://github.com/IonicaBizau/CaiuSS) by @IonicaBizau ([MIT](http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit))
* [kathamo](https://github.com/kathamo/Kathamo) by debashisbarman ([MIT](https://github.com/kathamo/Kathamo/blob/master/LICENSE))
* [kube](https://github.com/imperavi/kube) by @imperavi ([MIT](https://github.com/imperavi/kube/blob/master/LICENSE))
* [lotus](https://github.com/goatslacker/lotus.css) by goatslacker (MIT)
* [milligram](https://github.com/milligram/milligram) by @cjpatoilo ([MIT](http://cjpatoilo.mit-license.org/))
* [min](https://github.com/owenversteeg/min) by @owenversteeg (MIT)
* [motherplate](https://github.com/leemunroe/motherplate) by @leemunroe ([MIT](https://github.com/leemunroe/motherplate/blob/master/LICENSE))
* [normalize](https://github.com/necolas/normalize.css) by @necolas ([MIT](https://github.com/necolas/normalize.css/blob/master/LICENSE.md))
* [oh-my-css](https://github.com/egoist/oh-my-css) by @egoist ([MIT](https://github.com/egoist/oh-my-css/blob/gh-pages/LICENSE))
* [pure](https://github.com/yahoo/pure/) by yahoo ([BSD](https://github.com/yahoo/pure/blob/master/LICENSE.md))
* [siimple](https://github.com/siimple/siimple) by @jmjuanes ([MIT](https://github.com/siimple/siimple/blob/master/LICENSE.md))
* [simplecss](https://github.com/neculaesei/simplecss) by @neculaesei ([MIT](http://opensource.org/licenses/mit-license.php))
* [tacit](https://github.com/yegor256/tacit) by @yegor256 ([MIT](https://github.com/yegor256/tacit/blob/master/LICENSE))
* [sanitize](https://github.com/10up/sanitize.css) by @10up ([PD](https://github.com/10up/sanitize.css/blob/master/LICENSE.md))
* [sanitize](https://github.com/ZDroid/sanitize.css) by @ZDroid ([MIT](https://github.com/ZDroid/sanitize.css/blob/master/LICENSE.md))
* [skeleton](https://github.com/dhg/Skeleton) by @dhg ([MIT](https://github.com/dhg/Skeleton/blob/master/LICENSE.md))
  * [skeleton-framework](https://github.com/skeleton-framework/skeleton-framework) by skeleton-framework ([MIT](https://github.com/skeleton-framework/skeleton-framework/blob/master/LICENSE))
  * [skeleton-plus](https://github.com/oltmannsdaniel/skeleton-plus) by @oltmannsdaniel ([MIT](https://github.com/oltmannsdaniel/skeleton-plus/blob/master/LICENSE))
* [thao](https://github.com/ThaoFramework/Thao/) by Giuseppe Sanfrancesco ([Apache](http://www.apache.org/licenses/LICENSE-2.0))

## Acknowledgements

* Sample HTML5 markup based on [html5-kitchen-sink](https://github.com/dbox/html5-kitchen-sink) by @dbox (MIT)
* Example images in the demo are by [MichaelMaggs](https://commons.wikimedia.org/wiki/User:MichaelMaggs) on [Wikimedia Commons](https://commons.wikimedia.org)
* Example videos provided by the [Blender Foundation](https://peach.blender.org/) via the [HTML5-Test-Videos](https://github.com/benhosmer/HTML5-Test-Videos) project
* Embedded audio by [John Pazdan](http://ccmixter.org/files/flatwound/14476) at [ccMixter](http://ccmixter.org/files/flatwound/14476)
* Special thanks to [Tacit CSS](https://github.com/yegor256/tacit), which was the original inspiration for making this list to answer the question "Where can I find more frameworks like Tacit?"

## LICENSE

MIT.

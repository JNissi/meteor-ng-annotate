meteor-ng-annotate
==================

Runs ng-annotate on angular source to streamline Angularjs development on Meteor.

## The need to rename the js files

I did not have time to find a way to get the file handler tied to the normal `.js`-file handler pipe, so I had to introduce a new file prefix. If you want your angular files handled by this plugin, you have to rename the files to `.ng`. E.g. `IndexController.js` -> `IndexController.ng`.

This is a bit inconvenient and I'm planning on trying to find a way to handle `.js` files directly when I have the time.

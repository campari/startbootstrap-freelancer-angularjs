What is AngularJS?
=========

AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control.

Oh yeah and it helps with server-side communication, taming async callbacks with promises and deferreds. It also makes client-side navigation and deeplinking with hashbang urls or HTML5 pushState a piece of cake. The best of all: it makes development fun!

* Web site: http://angularjs.org
* Tutorial: http://docs.angularjs.org/tutorial
* API Docs: http://docs.angularjs.org/api
* Developer Guide: http://docs.angularjs.org/guide
* Contribution guidelines: [CONTRIBUTING.md](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)
* Dashboard: http://dashboard.angularjs.org

Building Startbootstrap-Freelancer-AngularJS
---------

## Installing Dependencies
Before you can build Startbootstrap-Freelancer-AngularJS, you must install and configure the following dependencies on your
machine:
* [Git](http://git-scm.com/): The [Github Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.
* [Node.js](http://nodejs.org): We use Node to run a development web server, run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.
* [Grunt](http://gruntjs.com): We use Grunt as our build system. Install the grunt command-line tool globally with:
```shell
npm install -g grunt-cli
```
* [Bower](http://bower.io/): We use Bower to manage client-side packages for the docs. Install the `bower` command-line tool globally with:
```shell
npm install -g bower
```
**Note:** You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to install Grunt &amp; Bower globally.
## Forking Startbootstrap-Freelancer-AngularJS on Github
To create a Github account, follow the instructions [here](https://github.com/signup/free).
Afterwards, go ahead and [fork](http://help.github.com/forking) the [main Startbootstrap-Freelancer-AngularJS repository](https://github.com/swordf1zh/startbootstrap-freelancer-angularjs).
## Building AngularJS
To build Startbootstrap-Freelancer-AngularJS, you clone the source code repository and use Grunt to generate the non-minified and minified files:
```shell
# Clone your Github repository:
git clone "git@github.com:<github username>/startbootstrap-freelancer-angularjs.git.js.git"
# Go to the startbootstrap-freelancer-angularjs directory:
cd startbootstrap-freelancer-angularjs
# Add the main startbootstrap-freelancer-angularjs repository as an upstream remote to your repository:
git remote add upstream "https://github.com/swordf1zh/startbootstrap-freelancer-angularjs.git"
# Install node.js dependencies:
npm install
# Install bower components:
bower install
# Build:
grunt build
```
<div class="alert alert-warning">
  **Note:** If you're using Windows, you must use an elevated command prompt (right click, run as Administrator). This is because `grunt package` creates some symbolic links.
</div>
<div class="alert alert-warning">
  **Note:** If you're using Linux, and npm install fails with the message 'Please try running this command again as root/Administrator.', you may need to globally install grunt and bower:
  <ul>
    <li>sudo npm install -g grunt-cli</li>
    <li>sudo npm install -g bower</li>
  </ul>
</div>

The build output can be located under the `dist` directory.
---------

# [Start Bootstrap](http://startbootstrap.com/) - [Freelancer](http://startbootstrap.com/template-overviews/freelancer/)

[Freelancer](http://startbootstrap.com/template-overviews/freelancer/) is a one page freelancer portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, and a working PHP contact form.

## Getting Started

To use this theme, choose one of the following options to get started:
* Download the latest release on Start Bootstrap
* Fork this repository on GitHub

## Bugs and Issues

Have a bug or an issue with this theme? [Open a new issue](https://github.com/IronSummitMedia/startbootstrap-freelancer/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/freelancer/).

## Creator

Start Bootstrap was created by and is maintained by **David Miller**, Managing Parter at [Iron Summit Media Strategies](http://www.ironsummitmedia.com/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2015 Iron Summit Media Strategies, LLC. Code released under the [Apache 2.0](https://github.com/IronSummitMedia/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
'use strict';
/* global Reveal, hljs */


// angular.module('mgcrea.Angularjs20140623', ['ngAnimate', 'ngRoute', 'mgcrea.ngStrap'])

//   .constant('version', 'v0.1.0')

//   .config(function($locationProvider, $routeProvider) {

//     $locationProvider.html5Mode(false);

//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/home.html'
//       })
//       .when('/features', {
//         templateUrl: 'views/features.html'
//       })
//       .when('/contact', {
//         templateUrl: 'views/contact.html'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });

//   });

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  // Optional libraries used to extend on reveal.js
  dependencies: [{
      src: 'lib/js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    }, {
      src: 'bower_components/reveal.js/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'bower_components/reveal.js/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'bower_components/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }, {
      src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    }, {
      src: 'bower_components/reveal.js/plugin/notes/notes.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    }
  ]
});

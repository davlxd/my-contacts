// Karma configuration
// Generated on Thu Mar 27 2014 15:40:20 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    //frameworks: ['mocha', 'requirejs'],
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      //{pattern: 'test/*.js', included: false}
      'public/js/lib/angular/angular.js',
      'public/js/lib/angular/angular-*.js',
      'public/js/*.js',
      'test/ng/*.js'
    ],
 

    // list of files to exclude
    exclude: [
      'public/js/lib/angular/angular-loader.js',
      'public/js/lib/angular/*.min.js',
      // 'public/js/lib/angular/angular-scenario.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    plugins : [
            //'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            //'karma-jasmine'
            'karma-mocha'
            ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

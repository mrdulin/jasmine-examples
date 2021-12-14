var HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
var path = require('path');

jasmine.getEnv().addReporter(
  new HtmlReporter({
    path: path.join(__dirname, '../../test-reporter'),
  }),
);

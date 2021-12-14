var Jasmine = require('jasmine');
var path = require('path');
var HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
var jasmine = new Jasmine();

jasmine.loadConfigFile(path.resolve(__dirname, '../../../jasmine.json'));

jasmine.addReporter(
  new HtmlReporter({
    path: path.join(__dirname, '../../../test-reporter'),
  }),
);

jasmine.execute();

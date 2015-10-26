Package.describe({
  name: 'generalledger:sleepforms',
  version: '0.0.1',
  summary: 'Make Meteor._sleepforMS available on the client',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('sleepforms.js', ["client"]);
});

Package.onTest(function(api) {
  api.use('generalledger:sleepforms');
  api.addFiles('sleepforms-tests.js');
});

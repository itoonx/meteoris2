Package.describe({
  name: 'meteoris:meteoris-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The run time parts of Meteoris.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


var filesHtmlClient = [
    'client/assets/flash/flash.css'
  , 'client/assets/flash/flash.html'
  , 'client/assets/gridView/gridView.css'
  , 'client/css/frontend/frontend.css'
  , 'client/css/meteoris.css'
  , 'client/sass/meteoris.scss'
  , 'client/templates/basic/footer.html'
  , 'client/templates/basic/header.html',
  , 'client/templates/public/forbidden.html'
  , 'client/templates/public/loading.html'
  , 'client/templates/public/notFound.html'
  , 'client/main.html'
];

var filesJsClient = [
    'client/assets/alert/alert.js'
  , 'client/assets/flash/flash.js'
  , 'client/assets/formatter/formatter.js'
  , 'client/assets/gridView/gridView.js'
  , 'client/assets/simpleSchema/simpleSchema.js'
  , 'client/templates/basic/footer.js'
  , 'client/templates/basic/header.js',
  , 'client/templates/public/forbidden.js'
  , 'client/templates/public/notFound.js'
  , 'client/routers/sites.js'
  , 'client/routers/users.js'
  , 'client/routers/posts.js'
  , 'client/utils.js'
];

var filesViewHtmlClient = [
  //view sites
    'client/views/sites/en/footer_en.html'
  , 'client/views/sites/en/forbidden_en.html'
  , 'client/views/sites/en/index_en.html'
  , 'client/views/sites/en/notfound_en.html'
  , 'client/views/sites/es/footer_es.html'
  , 'client/views/sites/es/forbidden_es.html'
  , 'client/views/sites/es/index_es.html'
  , 'client/views/sites/es/notfound_es.html'
  , 'client/views/sites/fr/footer_fr.html'
  , 'client/views/sites/fr/forbidden_fr.html'
  , 'client/views/sites/fr/index_fr.html'
  , 'client/views/sites/fr/notfound_fr.html'
  , 'client/views/sites/id/footer_id.html'
  , 'client/views/sites/id/forbidden_id.html'
  , 'client/views/sites/id/index_id.html'
  , 'client/views/sites/id/notfound_id.html'
  , 'client/views/sites/zh/CN/footer_zh-CN.html'
  , 'client/views/sites/zh/CN/forbidden_zh-CN.html'
  , 'client/views/sites/zh/CN/index_zh-CN.html'
  , 'client/views/sites/zh/CN/notfound_zh-CN.html'
  , 'client/views/sites/index.html'
  //view users
  , 'client/views/users/_form.html'
  , 'client/views/users/forgetPassword.html'
  , 'client/views/users/index.html'
  , 'client/views/users/insert.html'
  , 'client/views/users/login.html'
  , 'client/views/users/profile.html'
  , 'client/views/users/register.html'
  , 'client/views/users/resetPassword.html'
  , 'client/views/users/update.html'
  , 'client/views/users/view.html'
  //view posts
  , 'client/views/posts/_form.html'
  , 'client/views/posts/index.html'
  , 'client/views/posts/insert.html'
  , 'client/views/posts/update.html'
  , 'client/views/posts/view.html'
];

var filesViewJsClient = [
  //view sites
  'client/views/sites/index.js'
  //view users
  , 'client/views/users/_form.js'
  , 'client/views/users/forgetPassword.js'
  , 'client/views/users/index.js'
  , 'client/views/users/insert.js'
  , 'client/views/users/login.js'
  , 'client/views/users/profile.js'
  , 'client/views/users/register.js'
  , 'client/views/users/resetPassword.js'
  , 'client/views/users/update.js'
  , 'client/views/users/view.js'
  //view posts
  , 'client/views/posts/_form.js'
  , 'client/views/posts/index.js'
  , 'client/views/posts/insert.js'
  , 'client/views/posts/update.js'
  , 'client/views/posts/view.js'
];

var filesJsBoth = [
    'lib/applications/configs/config.js'
  , 'lib/applications/configs/namespaces.js'
  , 'lib/controllers/MeteorisController.js'
  , 'lib/controllers/SitesController.js'
  , 'lib/controllers/UsersController.js'
  , 'lib/controllers/PostsController.js'
  , 'lib/collections/Images.js'
  , 'lib/collections/Users.js'
  , 'lib/collections/Posts.js'
  , 'lib/i18n.js'
  , 'lib/router.js'
];

var filesJSServer = [
    'server/Email.js'
  , 'server/ImagesServer.js'
  , 'server/UsersServer.js'
  , 'server/PostsServer.js'
  , 'server/config.js'
];

Package.onUse(function(api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 1.1.0.2.
  api.versionsFrom('1.1.0.2');

  api.use('iron:router');
  api.use('meteor-platform');
  api.use('aldeed:simple-schema');
  api.use('ground:db');
  api.use('momentjs:moment');
  api.use('cfs:standard-packages');
  api.use('service-configuration');
  api.use('meteorhacks:subs-manager');
  api.use('accounts-ui');
  api.use('kevohagan:sweetalert');
  api.use('liyu:sprintfjs');  

  api.addFiles(filesJsBoth, ['client', 'server']);
  api.export('MeteorisAlert', 'client');
  api.export('MeteorisFlash', 'client');
  api.export('MeteorisGridView', 'client');
  api.export('MeteorisSimpleSchema', 'client');
  api.export('MeteorisI18n', ['client', 'server']);
  api.export('MeteorisController', ['client', 'server']);
  api.export('SitesController', ['client', 'server']);
  api.export('UsersController', ['client', 'server']);
  api.export('PostsController', ['client', 'server']);
  api.export('App', ['client', 'server']);
  api.export('Images', ['client', 'server']);

  api.addFiles(filesJSServer, 'server');


  api.addFiles(filesHtmlClient, 'client');  // MUST add all templates FIRST, so helpers can find them
  api.addFiles(filesJsClient, 'client');    // Now put list your helpers **in execution order**.

  //add all files views
  api.addFiles(filesViewHtmlClient, 'client');
  api.addFiles(filesViewJsClient, 'client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('warehouseman:todos-pkg');
  api.addFiles('tests/todos-pkg-tests.js');
});
*/

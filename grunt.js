module.exports = function(grunt) {

  var task = grunt.task;
  var file = grunt.file;
  var utils = grunt.utils;
  var log = grunt.log;
  var verbose = grunt.verbose;
  var fail = grunt.fail;
  var option = grunt.option;
  var config = grunt.config;
  var template = grunt.template;
  var _ = utils._;

  /*global config:true, task:true*/
  config.init({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("m/d/yyyy") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      'dist/unprefix.js': ['<banner>', '<file_strip_banner:src/unprefix.js>']
    },
    min: {
      'dist/unprefix.min.js': ['dist/unprefix.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        console: true,
        node: true,
        exports: true,
        module: true
      }
    },
    uglify: {
      // mangle: { toplevel: true },
      // squeeze: { dead_code: false },
      // codegen: { quote_keys: true }
    }
  });

  // Default task.
  task.registerTask('default', 'lint qunit concat min');

};

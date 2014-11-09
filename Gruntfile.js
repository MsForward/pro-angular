
module.exports = function(grunt) {

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        base: 'public'
      },
      all: {}
    },
    wiredep: {
      build: {
        src:[ 'public/index.html' ]
      }
    },
    jshint: {
      all:[
        'Gruntfile.js',
        'index.js',
        'public/app/**/*.js'
      ]
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: [
          'public/app/js/**/*.js',
          'index.js'
        ],
        tasks: [ 'jshint' ]
      },
      css: {
        files: [ 'public/app/css/**/*.css' ],
        tasks: [ 'csslint' ]
      },
      html: {
        files: [ 'public/index.html' ]
      },
      configFiles: {
        files: [
          'Gruntfile.js',
          'bower.json',
          'package.json'
        ],
        tasks: [ 'build' ]
      }
    }
  });

  grunt.registerTask('default', [ 'lint', 'build', 'serve', 'watch' ]);

  grunt.registerTask('serve', [ 'connect' ]);

  grunt.registerTask('build', [ 'wiredep' ]);

  grunt.registerTask('lint', [ 'jshint' ]);
};
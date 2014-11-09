
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
      keepalive: {
        options: {
          keepalive: true
        }
      }
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
    }
  });

  grunt.registerTask('default', [ 'lint', 'build', 'serve' ]);

  grunt.registerTask('serve', [ 'connect:keepalive' ]);

  grunt.registerTask('build', [ 'wiredep' ]);

  grunt.registerTask('lint', [ 'jshint' ]);
};
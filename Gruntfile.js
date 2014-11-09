
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
    }
  });

  grunt.registerTask('default', []);

  grunt.registerTask('serve', ['connect:keepalive']);
};
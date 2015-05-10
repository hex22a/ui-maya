module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/maya.js']
    },


    uglify: {
      maya: {
        src: ["src/maya.js"],
        expand: true,
        ext: ".min.js"
      }
    }
  });
  grunt.registerTask('default', ['jshint', 'uglify']);
};
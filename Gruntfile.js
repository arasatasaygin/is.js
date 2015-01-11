module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'is.js',
                dest: 'is.min.js'
            }
        },
        jshint: {
            options: {
                '-W083': true,
            },
            src: ['is.js'],
        }
    }); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.registerTask('default', ['uglify', 'jshint']);
};
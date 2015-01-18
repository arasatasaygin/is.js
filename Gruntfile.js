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
        },
        mocha_phantomjs: {
            options: {
                // reporter: 'xunit',
                // output: 'test/result.xml'
            },
            all: ['test/*.html']
        }
    });
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.registerTask('default', ['uglify', 'jshint', 'mocha_phantomjs']);
};
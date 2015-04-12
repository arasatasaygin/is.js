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
            src: ['is.js']
        },
        mocha_phantomjs: {
            src: ['test/*.html']
        }
    });
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('build', ['uglify', 'jshint', 'mocha_phantomjs']);
    grunt.registerTask('test', ['mocha_phantomjs']);
};

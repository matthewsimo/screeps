module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'matthew.a.simo@gmail.com',
                password: 'P0ps!c13',
                branch: 'default'
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });

    grunt.registerTask('default', ['screeps']);
}

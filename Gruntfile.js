module.exports = function(grunt){
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'src/css/index.css': 'src/less/0_index.less'
                }
            },
        },
        watch: {
            css: {
                files: 'src/less/*.less',
                tasks: ['less'],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}; 


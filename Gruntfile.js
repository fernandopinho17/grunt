module.exports= function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production: {
                Options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        replace:  {
            dev: {
                Options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        scr: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                Options: {
                    removeComments: true,
                    collapsewhitespace: taskrunner
                },
                files: {
                    'prebuild/index.html' : 'src/index.htmls'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
}
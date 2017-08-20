var gulp = require('gulp');
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create()
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest




gulp.task('serv', function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
})

// Tarea para procesar el css

gulp.task('css', function(){
	var processors = [
		// autoprefixer({browsers : ['> 5%', 'ie 8']}),
		// atImport(),
		// mixins(),
		// cssnested,
		// lost(),
		// rucksack(),
		// cssnext({browsers : ['> 5%', 'ie 8']}),
		// mqpacker(),
		// csswring()
	]

		return gulp.src('./src/styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())

})

// Tarea para vigilar los cambios 

gulp.task('watch', function(){
	gulp.watch('./src/*.css', ['css'])
	gulp.watch('./dist/*.html').on('change', function(){
		browserSync.reload()
	})
	gulp.watch('./dist/*.js').on('change', function(){
		browserSync.reload()
	})


})


gulp.task('default', ['watch', 'serv', 'css'])
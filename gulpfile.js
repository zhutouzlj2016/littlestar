//首先引入gulp模块
var gulp = require('gulp');

//引入 gulp-stylus插件
var stylus = require('gulp-stylus');

//引入 压缩css插件
var minifycss = require('gulp-minify-css')

//引入js压缩插件
var uglify = require('gulp-uglify')

//引入实时启动node 插件
var nodemon = require('gulp-nodemon')
gulp.task('nodemon',function(ab){
	var ft = false;
	return nodemon({
		script:'./app.js'
	}).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});

var browserSync = require('browser-sync').create()

var reload = browserSync.reload;
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:9988'
		},
		files:['*'],
		port:9888,
		open:false
	})
})





//创建一个编译 stylus 的任务
gulp.task('stylus',function(){
	//获取要编译的文件
	//指定一个文件
	//gulp.src('./stylus/index.styl')
	//指定多个文件
	//gulp.src(['./stylus/index.styl','./stylus/css.styl'])
	//指定一个目录下的所有（不包含目录）
	//gulp.src('./stylus/*styl')
	//指定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行 stulus 编译
		.pipe(stylus())
		//输出编译后文件
		.pipe(gulp.dest('./public/css'))
})

//压缩 css 文件
//先执行stylus再执行minifycss
gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/mincss'))
});
//压缩 js 文件
gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});

//监听文件变更
gulp.task('wetcher',['stylus','uglify','minifycss','browserSync'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);
	gulp.watch('./public/css/**/*.css',['minifycss']);
	gulp.watch(['./public/js/**/*.js','./stylus/**/*.styl',
	           './public/css/**/*.css']).on('change',function(){
	           	reload();
	           })
})


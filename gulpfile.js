var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var livereload = require('gulp-livereload');
var myConfig = Object.create(webpackConfig);
	// myConfig.devtool = "eval";
	myConfig.debug = true;


// 默认task
gulp.task("default", ["webpack-dev-server"]);


// 读取配置
var myDevConfig = Object.create(webpackConfig);
myDevConfig.debug = true;

gulp.task("webpack-dev-server", function(callback) {
	//访问：http://localhost:3000/build/index.html
	var compiler = webpack(myConfig);
	//相当于webpack --watch
	compiler.watch({ 
		poll: true
	}, function(err, stats) {
	});

	var watchFile = ['./build/static/css/*.css','./build/static/js/*.js','./build/*.html'];
	// var watchFile = ['./build/static/css/*.css'];

	//webpack-dev-server
	require('./server');

	//此方案还不如下面一种，还需要装浏览器插件。
	livereload({
		start: true
	})
	livereload.listen();
	gulp.watch(watchFile, function(file) {
		console.log(file);
		gulp.src(file.path).pipe(livereload());
	});
});




var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {


	/*
	*	纠结啊！！！只想实现css更新，浏览器不刷新且样式生效，html，js更新浏览器刷新的功能。
		貌似没什么好的方案啊，用browser-sync也有瑕疵。
		除非只监控css，才能做到不刷新浏览器，但是问题是JS，html改动就得不到监控了
		如果都监控，webpack --watch竟然是全量rebuild（说好的只build change呢？？？)
		经过验证，应该是修改css，会导致js部分模块change，从而触发gulp watch js
		这就导致无论改什么都会刷新页面。。。。
	*
	*/

	var compiler = webpack(myConfig);
	compiler.watch({ // watch options:
		// aggregateTimeout: 300, // wait so long for more changes
		poll: true // use polling instead of native watchers
			// pass a number to set the polling interval
	}, function(err, stats) {
		// ...
	});
    browserSync.init({
        server: "./build",
        port: 8880
    });

    gulp.watch("dev/src/scss/*.scss", ['sass']);
    gulp.watch("build/static/css/*.css",function(){
		console.log(0);
		gulp.src("build/static/css/*.css")
	        .pipe(browserSync.stream());
	});

	gulp.watch("build/static/js/*.js",function(){console.log(1);
		gulp.src("build/static/js/*.js")
	        .pipe(browserSync.stream());
	});

	gulp.watch("build/*.html").on('change',function(){browserSync.reload();console.log(2);});
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	//测试sass可以不刷新页面生效样式
    return gulp.src("dev/src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/static/css"))
        .pipe(browserSync.stream());
});



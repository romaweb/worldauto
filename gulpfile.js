var gulp         = require("gulp"),
	sass         = require("gulp-sass"),
	plumber      = require("gulp-plumber"),
	postcss      = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	server       = require("browser-sync"),
	// mqpacker     = require("css-mqpacker"),
	minify       = require("gulp-csso"),
	rename       = require("gulp-rename"),
	imagemin     = require("gulp-imagemin"),
	run          = require("run-sequence"),
	del          = require("del"),
	uglify       = require("gulp-uglifyjs"),
	concat       = require("gulp-concat");


gulp.task("style", function() {
	gulp.src("scss/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer({browsers: [
				"last 15 versions"
				// "last 2 Chrome versions",
				// "last 2 Firefox versions",
				// "last 2 Opera versions",
				// "last 2 Edge versions"
			]})
			// mqpacker({
			// 	sort: true
			// })
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(server.reload({stream: true}))
		.pipe(minify())
		.pipe(rename(({suffix: ".min"})))
		.pipe(gulp.dest("build/css"))	
});

gulp.task("html" , function () {
	return gulp.src("*.html")
	.pipe(gulp.dest("build"))
	.pipe(server.reload({stream: true}));
});

gulp.task("images", function () {
	return gulp.src("buld/img/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true})
		]))
		.pipe(gulp.dest("build/img"));
});

gulp.task('scripts', function() {
    return gulp.src([
        "js/libs/jqueryForm.js",
        "js/libs/wb.js",
        "js/libs/device.js",
        "js/libs/svgxuse.js",
        "js/libs/baguetteBox.js",
        "js/libs/script.js"
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task("serve", function() { 
	server.init({
		server: "build",
		notify: false
	});

	gulp.watch("scss/**/*.scss", ["style"]);
	gulp.watch("*.html", ["html"]);
	// gulp.watch('build/js/**/*.js', server.reload);
});

gulp.task("copy", function() {
	return gulp.src([
		"fonts/**",
		"img/**",
		"js/**"
		// "*.html"
	], {
		base: "."
	})
	.pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
	return del("build");
});


gulp.task("build", function(fn) {
	run("clean", "copy", "html", "style", "images", fn);
});
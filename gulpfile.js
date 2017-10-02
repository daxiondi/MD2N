var gulp = require('gulp');
var gMarkdownToJson = require('gulp-markdown-to-json');
var gMarkdownToHtml = require('gulp-markdown');
var gMarkdownPDF = require('gulp-markdown-pdf'); 
var nMarked = require('marked');

// Markdown to HTML

gulp.task('MD2HTML',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownToHtml())
		.pipe(gulp.dest('./HTMLs'));
});

// Markdown to PDF

gulp.task('MD2PDF',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownPDF())
		.pipe(gulp.dest('./PDFs'));
});

// Markdown to JSON

gulp.task('MD2JSON',function(){
	gulp.src('./Markdowns/**/*.md')
		.pipe(gMarkdownToJson(nMarked))
		.pipe(gulp.dest('./JSONs'));
});

// Watching

gulp.task('watching',function(){
	gulp.watch('./Markdowns/**/*.md',['MD2HTML','MD2JSON','MD2PDF']);
});

// Default

gulp.task('default',['MD2HTML','MD2JSON','MD2PDF']);
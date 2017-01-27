var elixir = require('laravel-elixir');
var gulp = require('gulp');
var sass = require('gulp-sass');

elixir((mix) => {
	mix.sass('./app/resources/assets/sass/app.scss');
});
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const runTask = () =>
  src("styles/scss/**/*.scss").pipe(sass()).pipe(dest("styles/css/"));

const watchTask = () => watch(["styles/scss/**/*.scss"], runTask);

exports.default = series(runTask, watchTask);

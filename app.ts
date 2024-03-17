/**
 * Require Browsersync
 */
var bs = require("browser-sync");
bs.create();

/**
 * Run Browsersync with server config
 */
bs.init({
  server: "src",
  files: ["src/*.html", "src/**/*.css", "src/**/*.js"],
  plugins: [
    {
      module: "bs-html-injector",
      options: {
        files: ["scr/*.html"],
      },
    },
  ],
});

 const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js", 
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
    library: {
      type: "umd", // universal module definition
      name: "MyLibrary", // string | string[]
    },
    uniqueName: "admin-control-forum", // (defaults to package.json "name")
    name: "my-config",

  },
  module: {
   
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
    

        options: {
          presets: ["es2017"],
        },
        // options for the loader
        use: [
          {
            loader: 'babel-loader'
          },
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              // ...
            },
          },
        ],
        type: "javascript/auto",
        // specifies the module type
        /* Advanced actions (click to show) */
      },
      {
        oneOf: [
          // ... (rules)
        ],
        // only use one of these nested rules
      },
      {
        // ... (conditions)
        rules: [
          {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]         
          }
        ],
        // use all of these nested rules (combine with conditions to be useful)
      },
    ],
    /* Advanced module configuration (click to show) */
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    modules: ["node_modules", path.resolve(__dirname, "app")],
    // directories where to look for modules (in order)
    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
    alias: {
      // a list of module name aliases
      // aliases are imported relative to the current context
      module: "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
      // module: path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // module: path.resolve(__dirname, "app/third"),
      // alias "module" -> "./app/third" and "module/file" -> "./app/third/file"
      [path.resolve(__dirname, "app/module.js")]: path.resolve(
        __dirname,
        "app/alternative-module.js"
      ),
      // alias "./app/module.js" -> "./app/alternative-module.js"
    },
    /* Alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */
    /* Expert resolve configuration (click to show) */
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function (assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    },
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior, available external modules
  // and generated code style
  externals: ["react", /^@angular/],
  // Don't follow/bundle these modules, but request them at runtime from the environment
  externalsType: "var", // (defaults to output.library.type)
  // Type of externals, when not specified inline in externals
  externalsPresets: {
    /* ... */
  },
  // presets of externals
  ignoreWarnings: [/warning/],

  stats: {
    // lets you precisely control what bundle information gets displayed
    preset: "errors-only",
    // A stats preset

    /* Advanced global settings (click to show) */

    env: true,
    // include value of --env in the output
    outputPath: true,
    // include absolute output path in the output
    publicPath: true,
    // include public path in the output

    assets: true,
    // show list of assets in output
    /* Advanced assets settings (click to show) */

    entrypoints: true,
    // show entrypoints list
    chunkGroups: true,
    // show named chunk group list
    /* Advanced chunk group settings (click to show) */

    chunks: true,
    // show list of chunks in output
    /* Advanced chunk group settings (click to show) */

    modules: true,
    // show list of modules in output
    /* Advanced module settings (click to show) */
    /* Expert module settings (click to show) */

    /* Advanced optimization settings (click to show) */

    children: true,
    // show stats for child compilations

    logging: true,
    // show logging in output
    loggingDebug: /webpack/,
    // show debug type logging for some loggers
    loggingTrace: true,
    // show stack traces for warnings and errors in logging output

    warnings: true,
    // show warnings

    errors: true,
    // show errors
    errorDetails: true,
    // show details for errors
    errorStack: true,
    // show internal stack trace for errors
    moduleTrace: true,
    // show module trace for errors
    // (why was causing module referenced)

    builtAt: true,
    // show timestamp in summary
    errorsCount: true,
    // show errors count in summary
    warningsCount: true,
    // show warnings count in summary
    timings: true,
    // show build timing in summary
    version: true,
    // show webpack version in summary
    hash: true,
    // show build hash in summary
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    contentBase: __dirname +"/public/",
    port: 4000, // <--- Add this line and choose your own port number
  },
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      "/api": "https://backend-edu-forum.herokuapp.com/",
    },
    contentBase: path.join(__dirname, "public"), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: true, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
 
};

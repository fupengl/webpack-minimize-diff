import path from "node:path";
import { fileURLToPath } from "node:url";

import webpack from "webpack";
import { createFsFromVolume, Volume } from "memfs";
import TerserWebpackPlugin from "terser-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browserslist = {
  modern: [
    "Chrome >= 79",
    "Firefox >= 78",
    "Safari >= 13",
    "Edge >= 85",
    "iOS >= 13",
    "ChromeAndroid >= 79",
    "FirefoxAndroid >= 79",
  ],

  legacy: ["cover 99.5%", "not IE 11"],
};

const preset = {
  modern: [
    "@babel/preset-env",
    {
      modules: false,
      targets: {
        browsers: browserslist.modern,
      },
    },
  ],
  legacy: [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: {
        version: "3.19",
        proposals: true,
      },
      targets: {
        browsers: browserslist.legacy,
      },
    },
  ],
};

const terserOptions = {
  terser: {
    terserOptions: {
      format: {
        comments: false,
      },
    },
    extractComments: false,
    parallel: true,
  },
  esbuild: {
    minify: TerserWebpackPlugin.esbuildMinify,
    // Link to options - https://esbuild.github.io/api/#minify
    terserOptions: {
      minify: false,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: false,
    },
    extractComments: false,
    parallel: true,
  },
};

export default (
  fixture,
  mode = "modern",
  minimizer = "terser",
  memfs = false
) => {
  const { base } = path.parse(fixture);
  const compiler = webpack({
    mode: "production",
    context: __dirname,
    entry: `./${fixture}`,
    target: "web",
    output: {
      path: __dirname,
      filename: `./dist/${base}/${mode}.${minimizer}.js`,
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                preset[mode],
                "@babel/preset-react",
                [
                  "@babel/preset-typescript",
                  {
                    jsxPragma: "h",
                    jsxPragmaFrag: "Fragment",
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserWebpackPlugin(terserOptions[minimizer])],
    },
  });

  if (memfs) {
    compiler.outputFileSystem = createFsFromVolume(new Volume());
    compiler.outputFileSystem.join = path.join.bind(path);
  }

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(stats.toJson().errors);

      resolve(stats);
    });
  });
};

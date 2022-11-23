### terser esbuild 输出对比

#### 前置环境
- 相关依赖包,和theme-cli一致
```json
{
    "terser-webpack-plugin": "^5.3.6",
    "@babel/preset-react": "^7.13.13",
    "@babel/preset-typescript": "^7.13.0",
    "@babel/preset-env": "^7.20.2",
    "typescript": "4.9.3",
    "babel-loader": "^8.2.2",
    "@babel/core": "^7.14.3",
    "prettier": "2.7.1",
    "core-js": "3.26.1",
    "jquery": "^3.6.0",
    "swiper": "^6.7.5"
}
```
- terser params
```js
{
    terserOptions: {
      format: {
        comments: false,
      },
    },
    extractComments: false,
    parallel: true,
}
```
- esbuild params
```js
{
    terserOptions: {
      minify: false,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: false,
    },
    extractComments: false,
    parallel: true,
}
```
- browserslist 和theme-cli保持一致
```js
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
```

#### 对比结果

[terser,esbuild打包对比](./diff.md)

| 文件 | size (terser,esbuild) | diff (terser-esbuild) | time (terser,esbuild) |
| :-----| :----: | :----: | :----: |
| [class.ts modern](./dist/class.ts) | 190,231 | -0.0400390625k | 1013.03,238.97 |
| [class.ts legacy](./dist/class.ts) | 56869,66353 | -9.26171875k | 3402.14,1749.79 |
| [const.ts modern](./dist/const.ts) | 19,49 | -0.029296875k | 112.83,136.63 |
| [const.ts legacy](./dist/const.ts) | 19,47 | -0.02734375k | 96.88,106.70 |
| [jq.ts modern](./dist/jq.ts) | 90458,95409 | -4.8349609375k | 1836.10,569.07 |
| [jq.ts legacy](./dist/jq.ts) | 159217,178526 | -18.8564453125k | 5349.26,2757.39 |
| [optional_chaining.ts modern](./dist/optional_chaining.ts) | 83,106 | -0.0224609375k | 167.78,173.61 |
| [optional_chaining.ts legacy](./dist/optional_chaining.ts) | 81,104 | -0.0224609375k | 117.57,150.27 |
| [swiper.ts modern](./dist/swiper.ts) | 0,33 | -0.0322265625k | 1182.49,899.22 |
| [swiper.ts legacy](./dist/swiper.ts) | 0,33 | -0.0322265625k | 3480.82,3337.54 |

##### 抛开速度,esbuild的问题

1. esbuild输出的文件会大一些,这里terser做的优化会更多,会精简掉一些代码
    - esbuild每一行多多一个 var c = {}, 这是其实是 webpack_require 的全局变量
    - 参照function对比,一些没有业务影响的代码,terser会清理掉,不会输出
    - if/else terser 会精简成 三木处理
    - 类似枚举的对象,terser会去掉没有用的代码
2. legacy包,在需要导入 core-js 的地方,打包体积会偏大
3. 语法层面,esbuild主要是代码的翻译,minifySyntax: false,不会对语法做改变,和terser结果类似, terser会对语句做些缩短优化
4. esbuild minify: true的时候会做代码更小,类似 terser, 但是编译的时候就需要执行 编译的 target (默认就会输出到es6,此次bug产生原因), 目前主题还有些自定义babel插件,且有自己配置的browserlist,完全使用esbuild会比较激进
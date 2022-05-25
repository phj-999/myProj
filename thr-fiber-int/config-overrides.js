const {
  override,
  fixBabelImports,
  addWebpackAlias,
  //addLessLoader,
} = require("customize-cra");

const path = require("path");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//生产环境打包-去除console.log、debugger；

const myPlugin = [
  new UglifyJsPlugin({
    // 开启打包缓存
    cache: true,
    // 开启多线程打包
    parallel: true,
    uglifyOptions: {
      warnings: false,// 删除警告
      compress: {
        drop_debugger: true, // 移除debugger
        drop_console: true,  // 移除console
      },
    },
  }),
];

module.exports = override(
  fixBabelImports("import", {
    //配置按需加载

    libraryName: "antd",

    libraryDirectory: "es",

    style: true,
  }),

  //addWebpackExternals({ //不做打包处理配置，如直接以cdn引入的

  // echarts: "window.echarts",

  // // highcharts:"window.highcharts"

  // }),

  addWebpackAlias({
    //路径别名
    "@": path.resolve(__dirname, "src"),
  }),

  //  addLessLoader({

  //  javascriptEnabled: true,

  //  modifyVars: {

  //  '@primary-color': '#1DA57A'

  //  }

  //  }),

  (config) => {
    //暴露webpack的配置 config ,evn
    // 去掉打包生产map 文件
    config.devtool =
      config.mode === "development" ? "cheap-module-source-map" : false;

    if (process.env.NODE_ENV === "production") config.devtool = false;

    if (process.env.NODE_ENV !== "development")
      config.plugins = [...config.plugins, ...myPlugin];

    return config;
  }
);

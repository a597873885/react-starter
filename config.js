// 生产环境配置
let config = {
    // 正式环境
    debug: false,
  
    // 域名
    host: 'localhost',
  
    // 服务端口
    port: 4000,
  
    analyzerPort: 4002,
  
    // 登录token，cookie 的名称
    auth_cookie_name: 'signin-cookie',
  
    // https://github.com/css-modules/css-modules
    class_scoped_name: '[hash:base64:8]',
  
    // 前端打包后，静态资源路径前缀
    // 生成效果如：//localhost:4000/app.bundle.js
    public_path: '//localhost:4000',
  
    name: 'React 同构脚手架', // 网站标题
  
    favicon: '<link rel="icon" href="/favicon.ico" />',
  
    // 添加内容到模版的head中
    head: `
      <meta name="renderer" content="webkit|ie-comp|ie-stand">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
      <link rel="stylesheet" href="assets/fonts/feather/feather.min.css">
      <link rel="stylesheet" href="assets/libs/highlight.js/styles/vs2015.css">
      <link rel="stylesheet" href="assets/libs/quill/dist/quill.core.css">
      <link rel="stylesheet" href="assets/libs/select2/dist/css/select2.min.css">
      <link rel="stylesheet" href="assets/libs/flatpickr/dist/flatpickr.min.css">
      <link rel="stylesheet" href="assets/css/theme.min.css" id="stylesheetLight">
      <link rel="stylesheet" href="assets/css/theme-dark.min.css" id="stylesheetDark">
    `,
  
    // 添加分析统计脚本
    analysis_script: ``
  }
  
  config.head += config.favicon
  
  // 开发环境配置
  if (process.env.NODE_ENV == 'development') {
    config.debug = true
    config.class_scoped_name = '[name]_[local]__[hash:base64:5]'
  }
  
  module.exports = config
  
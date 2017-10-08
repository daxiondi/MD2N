# MD2N

Markdown 文件批量转换成多种文件格式工具。

目前支持HTML/JSON/PDF格式的转换。

百度经验经验地址:[markdown 转换成HTML/PDF/JSON/word](http://jingyan.baidu.com/article/48b37f8ddefcbd1a64648809.html)

>NOTE: 生成的JSON文件中，json的值包含有HTML代码，如果介意或者这不是你需要的请自行处理。

## 使用方法

>NOTE: 命令都是在终端里进行的。

在开始之前，请确认你已经安装node.js。不会请移步[nodejs中文网](http://nodejs.cn/)

1. 下载并解压或者clone到本地
2. 进入MD2N 目录，
3. 执行命令：`npm install `
4. 然后把需要批量转换的Markdown 文件放到 `./Markdowns` 目录下。
5. 执行命令: `gulp`
6. 工具会自动把Markdown 文件批量转换成相应的文件。

## Task (任务说明-命令说明)

任务|命令| 说明
----|----|-----
MD2HTML | gulp MD2HTML | 把 markdown 转换成 HTML 文件。
MD2PDF | gulp MD2PDF | 把 markdown 转换成 PDF 文件。
MD2JSON| gulp MD2JSON| 把 markdown 转换成 JSON 文件。
watching | gulp watching| 监视 Markdowns 文件夹，一旦 markdown 文件被更改(新建、修改、删除)时自动进行转换。
default | gulp 或者 gulp default | 一次批量把markdown 文件转换成相应的HTML/JSON/PDF文件。

## 高级设置

因为只是一个普通的工具，没有进行进一步设置。如果你有自己其他需求，可以通过安装其他插件、修改`gulpfile.js` 来实现高度的自定义设置。 比如生成PDF 的纸张大小、页边距等；生成HTML的样式等等。

工具用到插件都在package.json 的`devDependencies`项里了，你可以通过自定义来按需配置和控制各个插件的文件处理方式。具体配置可以参考这些插件的`README.md` 文件。

## 其他

如果有什么疑问可以在经验留言或者在项目里提 issue（当然，这是一个非常简单的工具，相信大家都会的）。
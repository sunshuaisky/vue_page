# vue_page

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 配置
```bash
  page: 当前页数
	page_num: 总页数
	low_page: 最低多少页数显示全部
	more_page: 当页面处于开头结尾时候显示的页数(开头：前面的页数 结尾：后面的页数)
	little_page: 当页面处于开头结尾时候显示的页数(相反)
	mid_page: 中间页数
	start_page: 中间是开始页数
	end_page: 中间是结尾页数
  
  import page from './utils/page'
  
  Vue.use(page)
  
  this.page(page, page_num, low_page, more_page, little_page, mid_page, start_page, end_page)
  
```

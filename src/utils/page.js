/*
	page: 当前页数
	page_num: 总页数
	low_page: 最低多少页数显示全部
	more_page: 当页面处于开头结尾时候显示的页数(开头：前面的页数 结尾：后面的页数)
	little_page: 当页面处于开头结尾时候显示的页数(相反)
	mid_page: 中间页数
	start_page: 中间是开始页数
	end_page: 中间是结尾页数
*/
exports.install = function(Vue, options) {
	Vue.prototype.page = function(page, page_num, low_page, more_page, little_page, mid_page, start_page, end_page) {
		var page_arr = [];
		console.log(page)
		if (page_num <= low_page) {
			for (var n = 1; n <= page_num; n++) {
				page_arr.push(n);
			}
			return page_arr;
		} else {
			if (page < more_page) {
				for (var n = 1; n <= more_page; n++) {
					page_arr.push(n);
				}
				page_arr.push('...');
				for (var n = page_num - little_page + 1; n <= page_num; n++) {
					page_arr.push(n);
				}
				return page_arr;
			} else if (page >= more_page && page <= page_num - more_page) {
				for (var n = 1; n <= start_page; n++) {
					page_arr.push(n);
				}
				page_arr.push('...');
				for (var n = page - Math.floor(mid_page / 2); n <= page + Math.ceil(mid_page / 2) - 1; n++) {
					page_arr.push(n);
				}
				page_arr.push('...');
				for (var n = page_num - end_page + 1; n <= page_num; n++) {
					page_arr.push(n);
				}
				return page_arr;
			} else {
				for (var n = 1; n <= little_page; n++) {
					page_arr.push(n);
				}
				page_arr.push('...');
				for (var n = page_num - more_page + 1; n <= page_num; n++) {
					page_arr.push(n);
				}
				return page_arr;
			}
		}
	};
};
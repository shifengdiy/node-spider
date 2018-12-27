const chr = require('cheerio');
const ax = require('axios');
const request = require('request');
const fs = require('fs');
const qs = require('querystring');

let reqUrl = 'https://movie.douban.com/j/new_search_subjects?sort=S&range=0,10&tags=%E7%94%B5%E5%BD%B1&start=0';

let getTop20Movie = function(){
	ax({
		method: 'get',
		url: reqUrl,
		headers: {
			'Accept':' application/json, text/plain, */*',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'zh-CN,zh;q=0.9',
			'Connection':' keep-alive',
			'Cookie': 'll="108296"; bid=z_1KVt04Qkg; __utmc=30149280; __utmc=223695111; _vwo_uuid_v2=D7CD991634854FF16CBA8029EB502E979|f25a3c850ef4e410de5543f146e174ce; gr_user_id=85260381-3768-4033-9b9a-6514fa6596e3; viewed="30205451_27662697_30180673"; ct=y; ps=y; ue="shifengdiy@qq.com"; dbcl2="107168702:KTaw9Y683Ck"; ck=eU9U; push_doumail_num=0; push_noty_num=0; __utmz=30149280.1528036302.6.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1528036302.6.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ap=1; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1528543653%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DdOoKzcRILv_BCJJx9vI1M75Ml8EVJDcuAz6xEwoeRQ_djdw3o8MfE-p8n2WAQuNd%26wd%3D%26eqid%3Df78d569f0000ef78000000045b135ddf%22%5D; _pk_ses.100001.4cf6=*; __utma=30149280.287089321.1527938866.1528036302.1528543653.7; __utmb=30149280.0.10.1528543653; __utma=223695111.1743565415.1527938866.1528036302.1528543653.7; __utmb=223695111.0.10.1528543653; _pk_id.100001.4cf6=5f54c80f504a673e.1527938866.7.1528545358.1528036722.',
			'Host': 'movie.douban.com',
			'Referer': 'https://movie.douban.com/tag/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
		}
	})
	.then(function(res){
		if(res.data.data.length){
			let list = res.data.data;

			let newListStream = JSON.stringify(list);
			fs.writeFileSync('./static/Top20Movie.js', newListStream);
			console.log(`评分最高20部电影获取完毕!

		┏┓        ┏┓
┏┛┻━━━┛┻┓
┃                ┃
┃        ━        ┃
┃    ┳┛    ┗┳    ┃
┃                ┃
┃        ┻        ┃
┃                ┃
┗━┓        ┏━┛
			┃        ┃
			┃        ┃
			┃        ┗━━━┓
			┃                ┣┓
			┃                ┏┛
			┗┓┓┏━┳┓┏┛
				┃┫┫    ┃┫┫
				┗┻┛    ┗┻┛  
			`);
		}
	})
	.catch(function(err){
		console.log('发生错误', err);
	});
}

//开始执行
//getTop20Movie();

module.exports = getTop20Movie;
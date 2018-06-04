const chr = require('cheerio');
const ax = require('axios');
const fs = require('fs');

const maxPage = 500;
let index = 0;
let pageLimit = 20;
let start = 0;
let sumMovieList = [];

let reqUrl = 'https://movie.douban.com/j/new_search_subjects?sort=T&range=0,10&tags=&';

let getMovieList = function getMovieList(){
	setTimeout(function(){
		start = start + pageLimit;
		let url = `${reqUrl}start=${start}`;
		ax({
			method: 'get',
			url: url,
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'zh-CN,zh;q=0.9',
				'Connection': 'keep-alive',
				'Cookie': 'll="108296"; bid=z_1KVt04Qkg; __utmc=30149280; __utmc=223695111; _vwo_uuid_v2=D7CD991634854FF16CBA8029EB502E979|f25a3c850ef4e410de5543f146e174ce; gr_user_id=85260381-3768-4033-9b9a-6514fa6596e3; viewed="30205451_27662697_30180673"; ct=y; ps=y; ue="shifengdiy@qq.com"; dbcl2="107168702:KTaw9Y683Ck"; ck=eU9U; push_doumail_num=0; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1528036056%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DdOoKzcRILv_BCJJx9vI1M75Ml8EVJDcuAz6xEwoeRQ_djdw3o8MfE-p8n2WAQuNd%26wd%3D%26eqid%3Df78d569f0000ef78000000045b135ddf%22%5D; _pk_ses.100001.4cf6=*; push_noty_num=0; __utma=30149280.287089321.1527938866.1528011824.1528036302.6; __utmb=30149280.0.10.1528036302; __utmz=30149280.1528036302.6.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.1743565415.1527938866.1528011824.1528036302.6; __utmb=223695111.0.10.1528036302; __utmz=223695111.1528036302.6.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ap=1; _pk_id.100001.4cf6=5f54c80f504a673e.1527938866.6.1528036722.1528012002.',
				'Host': 'movie.douban.com',
				'Referer': 'https://movie.douban.com/tag/',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
			}
		})
		.then(function(res){
			var arr = res.data.data;
			if(arr){
				index++;
				sumMovieList = sumMovieList.concat(arr);
				console.log(`开始第${index}次查询...`);
				if(index > maxPage){
					console.log('全部电影获取完毕，开始写入');
					let listStream = JSON.stringify(sumMovieList);
					fs.writeFileSync('./static/alllist.js', listStream);
					return;
				}
				getMovieList();
			} else {
				console.log('查询提前结束，开始写入数据');
				console.log(`总共查询了${index}次，查询到${sumMovieList.length}条数据`);
				let listStream = JSON.stringify(sumMovieList);
				fs.writeFileSync('./static/alllist.js', listStream);
			}
		})
		.catch(function(err){
			console.log('获取电影列表发生错误', err);
		});
	}, 1 * 1000)
}

getMovieList();
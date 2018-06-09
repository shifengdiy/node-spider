//暂时不用这个
const chr = require('cheerio');
const ax = require('axios');
const request = require('request');
const fs = require('fs');
const qs = require('querystring');

let page_limit = 20;
let page_start = 20;
let tag = '热门';
let reqUrl = 'https://movie.douban.com/j/search_subjects';

let sumMovieList = [];
let sumMovieInfoArr = [];

let getMovieList = function getMovieList(){
	let mod = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=rank&page_limit=20&page_start=20';
	let url = `${reqUrl}?type=movie&tag=${tag}&sort=rank&page_limit=${page_limit}&page_start=${page_start}`;
	url = encodeURI(url);
	ax({
		method: 'get',
		url: url,
		headers: {
			'Accept': '*/*',
			'Accept-Encoding':' gzip, deflate, br',
			'Accept-Language': 'zh-CN,zh;q=0.9',
			'Connection': 'keep-alive',
			'Cookie': 'll="108296"; bid=z_1KVt04Qkg; __utmc=30149280; __utmc=223695111; _vwo_uuid_v2=D7CD991634854FF16CBA8029EB502E979|f25a3c850ef4e410de5543f146e174ce; gr_user_id=85260381-3768-4033-9b9a-6514fa6596e3; viewed="30205451_27662697_30180673"; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1527995877%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DdOoKzcRILv_BCJJx9vI1M75Ml8EVJDcuAz6xEwoeRQ_djdw3o8MfE-p8n2WAQuNd%26wd%3D%26eqid%3Df78d569f0000ef78000000045b135ddf%22%5D; _pk_ses.100001.4cf6=*; __utma=30149280.287089321.1527938866.1527938866.1527995877.2; __utmb=30149280.0.10.1527995877; __utmz=30149280.1527995877.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.1743565415.1527938866.1527938866.1527995877.2; __utmb=223695111.0.10.1527995877; __utmz=223695111.1527995877.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ct=y; _pk_id.100001.4cf6=5f54c80f504a673e.1527938866.2.1527996375.1527938892.',
			'Host': 'movie.douban.com',
			'Referer': 'https://movie.douban.com/explore',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
			'X-Requested-With': 'XMLHttpRequest',
		}
	})
	.then(function(res){
		let arr = res.data.subjects;
		sumMovieList = sumMovieList.concat(arr);
		if(arr.length < page_limit){
			console.log(`全部热门电影获取完毕，总共为${sumMovieList.length}部...`);

			//写入到文件中保存
			let listArrStream = `const movieList = ${JSON.stringify(sumMovieList)}`;
			fs.writeFileSync('./static/list.js', listArrStream);

			console.log('开始获取电影详情');
			getMovieInfoList(sumMovieList);
			return;
		}

		page_start = page_start + page_limit;
		getMovieList();

	})
	.catch(function(err){
		console.log('获取列表发生错误', err);
	});
}                                                                                                                               

let getMovieInfoList = async function(movieList){
	for(var i = 0;i < movieList.length;i++){
		var url = movieList[i].url;
		let movieDetail = await getMovieDetil(url);                                                                                                                                                                                                                   
		console.log(`第${i}篇电影获取完毕...`);
		sumMovieInfoArr.push(movieDetail);
	}

	let infoStream = JSON.stringify(sumMovieInfoArr);          
	fs.writeFileSync('./static/movieList.json', infoStream);
	console.log('全部电影写入完成!');
}

let getMovieDetil = function(url){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			ax.get(url)
			.then(function(res){
				let movie = {};
				let $ = chr.load(res.data);
				let infoList = $('#info').text().split('\n');

				for(let i = 0;i < infoList.length;i++){
					if(infoList[i]){
						let infoItem = infoList[i].trim().split(':');
						let key = infoItem[0];
						let val = infoItem[1];

						movie[key] = val;
					}

				}

				let rate = $('.rating_self .rating_num').text();
				let name = $('[property="v:itemreviewed"]').text();
				rate = parseFloat(rate);
				movie['名称'] = name;
				movie['评分'] = rate;
				movie['简介'] = $('#link-report').text();
				movie['海报'] = $('#mainpic img').attr('src');

				resolve(movie);
			})
			.catch(function(err){
				console.log('获取电影详情出现错误', err);
			});
		}, 1000);
	});
}

getMovieList();
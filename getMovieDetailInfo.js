const fs = require('fs');
const ax = require('axios');
const chr = require('cheerio');

let sumMovieList = [];
let postImgList = [];

let couter = 0;

let startQueryMovieList = async function(){
	//移除已有的电影详情目录，建立新的电影文件夹
	if(fs.existsSync('./movie')){
		fs.rmdirSync('./movie');
		fs.mkdirSync('./movie');
	} else {
		fs.mkdirSync('./movie');
	}
	

	let arrStream = fs.readFileSync('./static/allMovieList.js');
	let sumMovieList = JSON.parse(arrStream); //获得提前查询到的所有电影列表吗，数据中包括电影详细信息的链接地址
	for(let i = 0;i < sumMovieList.length;i++){
		let index = i + 1;
		let getUrl = sumMovieList[i].url;

		if (couter == 500) {
			//每获取发送五百条请求之后，休眠十分钟，防止反爬虫禁止爬取
			let a = await timeout();
			couter = 0;
		}
		try {
			var movieDetail = await getMovieDetail(getUrl);
			couter++;
		} catch (err) {
			console.log(`获取第${index}篇发生错误，停止请求`, err);
			throw(err);
		}

		if (movieDetail['电影']) {
			fs.writeFileSync(`./movie/movie-${index}.json`, JSON.stringify(movieDetail));
			console.log(`第${index}篇电影写入完毕...`);
		} else {
			console.log(`获取过程中发生错误，总共获取${index}条电影数据`, movieDetail);
			throw(0);
		}
	}

	console.log(`全部写入完成，good job!!!

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
	//process.exit();
}

let getMovieDetail = function(url){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			ax({
				method: 'get',
				url: url,
				headers: {
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
					'Accept-Encoding': 'gzip, deflate, br',
					'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
					'Cache-Control': 'no-cache',
					'Connection': 'keep-alive',
					'Cookie': 'bid=HP2Tumbyyt4; ll="108296"; gr_user_id=3ea1e71e-f1e7-45e4-9b8b-6eb4470704b9; viewed="1910450_20395127"; _vwo_uuid_v2=AFE8FC78AC7E21B5973854614E889A39|d36904634df12e77e9f0bbf08e25f24e; __utmc=30149280; __utmz=30149280.1528094582.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmc=223695111; ap=1; ps=y; ue="shifengdiy@qq.com"; push_noty_num=0; push_doumail_num=0',
					'Host': 'movie.douban.com',
					'Pragma': 'no-cache',
					'Upgrade-Insecure-Requests': 1,
					'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
				},
			})
			.then(function(res){
				let $ = chr.load(res.data);
				let movie = {};

				let name = $('[property="v:itemreviewed"]').text();
				movie['电影'] = name;

				let postUrl = $('#mainpic').find('img').attr('src');
				movie['海报'] = postUrl;
				postImgList.push(postUrl);

				let infoText = $('#info').text();
				let infoArr = infoText.split('\n');
				infoArr.map(function(el){
					if(el){
						el = el.trim().replace(/[ ]/g,"");
						let elItem = el.split(':');
						let key = elItem[0];
						let val = elItem[1];

						movie[key] = val; 
					}
				});

				let rate = $('.rating_self .rating_num').text();
				if(!isNaN(rate)){
					rate = parseFloat(rate);
				}
				movie['评分'] = rate;

				let intro = $('#link-report').text().trim();
				//去掉空格和换行
				let intro_1 = intro.replace(/[\r\n]/g,"").replace(/[ ]/g,"").replace(/\ +/g,"");  

				movie['简介'] = intro_1;

				resolve(movie);
			})
			.catch(function(err){
				reject(err);
			});
		}, 60 * 1000);
	});
}

let timeout = function(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(1);
		}, 10 * 60 * 1000)
	});
}

module.exports = startQueryMovieList;

const fs = require('fs');
const ax = require('axios');
const chr = require('cheerio');

let sumMovieList = [];
let postImgList = [];

let startQueryMovieList = async function(){
	let arrStream = fs.readFileSync('./static/alllist.js');
	let sumMovieList = JSON.parse(arrStream);

	for(let i = 0;i < sumMovieList.length;i++){
		let index = i + 1;
		let getUrl = sumMovieList[i].url;

		let movieDetail = await getMovieDetail(getUrl);

		if(movieDetail['电影']){
			fs.writeFileSync(`./movie/movie-${index}.json`, JSON.stringify(movieDetail));
			console.log(`第${index}篇电影写入完毕...`);
		} else {
			console.log(`获取过程中发生错误，总共获取${index}条电影数据`, movieDetail);
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
					'Cookie': 'bid=HP2Tumbyyt4; ll="108296"; gr_user_id=3ea1e71e-f1e7-45e4-9b8b-6eb4470704b9; viewed="1910450_20395127"; _vwo_uuid_v2=AFE8FC78AC7E21B5973854614E889A39|d36904634df12e77e9f0bbf08e25f24e; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1528094582%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DvoIDPB5yCLT0I4XqxOSxcwUTG-Et4J7MhoSNkkIJDob2EWJYNBWZjwXbEG1rf7Bp%26wd%3D%26eqid%3Dc1f6b5210003adfa000000065b14df72%22%5D; _pk_ses.100001.4cf6=*; __utma=30149280.2018189101.1526628759.1526628759.1528094582.2; __utmc=30149280; __utmz=30149280.1528094582.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.2126106219.1526628759.1526628759.1528094582.2; __utmb=223695111.0.10.1528094582; __utmc=223695111; __utmz=223695111.1528094582.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; ap=1; ps=y; ue="shifengdiy@qq.com"; __utmt=1; __utmb=30149280.2.9.1528095729037; dbcl2="107168702:CtZzUgzpxow"; ck=cYPk; push_noty_num=0; push_doumail_num=0; _pk_id.100001.4cf6=3785fa8f210be886.1526628759.2.1528095755.1526628759.',
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
		}, 1 * 1000);
	});
}

startQueryMovieList();
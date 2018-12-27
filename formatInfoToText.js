const fs =  require('fs');

const movieListString = fs.readFileSync('./static/allMovieList.js');
let movieList = JSON.parse(movieListString);

let writeFileString = ``;

movieList.map(function(el, index) {
  let movie = {};

  movie['电影'] = el.title;
  movie['评分'] = el.rate;
  movie['导演'] = el.directors;
  movie['主演'] = el.casts;
  movie['豆瓣链接'] = el.url;

  writeFileString = `${writeFileString}${index + 1}、电影名：${movie['电影']},  评分：${movie['评分']},  导演：${movie['导演']},  主演：${movie['主演']},  豆瓣链接：${movie['豆瓣链接']}\n`
});

fs.writeFileSync('./static/movieList.txt', writeFileString);


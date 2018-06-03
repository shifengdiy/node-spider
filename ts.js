let chr = require('cheerio');

let html = `<!DOCTYPE html>
<html lang="zh-cmn-Hans" class="ua-windows ua-webkit">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="renderer" content="webkit">
    <meta name="referrer" content="always">
    <title>
        捍卫者 (豆瓣)
</title>
    
    <meta name="baidu-site-verification" content="cZdR4xxR7RxmM4zE" />
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="Sun, 6 Mar 2005 01:00:00 GMT">
    
    <link rel="apple-touch-icon" href="https://img3.doubanio.com/f/movie/d59b2715fdea4968a450ee5f6c95c7d7a2030065/pics/movie/apple-touch-icon.png">
    <link href="https://img3.doubanio.com/f/shire/bf61b1fa02f564a4a8f809da7c7179b883a56146/css/douban.css" rel="stylesheet" type="text/css">
    <link href="https://img3.doubanio.com/f/shire/ae3f5a3e3085968370b1fc63afcecb22d3284848/css/separation/_all.css" rel="stylesheet" type="text/css">
    <link href="https://img3.doubanio.com/f/movie/8864d3756094f5272d3c93e30ee2e324665855b0/css/movie/base/init.css" rel="stylesheet">
    <script type="text/javascript">var _head_start = new Date();</script>
    <script type="text/javascript" src="https://img3.doubanio.com/f/movie/0495cb173e298c28593766009c7b0a953246c5b5/js/movie/lib/jquery.js"></script>
    <script type="text/javascript" src="https://img3.doubanio.com/f/shire/40e5fd47dadd542654d9421d954f5296266c2e25/js/douban.js"></script>
    <script type="text/javascript" src="https://img3.doubanio.com/f/shire/0efdc63b77f895eaf85281fb0e44d435c6239a3f/js/separation/_all.js"></script>
    
    <meta name="keywords" content="捍卫者,捍卫者,捍卫者影评,剧情介绍,电影图片,预告片,影讯,在线购票,论坛">
    <meta name="description" content="捍卫者电影简介和剧情介绍,捍卫者影评、图片、预告片、影讯、论坛、在线购票">
    <meta name="mobile-agent" content="format=html5; url=http://m.douban.com/movie/subject/27063335/"/>
    <link rel="alternate" href="android-app://com.douban.movie/doubanmovie/subject/27063335/" />
    <link rel="stylesheet" href="https://img3.doubanio.com/dae/cdnlib/libs/LikeButton/1.0.5/style.min.css">
    <script type="text/javascript" src="https://img3.doubanio.com/f/shire/77323ae72a612bba8b65f845491513ff3329b1bb/js/do.js" data-cfg-autoload="false"></script>
    <script type="text/javascript">
      Do.add('dialog', {path: 'https://img3.doubanio.com/f/shire/4ea3216519a6183c7bcd4f7d1a6d4fd57ce1a244/js/ui/dialog.js', type: 'js'});
      Do.add('dialog-css', {path: 'https://img3.doubanio.com/f/shire/8377b9498330a2e6f056d863987cc7a37eb4d486/css/ui/dialog.css', type: 'css'});
      Do.add('handlebarsjs', {path: 'https://img3.doubanio.com/f/movie/3d4f8e4a8918718256450eb6e57ec8e1f7a2e14b/js/movie/lib/handlebars.current.js', type: 'js'});
    </script>
    
  <script type='text/javascript'>
  var _vwo_code = (function() {
    var account_id = 249272,
      settings_tolerance = 0,
      library_tolerance = 2500,
      use_existing_jquery = false,
      // DO NOT EDIT BELOW THIS LINE
      f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());

  +function () {
    var bindEvent = function (el, type, handler) {
        var $ = window.jQuery || window.Zepto || window.$
       if ($ && $.fn && $.fn.on) {
           $(el).on(type, handler)
       } else if($ && $.fn && $.fn.bind) {
           $(el).bind(type, handler)
       } else if (el.addEventListener){
         el.addEventListener(type, handler, false);
       } else if (el.attachEvent){
         el.attachEvent("on" + type, handler);
       } else {
         el["on" + type] = handler;
       }
     }

    var _origin_load = _vwo_code.load
    _vwo_code.load = function () {
      var args = [].slice.call(arguments)
      bindEvent(window, 'load', function () {
        _origin_load.apply(_vwo_code, args)
      })
    }
  }()

  _vwo_settings_timer = _vwo_code.init();
  </script>


    <style type="text/css">
  
</style>
    <style type="text/css">img { max-width: 100%; }</style>
    <script type="text/javascript"></script>
    <link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/235db3e464bd3e76.css">

    <link rel="shortcut icon" href="https://img3.doubanio.com/favicon.ico" type="image/x-icon">
</head>

<body>
  
    <script type="text/javascript">var _body_start = new Date();</script>

    
    



    <link href="//img3.doubanio.com/dae/accounts/resources/321e246/shire/bundle.css" rel="stylesheet" type="text/css">



<div id="db-global-nav" class="global-nav">
  <div class="bd">
    
<div class="top-nav-info">
  <a href="https://www.douban.com/accounts/login?source=movie" class="nav-login" rel="nofollow">登录</a>
  <a href="https://www.douban.com/accounts/register?source=movie" class="nav-register" rel="nofollow">注册</a>
</div>


    
<div class="top-nav-doubanapp">
  <a href="https://www.douban.com/doubanapp/app?channel=top-nav" class="lnk-doubanapp">下载豆瓣客户端</a>
  <div id="top-nav-appintro" class="more-items">
    <p class="appintro-title">豆瓣</p>
    <p class="qrcode">扫码直接下载</p>
    <div class="download">
      <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=iOS">iPhone</a>
      <span>·</span>
      <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=Android" class="download-android">Android</a>
    </div>
    <div id="doubanapp-tip">
      <a href="https://www.douban.com/doubanapp/app?channel=qipao" class="tip-link">豆瓣 5.0 全新发布</a>
      <a href="javascript: void 0;" class="tip-close">×</a>
    </div>
  </div>
</div>

    


<div class="global-nav-items">
  <ul>
    <li class="">
      <a href="https://www.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-main&quot;,&quot;uid&quot;:&quot;0&quot;}">豆瓣</a>
    </li>
    <li class="">
      <a href="https://book.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-book&quot;,&quot;uid&quot;:&quot;0&quot;}">读书</a>
    </li>
    <li class="on">
      <a href="https://movie.douban.com"  data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-movie&quot;,&quot;uid&quot;:&quot;0&quot;}">电影</a>
    </li>
    <li class="">
      <a href="https://music.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-music&quot;,&quot;uid&quot;:&quot;0&quot;}">音乐</a>
    </li>
    <li class="">
      <a href="https://www.douban.com/location" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-location&quot;,&quot;uid&quot;:&quot;0&quot;}">同城</a>
    </li>
    <li class="">
      <a href="https://www.douban.com/group" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-group&quot;,&quot;uid&quot;:&quot;0&quot;}">小组</a>
    </li>
    <li class="">
      <a href="https://read.douban.com&#47;?dcs=top-nav&amp;dcm=douban" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-read&quot;,&quot;uid&quot;:&quot;0&quot;}">阅读</a>
    </li>
    <li class="">
      <a href="https://douban.fm&#47;?from_=shire_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-fm&quot;,&quot;uid&quot;:&quot;0&quot;}">FM</a>
    </li>
    <li class="">
      <a href="https://time.douban.com&#47;?dt_time_source=douban-web_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-time&quot;,&quot;uid&quot;:&quot;0&quot;}">时间</a>
    </li>
    <li class="">
      <a href="https://market.douban.com&#47;?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-market&quot;,&quot;uid&quot;:&quot;0&quot;}">市集</a>
    </li>
    <li>
      <a href="#more" class="bn-more"><span>更多</span></a>
      <div class="more-items">
        <table cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td>
                <a href="https://ypy.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-ypy&quot;,&quot;uid&quot;:&quot;0&quot;}">豆瓣摄影</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  </ul>
</div>

  </div>
</div>
<script>
  ;window._GLOBAL_NAV = {
    DOUBAN_URL: "https://www.douban.com",
    N_NEW_NOTIS: 0,
    N_NEW_DOUMAIL: 0
  };
</script>



    <script src="//img3.doubanio.com/dae/accounts/resources/321e246/shire/bundle.js" defer="defer"></script>




    



    <link href="//img3.doubanio.com/dae/accounts/resources/19507ad/movie/bundle.css" rel="stylesheet" type="text/css">




<div id="db-nav-movie" class="nav">
  <div class="nav-wrap">
  <div class="nav-primary">
    <div class="nav-logo">
      <a href="https:&#47;&#47;movie.douban.com">豆瓣电影</a>
    </div>
    <div class="nav-search">
      <form action="https:&#47;&#47;movie.douban.com/subject_search" method="get">
        <fieldset>
          <legend>搜索：</legend>
          <label for="inp-query">
          </label>
          <div class="inp"><input id="inp-query" name="search_text" size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" value=""></div>
          <div class="inp-btn"><input type="submit" value="搜索"></div>
          <input type="hidden" name="cat" value="1002" />
        </fieldset>
      </form>
    </div>
  </div>
  </div>
  <div class="nav-secondary">
    

<div class="nav-items">
  <ul>
    <li    ><a href="https://movie.douban.com/cinema/nowplaying/"
     >影讯&购票</a>
    </li>
    <li    ><a href="https://movie.douban.com/explore"
     >选电影</a>
    </li>
    <li    ><a href="https://movie.douban.com/tv/"
     >电视剧</a>
    </li>
    <li    ><a href="https://movie.douban.com/chart"
     >排行榜</a>
    </li>
    <li    ><a href="https://movie.douban.com/tag/"
     >分类</a>
    </li>
    <li    ><a href="https://movie.douban.com/review/best/"
     >影评</a>
    </li>
    <li    ><a href="https://movie.douban.com/annual/2017?source=navigation"
     >2017年度榜单</a>
    </li>
    <li    ><a href="https://movie.douban.com/standbyme/2017?source=navigation"
     >2017观影报告</a>
    </li>
  </ul>
</div>

  </div>
</div>

<script id="suggResult" type="text/x-jquery-tmpl">
  <li data-link="{{= url}}">
            <a href="{{= url}}" onclick="moreurl(this, {from:'movie_search_sugg', query:'{{= keyword }}', subject_id:'{{= id}}', i: '{{= index}}', type: '{{= type}}'})">
            <img src="{{= img}}" width="40" />
            <p>
                <em>{{= title}}</em>
                {{if year}}
                    <span>{{= year}}</span>
                {{/if}}
                {{if sub_title}}
                    <br /><span>{{= sub_title}}</span>
                {{/if}}
                {{if address}}
                    <br /><span>{{= address}}</span>
                {{/if}}
                {{if episode}}
                    {{if episode=="unknow"}}
                        <br /><span>集数未知</span>
                    {{else}}
                        <br /><span>共{{= episode}}集</span>
                    {{/if}}
                {{/if}}
            </p>
        </a>
        </li>
  </script>




    <script src="//img3.doubanio.com/dae/accounts/resources/19507ad/movie/bundle.js" defer="defer"></script>





    
    <div id="wrapper">
        

        
    <div id="content">
        

    <div id="dale_movie_subject_top_icon"></div>
    <h1>
        <span property="v:itemreviewed">捍卫者</span>
            <span class="year">(2017)</span>
    </h1>

        <div class="grid-16-8 clearfix">
            

            
            <div class="article">
                
    

    





        <div class="indent clearfix">
            <div class="subjectwrap clearfix" xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Movie">
                <div class="subject clearfix">
                    



<div id="mainpic" class="">
    <a class="nbgnbg" href="https://movie.douban.com/subject/27063335/photos?type=R" title="点击看更多海报">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498542692.webp" title="点击看更多海报" alt="捍卫者" rel="v:image" />
   </a>
</div>

                    


<div id="info">
        <span ><span class='pl'>导演</span>: <span class='attrs'><a href="/celebrity/1380918/" rel="v:directedBy">廖希</a> / <a href="/celebrity/1361259/" rel="v:directedBy">韩平</a></span></span><br/>
        <span ><span class='pl'>编剧</span>: <span class='attrs'><a href="/celebrity/1325384/">啸杨</a> / <a href="/celebrity/1380942/">却却</a> / <a href="/celebrity/1380918/">廖希</a></span></span><br/>
        <span class="actor"><span class='pl'>主演</span>: <span class='attrs'><a href="/celebrity/1327332/" rel="v:starring">白恩</a> / <a href="/celebrity/1330093/" rel="v:starring">吕星辰</a> / <a href="/celebrity/1323878/" rel="v:starring">赫子铭</a> / <a href="/celebrity/1376048/" rel="v:starring">王璐</a> / <a href="/celebrity/1359883/" rel="v:starring">宋撼寰</a> / <a href="/celebrity/1380919/" rel="v:starring">杨俊生</a> / <a href="/celebrity/1203472/" rel="v:starring">小林成男</a> / <a href="/celebrity/1337324/" rel="v:starring">冯家妹</a> / <a href="/celebrity/1358121/" rel="v:starring">晓凡</a> / <a href="/celebrity/1380921/" rel="v:starring">陈俊杰</a> / <a href="/celebrity/1354011/" rel="v:starring">美浓轮泰史</a> / <a href="/celebrity/1380920/" rel="v:starring">刘骏焘</a></span></span><br/>
        <span class="pl">类型:</span> <span property="v:genre">剧情</span> / <span property="v:genre">历史</span> / <span property="v:genre">战争</span><br/>
        
        <span class="pl">制片国家/地区:</span> 中国大陆<br/>
        <span class="pl">语言:</span> 汉语普通话<br/>
        <span class="pl">上映日期:</span> <span property="v:initialReleaseDate" content="2017-09-22(中国大陆)">2017-09-22(中国大陆)</span> / <span property="v:initialReleaseDate" content="2017-06-22(上海电影节)">2017-06-22(上海电影节)</span><br/>
        <span class="pl">片长:</span> <span property="v:runtime" content="109">109分钟</span><br/>
        <span class="pl">又名:</span> 姚子青 / Defenders<br/>
        <span class="pl">IMDb链接:</span> <a href="http://www.imdb.com/title/tt7176170" target="_blank" rel="nofollow">tt7176170</a><br>

</div>




                </div>
                    


<div id="interest_sectl">
    <div class="rating_wrap clearbox" rel="v:rating">
        <div class="clearfix">
          <div class="rating_logo ll">
              豆瓣评分
          </div>
          <div class="output-btn-wrap rr" style="display:none">
            <img src="https://img3.doubanio.com/f/movie/692e86756648f29457847c5cc5e161d6f6b8aaac/pics/movie/reference.png" />
            <a class="download-output-image" href="#">引用</a>
          </div>
          
          
        </div>
        


<div class="rating_self clearfix" typeof="v:Rating">
    <strong class="ll rating_num" property="v:average">8.2</strong>
    <span property="v:best" content="10.0"></span>
    <div class="rating_right ">
        <div class="ll bigstar bigstar40"></div>
        <div class="rating_sum">
                <a href="collections" class="rating_people"><span property="v:votes">3982</span>人评价</a>
        </div>
    </div>
</div>
<div class="ratings-on-weight">
    
        <div class="item">
        
        <span class="stars5 starstop" title="力荐">
            5星
        </span>
        <div class="power" style="width:64px"></div>
        <span class="rating_per">39.7%</span>
        <br />
        </div>
        <div class="item">
        
        <span class="stars4 starstop" title="推荐">
            4星
        </span>
        <div class="power" style="width:59px"></div>
        <span class="rating_per">37.1%</span>
        <br />
        </div>
        <div class="item">
        
        <span class="stars3 starstop" title="还行">
            3星
        </span>
        <div class="power" style="width:26px"></div>
        <span class="rating_per">16.7%</span>
        <br />
        </div>
        <div class="item">
        
        <span class="stars2 starstop" title="较差">
            2星
        </span>
        <div class="power" style="width:7px"></div>
        <span class="rating_per">4.4%</span>
        <br />
        </div>
        <div class="item">
        
        <span class="stars1 starstop" title="很差">
            1星
        </span>
        <div class="power" style="width:3px"></div>
        <span class="rating_per">2.0%</span>
        <br />
        </div>
</div>

    </div>
        <div class="rating_betterthan">
            好于 <a href="/typerank?type_name=战争&type=22&interval_id=80:70&action=">76% 战争片</a><br/>
            好于 <a href="/typerank?type_name=历史&type=4&interval_id=85:75&action=">82% 历史片</a><br/>
        </div>
</div>


                
            </div>
                




<div id="interest_sect_level" class="clearfix">
        
            <a href="https://www.douban.com/reason=collectwish&amp;ck=" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-27063335-wish">
                <span>想看</span>
            </a>
            <a href="https://www.douban.com/reason=collectcollect&amp;ck=" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-27063335-collect">
                <span>看过</span>
            </a>
        <div class="ll j a_stars">
            
    
    评价:
    <span id="rating"> <span id="stars" data-solid="https://img3.doubanio.com/f/shire/5a2327c04c0c231bced131ddf3f4467eb80c1c86/pics/rating_icons/star_onmouseover.png" data-hollow="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" data-solid-2x="https://img3.doubanio.com/f/shire/7258904022439076d57303c3b06ad195bf1dc41a/pics/rating_icons/star_onmouseover@2x.png" data-hollow-2x="https://img3.doubanio.com/f/shire/95cc2fa733221bb8edd28ad56a7145a5ad33383e/pics/rating_icons/star_hollow_hover@2x.png">

            <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-27063335-1">
        <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star1" width="16" height="16"/></a>
            <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-27063335-2">
        <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star2" width="16" height="16"/></a>
            <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-27063335-3">
        <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star3" width="16" height="16"/></a>
            <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-27063335-4">
        <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star4" width="16" height="16"/></a>
            <a href="https://www.douban.com/register?reason=rate" class="j a_show_login" name="pbtn-27063335-5">
        <img src="https://img3.doubanio.com/f/shire/2520c01967207a1735171056ec588c8c1257e5f8/pics/rating_icons/star_hollow_hover.png" id="star5" width="16" height="16"/></a>
    </span><span id="rateword" class="pl"></span>
    <input id="n_rating" type="hidden" value=""  />
    </span>

        </div>
    

</div>


            


















<div class="gtleft">
    <ul class="ul_subject_menu bicelink color_gray pt6 clearfix">
        
    
        
                <li> 
    <img src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif" />&nbsp;
        <a onclick="moreurl(this, {from:'mv_sbj_wr_cmnt_login'})" class="j a_show_login" href="https://www.douban.com/register?reason=review" rel="nofollow">写短评</a>
 </li>
                    <li> 
    
    <img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" />&nbsp;
        <a onclick="moreurl(this, {from:'mv_sbj_wr_rv_login'})" class="j a_show_login" href="https://www.douban.com/register?reason=review" rel="nofollow">写影评</a>
 </li>
                    <li> 
    <img src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif" />&nbsp;
    <a href="/subject/27063335/questions/ask?from=subject_top">提问题</a>
 </li>
                <li> 
    



 </li>
                <li> 
   

   
    
    <span class="rec" id="电影-27063335">
    <a href= "#"
        data-type="电影"
        data-url="https://movie.douban.com/subject/27063335/"
        data-desc="电影《捍卫者》 (来自豆瓣) "
        data-title="电影《捍卫者》 (来自豆瓣) "
        data-pic="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498542692.jpeg"
        class="bn-sharing ">
        分享到
    </a> &nbsp;&nbsp;
    </span>

    <script>
        if (!window.DoubanShareMenuList) {
            window.DoubanShareMenuList = [];
        }
        var __cache_url = __cache_url || {};

        (function(u){
            if(__cache_url[u]) return;
            __cache_url[u] = true;
            window.DoubanShareIcons = 'https://img3.doubanio.com/f/shire/d15ffd71f3f10a7210448fec5a68eaec66e7f7d0/pics/ic_shares.png';

            var initShareButton = function() {
                $.ajax({url:u,dataType:'script',cache:true});
            };

            if (typeof Do == 'function' && 'ready' in Do) {
                Do(
                    'https://img3.doubanio.com/f/shire/8377b9498330a2e6f056d863987cc7a37eb4d486/css/ui/dialog.css',
                    'https://img3.doubanio.com/f/shire/4ea3216519a6183c7bcd4f7d1a6d4fd57ce1a244/js/ui/dialog.js',
                    'https://img3.doubanio.com/f/movie/c4ab132ff4d3d64a83854c875ea79b8b541faf12/js/movie/lib/qrcode.min.js',
                    initShareButton
                );
            } else if(typeof Douban == 'object' && 'loader' in Douban) {
                Douban.loader.batch(
                    'https://img3.doubanio.com/f/shire/8377b9498330a2e6f056d863987cc7a37eb4d486/css/ui/dialog.css',
                    'https://img3.doubanio.com/f/shire/4ea3216519a6183c7bcd4f7d1a6d4fd57ce1a244/js/ui/dialog.js',
                    'https://img3.doubanio.com/f/movie/c4ab132ff4d3d64a83854c875ea79b8b541faf12/js/movie/lib/qrcode.min.js'
                ).done(initShareButton);
            }

        })('https://img3.doubanio.com/f/movie/32be6727ed3ad8f6c4a417d8a086355c3e7d1d27/js/movie/lib/sharebutton.js');
    </script>


  </li>
            

    </ul>

    <script type="text/javascript">
        $(function(){
            $(".ul_subject_menu li.rec .bn-sharing").bind("click", function(){
                $.get("/blank?sbj_page_click=bn_sharing");
            });
            $(".ul_subject_menu .create_from_menu").bind("click", function(e){
                e.preventDefault();
                var $el = $(this);
                var glRoot = document.getElementById('gallery-topics-selection');
                if (window.has_gallery_topics && glRoot) {
                    // 判断是否有话题
                    glRoot.style.display = 'block';
                } else {
                    location.href = $el.attr('href');
                }
            });
        });
    </script>
</div>




                





<div class="rec-sec">
<span class="rec">
    <script id="movie-share" type="text/x-html-snippet">
        
    <form class="movie-share" action="/j/share" method="POST">
        <div class="clearfix form-bd">
            <div class="input-area">
                <textarea name="text" class="share-text" cols="72" data-mention-api="https://api.douban.com/shuo/in/complete?alt=xd&amp;callback=?"></textarea>
                <input type="hidden" name="target-id" value="27063335">
                <input type="hidden" name="target-type" value="0">
                <input type="hidden" name="title" value="捍卫者‎ (2017)">
                <input type="hidden" name="desc" value="导演 廖希 主演 白恩 / 吕星辰 / 中国大陆 / 8.2分(3982评价)">
                <input type="hidden" name="redir" value=""/>
                <div class="mentioned-highlighter"></div>
            </div>

            <div class="info-area">
                    <img class="media" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498542692.webp" />
                <strong>捍卫者‎ (2017)</strong>
                <p>导演 廖希 主演 白恩 / 吕星辰 / 中国大陆 / 8.2分(3982评价)</p>
                <p class="error server-error">&nbsp;</p>
            </div>
        </div>
        <div class="form-ft">
            <div class="form-ft-inner">
                



                <span class="avail-num-indicator">140</span>
                <span class="bn-flat">
                    <input type="submit" value="推荐" />
                </span>
            </div>
        </div>
    </form>
    
    <div id="suggest-mention-tmpl" style="display:none;">
        <ul>
            {{#users}}
            <li id="{{uid}}">
              <img src="{{avatar}}">{{{username}}}&nbsp;<span>({{{uid}}})</span>
            </li>
            {{/users}}
        </ul>
    </div>


    </script>

        
        <a href="/accounts/register?reason=recommend"  class="j a_show_login lnk-sharing" share-id="27063335" data-mode="plain" data-name="捍卫者‎ (2017)" data-type="movie" data-desc="导演 廖希 主演 白恩 / 吕星辰 / 中国大陆 / 8.2分(3982评价)" data-href="https://movie.douban.com/subject/27063335/" data-image="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498542692.webp" data-properties="{}" data-redir="" data-text="" data-apikey="" data-curl="" data-count="10" data-object_kind="1002" data-object_id="27063335" data-target_type="rec" data-target_action="0" data-action_props="{&#34;subject_url&#34;:&#34;https:\/\/movie.douban.com\/subject\/27063335\/&#34;,&#34;subject_title&#34;:&#34;捍卫者‎ (2017)&#34;}">推荐</a>
</span>


</div>






            <script type="text/javascript">
                $(function() {
                    $('.collect_btn', '#interest_sect_level').each(function() {
                        Douban.init_collect_btn(this);
                    });
                    $('html').delegate(".indent .rec-sec .lnk-sharing", "click", function() {
                        moreurl(this, {
                            from : 'mv_sbj_db_share'
                        });
                    });
                });
            </script>
        </div>
            


    <div id="collect_form_27063335"></div>


        



<div class="related-info" style="margin-bottom:-10px;">
    <a name="intro"></a>
    
        
            
            
    <h2>
        <i class="">捍卫者的剧情简介</i>
              · · · · · ·
    </h2>

            <div class="indent" id="link-report">
                    
                        <span property="v:summary" class="">
                                　　一九三七年八月三十一日淞沪会战中，姚子青奉命率部五百余人守卫宝山县城。日军为扩大登陆地域，对宝山进行了海陆空协同的疯狂攻击。在装备落后，地势不利，没有援军的情况下，智勇双全的姚子青带领全营以寡敌众坚守孤城，灵活运用战术战略，从主动出击攻袭敌军到固守阵地顽强抵御，七日内击退了日军一次又一次的进攻，全营五百余人先后战死沙场。九月七日日军破城，姚子青率残部二十余人在城内展开激烈巷战，最终壮烈殉国。
                        </span>
                        

            </div>
</div>


    








<div id="celebrities" class="celebrities related-celebrities">

  
    <h2>
        <i class="">捍卫者的影人</i>
              · · · · · ·
            <span class="pl">
            (
                <a href="/subject/27063335/celebrities">全部 18</a>
            )
            </span>
    </h2>


  <ul class="celebrities-list from-subject __oneline">
        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1380918/" title="廖希 " class="">
      <div class="avatar" style="background-image: url(https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504865250.96.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1380918/" title="廖希 " class="name">廖希 </a></span>

      <span class="role" title="导演">导演</span>

    </div>
  </li>


        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1361259/" title="韩平 " class="">
      <div class="avatar" style="background-image: url(https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504865409.11.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1361259/" title="韩平 " class="name">韩平 </a></span>

      <span class="role" title="导演">导演</span>

    </div>
  </li>


        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1327332/" title="白恩 " class="">
      <div class="avatar" style="background-image: url(https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464847413.37.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1327332/" title="白恩 " class="name">白恩 </a></span>

      <span class="role" title="饰 姚子青">饰 姚子青</span>

    </div>
  </li>


        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1330093/" title="吕星辰 " class="">
      <div class="avatar" style="background-image: url(https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526985370.45.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1330093/" title="吕星辰 " class="name">吕星辰 </a></span>

      <span class="role" title="饰 曹素君">饰 曹素君</span>

    </div>
  </li>


        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1323878/" title="赫子铭 " class="">
      <div class="avatar" style="background-image: url(https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1354008370.47.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1323878/" title="赫子铭 " class="name">赫子铭 </a></span>

      <span class="role" title="饰 李大成">饰 李大成</span>

    </div>
  </li>


        
    

    
  
  <li class="celebrity">
    

  <a href="https://movie.douban.com/celebrity/1376048/" title="王璐 " class="">
      <div class="avatar" style="background-image: url(https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pq2OANw6VkCAcel_avatar_uploaded1498314122.53.webp)">
    </div>
  </a>

    <div class="info">
      <span class="name"><a href="https://movie.douban.com/celebrity/1376048/" title="王璐 " class="name">王璐 </a></span>

      <span class="role" title="饰 李仲贤">饰 李仲贤</span>

    </div>
  </li>


  </ul>
</div>


    


<link rel="stylesheet" href="https://img3.doubanio.com/f/verify/16c7e943aee3b1dc6d65f600fcc0f6d62db7dfb4/entry_creator/dist/author_subject/style.css">
<div id="author_subject" class="author-wrapper">
    <div class="loading"></div>
</div>
<script type="text/javascript">
    var answerObj = {
      ISALL: 'False',
      TYPE: 'movie',
      SUBJECT_ID: '27063335',
      USER_ID: 'None'
    }
</script>
<script type="text/javascript" src="https://img3.doubanio.com/f/movie/61252f2f9b35f08b37f69d17dfe48310dd295347/js/movie/lib/react/15.4/bundle.js"></script>
<script type="text/javascript" src="https://img3.doubanio.com/f/verify/ac140ef86262b845d2be7b859e352d8196f3f6d4/entry_creator/dist/author_subject/index.js"></script> 

    









    
    <div id="related-pic" class="related-pic">
        
    
    
    <h2>
        <i class="">捍卫者的视频和图片</i>
              · · · · · ·
            <span class="pl">
            (
                <a href="https://movie.douban.com/subject/27063335/trailer#trailer">预告片4</a>&nbsp;|&nbsp;<a href="/video/create?subject_id=27063335">添加视频评论</a>&nbsp;|&nbsp;<a href="https://movie.douban.com/subject/27063335/all_photos">图片78</a>&nbsp;·&nbsp;<a href="https://movie.douban.com/subject/27063335/mupload">添加</a>
            )
            </span>
    </h2>


        <ul class="related-pic-bd  ">
                <li class="label-trailer">
                    <a class="related-pic-video" href="https://movie.douban.com/trailer/221853/#content" title="预告片" style="background-image:url(https://img3.doubanio.com/img/trailer/medium/2500059896.jpg?)">
                    </a>
                </li>
                <li>
                    <a href="https://movie.douban.com/photos/photo/2500054439/"><img src="https://img1.doubanio.com/view/photo/sqxs/public/p2500054439.webp" alt="图片" /></a>
                </li>
                <li>
                    <a href="https://movie.douban.com/photos/photo/2500055137/"><img src="https://img1.doubanio.com/view/photo/sqxs/public/p2500055137.webp" alt="图片" /></a>
                </li>
                <li>
                    <a href="https://movie.douban.com/photos/photo/2500054479/"><img src="https://img1.doubanio.com/view/photo/sqxs/public/p2500054479.webp" alt="图片" /></a>
                </li>
                <li>
                    <a href="https://movie.douban.com/photos/photo/2498543454/"><img src="https://img3.doubanio.com/view/photo/sqxs/public/p2498543454.webp" alt="图片" /></a>
                </li>
        </ul>
    </div>



    
    



<style type="text/css">
.award li { display: inline; margin-right: 5px }
.awards { margin-bottom: 20px }
.awards h2 { background: none; color: #000; font-size: 14px; padding-bottom: 5px; margin-bottom: 8px; border-bottom: 1px dashed #dddddd }
.awards .year { color: #666666; margin-left: -5px }
.mod { margin-bottom: 25px }
.mod .hd { margin-bottom: 10px }
.mod .hd h2 {margin:24px 0 3px 0}
</style>



    








    <div id="recommendations" class="">
        
        
    <h2>
        <i class="">喜欢这部电影的人也喜欢</i>
              · · · · · ·
    </h2>

        
    
    <div class="recommendations-bd">
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26754233/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498831482.webp" alt="八佰" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26754233/?from=subject-page" class="" >八佰</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/4825006/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p605521063.webp" alt="喋血孤城" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/4825006/?from=subject-page" class="" >喋血孤城</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26990713/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2442222550.webp" alt="我的上高" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26990713/?from=subject-page" class="" >我的上高</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26445216/?from=subject-page" >
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2462745948.webp" alt="军舰岛" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26445216/?from=subject-page" class="" >军舰岛</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26607693/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2494950714.webp" alt="敦刻尔克" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26607693/?from=subject-page" class="" >敦刻尔克</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26325320/?from=subject-page" >
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.webp" alt="血战钢锯岭" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26325320/?from=subject-page" class="" >血战钢锯岭</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/4328443/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1018163890.webp" alt="高地战" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/4328443/?from=subject-page" class="" >高地战</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/1291824/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910900710.webp" alt="黑鹰坠落" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/1291824/?from=subject-page" class="" >黑鹰坠落</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/26761416/?from=subject-page" >
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.webp" alt="至暗时刻" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/26761416/?from=subject-page" class="" >至暗时刻</a>
            </dd>
        </dl>
        <dl class="">
            <dt>
                <a href="https://movie.douban.com/subject/1917171/?from=subject-page" >
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p973154238.webp" alt="硫磺岛的来信" class="" />
                </a>
            </dt>
            <dd>
                <a href="https://movie.douban.com/subject/1917171/?from=subject-page" class="" >硫磺岛的来信</a>
            </dd>
        </dl>
    </div>

    </div>



        


<script type="text/x-handlebar-tmpl" id="comment-tmpl">
    <div class="dummy-fold">
        {{#each comments}}
        <div class="comment-item" data-cid="id">
            <div class="comment">
                <h3>
                    <span class="comment-vote">
                            <span class="votes">{{votes}}</span>
                        <input value="{{id}}" type="hidden"/>
                        <a href="javascript:;" class="j {{#if ../if_logined}}a_vote_comment{{else}}a_show_login{{/if}}">有用</a>
                    </span>
                    <span class="comment-info">
                        <a href="{{user.path}}" class="">{{user.name}}</a>
                        {{#if rating}}
                        <span class="allstar{{rating}}0 rating" title="{{rating_word}}"></span>
                        {{/if}}
                        <span>
                            {{time}}
                        </span>
                        <p> {{content}} </p>
                    </span>
            </div>
        </div>
        {{/each}}
    </div>
</script>












    

    <div id="comments-section">
        <div class="mod-hd">
            
        <a class="comment_btn j a_show_login" href="https://www.douban.com/register?reason=review" rel="nofollow">
            <span>我要写短评</span>
        </a>

            
            
    <h2>
        <i class="">捍卫者的短评</i>
              · · · · · ·
            <span class="pl">
            (
                <a href="https://movie.douban.com/subject/27063335/comments?status=P">全部 1677 条</a>
            )
            </span>
    </h2>

        </div>
        <div class="mod-bd">
                
    <div class="tab-hd">
        <a id="hot-comments-tab" href="comments" data-id="hot" class="on">热门</a>&nbsp;/&nbsp;
        <a id="new-comments-tab" href="comments?sort=time" data-id="new">最新</a>&nbsp;/&nbsp;
        <a id="following-comments-tab" href="follows_comments" data-id="following"  class="j a_show_login">好友</a>
    </div>

    <div class="tab-bd">
        <div id="hot-comments" class="tab">
            
    
        
        <div class="comment-item" data-cid="1246010764">
            
    
    <div class="comment">
        <h3>
            <span class="comment-vote">
                <span class="votes">312</span>
                <input value="1246010764" type="hidden"/>
                <a href="javascript:;" class="j a_show_login" onclick="">有用</a>
            </span>
            <span class="comment-info">
                <a href="https://www.douban.com/people/luoying6/" class="">本来老六</a>
                    <span>看过</span>
                    <span class="allstar50 rating" title="力荐"></span>
                <span class="comment-time " title="2017-09-22 20:20:10">
                    2017-09-22
                </span>
            </span>
        </h3>
        <p class=""> 你们的背后是你们的浙江、四川、广东。
        </p>
    </div>

        </div>
        
        <div class="comment-item" data-cid="1245982576">
            
    
    <div class="comment">
        <h3>
            <span class="comment-vote">
                <span class="votes">234</span>
                <input value="1245982576" type="hidden"/>
                <a href="javascript:;" class="j a_show_login" onclick="">有用</a>
            </span>
            <span class="comment-info">
                <a href="https://www.douban.com/people/11786089/" class="">lqr021213</a>
                    <span>看过</span>
                    <span class="allstar50 rating" title="力荐"></span>
                <span class="comment-time " title="2017-09-22 13:58:07">
                    2017-09-22
                </span>
            </span>
        </h3>
        <p class=""> 淞沪会战保卫宝山有死无生浴血抗战！姚子青将军万岁！！！600壮士万岁！！！
        </p>
    </div>

        </div>
        
        <div class="comment-item" data-cid="1245936824">
            
    
    <div class="comment">
        <h3>
            <span class="comment-vote">
                <span class="votes">135</span>
                <input value="1245936824" type="hidden"/>
                <a href="javascript:;" class="j a_show_login" onclick="">有用</a>
            </span>
            <span class="comment-info">
                <a href="https://www.douban.com/people/haiyangchen/" class="">海扬尘</a>
                    <span>看过</span>
                    <span class="allstar40 rating" title="推荐"></span>
                <span class="comment-time " title="2017-09-24 13:55:53">
                    2017-09-24
                </span>
            </span>
        </h3>
        <p class=""> 成本低，画质是电影频道那档次的。剧情中规中矩，每个渲染的细节基本都能猜到导演会怎么用，但依然会被感动。这片子可以说它俗套，但没法说它不真诚不用心。导演并没有因为战史资料缺乏细节就胡来，在群魔乱舞的抗日神剧里，这是一部良心之作。遗憾是全片自始至终没有出现青天白日满地红的旗帜。
        </p>
    </div>

        </div>
        
        <div class="comment-item" data-cid="1211323159">
            
    
    <div class="comment">
        <h3>
            <span class="comment-vote">
                <span class="votes">69</span>
                <input value="1211323159" type="hidden"/>
                <a href="javascript:;" class="j a_show_login" onclick="">有用</a>
            </span>
            <span class="comment-info">
                <a href="https://www.douban.com/people/24274750/" class="">声色画报</a>
                    <span>看过</span>
                    <span class="allstar40 rating" title="推荐"></span>
                <span class="comment-time " title="2017-09-23 17:21:54">
                    2017-09-23
                </span>
            </span>
        </h3>
        <p class=""> 守城七日，玉石俱焚，又一次献上了泪水。已很久没有这种个人名义的英雄题材战争片，毕竟原名就叫姚子青，何况还是一名国民党将领，更为难得。影片战争场面效果合格，有血有肉有帅地描写了国军爱国将士们的鲜活形象，同时比较正面客观描写了作为敌方的日军形象，不煽动不丑化，也是创作成熟的象征。
        </p>
    </div>

        </div>
        
        <div class="comment-item" data-cid="1247013290">
            
    
    <div class="comment">
        <h3>
            <span class="comment-vote">
                <span class="votes">52</span>
                <input value="1247013290" type="hidden"/>
                <a href="javascript:;" class="j a_show_login" onclick="">有用</a>
            </span>
            <span class="comment-info">
                <a href="https://www.douban.com/people/chanel0214/" class="">Dagny</a>
                    <span>看过</span>
                    <span class="allstar40 rating" title="推荐"></span>
                <span class="comment-time " title="2017-09-24 19:27:44">
                    2017-09-24
                </span>
            </span>
        </h3>
        <p class=""> 从雨夜到巷战，哭肿了眼。“我们身后，就是你的浙江，你的贵州，你的江西，我们的广东和你们的四川。今天守卫的是宝山，捍卫的是国土！”姚子青与六百壮士永垂不朽！由此上溯到一千八百四十年，从那时起，为了反对内外敌人，争取民族独立和人民自由幸福，在历次斗争中牺牲的人民英雄们永垂不朽！
        </p>
    </div>

        </div>



                
                &gt; <a href="comments?sort=new_score&status=P" >更多短评1677条</a>
        </div>
        <div id="new-comments" class="tab">
            <div id="normal">
            </div>
            <div class="fold-hd hide">
                <a class="qa" href="/help/opinion#t2-q0" target="_blank">为什么被折叠？</a>
                <a class="btn-unfold" href="#">有一些短评被折叠了</a>
                <div class="qa-tip">
                    评论被折叠，是因为发布这条评论的帐号行为异常。评论仍可以被展开阅读，对发布人的账号不造成其他影响。如果认为有问题，可以<a href="https://help.douban.com/help/ask?category=movie">联系</a>豆瓣电影。
                </div>
            </div>
            <div class="fold-bd">
            </div>
            <span id="total-num"></span>
        </div>
        <div id="following-comments" class="tab">
            
    


        <div class="comment-item">
            你关注的人还没写过短评
        </div>

        </div>
    </div>


            
            
        </div>
    </div>



        

<link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/4ae0a7d24560a4ed.css">

<section class="topics mod">
    <header>
        <h2>
            捍卫者的话题 · · · · · ·
            <span class="pl">( <span class="gallery_topics">全部 <span id="topic-count"></span> 条</span> )</span>
        </h2>
    </header>

    




<section class="subject-topics">
    <div class="topic-guide" id="topic-guide">
        <img class="ic_question" src="//img3.doubanio.com/f/ithildin/b1a3edea3d04805f899e9d77c0bfc0d158df10d5/pics/export/icon_question.png">
        <div class="tip_content">
            <div class="tip_title">什么是话题</div>
            <div class="tip_desc">
                <div>无论是一部作品、一个人，还是一件事，都往往可以衍生出许多不同的话题。将这些话题细分出来，分别进行讨论，会有更多收获。</div>
            </div>
        </div>
        <img class="ic_guide" src="//img3.doubanio.com/f/ithildin/529f46d86bc08f55cd0b1843d0492242ebbd22de/pics/export/icon_guide_arrow.png">
        <img class="ic_close" id="topic-guide-close" src="//img3.doubanio.com/f/ithildin/2eb4ad488cb0854644b23f20b6fa312404429589/pics/export/close@3x.png">
    </div>

    <div id="topic-items"></div>

    <script>
        window.subject_id = 27063335;
        window.join_label_text = '写影评参与';

        window.topic_display_count = 4;
        window.topic_item_display_count = 1;
        window.no_content_fun_call_name = "no_topic";

        window.guideNode = document.getElementById('topic-guide');
        window.guideNodeClose = document.getElementById('topic-guide-close');
    </script>
    
        <link rel="stylesheet" href="https://img3.doubanio.com/f/ithildin/f731c9ea474da58c516290b3a6b1dd1237c07c5e/css/export/subject_topics.css">
        <script src="https://img3.doubanio.com/f/ithildin/d3590fc6ac47b33c804037a1aa7eec49075428c8/js/export/moment-with-locales-only-zh.js"></script>
        <script src="https://img3.doubanio.com/f/ithildin/835eac8ee5e30cc83d51346757849c85acfb02db/js/export/subject_topics.js"></script>

</section>

    <script>
        function no_topic(){
            $('#content .topics').remove();
        }
    </script>
</section>

<section class="reviews mod movie-content">
    <header>
        <a href="new_review" rel="nofollow" class="create-review comment_btn"
            data-isverify="False"
            data-verify-url="https://www.douban.com/accounts/phone/verify?redir=http://movie.douban.com/subject/27063335/new_review">
            <span>我要写影评</span>
        </a>
        <h2>
            捍卫者的影评 · · · · · ·
            <span class="pl">( <a href="reviews">全部 173 条</a> )</span>
        </h2>
    </header>

    

<style>
#gallery-topics-selection {
  position: fixed;
  width: 595px;
  padding: 40px 40px 33px 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 9999;
}
#gallery-topics-selection h1 {
  font-size: 18px;
  color: #007722;
  margin-bottom: 36px;
  padding: 0;
  line-height: 28px;
  font-weight: normal;
}
#gallery-topics-selection .gl_topics {
  border-bottom: 1px solid #dfdfdf;
  max-height: 298px;
  overflow-y: scroll;
}
#gallery-topics-selection .topic {
  margin-bottom: 24px;
}
#gallery-topics-selection .topic_name {
  font-size: 15px;
  color: #333;
  margin: 0;
  line-height: inherit;
}
#gallery-topics-selection .topic_meta {
  font-size: 13px;
  color: #999;
}
#gallery-topics-selection .topics_skip {
  display: block;
  cursor: pointer;
  font-size: 16px;
  color: #3377AA;
  text-align: center;
  margin-top: 33px;
}
#gallery-topics-selection .topics_skip:hover {
  background: transparent;
}
#gallery-topics-selection .close_selection {
  position: absolute;
  width: 30px;
  height: 20px;
  top: 46px;
  right: 40px;
  background: #fff;
  color: #999;
  text-align: right;
}
#gallery-topics-selection .close_selection:hover{
  background: #fff;
  color: #999;
}
</style>




        <div class="review_filter">
            <a href="javascript:;;" class="cur" data-sort="">热门</a href="javascript:;;"> /
            <a href="javascript:;;" data-sort="time">最新</a href="javascript:;;"> /
            <a href="javascript:;;" data-sort="follow">好友</a href="javascript:;;">
            
        </div>


        



<div class="review-list  ">
        
    

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8833648">
        <div class="main review-item" id="8833648">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/129141295/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u129141295-5.jpg">
        </a>

        <a href="https://www.douban.com/people/129141295/" property="v:reviewer" class="name">沉默是金</a>

            <span property="v:rating" class="allstar40 main-title-rating" title="推荐"></span>

        <span property="v:dtreviewed" content="2017-09-27" class="main-meta">2017-09-27 00:40:56</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8833648/">国产抗战片之新秀</a></h2>

                <div id="review_8833648_short" class="review-short" data-rid="8833648">
                    <div class="short-content">

                        想要去看电影《捍卫者》完全是出于一种好奇，知乎里有评论称这是近年来国产抗战电影的逆流。自然是因为它的题材。它讲述的是淞沪会战之前的宝山之战，毕业于黄埔军校的国民党少将姚之青带领部下誓死抵抗无论是人数还是装备都几倍于己方的日本军队，最终寡不敌众，战死沙场。 逆...

                        &nbsp;(<a href="javascript:;" id="toggle-8833648-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8833648_full" class="hidden">
                    <div id="review_8833648_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8833648" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8833648">
                                194
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8833648" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8833648">
                                14
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8833648/#comments" class="reply">134回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8838225">
        <div class="main review-item" id="8838225">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/153946733/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u153946733-2.jpg">
        </a>

        <a href="https://www.douban.com/people/153946733/" property="v:reviewer" class="name">Andyxie</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-09-30" class="main-meta">2017-09-30 00:15:45</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8838225/">将军孤冢无人问，戏子家事天下知</a></h2>

                <div id="review_8838225_short" class="review-short" data-rid="8838225">
                    <div class="short-content">
                            <p class="spoiler-tip">这篇影评可能有剧透</p>

                        《捍卫者》姚子青--将军孤冢无人问，戏子家事天下知!想哭!  9月22日上映的《保卫者》4天只411.4万的票房，没有高流量的明星制造班底、没有适宜的排片、豆瓣上也没有评分，但这不能说这部电影不行，也不能说这部影片不值得引荐。  本年是&#34;淞沪会战&#34;80周年，80年前的上海，打响了...

                        &nbsp;(<a href="javascript:;" id="toggle-8838225-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8838225_full" class="hidden">
                    <div id="review_8838225_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8838225" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8838225">
                                100
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8838225" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8838225">
                                2
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8838225/#comments" class="reply">11回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8869306">
        <div class="main review-item" id="8869306">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/xy5377/" class="avator">
            <img width="24" height="24" src="https://img1.doubanio.com/icon/u55011855-7.jpg">
        </a>

        <a href="https://www.douban.com/people/xy5377/" property="v:reviewer" class="name">啸杨</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-10-16" class="main-meta">2017-10-16 17:28:17</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8869306/">关于《捍卫者》的反思</a></h2>

                <div id="review_8869306_short" class="review-short" data-rid="8869306">
                    <div class="short-content">

                        作为一个参与者，实际上很难跳出主观意识反思这部电影，但不能因为主观，就放弃或者忽略主观背景下的客观反思。 作为一个参与者，实际上很难跳出主观意识反思这部电影，但不能因为主观，就放弃或者忽略主观背景下的客观反思。 作为一个参与者，实际上很难跳出主观意识反思这部...

                        &nbsp;(<a href="javascript:;" id="toggle-8869306-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8869306_full" class="hidden">
                    <div id="review_8869306_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8869306" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8869306">
                                53
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8869306" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8869306">
                                5
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8869306/#comments" class="reply">49回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8839429">
        <div class="main review-item" id="8839429">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/luoying6/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u1107668-42.jpg">
        </a>

        <a href="https://www.douban.com/people/luoying6/" property="v:reviewer" class="name">本来老六</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-09-30" class="main-meta">2017-09-30 18:05:19</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8839429/">为了忘却的纪念</a></h2>

                <div id="review_8839429_short" class="review-short" data-rid="8839429">
                    <div class="short-content">
                            <p class="spoiler-tip">这篇影评可能有剧透</p>

                        抗日战争、宝山、捍卫这几个词我们都知道，但淞沪会战八十周年，姚子青殉国八十周年就不一定很了解。一九三七年八月三十一日日军入侵上海，九月一日至九月七日，营长姚子青率部六百，除了勤务兵魏建臣突围报告战况，全员壮烈牺牲。这些，我都不知道。我甚至不知道宝山还有过城...

                        &nbsp;(<a href="javascript:;" id="toggle-8839429-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8839429_full" class="hidden">
                    <div id="review_8839429_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8839429" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8839429">
                                36
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8839429" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8839429">
                                1
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8839429/#comments" class="reply">5回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8872465">
        <div class="main review-item" id="8872465">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/160427790/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u160427790-1.jpg">
        </a>

        <a href="https://www.douban.com/people/160427790/" property="v:reviewer" class="name">真实故事计划</a>

            <span property="v:rating" class="allstar40 main-title-rating" title="推荐"></span>

        <span property="v:dtreviewed" content="2017-10-18" class="main-meta">2017-10-18 14:34:41</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8872465/">豆瓣7.8的三无抗战片</a></h2>

                <div id="review_8872465_short" class="review-short" data-rid="8872465">
                    <div class="short-content">

                        1937年，全面抗战爆发，日寇携军舰、重型火炮、重型炸弹等先进武器，叫嚣“三个月灭亡中国”。 日军海陆空三军已经将华东团团包围，但此时上海、江浙一带的工业力量还未能完成转移，能否牵制敌人保存国力，成为了抗争能否胜利的关键。 9月5日，日军集中30余艘军舰，掩护陆军向...

                        &nbsp;(<a href="javascript:;" id="toggle-8872465-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8872465_full" class="hidden">
                    <div id="review_8872465_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8872465" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8872465">
                                17
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8872465" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8872465">
                                6
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8872465/#comments" class="reply">12回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8834149">
        <div class="main review-item" id="8834149">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/150656020/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u150656020-2.jpg">
        </a>

        <a href="https://www.douban.com/people/150656020/" property="v:reviewer" class="name">新青年程卫</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-09-27" class="main-meta">2017-09-27 12:32:39</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8834149/">【勘欲录】丈夫许国，不必相送</a></h2>

                <div id="review_8834149_short" class="review-short" data-rid="8834149">
                    <div class="short-content">
                            <p class="spoiler-tip">这篇影评可能有剧透</p>

                        喜欢看电影，但基本不写影评，电影需要消化，在这方面我的消化能力确实不强。但是看完《捍卫者》还是有些话想说。 在个人的概念里，国产影片，一是导演不玩票（开小差），二是编剧不崩盘（不要无视观众智商），基本上国人都会给个不错的分数（我们得承认自身的观影水平确实有待...

                        &nbsp;(<a href="javascript:;" id="toggle-8834149-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8834149_full" class="hidden">
                    <div id="review_8834149_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8834149" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8834149">
                                42
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8834149" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8834149">
                                4
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8834149/#comments" class="reply">1回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8836334">
        <div class="main review-item" id="8836334">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/155787124/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u155787124-1.jpg">
        </a>

        <a href="https://www.douban.com/people/155787124/" property="v:reviewer" class="name">D武飛</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-09-28" class="main-meta">2017-09-28 22:12:40</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8836334/">目前为止，这是我看过的最好的国产战争片</a></h2>

                <div id="review_8836334_short" class="review-short" data-rid="8836334">
                    <div class="short-content">

                        三种影片必看：硬科幻，环保片，纪录片。  《捍卫者》不属于以上三种，但一部优秀的剧情片是可以拍出纪录片的感觉的，尤其是这种由真人真事改编的电影。一开始我对“抗日片”也是拒绝的，但看过该片的预告片之后就觉得此片并不简单，可以一看。由于参与了该片的宣发活动，我看...

                        &nbsp;(<a href="javascript:;" id="toggle-8836334-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8836334_full" class="hidden">
                    <div id="review_8836334_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8836334" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8836334">
                                40
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8836334" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8836334">
                                3
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8836334/#comments" class="reply">13回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8841206">
        <div class="main review-item" id="8841206">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/140423658/" class="avator">
            <img width="24" height="24" src="https://img1.doubanio.com/icon/user_normal.jpg">
        </a>

        <a href="https://www.douban.com/people/140423658/" property="v:reviewer" class="name">映像人生</a>

            <span property="v:rating" class="allstar40 main-title-rating" title="推荐"></span>

        <span property="v:dtreviewed" content="2017-10-01" class="main-meta">2017-10-01 18:34:00</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8841206/">这类片应该鼓励多拍，可以拨款组织学生观看，比搞基建有用</a></h2>

                <div id="review_8841206_short" class="review-short" data-rid="8841206">
                    <div class="short-content">

                        如果光从电影的角度评价，影片确实没有高票房的战狼2、敦刻尔克好看，导演太想求大而全面面俱到，反而缺乏重点、而细节又不经得住推敲（姚子青走出指挥部头也不回往后扔手榴弹那画面，找死没死成么；日军进攻都不找隐蔽成排上当靶子么，实际中国战场的伤亡比例远低于国共军队）...

                        &nbsp;(<a href="javascript:;" id="toggle-8841206-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8841206_full" class="hidden">
                    <div id="review_8841206_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8841206" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8841206">
                                12
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8841206" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8841206">
                                3
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8841206/#comments" class="reply">6回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8850399">
        <div class="main review-item" id="8850399">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/159675574/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u159675574-1.jpg">
        </a>

        <a href="https://www.douban.com/people/159675574/" property="v:reviewer" class="name">春如绣</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-10-06" class="main-meta">2017-10-06 20:27:46</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8850399/">“苟利国家生死以，岂因祸福避趋之”《捍卫者》观后</a></h2>

                <div id="review_8850399_short" class="review-short" data-rid="8850399">
                    <div class="short-content">
                            <p class="spoiler-tip">这篇影评可能有剧透</p>

                        根据1937年宝山守卫战改编。 有的电影，已经没有办法只当做电影。 本来已经决定不去看太暴力血腥的题材，今年却不知怎么，看了好几部战争片，钢锯岭、敦刻尔克，都是基于史实，但看发生在这片土地上的往事，触动还是更强烈。 屏幕上的他们在浴血奋战，屏幕外我的手边还放着冰激...

                        &nbsp;(<a href="javascript:;" id="toggle-8850399-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8850399_full" class="hidden">
                    <div id="review_8850399_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8850399" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8850399">
                                8
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8850399" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8850399">
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8850399/#comments" class="reply">1回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>

        
    
    <div xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Review" data-cid="8855860">
        <div class="main review-item" id="8855860">

            
    
    <header class="main-hd">
        <a href="https://www.douban.com/people/60870594/" class="avator">
            <img width="24" height="24" src="https://img3.doubanio.com/icon/u60870594-2.jpg">
        </a>

        <a href="https://www.douban.com/people/60870594/" property="v:reviewer" class="name">冰山一角</a>

            <span property="v:rating" class="allstar50 main-title-rating" title="力荐"></span>

        <span property="v:dtreviewed" content="2017-10-09" class="main-meta">2017-10-09 15:34:57</span>


    </header>


            <div class="main-bd">

                <h2><a href="https://movie.douban.com/review/8855860/">《捍卫者》：“姚子青，你怎么就这样死了呢？”</a></h2>

                <div id="review_8855860_short" class="review-short" data-rid="8855860">
                    <div class="short-content">

                        总之：好片，值得一看！！  《捍卫者》幕后创作有几点很打动我：1、最初动机来源：电影《捍卫者》主要出资方大boss 有一次和他的助理参观完纪念姚子青将军纪念馆，问身边助理（80后或90后）：你听过姚子青吗？ 助理：没听过……  大boss很感概（他是姚子青的老乡，广东平远人）...

                        &nbsp;(<a href="javascript:;" id="toggle-8855860-copy" class="unfold" title="展开">展开</a>)
                    </div>
                </div>

                <div id="review_8855860_full" class="hidden">
                    <div id="review_8855860_full_content" class="full-content"></div>
                </div>

                <div class="action">
                    <a href="javascript:;;" class="action-btn up" data-rid="8855860" title="有用">
                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png" />
                        <span id="r-useful_count-8855860">
                                6
                        </span>
                    </a>
                    <a href="javascript:;;" class="action-btn down" data-rid="8855860" title="没用">
                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png" />
                        <span id="r-useless_count-8855860">
                        </span>
                    </a>
                    <a href="https://movie.douban.com/review/8855860/#comments" class="reply">2回应</a>

                    <a href="javascript:;;" class="fold hidden">收起</a>
                </div>
            </div>
        </div>
    </div>




    

    

    <script type="text/javascript" src="https://img3.doubanio.com/misc/mixed_static/65822bd5bcb64024.js"></script>
    <!-- COLLECTED CSS -->
</div>








            <p class="pl">
                &gt;
                <a href="reviews">
                    更多影评173篇
                </a>
            </p>
</section>

<!-- COLLECTED JS -->

    <br/>

        <div class="section-discussion">
                
                <div class="mod-hd">
                        <a class="comment_btn j a_show_login" href="https://www.douban.com/register?reason=review" rel="nofollow"><span>添加新话题</span></a>
                    
    <h2>
        讨论区
         &nbsp; &middot;&nbsp; &middot;&nbsp; &middot;&nbsp; &middot;&nbsp; &middot;&nbsp; &middot;
    </h2>

                </div>
                
  <table class="olt"><tr><td><td><td><td></tr>
        
        <tr>
          <td class="pl"><a href="https://movie.douban.com/subject/27063335/discussion/615630702/" title="谁能告诉我删了11分钟的内容是什么？">谁能告诉我删了11分钟的内容是什么？</a></td>
          <td class="pl"><span>来自</span><a href="https://www.douban.com/people/158722474/">qiqi</a></td>
          <td class="pl"><span></span></td>
          <td class="pl"><span>2018-06-03</span></td>
        </tr>
        
        <tr>
          <td class="pl"><a href="https://movie.douban.com/subject/27063335/discussion/615628368/" title="求捍卫者电影中文字幕~~~~">求捍卫者电影中文字幕~~~~</a></td>
          <td class="pl"><span>来自</span><a href="https://www.douban.com/people/176338754/">Fantastic_Andy</a></td>
          <td class="pl"><span>1 回应</span></td>
          <td class="pl"><span>2018-06-02</span></td>
        </tr>
        
        <tr>
          <td class="pl"><a href="https://movie.douban.com/subject/27063335/discussion/615620637/" title="我想问个问题，我看了主演白恩的资料，说是出演过我的团长我的团。">我想问个问题，我看了主演白恩的资料，说是出演过...</a></td>
          <td class="pl"><span>来自</span><a href="https://www.douban.com/people/84390398/">       你太耀眼</a></td>
          <td class="pl"><span>3 回应</span></td>
          <td class="pl"><span>2018-06-01</span></td>
        </tr>
        
        <tr>
          <td class="pl"><a href="https://movie.douban.com/subject/27063335/discussion/615625298/" title="求字幕">求字幕</a></td>
          <td class="pl"><span>来自</span><a href="https://www.douban.com/people/92973509/">莫洛托夫鸡尾酒</a></td>
          <td class="pl"><span>1 回应</span></td>
          <td class="pl"><span>2018-05-31</span></td>
        </tr>
        
        <tr>
          <td class="pl"><a href="https://movie.douban.com/subject/27063335/discussion/615614219/" title="终于有资源了">终于有资源了</a></td>
          <td class="pl"><span>来自</span><a href="https://www.douban.com/people/151223005/">天满</a></td>
          <td class="pl"><span>24 回应</span></td>
          <td class="pl"><span>2018-05-31</span></td>
        </tr>
  </table>

                <p class="pl" align="right">
                    <a href="/subject/27063335/discussion/" rel="nofollow">
                        &gt; 去这部影片的讨论区（全部53条）
                    </a>
                </p>
        </div>

        
    
        
                





<div id="askmatrix">
    <div class="mod-hd">
        <h2>
            关于《捍卫者》的问题
            · · · · · ·
            <span class="pl">
                (<a href='https://movie.douban.com/subject/27063335/questions/?from=subject'>
                    全部2个
                </a>)
            </span>
        </h2>


        
    
    <a class='j a_show_login comment_btn'
        href='https://movie.douban.com/subject/27063335/questions/ask/?from=subject'>我来提问</a>

    </div>

    <div class="mod-bd">
        <ul class="">
            <li class="">
                <span class="tit">
                    <a href="https://movie.douban.com/subject/27063335/questions/756639/?from=subject" class="">
                            一部没有明星没有流量的战争电影为什么让这么多人打CALL？
                    </a>
                </span>
                <span class="meta">
                    1人回答
                </span>
            </li>
            <li class="">
                <span class="tit">
                    <a href="https://movie.douban.com/subject/27063335/questions/756259/?from=subject" class="">
                            这么好的电影怎么看不到高清的？这么重要的战略要地怎么只派一个营？
                    </a>
                </span>
                <span class="meta">
                    3人回答
                </span>
            </li>
        </ul>

        <p>&gt;
            <a href='https://movie.douban.com/subject/27063335/questions/?from=subject'>
                全部2个问题
            </a>
        </p>

    </div>
</div>



            


    <script type="text/javascript">
        $(function(){if($.browser.msie && $.browser.version == 6.0){
            var $info = $('#info'),
                maxWidth = parseInt($info.css('max-width'));
            if($info.width() > maxWidth) {
                $info.width(maxWidth);
            }
        }});
    </script>


            </div>
            <div class="aside">
                


    









    <!-- douban ad begin -->
    <div id="dale_movie_subject_top_right"></div>
    <div id="dale_movie_subject_top_middle"></div>
    <!-- douban ad end -->

    



<style type="text/css">
    .m4 {margin-bottom:8px; padding-bottom:8px;}
    .movieOnline {background:#FFF6ED; padding:10px; margin-bottom:20px;}
    .movieOnline h2 {margin:0 0 5px;}
    .movieOnline .sitename {line-height:2em; width:160px;}
    .movieOnline td,.movieOnline td a:link,.movieOnline td a:visited{color:#666;}
    .movieOnline td a:hover {color:#fff;}
    .link-bt:link,
    .link-bt:visited,
    .link-bt:hover,
    .link-bt:active {margin:5px 0 0; padding:2px 8px; background:#a8c598; color:#fff; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; display:inline-block;}
</style>



    







    
    <div class="tags">
        
        
    <h2>
        <i class="">豆瓣成员常用的标签</i>
              · · · · · ·
    </h2>

        <div class="tags-body">
                <a href="/tag/战争" class="">战争</a>
                <a href="/tag/淞沪抗战" class="">淞沪抗战</a>
                <a href="/tag/抗战" class="">抗战</a>
                <a href="/tag/历史" class="">历史</a>
                <a href="/tag/真实事件改编" class="">真实事件改编</a>
                <a href="/tag/民国" class="">民国</a>
                <a href="/tag/2017" class="">2017</a>
                <a href="/tag/国军" class="">国军</a>
        </div>
    </div>


    <div id="dale_movie_subject_inner_middle"></div>
    <div id="dale_movie_subject_download_middle"></div>
        








<div id="subject-doulist">
    
    
    <h2>
        <i class="">以下豆列推荐</i>
              · · · · · ·
            <span class="pl">
            (
                <a href="https://movie.douban.com/subject/27063335/doulists">全部</a>
            )
            </span>
    </h2>


    
    <ul>
            <li>
                <a href="https://www.douban.com/doulist/30299/" target="_blank">豆瓣电影【口碑榜】2018-02-24更新</a>
                <span>(影志)</span>
            </li>
            <li>
                <a href="https://www.douban.com/doulist/45323516/" target="_blank">2017第二十届上海国际电影节影片大全</a>
                <span>(妖灵妖)</span>
            </li>
            <li>
                <a href="https://www.douban.com/doulist/38954098/" target="_blank">在电光声影中寻找心灵的平静</a>
                <span>(无心恋战)</span>
            </li>
            <li>
                <a href="https://www.douban.com/doulist/46375940/" target="_blank">二战100部</a>
                <span>(孔府小鱼)</span>
            </li>
            <li>
                <a href="https://www.douban.com/doulist/3524358/" target="_blank">【2017年国内公映电影排期】</a>
                <span>(荔枝超人)</span>
            </li>
    </ul>

</div>

        








<div id="subject-others-interests">
    
    
    <h2>
        <i class="">谁在看这部电影</i>
              · · · · · ·
    </h2>

    
    <ul class="">
            
            <li class="">
                <a href="https://www.douban.com/people/155799600/" class="others-interest-avatar">
                    <img src="https://img3.doubanio.com/icon/u155799600-3.jpg" class="pil" alt="Simple">
                </a>
                <div class="others-interest-info">
                    <a href="https://www.douban.com/people/155799600/" class="">Simple</a>
                    <div class="">
                        10分钟前
                        看过
                        <span class="allstar50" title="力荐"></span>
                    </div>
                </div>
            </li>
            
            <li class="">
                <a href="https://www.douban.com/people/gasto/" class="others-interest-avatar">
                    <img src="https://img3.doubanio.com/icon/u1403090-15.jpg" class="pil" alt="秋风原">
                </a>
                <div class="others-interest-info">
                    <a href="https://www.douban.com/people/gasto/" class="">秋风原</a>
                    <div class="">
                        50分钟前
                        看过
                        <span class="allstar40" title="推荐"></span>
                    </div>
                </div>
            </li>
    </ul>

    
    <div class="subject-others-interests-ft">
        
            <a href="https://movie.douban.com/subject/27063335/collections">3928人看过</a>
                &nbsp;/&nbsp;
            <a href="https://movie.douban.com/subject/27063335/wishes">9293人想看</a>
    </div>

</div>



    
    

<!-- douban ad begin -->
<div id="dale_movie_subject_middle_right"></div>
<script type="text/javascript">
    (function (global) {
        if(!document.getElementsByClassName) {
            document.getElementsByClassName = function(className) {
                return this.querySelectorAll("." + className);
            };
            Element.prototype.getElementsByClassName = document.getElementsByClassName;

        }
        var articles = global.document.getElementsByClassName('article'),
            asides = global.document.getElementsByClassName('aside');

        if (articles.length > 0 && asides.length > 0 && articles[0].offsetHeight >= asides[0].offsetHeight) {
            (global.DoubanAdSlots = global.DoubanAdSlots || []).push('dale_movie_subject_middle_right');
        }
    })(this);
</script>
<!-- douban ad end -->



    <br/>

    
<p class="pl">订阅捍卫者的评论: <br/><span class="feed">
    <a href="https://movie.douban.com/feed/subject/27063335/reviews"> feed: rss 2.0</a></span></p>


            </div>
            <div class="extra">
                
    
<!-- douban ad begin -->
<div id="dale_movie_subject_bottom_super_banner"></div>
<script type="text/javascript">
    (function (global) {
        var body = global.document.body,
            html = global.document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        if (height >= 2000) {
            (global.DoubanAdSlots = global.DoubanAdSlots || []).push('dale_movie_subject_bottom_super_banner');
        }
    })(this);
</script>
<!-- douban ad end -->


            </div>
        </div>
    </div>

        
    <div id="footer">
            <div class="footer-extra"></div>
        
<span id="icp" class="fleft gray-link">
    &copy; 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司
</span>

<a href="https://www.douban.com/hnypt/variformcyst.py" style="display: none;"></a>

<span class="fright">
    <a href="https://www.douban.com/about">关于豆瓣</a>
    · <a href="https://www.douban.com/jobs">在豆瓣工作</a>
    · <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
    · <a href="https://www.douban.com/about?policy=disclaimer">免责声明</a>
    
    · <a href="https://help.douban.com/?app=movie" target="_blank">帮助中心</a>
    · <a href="https://www.douban.com/doubanapp/">移动应用</a>
    · <a href="https://www.douban.com/partner/">豆瓣广告</a>
</span>

    </div>

    </div>
    <script type="text/javascript" src="https://img3.doubanio.com/misc/mixed_static/5ab978426037309c.js"></script>
        
        
    <link rel="stylesheet" type="text/css" href="https://img3.doubanio.com/f/shire/8377b9498330a2e6f056d863987cc7a37eb4d486/css/ui/dialog.css" />
    <link rel="stylesheet" type="text/css" href="https://img3.doubanio.com/f/movie/1d829b8605b9e81435b127cbf3d16563aaa51838/css/movie/mod/reg_login_pop.css" />
    <script type="text/javascript" src="https://img3.doubanio.com/f/shire/77323ae72a612bba8b65f845491513ff3329b1bb/js/do.js" data-cfg-autoload="false"></script>
    <script type="text/javascript" src="https://img3.doubanio.com/f/shire/4ea3216519a6183c7bcd4f7d1a6d4fd57ce1a244/js/ui/dialog.js"></script>
    <script type="text/javascript">
        var HTTPS_DB='https://www.douban.com';
var account_pop={open:function(o,e){e?referrer="?referrer="+encodeURIComponent(e):referrer="?referrer="+window.location.href;var n="",i="",t=382;"reg"===o?(n="用户注册",i="https://accounts.douban.com/popup/login?source=movie#popup_register",t=480):"login"===o&&(n="用户登录",i="https://accounts.douban.com/popup/login?source=movie");var r=document.location.protocol+"//"+document.location.hostname,a=dui.Dialog({width:478,title:n,height:t,cls:"account_pop",isHideTitle:!0,modal:!0,content:"<iframe scrolling='no' frameborder='0' width='478' height='"+t+"' src='"+i+"' name='"+r+"'></iframe>"},!0),c=a.node;if(c.undelegate(),c.delegate(".dui-dialog-close","click",function(){var o=$("body");o.find("#login_msk").hide(),o.find(".account_pop").remove()}),$(window).width()<478){var u="";"reg"===o?u=HTTPS_DB+"/accounts/register"+referrer:"login"===o&&(u=HTTPS_DB+"/accounts/login"+referrer),window.location.href=u}else a.open();$(window).bind("message",function(o){"https://accounts.douban.com"===o.originalEvent.origin&&(c.find("iframe").css("height",o.originalEvent.data),c.height(o.originalEvent.data),a.update())})}};Douban&&Douban.init_show_login&&(Douban.init_show_login=function(o){var e=$(o);e.click(function(){var o=e.data("ref")||"";return account_pop.open("login",o),!1})}),Do(function(){$("body").delegate(".pop_register","click",function(o){o.preventDefault();var e=$(this).data("ref")||"";return account_pop.open("reg",e),!1}),$("body").delegate(".pop_login","click",function(o){o.preventDefault();var e=$(this).data("ref")||"";return account_pop.open("login",e),!1})});
    </script>

    
    
    
    




    
<script type="text/javascript">
    (function (global) {
        var newNode = global.document.createElement('script'),
            existingNode = global.document.getElementsByTagName('script')[0],
            adSource = '//erebor.douban.com/',
            userId = '',
            browserId = 'z_1KVt04Qkg',
            criteria = '7:抗战|7:赫子铭|7:中国大陆|7:二战|7:剧情|7:韩平|7:国军|7:美浓轮泰史|7:杨俊生|7:晓凡|7:战争|7:2017|7:吕星辰|7:淞沪抗战|7:宋撼寰|7:历史|7:民国|7:王璐|7:小林成男|7:白恩|7:真实事件改编|7:廖希|7:冯家妹|7:陈俊杰|7:刘骏焘|3:/subject/27063335/?tag=%E7%83%AD%E9%97%A8&amp;from=gaia',
            preview = '',
            debug = false,
            adSlots = ['dale_movie_subject_top_icon', 'dale_movie_subject_top_right', 'dale_movie_subject_top_middle', 'dale_movie_subject_inner_middle', 'dale_movie_subject_download_middle'];

        global.DoubanAdRequest = {src: adSource, uid: userId, bid: browserId, crtr: criteria, prv: preview, debug: debug};
        global.DoubanAdSlots = (global.DoubanAdSlots || []).concat(adSlots);

        newNode.setAttribute('type', 'text/javascript');
        newNode.setAttribute('src', 'https://img3.doubanio.com/f/adjs/cdc904d1376a43e44bbf399a0aff51973016cd77/ad.release.js');
        newNode.setAttribute('async', true);
        existingNode.parentNode.insertBefore(newNode, existingNode);
    })(this);
</script>











    
  









<script type="text/javascript">
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var p=(('https:' == document.location.protocol) ? 'https' : 'http'), u=p+'://fundin.douban.com/';
    _paq.push(['setTrackerUrl', u+'piwik']);
    _paq.push(['setSiteId', '100001']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.defer=true;
    g.async=true;
    g.src=p+'://img3.doubanio.com/dae/fundin/piwik.js';
    s.parentNode.insertBefore(g,s);
})();
</script>

<script type="text/javascript">
var setMethodWithNs = function(namespace) {
  var ns = namespace ? namespace + '.' : ''
    , fn = function(string) {
        if(!ns) {return string}
        return ns + string
      }
  return fn
}

var gaWithNamespace = function(fn, namespace) {
  var method = setMethodWithNs(namespace)
  fn.call(this, method)
}

var _gaq = _gaq || []
  , accounts = [
      { id: 'UA-7019765-1', namespace: 'douban' }
    , { id: 'UA-7019765-19', namespace: '' }
    ]
  , gaInit = function(account) {
      gaWithNamespace(function(method) {
        gaInitFn.call(this, method, account)
      }, account.namespace)
    }
  , gaInitFn = function(method, account) {
      _gaq.push([method('_setAccount'), account.id]);
      _gaq.push([method('_setSampleRate'), '5']);

      
  _gaq.push([method('_addOrganic'), 'google', 'q'])
  _gaq.push([method('_addOrganic'), 'baidu', 'wd'])
  _gaq.push([method('_addOrganic'), 'soso', 'w'])
  _gaq.push([method('_addOrganic'), 'youdao', 'q'])
  _gaq.push([method('_addOrganic'), 'so.360.cn', 'q'])
  _gaq.push([method('_addOrganic'), 'sogou', 'query'])
  if (account.namespace) {
    _gaq.push([method('_addIgnoredOrganic'), '豆瓣'])
    _gaq.push([method('_addIgnoredOrganic'), 'douban'])
    _gaq.push([method('_addIgnoredOrganic'), '豆瓣网'])
    _gaq.push([method('_addIgnoredOrganic'), 'www.douban.com'])
  }

      if (account.namespace === 'douban') {
        _gaq.push([method('_setDomainName'), '.douban.com'])
      }

        _gaq.push([method('_setCustomVar'), 1, 'responsive_view_mode', 'desktop', 3])

        _gaq.push([method('_setCustomVar'), 2, 'login_status', '0', 2]);

      _gaq.push([method('_trackPageview')])
    }

for(var i = 0, l = accounts.length; i < l; i++) {
  var account = accounts[i]
  gaInit(account)
}


;(function() {
    var ga = document.createElement('script');
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    ga.setAttribute('async', 'true');
    document.documentElement.firstChild.appendChild(ga);
})()
</script>

    <!-- brand27-docker-->

  <script>_SPLITTEST=''</script>
</body>

</html>
`;

let $ = chr.load(html);

let con = $('#info').text().slice('\n');
for(let k = 0;k < con.length;k++){
    if(con[k]){
        let item = $(con[k]);
        let key = item.find('.p1');
    }
}
$('#info').find('.p1').each(function(idx, el){
    let span = $(el);
    let key = span.text();

    let parent = span.parent().remove(span);
    let val = parent.text().trim();
});
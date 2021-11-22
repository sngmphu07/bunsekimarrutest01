	//　「都道府県名」　と　「値」
kenName = ["全国","北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川",
	"福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島",
	"香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],
kenValue = ["zennkoku","hokkaido","aomori","iwate","miyagi","akita","yamagata","fukushima","ibaraki","tochigi","gunma","saitama","chiba","tokyo",
	"kanagawa","niigata","toyama","ishikawa","fukui","yamanashi","nagano","gifu","shizuoka","aichi","mie","shiga","kyoto","osaka","hyogo",
	"nara","wakayama","tottori","shimane","okayama","hiroshima","yamaguchi","tokushima","kanagawa","ehime","kochi","fukuoka","saga",
	"nagano","kumamoto","oita","miyazaki","kagoshima","okinawa"]

	//　「職種名」　と　「値」
jobName	= ["国家公務員一般職","国家公務員税務職","裁判所職員","都道府県職員","市町村職員",
	"海上保安庁","刑務官","自衛隊","警察官","消防士"]
jobValue = ["job1","job2","job3","job4","job5",
	"job6","job7","job8","job9","job0"]

var init = function(){
	$(function(){
		var area = $('.area').text()
		var job = $('.job').text()
		
		for(value in kenValue){
			if(kenValue[value] === area.substring(4)){
				$('.area').text("地域：　" + kenName[value])
				break;
			}
		}
		
		for(value in jobValue){
			if(jobValue[value] === job.substring(4)){
				$('.job').text("地域：　" + jobName[value])
				break;
			}
		}
	})
}

init()
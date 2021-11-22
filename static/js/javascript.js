// 都道府県
var chihouOptG = [],		// 	「地方別」　のオプションのグループ
	kenOpt = [],			//	「都道府県名」　のオプション
	
	chihouName = ["全国","北海道","東北","関東","中部","近畿","中国","四国","九州"],	//　地方ごとの　「名前」
	chihouKenSu = [1,1,6,7,9,7,5,4,8]											//　地方ごとの　「都道府県数」

// 都道府県の　optgroup と　option を作る		
for(var i = 0, j = 0, x = 0; i < chihouName.length; i++){
	chihouOptG.push(document.createElement("optgroup"))
	chihouOptG[i].label = chihouName[i]
	while(j < x + chihouKenSu[i]){
		kenOpt.push(document.createElement("option"))
		kenOpt[j].text = kenName[j]
		kenOpt[j].value = kenValue[j]
		j++;
	}
	x = j;
}

//　職種
var	jobOptG = [],		// 	「職種別」　のオプションのグループ
	jobOpt = [],		//	「職種名」　のオプション
	
	jobGName = ["事務系公務員","公安系公務員"],			//　職種別の　「名前」
	jobGNumber = [5,5]								//　職種別の　「類数」

// 職種の　optgroup と　option を作る		
for(var i = 0, j = 0, x = 0; i < jobGName.length; i++){
	jobOptG.push(document.createElement("optgroup"))
	jobOptG[i].label = jobGName[i]
	while(j < x + jobGNumber[i]){
		jobOpt.push(document.createElement("option"))
		jobOpt[j].text = jobName[j]
		jobOpt[j].value = jobValue[j]
		j++;
	}
	x = j;
}
	
function init(){
	// 都道府県の　optgroup と　option を追加
	var x = 0, j = 0;
	for(i in chihouOptG){
		while(j < x + chihouKenSu[i]){
			chihouOptG[i].appendChild(kenOpt[j++]);
		}
		x = j;
		document.getElementById('todoufuken_list').appendChild(chihouOptG[i])
	}
	
	// 職種のの　optgroup と　option を追加
	var x = 0, j = 0;
	for(i in jobOptG){
		while(j < x + jobGNumber[i]){
			jobOptG[i].appendChild(jobOpt[j++]);
		}
		x = j;
		document.getElementById('job_list').appendChild(jobOptG[i])
	}
}

function shutudai(){
	$(function(){
		var rightVal = -300
		if($(".btn-gnavi").hasClass("open")){
			rightVal = -300
			$(".btn-gnavi").removeClass("open")
			
			$("#global-navi").stop().animate({
				right: rightVal
			}, 200)
		}
	})
	var url
	
	if(location.href.slice(-8) === "top_page")
		url = location.href.slice(0,-8) + "keikou/" + document.getElementById('todoufuken_list').value + "_" + document.getElementById('job_list').value
	else
		url =location.href + "keikou/" + document.getElementById('todoufuken_list').value + "_" + document.getElementById('job_list').value
	
	location.href = url
}

function houkoku(){
	window.open("https://docs.google.com/forms/d/e/1FAIpQLSeka1gnVfdImOwdaKqlrxVC6qAWKuNUucEh1c1xWckmTJkTFg/viewform?usp=sf_link", "_blank").focus() // Google form の　URL
}
	
	//　ボタンをクリックした時
var shutudaiButton = document.getElementById('shutudai_input')
var houkokuButton = document.getElementById('mensetsu_houkoku_input')
shutudaiButton.addEventListener('click', shutudai)				// shutudai()
houkokuButton.addEventListener('click', houkoku)				// houkoku()

init()

// menu のところ (jquery を使っています)
//　これは、 cssと連携して「もしこの classがあったら」で行動を起こしています
$(function(){
	$(".btn-gnavi").on("click",function(){
		press()
	})
	$(".menu #li-help-id").on("click",function(){
		if($(this).hasClass("open-help")){
			if($(".help-plus").hasClass("open2")){
				$(".help-plus").removeClass("open2")
				$(".help-plus").addClass("close2")
			}else{
				$(".help-plus").removeClass("open1")
				$(".help-plus").addClass("close1")
			}
			
			$(this).removeClass("open-help")
			$(".menu #li-help-p-id").addClass("hide")
		}
		else{
			if($(".help-plus").hasClass("close1")){
				$(".help-plus").addClass("open2")
				$(".help-plus").removeClass("close1")
			}else{
				$(".help-plus").addClass("open1")
				if($(".help-plus").hasClass("close2"))
					$(".help-plus").removeClass("close2")
			}
			$(this).addClass("open-help")
			$(".menu #li-help-p-id").removeClass("hide")
		}
	})
	$("#help-submit").on('click', function(){
		press()
		$(".pop-up-bg").css("width", $(window).width())
		$("#help_img").css("width", ($(window).width() - 60))
		$("#help_img").css("top", "30px")
		$("#help_img").css("left", "30px")
		$(".pop-up-bg").css("height", $(window).height())
		$("#help_img").css("height", ($(window).height()) - 60)
		$(".pop-up-bg").css("display", "block")
		$("#help_img").css("display", "block")
		$(".pop-up-close").css("display", "block")
		$(".btn-gnavi").css("display", "none")
	})
})

// pop-up の方のjquery
$(function(){
	$(".pop-up-close").on('click', function(){
		$(".pop-up-close").css("display", "none")
		$(".pop-up-bg").css("display", "none")
		$("#help_img").css("display", "none")
		$(".btn-gnavi").css("display", "block")
	})
	
	$(".pop-up-bg").on('click', function(){
		$(".pop-up-close").css("display", "none")
		$(".pop-up-bg").css("display", "none")
		$("#help_img").css("display", "none")
		$(".btn-gnavi").css("display", "block")
	})
})

function press(){
	$(function(){		
		var rightVal = 0
		if($(".btn-gnavi").hasClass("open")){
			rightVal = -400
			$(".btn-gnavi").removeClass("open")
			$("#li-help-id").removeClass("on")
		}
		else{
			$(".btn-gnavi").addClass("open")
			$("#li-help-id").addClass("on")
		}
		
		if($("#li-help-id").hasClass("on")){
			$(".help-plus span").css({"display": "inline"});
		}
		else{
			$(".help-plus span").css({"display": "none"});
		}
		
		$("#global-navi").stop().animate({
			right: rightVal
		}, 200)
	})
}

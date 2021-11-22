$(function(){
	$(".button").on('click', submit)
	$(".PASS").keydown(function(e){
			// 13 = enter key
		if(e.keyCode == 13) submit()
	})
	$(pre)
})

function submit(){
	var id = $(".ID").val(), pass = $(".PASS").val()
	
	var result = check(id, pass)
	
	if(result == 0){
		alert("あなたの ID 又は PASSWORD が間違っています。")
	}else if(result == 1){
		alert("PASSWORD が間違っています。")
	}else if(result == 3){
		if(location.href.slice(-5) === "login")
			url = location.href.slice(0,-5)
		else
			url = location.href
		
		location = url + "top_page"
	}else{	
		alert("不思議なことが起こりました。アドミンに報告してください。")
	}
}

function check(in_id, in_pass){
	var result = 0;
	
	if(in_id === id){
		result += 0x1
	}
	if(in_pass === pass){
		result += 0x2
	}
	
	if(result == 0){
		return 0
	}else if(result == 1){
		return 0x1
	}else if(result == 2){
		return 0
	}else if(result == 3){
		return 0x3
	}else{
		return 0xf
	}
}

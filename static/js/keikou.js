var init = function(){
	$(function(){
		var title = $('.title').text(),
			title_sub = title.split("の")
		
		for(value in kenValue){
			if(kenValue[value] === title_sub[0]){
				title_sub[0] = kenName[value]
				break;
			}
		}
		
		for(value in jobValue){
			if(jobValue[value] === title_sub[1]){
				title_sub[1] = jobName[value]
				break;
			}
		}
		$('.title').text(title_sub[0] + "の " + title_sub[1])
	})
}

init()
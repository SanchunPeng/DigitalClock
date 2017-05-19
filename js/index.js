window.onload = function(){
	var hDom = document.getElementById("V_h");
	var mDom = document.getElementById("V_m");
	var sDom = document.getElementById("V_s");
	var showTime=document.getElementById("clock_wrapper");
	function autoTime(){
		var dates = new Date();	
		var vh = dates.getHours();
		var vm = dates.getMinutes();
		var vs = dates.getSeconds();		
		sDom.style.transform= 'rotate('+(vs*6)+'deg)';//360/(12*5)=6
		mDom.style.transform = 'rotate('+(vm*6)+'deg)';
		hDom.style.transform = 'rotate('+(vh*30)+'deg)';//360/12=30
		var time="<li class='clock_hms'>"+addZero(vh)[0]+"</li>";
		time+="<li class='clock_hms'>"+addZero(vh)[1]+"</li>";
		time+="<li class='clock_divider'>:</li>";
		time+="<li class='clock_hms'>"+addZero(vm)[0]+"</li>";
		time+="<li class='clock_hms'>"+addZero(vm)[1]+"</li>";
		time+="<li class='clock_divider'>:</li>";
		time+="<li class='clock_hms'>"+addZero(vs)[0]+"</li>";
		time+="<li class='clock_hms'>"+addZero(vs)[1]+"</li>";
		showTime.innerHTML=time;
	};
	function addZero(time){
		var result=[];
		if(time<10){
			result[0]=0;
			result[1]=time;
		}else{
			result[1]=parseInt(time)%10;
			result[0]=Math.floor(parseInt(time)/10);
		}
		return result;
	}
	setInterval(function(){
		autoTime();
	},1000)

};
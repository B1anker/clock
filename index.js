$(function(){
	setInterval("SetTime()",1000);
	
	})
		function SetTime(){
			var date = new Date();
			var Time = Array();
			 // 向 数组内 塞年份
			 Time.push(
			 		date.getFullYear()  
			 );    // 年
			 // 向数组内 塞入月份
			 Time.push(date.getMonth()+1);   // 月
			 // 向数组内 塞入日期
			 Time.push(date.getDate());    //  日
			 // 向数组内 塞入小时
			 Time.push(date.getHours());   // 小时
			 // 向数组内 塞入分钟    
			 Time.push(date.getMinutes());  // 分钟
			 // 向数组内 塞入秒
			 Time.push(date.getSeconds());   // 秒
			 
			 var str ="";
			for(var i = 0 ; i<Time.length;i++){
				if(Time[i] <10){
					Time[i]= "0"+Time[i];
					}
				str = str +Time[i];
			}			
			
			for(var s= 0; s<str.length;s++){
				
			$(".num").eq(s).animate(
			{
				"background-positionY":-str.substring(s,s+1)*38
				},1000);
			}
		}// JavaScript Document
$(function() {
	
	//日期选择器
	$.fn.datetimepicker.dates['zh-CN'] = {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
			daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			today: "今天",
			suffix: [],
			meridiem: ["上午", "下午"]
	};
	$('.form_datetime').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
    
    //表格展开
    $(".table.log td.first").click(function(){
    	if($(this).next("td").find("div").is(":hidden")){
    		$(this).find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
    		$(this).next("td").find("p").hide();
	    	$(this).next("td").find("div").show();
    	}else{
    		$(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-right");
    		$(this).next("td").find("p").show();
	    	$(this).next("td").find("div").hide();
    	}
    });
	
	//syslog
	var e = echarts.init(document.getElementById("syslog"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    /*legend: {
			        data:['事件数']
			    },*/
			    grid: {
			        left: '2%',
			        right: '4%',
			        top: '13%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00',
			            '10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '事件数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'事件数',
			            type:'bar',
			            barWidth: 20,
			            data:[120, 132, 101, 134, 90, 70, 110, 30, 106, 101, 74, 90, 122, 70, 90, 140, 82]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	

});
$(function() {
	
	//LogTrend
	var e = echarts.init(document.getElementById("LogTrend"),'macarons'),
		a = {
				tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['时间']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['23:00:00','01:00:00','02:00:00','03:00:00','04:00:00','05:00:00','06:00:00','07:00:00','08:00:00','09:00:00',
			            '10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00','16:00:00']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'时间',
			            type:'line',
			            smooth:false,
			            data:[120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	
	//AllEvent
	var e = echarts.init(document.getElementById("AllEvent"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['严重性']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['alert','alert','alert','alert','alert','alert','alert','alert']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'严重性',
			            type:'bar',
			            barWidth: 20,
			            data:[102.0, 80.9, 70.0, 45.2, 120.6, 76.7, 135.6, 162.2]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//ImportantEvent
	var e = echarts.init(document.getElementById("ImportantEvent"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['事件名称']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['Failed','Failed','Failed','Failed','Failed','Failed']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'事件名称',
			            type:'bar',
			            barWidth: 20,
			            data:[102.0, 80.9, 70.0, 45.2, 120.6, 76.7]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//SecurityEvents
	var e = echarts.init(document.getElementById("SecurityEvents"),'macarons'),
		a = {
				tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['安全事件']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : true,
			            data : ['Logon','User Access']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'安全事件',
			            type:'line',
			            smooth:false,
			            stack: '总量',
            			areaStyle: {normal: {}},
			            data:[120, 120]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//事件分类
	var e = echarts.init(document.getElementById("EventType"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['事件分类']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['locall','locall','locall','locall','locall','locall','locall','locall']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'事件分类',
			            type:'bar',
			            barWidth: 20,
			            data:[102.0, 80.9, 70.0, 45.2, 120.6, 76.7, 135.6, 162.2]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//告警
	var e = echarts.init(document.getElementById("Alarm"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['告警']
			    },
			    grid: {
			        left: '1%',
			        right: '2%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['failed logons unix']
			        }
			    ],
			    yAxis : [
			        {
			        	name: '数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'告警',
			            type:'bar',
			            barWidth: 20,
			            data:[102.0]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	

});
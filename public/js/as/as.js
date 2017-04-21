$(function() {
	
	//按钮组
	$(".switch button").click(function(){
		$(this).removeClass("btn-white").addClass("btn-primary");
		$(this).siblings().removeClass("btn-primary").addClass("btn-white");
	});
	$("#toDiyTime").click(function(){
		$("#diyTime").show();
	});
	$("#toDiyTime").siblings().click(function(){
		$("#diyTime").hide();
	});
	
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
	
	//IP地图
	var s = echarts.init(document.getElementById("map"),'macarons'),
		c = {
			/*title: {
				text: "IP地图",
				x: "center"
			},*/
			tooltip: {
				trigger: "item"
			},
			legend: {
				orient: "vertical",
				x: "left",
				data: ["事件数"]
			},
			dataRange: {
				min: 0,
				max: 2500,
				x: "left",
				y: "bottom",
				text: ["高", "低"],
				calculable: !0
			},
			roamController: {
				show: !0,
				x: "right",
				mapTypeControl: {
					china: !0
				}
			},
			series: [{
				name: "事件数",
				type: "map",
				mapType: "china",
				roam: !1,
				itemStyle: {
					normal: {
						label: {
							show: !0
						}
					},
					emphasis: {
						label: {
							show: !0
						}
					}
				},
				data: [{
					name: "北京",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "天津",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "上海",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "重庆",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "河北",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "河南",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "云南",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "辽宁",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "黑龙江",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "湖南",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "安徽",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "山东",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "新疆",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "江苏",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "浙江",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "江西",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "湖北",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "广西",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "甘肃",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "山西",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "内蒙古",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "陕西",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "吉林",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "福建",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "贵州",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "广东",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "青海",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "西藏",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "四川",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "宁夏",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "海南",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "台湾",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "香港",
					value: Math.round(1e3 * Math.random())
				}, {
					name: "澳门",
					value: Math.round(1e3 * Math.random())
				}]
			}]
		};
	s.setOption(c), $(window).resize(s.resize);
	
	
	//PV/UV
	var e = echarts.init(document.getElementById("pvuv"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['pv','uv']
			    },
			    grid: {
			        left: '2%',
			        right: '4%',
			        top: '14%',
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
			        	name: '访客数',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'pv',
			            type:'line',
			            data:[12, 10, 8, 10, 21, 32, 35, 106, 212, 402, 502, 305, 530, 585, 560, 420, 282]
			        },
			        {
			            name:'uv',
			            type:'line',
			            data:[10, 8, 6, 7, 17, 25, 28, 82, 196, 352, 435, 251, 468, 532, 515, 372, 258]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//响应时间
	var e = echarts.init(document.getElementById("resTime"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    /*legend: {
			        data:['响应时间(毫秒)']
			    },*/
			    grid: {
			        left: '2%',
			        right: '10%',
			        top: '14%',
			        bottom: '3%',
			        containLabel: true
			    },
			    calculable : true,
			    xAxis : [
			        {
			        	name: '响应时间(毫秒)',
			            type : 'value'
			        }
			    ],
			    yAxis : [
			        {
			        	name: '事件',
			        	type : 'category',
			            data : ['emergency','alert','critical','error','warning','notice','information','debug']
			        }
			    ],
			    series : [
			        {
			            name:'响应时间(毫秒)',
			            type:'line',
			            data:[3000, 1506, 2001, 2522, 1422, 1411, 3522, 6244]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	//状态码
	var e = echarts.init(document.getElementById("status"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['200','304','404','503','500']
			    },
			    series : [
			        {
			            name: '状态码',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:2552, name:'200'},
			                {value:150, name:'304'},
			                {value:254, name:'404'},
			                {value:335, name:'503'},
			                {value:130, name:'500'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                },
			                normal: {
			                    label:{ 
		                            show: true,
		                            formatter: '{b} : {c} ({d}%)' 
		                        }
			                }
			            }
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
	
	
	//流量
	var e = echarts.init(document.getElementById("flow"),'macarons'),
		a = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    /*legend: {
			        data:['响应时间(毫秒)']
			    },*/
			    grid: {
			        left: '2%',
			        right: '4%',
			        top: '14%',
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
			        	name: '数据量(KB)',
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'数据量(KB)',
			            type:'line',
			            data:[1200, 1000, 800, 1000, 2100, 3200, 3500, 10600, 21200, 40200, 50200, 30500, 53000, 58500, 56000, 42000, 28200]
			        }
			    ]
			};
	e.setOption(a), $(window).resize(e.resize);
	
});
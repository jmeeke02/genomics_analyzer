'use strict'
app.controller('AnalyzerCtrl', function ($scope, $state, dataset){
	$scope.profile = dataset;
	$scope.generalTests = dataset.results.general;
	$scope.highRiskTests = dataset.results.highrisk;
	$scope.highRiskCancerTests = dataset.results.highriskcancer;
	$scope.lowRiskTests = dataset.results.lowrisk;
	$scope.preventionTests = dataset.results.prevent;
	$scope.immunityTests = dataset.results.immunity;
	console.log('heres dataset', dataset);

	var data = [];
	dataset.results.highriskcancer.forEach(function (el, i){
		data.push({});
		data[i].value = el.riskMultiplier;
		data[i].label = el.key + " Risk Multiplier";
		if(el.booleanVal === true){
			data[i].color = "#46BFBD";
			data[i].highlight = "#5AD3D1";
		} else{
			data[i].color = "#F7464A";
			data[i].highlight = "#FF5A5E";
		} 
	});

	var ctx = document.getElementById("cancer").getContext("2d");
	var highRiskCancer = new Chart(ctx).Doughnut(data, {segmentShowStroke : true, animateRotate : true});

	var HighRiskData = [];
	dataset.results.highrisk.forEach(function (el, i){
		HighRiskData.push({});
		HighRiskData[i].value = el.riskMultiplier;
		HighRiskData[i].label = el.key + " Risk Multiplier";
		if(el.booleanVal === true){
			HighRiskData[i].color = "#46BFBD";
			HighRiskData[i].highlight = "#5AD3D1";
		} else{
			HighRiskData[i].color = "#FDB45C";
			HighRiskData[i].highlight = "#FFC870";
		} 
	});

	console.log(data, HighRiskData);


	var ctx2 = document.getElementById("highrisk").getContext("2d");
	var highRisk = new Chart(ctx2).Doughnut(HighRiskData, {segmentShowStroke : true, animateRotate : true});

	var preventionData = {
		labels: [],
		 datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "#FDB45C",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: []
	        }
	     ]
	}

	dataset.results.prevent.forEach(function (el, i){
		preventionData.labels.push(el.key);
		preventionData.datasets[0].data.push(el.magnitude)
	})

	var ctx3 = document.getElementById("prevention").getContext("2d");
	var myBarChart = new Chart(ctx3).Bar(preventionData, {scaleBeginAtZero : true});



	var generalData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 90, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	        }
	    ]
	};
	var ctx4 = document.getElementById("general").getContext("2d");
	var myRadarChart = new Chart(ctx4).Radar(generalData, { scaleShowLine : true, angleShowLineOut : true, angleLineColor : "rgba(0,0,0,.1)", pointLabelFontSize : 10, pointDot : true, pointDotRadius : 3, datasetFill : true});
	
})
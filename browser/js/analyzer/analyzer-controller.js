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
	var highRisk = new Chart(ctx2).PolarArea(HighRiskData, {segmentShowStroke : true, animateRotate : true});

	var preventionData = {
		labels: [],
		 datasets: [
	        {
	            label: "Prevention Data",
	            fillColor: "#F7464A",
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


	var scoredata = [
	    {
	        value: dataset.healthScores.highrisk,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "High Risk"
	    },
	    {
	        value: dataset.healthScores.highriskcancer,
	       	color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "Cancer Risk"
	    },
	    {
	        value: dataset.healthScores.lowrisk,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Low Risk"
	    },
	    {
	        value: dataset.healthScores.prevention,
	        color: "#4D5360",
	        highlight: "#616774",
	        label: "Prevention"
	    }
	]
	var ctx4 = document.getElementById("general").getContext("2d");
	var myRadarChart = new Chart(ctx4).Doughnut(scoredata, {segmentShowStroke : true, animateRotate : true});
	
})
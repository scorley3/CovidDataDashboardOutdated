document.getElementById("searchState").addEventListener("click",getStateData);
function getStateData(){
	var link = buildStateString();
	fetch(link)
	.then(response => response.json())
	.then(result => printStateData(result))
	.catch(error);	
}
function buildStateString(){
	var str = "https://api.covidtracking.com/v1/states/" + 
		document.getElementById("stateEntry").value +"/current.json";
	console.log(str);
	return str;
}
function printStateData(result){
	document.getElementById("countryData").style.display = "none";
	document.getElementById("stateData").style.display = "inline";
	document.getElementById("globalData").style.display = "none";
	document.getElementById("stateName").innerHTML=result.state;
	document.getElementById("stateTotCases").innerHTML = result.positive;
	document.getElementById("stateNewCases").innerHTML = result.positiveIncrease;
	document.getElementById("stateTotalDeaths").innerHTML = result.death;
	document.getElementById("stateNewDeaths").innerHTML = result.deathIncrease;
}
document.getElementById("searchCountry").addEventListener("click",getCountryData);
function error(){
	document.getElementById("error").value = "data not found";
}
function getCountryData(){	
		var str = "https://api.covid19api.com/summary";
		console.log(str);
		fetch(str)
		.then(response => response.json())
		.then(result => printCountryData(result))
		.catch(error);
}
function printCountryData(result){
	var code = document.getElementById("countryEntry").value;
	code = code.toUpperCase();
	console.log(result);
	var index = 0;
	for(var x=0;x<result.Countries.length;x++){
		codeTest = result.Countries[x].Country.toUpperCase();
		if(code.localeCompare(codeTest)==0) index = x;
	}		
	document.getElementById("countryData").style.display = "inline";
	document.getElementById("stateData").style.display = "none";
	document.getElementById("globalData").style.display = "none";
	document.getElementById("countryName").innerHTML=result.Countries[index].Country;
	document.getElementById("countryTotCases").innerHTML = result.Countries[index].TotalConfirmed;
	document.getElementById("countryNewCases").innerHTML = result.Countries[index].NewConfirmed;
	document.getElementById("countryTotalDeaths").innerHTML = result.Countries[index].TotalDeaths;
	document.getElementById("countryNewDeaths").innerHTML = result.Countries[index].NewDeaths
}
document.getElementById("globalBtn").addEventListener("click",getGlobalData);
function getGlobalData(){
	var str = "https://api.covid19api.com/summary";
		console.log(str);
		fetch(str)
		.then(response => response.json())
		.then(result => printGlobalData(result))
		.catch(error);
}
function printGlobalData(result){
	document.getElementById("countryData").style.display = "none";
	document.getElementById("stateData").style.display = "none";
	document.getElementById("globalData").style.display = "inline";
	document.getElementById("globalTotCases").innerHTML = result.Global.TotalConfirmed;
	document.getElementById("globalNewCases").innerHTML = result.Global.NewConfirmed;
	document.getElementById("globalTotalDeaths").innerHTML = result.Global.TotalDeaths;
	document.getElementById("globalNewDeaths").innerHTML = result.Global.NewDeaths;
}

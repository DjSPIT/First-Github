

function tipcalc(){
	var tot_amt = document.getElementById("bill_value").value;
	var qual = document.getElementById("quality").value;
	var people = document.getElementById("no_ppl").value;
	if(tot_amt==="" || quality==0){
		alert("Please enter the values");
		return;
	}

	if(people === "" || people<=1){
		people=1;
		alert("Please enter valid number of people");
		return;
	}

	var totalTip = (tot_amt * qual)/people;
	totalTip = Math.round(totalTip*100)/100;
	totalTip = totalTip.toFixed(2);

	
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = totalTip;
	
};
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("calculate").onclick = function(){
		tipcalc();
	};

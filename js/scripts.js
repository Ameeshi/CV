function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html(" "); 
}

function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if (dob >= new Date()){
		alert("Date of birth is not valid. Date has to be before today.");
		return false;
	}
	var phNum = $("#phone").val(); 
	if (phNum.length != 10 || isNaN(phNum)){
		alert("Phone number is not valid or not in a valid format.");
		return false;
	}
}
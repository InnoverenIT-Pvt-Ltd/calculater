$(document).ready(function() {
	 $('#spinner').hide(); 
	$('.PrivateIndividuals').hide();
	$('.Teams').hide();
	$('.claim_data_info_input').prop('disabled', true);
	$('.claim_data_info').hide();
	$('.how-many-claims_class').hide();
	$('.stock_modification_class').hide();
	$('.stock_modification_info_input').prop('disabled', true);
	$('.stock_modification_info').hide();
});

$('#type-of-customer').change(function() {
	var item = $(this);
	if (item.val() == "individual") {
		$('.PrivateIndividuals').show();
		$('.Teams').hide();
	} else if (item.val() == "team") {
		$('.PrivateIndividuals').hide();
		$('.Teams').show();

	} else {

		$('.PrivateIndividuals').hide();
		$('.Teams').hide();
	}

});

$("#claim_damage").click(function() {

	if ($(this).is(":checked")) {
		$('.how-many-claims_class').show();
		$('.claim_data_info_input').prop('disabled', false);
	} else {
		$('.how-many-claims_class').hide();
		$('.claim_data_info').hide();
		$('.claim_data_info_input').prop('disabled', true);
	}
});

$('#how-many-claims').on('input', function(e) {
	var noOfclaims =parseInt(e.target.value);
	 //console.log(noOfclaims * 10);
	$('.claim_data_info').show();
	$('.claim_data_info_input').prop('disabled', false);
	for (i = 0; i < noOfclaims; i++) {
		
	}
});
$("#stock_modification").click(function() {

	if ($(this).is(":checked")) {

		$('.stock_modification_class').show();
		$('.stock_modification_info_input').prop('disabled', false);
	} else {

		$('.stock_modification_class').hide();
		$('.stock_modification_info').hide();
		$('.stock_modification_info_input').prop('disabled', true);
	}
});
$('#how-many-modification').on('input', function() {
	$('.stock_modification_info').show();
	$('.stock_modification_info_input').prop('disabled', false);
});

//events for selecting team or individual
$('#type-of-customer').change(function(){
	if($('#type-of-customer').val()=='individual'){
		console.log('individual');
		if($('#relationship-to-proposer option:last-child').val() !== "I"){
			$('#relationship-to-proposer').append('<option value="I">I</option>');
		}
		return;
		
	}else if($('#type-of-customer').val()=='team'){
		//alert('team');
	}
	else{
		return;
	}
});

$('#relationship-to-proposer').change(function(){
	if($('#relationship-to-proposer').val()=='I'){
		console.log($('#first-name').val());
		$('#driver-first-name').val( $('#first-name').val());
		$('#driver-last-name').val( $('#last-name').val());
		$('#driver-date-of-birth').val( $('#date-of-birth').val());
		
		 $('#driver-first-name').attr('readonly', true);
		 $('#driver-last-name').attr('readonly', true);
		 $('#driver-date-of-birth').attr('readonly', true);
	}else {
		
		$('#driver-first-name').attr('readonly', false);
		 $('#driver-last-name').attr('readonly', false);
		 $('#driver-date-of-birth').attr('readonly', false);
	}
});


//////// ajax call for UK Vehicle Data /////////


$('#registration-number-search').click(function(){

	var registration_number = $('#registration-number').val();
	
	if (registration_number == null || registration_number.length === 0) {
		
		alert("Registration Number  should not Empty ....");
	} else {
		$('.search-icon').show();
		$('#registration-number-search').addClass("faded-btn");
		
		$.ajax({  
			type: "POST",   
		    url : "/Trackside_Web/searchVehicleDetails",         		
		    data : "registration_number=" + registration_number,  
		    success : function(response) {  
		    	//alert("sucess");
		    	$('.search-icon').hide();
		    	$('#registration-number-search').removeClass("faded-btn");
		    	 var parsedData = JSON.parse(response);
		    	 console.log(parsedData);
		    	console.log(JSON.parse(response));
		    			    		

		    	$('#maker').append('<option value="'+parsedData.vehicleRegistrationMake+'" selected >'+parsedData.vehicleRegistrationMake+'</option>');
		    	$('#model').append('<option value="'+parsedData.vehicleRegistrationModel+'" selected >'+parsedData.vehicleRegistrationModel+'</option>');
		    	$('#aspiration').append('<option value="'+parsedData.engineAspiration+'" selected >'+parsedData.engineAspiration+'</option>');		     
		    	$('#engine-hp').val(parsedData.powerBhp);
		    	
		    	
		    },  
		    error : function(e){  
		    	$('.search-icon').hide();
		    	$('#registration-number-search').removeClass("faded-btn");
		   	 alert("Vehicle Details not avalable");
		    }   
		});		
	} 	
});

$("#demoForm").submit(function(){
    $('#spinner').show()    
});



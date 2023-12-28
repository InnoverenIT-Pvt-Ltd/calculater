$('#auto-fill').click(function(){
	$('#start-date-policy').val('2018-01-20');
	$('#end-date-policy').val('2018-08-20');
	$('#permitted-drivers').val('insured&named');
	$('#type-of-customer').val('individual');
	$('.PrivateIndividuals').show();
	$('#first-name').val('Hendrik');
	$('#last-name').val('Smits');
	$('#date-of-birth').val('1990-07-10');
	$('#business-name').val('Speedway Corporation');
	$('#postcode').val('2 1096 BC');
	$('#address-line-1').val('Amstelplein');
	$('#address-line-2').val('Coevorden');
	$('#town').val('Coevorden');
	$('#county').val('test');
	$('#country').val('The Netherlands');
	$('#contact-number').val('9234561');
	$('#contact-number-type').val('mobile');
	$('#contact-email').val('Hendrik@gmail.com');
	$('#id-type').val('1');
	$('#id-reference').val('test');
	$('#relationship-to-proposer').val('others');
	
	$('#relationship-to-proposer').append('<option value="I">I</option>')
	//if customer is driver
	if($('#relationship-to-proposer').val()=='I'){
		console.log($('#first-name').val());
		$('#driver-first-name').val( $('#first-name').val());
		$('#driver-last-name').val( $('#last-name').val());
	}
	
	
	$('#driver-first-name').val('Hans');
	$('#driver-last-name').val('Jansen');
	$('#driver-date-of-birth').val('1990-07-10');
	$('#type-of-licence').val('automatic');
	$('#fia_licence').prop('checked', true);
	$('#licence-level').val('1');
	$('#driver-rating').val('1');
	$('#no-of-sanction').val(2);
	$('#no-race-finished').val(10);
	$('#less-than-2-year').val(1);
	$('#no-of-trackdays').val(15);
	$('#no-of-trackdays-car').val(1);
	$('#insured-day-at-track').val(10);
	//$('#claim_damage').prop('checked', true);
	$('#how-many-claims').val('test');
	$('#claim-date').val('2017-07-10');
	$('#type-of-claim').val('test');
	$('#value-of-claim').val('test');
	$('#registration-number').val('test');
	$('#maker').val("3");
	$('#model').val(7);
	$('#value').val(25000);
	$('#purchase-date').val('2017-02-26');
	$('#date-of-last-service').val('2017-02-26');
	$('#engine-hp').val(2);
	$('#aspiration').val(1);
	$('#professionally_run').prop('checked', true);
	$('#road_legal').prop('checked', true);
	$('#driver_to_from_circuit').prop('checked', true);
	$('#run-types').val('3');
	//$('#stock_modification').prop('checked', true);
	$('#how-many-modification').val('test');
	$('#modification-type').val('test');
	$('#maker-model').val('test');
	$('#compliant').prop('checked', true);
	$('#professionally_fitted').prop('checked', true);
});
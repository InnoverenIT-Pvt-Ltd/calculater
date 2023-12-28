

$(document).ready(function() {
	
	$('#new-quote').show();
	 $('#existing-quotes').hide(); 
	 $('#existing-policy').hide();
	 $('#account').hide(); 
	 $('#product').hide(); 
	 $('#distribution').hide();
	 $('#search').hide();
	 $('#pieChart').show();
    $('#myChart').show(); 
	 
	
		var select = document.getElementById('productListOnLandingPage');
		
		 $.ajax({
			 
			
		        type: "GET",
		        url: getContextPath()+"/getProductsForAddUser",
		        contentType: "application/json",
	        
		        success: function (msg) {
		        	
		        	var obj = JSON.parse(msg);
		        	
		        	 var productslist = [];
		        	 productslist = obj.products;
		        	 
		        	 
		        	 for(var i = 0 ; i < obj.products.length; i++){
		        		 
		        		 
		        		  var option = document.createElement('option');
	        			    option.text = obj.products[i];
	        			    select.add(option, obj.products[i]);
	        			   

		        	 }
		        	 /*msg.forEach(function(item,i){
		        	
		        		var status=item.status;
		        		if(status=="Active"){
		        			
		        		
		        			    var option = document.createElement('option');
		        			    option.text = item.productName;
		        			    select.add(option, item.productName);
		        			   
		        		
		        		}
		        		 
		        
		              });*/
		        	 
		           
		        }
		    }); 
	 }); 

$("#landingPageGoBtn").on("click", function(){
	
	var select = document.getElementById("productListOnLandingPage");
    var valueSelected = select.options[select.selectedIndex].value;
	
	
	document.getElementById("selectedProduct").value = valueSelected;

});

function filter(tableName) {
	console.log("tableName......."+tableName);
	  // Declare variables
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("searchfilter");
	  filter = input.value.toUpperCase();
	  table = document.getElementById(tableName);
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[4];
	    if (td) {
	    	
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	    	  console.log("if tdx.."+td.textContent)
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }
	  }
	}
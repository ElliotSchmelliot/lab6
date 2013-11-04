//signup.js 
// add your JavaScript code to this file

$(function() {
	var stateDropdown = $(".us-states");
	var option;
	$.each(usStates, function() {
		option = $(document.createElement("option"));
		option.attr("value", this.abbreviation);
		option.html(this.name);
		stateDropdown.append(option);
	});

	$('.signup-form').submit(function() {
		var form = $(this);
		var addr1Input = form.find("input[name=addr-1]");
    	var addr1Value = addr1Input.val();
    	if (addr1Value.length > 0) {
    		var zip = form.find("input[name=zip]");
    		var zipValue = zip.val();
    		if (zipValue.length > 0) {
    			//Do nothing
    		} else {
    			alert("Please input a valid zip code.");
    			return false;
    		}
    	}
	});

	$('.cancel-signup').click(function(){
		$('.cancel-signup-modal').modal();
	});

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

	
	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function
});

$(document).ready(function() { // do this when the document is loaded
	$(dialer_page).show(); // show the element with ID "element"
	$(contact_list_page).hide();
	$(add_contact_page).hide(); // hide the element with ID "otherElement"
});


$(dbutton).click(function() { // when "button_id" is clicked
	$(dialer_page).show(); // show element
	$(contact_list_page).hide();
	$(add_contact_page).hide();	// hide other element
});

$(cbutton).click(function() { // when "button_id" is clicked
	$(contact_list_page).show(); // show element
	$(dialer_page).hide();
	$(add_contact_page).hide();	// hide other element
});

$(abutton).click(function() { // when "button_id" is clicked
	$(add_contact_page).show(); // show element
	$(contact_list_page).hide();
	$(dialer_page).hide();	// hide other element
});

$(window).scroll(function(){
	if( $(this).scrollTop() > 30){
		$('header').addClass('fixed');
		$('#header-contact').addClass('fixed-padding');
		$('#side-bar').addClass('fixed-side-bar');
	}else {
		$('header').removeClass('fixed');
		$('#header-contact').removeClass('fixed-padding');
		$('#side-bar').removeClass('fixed-side-bar');
	}

});

function validateForm() {
    var name = document.forms["contact-form"]["name"].value;
		var email = document.forms["contact-form"]["email"].value;
		var phone = document.forms["contact-form"]["phone"].value;
		var contact = document.forms["contact-form"]["contact"].value;
		var message = document.forms["contact-form"]["message"].value;

	document.forms["contact-form"]["name"].value;
    if (name == null || name == "") {
        alert("Name must be filled out");
        return false;
    }
	if (email == null || email == "") {
        alert("Phone must be filled out");
        return false;
    }
	if (phone == null || phone == "") {
        alert("Phone must be filled out");
        return false;
    }
	if(message == null || message == "") {
        alert("Message must be filled out");
        return false;
	}
	alert('Thanks for the Message!');
}

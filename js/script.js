jQuery(document).ready(function () {

     $(".phone").mask("+380 (99) 999-99-99");


    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');

    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


});
/// main logic
const button = document.getElementById("button123");
const button12 = document.getElementById("button12");
const notification = document.getElementById("notification");

button.addEventListener("click", function() {
	notification.classList.remove("hidden");
	setTimeout(function() {
		notification.classList.add("hidden");
	}, 4000);
});
button12.addEventListener("click", function() {
	notification.classList.remove("hidden");
	setTimeout(function() {
		notification.classList.add("hidden");
	}, 4000);
});

const modalButton = document.getElementById("modal-button");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

const showModal = () => {
	modal.style.display = 'block';
	modal.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Hide modal
const hideModal = () => {
	modal.style.animation = 'fadeOut 0.5s ease-in-out';
	setTimeout(() => {
		modal.style.display = 'none';
	}, 500);
}
window.addEventListener("click", function(event) {
	if (event.target === modal) {
		modal.style.animation = 'fadeOut 0.5s ease-in-out';
		setTimeout(() => {
			modal.style.display = 'none';
		}, 500);
	}
});

// Add event listeners to open and close modal
modalButton.addEventListener('click', showModal);
closeButton.addEventListener('click', hideModal);

document.addEventListener("DOMContentLoaded", function() {
	// Get the modal element
	const modal = document.getElementById("myModal1");

	// Get the close button element
	const closeBtn = document.getElementById("closeBtn1");

	// Get the modal text element
	const modalText = document.getElementById("modalText1");

	// Get the link elements
	const links = document.querySelectorAll(".link");

	// Add click event listeners to each link
	links.forEach((link, index) => {
		link.addEventListener("click", function() {
			modalText.innerHTML = `Link ${index + 1} was clicked.`;
			modal.style.display = "block";
		});
	});

	// Add a click event listener to the close button
	closeBtn.addEventListener("click", function() {
		modal.style.display = "none";
	});

	// Add a click event listener to the window to close the modal when clicked outside
	window.addEventListener("click", function(event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});
});


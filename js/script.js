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

	const counters = document.querySelectorAll('.counter-container input[type="text"]');
	const buttons = document.querySelectorAll('.counter-button');

	buttons.forEach(button => {
		button.addEventListener('click', function() {
			const counter = document.querySelector(`#${this.dataset.counter}`);
			const value = parseInt(counter.value);
			const newValue = value + parseInt(this.dataset.value);

			if (newValue >= 0 && newValue <= 10) {
				counter.value = newValue;
			}
		});
	});

});

const modalButtons = document.querySelectorAll(".gradient-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");

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
modalButtons.forEach(button => {
	button.addEventListener('click', showModal);
});
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
	const modalTexts = [
		'<strong>Umzug und transport</strong><br>' +
		'Zimmermänner garantiert einen seriösen, kompetenten ' +
		'und absolut zuverlässigen Service für Ihren Umzug. Holen ' +
		'Sie sich jetzt ein kostenloses Angebot, professionelle Beratung ' +
		'und Unterstützung für Ihren Umzug ! Ihre vollständige Zufriedenheit ist unsere Priorität.<br>',
		'<strong>Reinigung und wartung</strong><br>' +
		'Wir passen unsere Reinigungsleistung jeden Bedürfnissen ' +
		'an und sorgen so für Sauberkeit. Ob Umzugsreinigung, Büroreinigung, Baureinigung, Fensterreinigung  ' +
		'oder Graffitis entfernen. Wir kümmern uns darum! Schnell, ' +
		'zuverlässig und immer individuell auf Sie abgestimmt.<br>',
		'<strong>Entsorgung</strong><br>' +
		'Zimmermänner kümmert sich um Ihre Entsorgung. ' +
		'Bei einem Umzug handelt es sich häufig um alte Möbel, ' +
		'die Sie loswerden möchten, die jedoch schwer zu transportieren und sperrig sind. ' +
		'Natürlich muss dieser Service nicht mit Ihrem Umzug zusammenhängen.<br>'
	];

	links.forEach((link, index) => {
		link.addEventListener("click", function() {
			const linkText = modalTexts[index];
			modalText.innerHTML = linkText;
			modal.style.display = "block";
			setTimeout(() => {
				modal.style.opacity = "1";
				modal.style.transform = "scale(1)";
			}, 100);
		});
	});

	// Add a click event listener to the close button
	closeBtn.addEventListener("click", function() {
		modal.style.opacity = "0";
		modal.style.transform = "scale(0.5)";
		setTimeout(() => {
			modal.style.display = "none";
		}, 400);
	});

	// Add a click event listener to the window to close the modal when clicked outside
	modal.addEventListener("click", function(e) {
		if (e.target === modal) {
			modal.style.opacity = "0";
			setTimeout(() => {
				modal.style.display = "none";
			}, 500);
		}
	});
});

//burg
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});

dropdownToggle.addEventListener("click", () => {
	dropdownMenu.classList.toggle("active");
});


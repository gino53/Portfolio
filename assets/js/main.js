/*=============== CURSOR ===============*/
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	cursor.setAttribute('style', 'top:' + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;")
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	reset: true,
	distance: '60px',
	duration: 2500,
	delay: 400
})

sr.reveal(`.top`, { delay: 500, origin: 'top' });
sr.reveal(`.bottom`, { delay: 700, origin: 'bottom', interval: 200 });
sr.reveal(`.right`, { delay: 700, origin: 'right' });
sr.reveal(`.left`, { delay: 700, origin: 'left' });
sr.reveal(`.nav__menu`, { delay: 700, origin: 'bottom', interval: 200 });
sr.reveal(`.figure-1, .figure-2, .figure-3, .figure-4`, { delay: 600, origin: 'right' });
sr.reveal(`.progress`, { delay: 700, origin: 'left', duration: 4000, distance: '140px' });

/*=============== SWIPER ===============*/
let swiperProjects = new Swiper('.projects__container', {
	loop: true,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination'
	}
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
	contactEmail = document.getElementById('contact-email'),
	contactMessage = document.getElementById('contact-message'),
	contactAlert = document.querySelector('.contact__alert')

const sendEmail = (e) => {
	e.preventDefault();

	if (contactEmail.value === '' || contactMessage.value === '') {
	} else {
		emailjs.sendForm('service_3tw347m', 'template_86ar4oz', '#contact-form', 'U4Gw4uXEQulSdIF4g')
			.then(() => {
				contactAlert.textContent = 'Message sent';

				setTimeout(() => {
					contactAlert.textContent = '';
				}, 5000)
			}, (error) => {
				alert('ERROR', error);
			});
		contactEmail.value = '';
		contactMessage.value = '';
	};
};
contactForm.addEventListener('submit', sendEmail);
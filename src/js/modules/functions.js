import $, { cssNumber } from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export function burgerMenu() {
	const burger = document.querySelector('.header__burger');
	const box = document.querySelector('.header__box');
	const body = document.body;

	burger.addEventListener('click', () => {
		burger.classList.toggle('open');
		box.classList.toggle('active');
		body.classList.toggle('lock');
	});

	const links = document.querySelectorAll('.menu__drop');

	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			links.forEach(otherLink => {
				if (otherLink !== link) {
					otherLink.classList.remove('active');
					otherLink.nextElementSibling.classList.remove('active');
				}
			});

			link.classList.toggle('active');
			link.nextElementSibling.classList.toggle('active');
		});
	});

}

export function prodSliderMobile() {
	const slider = document.querySelector('.products__slider');

	if (slider) {
		const wrapper = document.querySelector('.products__wrapper');
		const slides = document.querySelectorAll('.products__item');

		if (window.innerWidth < 992) {
			slider.classList.add('swiper');
			wrapper.classList.add('swiper-wrapper');

			slides.forEach(slide => {
				slide.classList.add('swiper-slide');
			})

			const productsSwiper = new Swiper(slider, {
				loop: true,
				modules: [Pagination, Navigation],
				spaceBetween: 10,
				slidesPerView: 1,
				navigation: {
					nextEl: '.products__next',
					prevEl: '.products__prev',
				},
				pagination: {
					el: '.products__paginations',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4,
				},
			});
		}
	}
}

export function passSliderMobile() {
	const slider = document.querySelector('.pass__slider');

	if (slider) {
		const wrapper = document.querySelector('.pass__wrapper');
		const slides = document.querySelectorAll('.pass__item');

		if (window.innerWidth < 992) {
			slider.classList.add('swiper');
			wrapper.classList.add('swiper-wrapper');

			slides.forEach(slide => {
				slide.classList.add('swiper-slide');
			})

			const passSwiper = new Swiper(slider, {
				loop: true,
				modules: [Pagination, Navigation],
				spaceBetween: 10,
				slidesPerView: 1,
				navigation: {
					nextEl: '.products__next',
					prevEl: '.products__prev',
				},
				pagination: {
					el: '.products__paginations',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4,
				},
			});
		}
	}
}


export function accordion(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	if (accordionTriggers) {
		// Додати обробник подій для кожного заголовку
		accordionTriggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				if (mode) {
					// Закрити всі аккордеони, крім того, який був клікнутий
					accordionTriggers.forEach(otherTrigger => {
						if (otherTrigger !== trigger) {
							otherTrigger.classList.remove('active');
							const otherContent = otherTrigger.nextElementSibling;
							let parentContainer = otherTrigger.parentNode.parentNode;
							otherContent.classList.remove('active');
						}
					});
				}

				trigger.classList.toggle('active');

				const content = trigger.nextElementSibling;
				const wrapper = trigger.parentNode;

				const img = wrapper.nextElementSibling;
				if (content) {
					content.classList.toggle('active');
				}
				if (img) {
					img.classList.toggle('active');
				}
			});
		});
	}
}

export function accordionMobile(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger-mobile');
	if (window.innerWidth < 767) {
		accordionTriggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				if (mode) {
					// Закрити всі аккордеони, крім того, який був клікнутий
					accordionTriggers.forEach(otherTrigger => {
						if (otherTrigger !== trigger) {
							otherTrigger.classList.remove('active');
							const otherContent = otherTrigger.nextElementSibling;
							let parentContainer = otherTrigger.parentNode.parentNode;
							otherContent.classList.remove('active');
						}
					});
				}

				trigger.classList.toggle('active');

				const content = trigger.nextElementSibling;

				content.classList.toggle('active');
			});
		});
	}
}

export function tabs(container) {
	if (container) {
		document.addEventListener("DOMContentLoaded", function () {
			const tabButtons = container.querySelectorAll(".tab__button");
			const tabContents = container.querySelectorAll(".tab__content");

			tabButtons.forEach(function (button) {
				button.addEventListener("click", function (e) {
					e.preventDefault();
					const tabId = this.getAttribute("data-tab");
					showTab(tabId);
				});
			});

			function showTab(tabId) {
				tabContents.forEach(function (content) {
					if (content.getAttribute("data-tab") === tabId) {
						content.style.opacity = 0;
						content.style.display = "flex";
						content.classList.add('active');
						setTimeout(function () {
							content.style.opacity = 1;
						}, 50);
					} else {
						content.style.opacity = 0;
						content.style.display = "none";
						setTimeout(function () {
							content.classList.remove('active');
							content.style.opacity = 0;
						}, 50);
					}
				});
				tabButtons.forEach(function (button) {
					if (button.getAttribute("data-tab") === tabId) {
						button.classList.add("active");
					} else {
						button.classList.remove("active");
					}
				});

			}

			showTab(tabButtons[0].getAttribute("data-tab"));
		});
	}
}

export function copy() {
	const copyButtons = document.querySelectorAll('.copy__link');
	const popupMessage = document.getElementById('popupMessage');

	if (!copyButtons || !popupMessage) {
		console.error('Required elements not found.');
		return;
	}

	copyButtons.forEach((copyButton) => {
		copyButton.addEventListener('click', async (e) => {
			e.preventDefault();
			try {
				await navigator.clipboard.writeText(copyButton.textContent);
				popupMessage.textContent = 'Copied to clipboard!';
				popupMessage.style.opacity = '1';
				setTimeout(() => {
					popupMessage.style.opacity = '0';
				}, 1500);
			} catch (err) {
				popupMessage.textContent = 'Unable to copy. Please try again.';
				popupMessage.style.opacity = '1';
				setTimeout(() => {
					popupMessage.style.opacity = '0';
				}, 1500);
				console.error('Failed to copy: ', err);
			}
		});
	});
}

export function modal() {
	const open = document.querySelectorAll('.open__modal');
	const modal = document.querySelectorAll('.modal');
	let dataModal, window;

	if (modal) {
		open.forEach(function (el) {
			el.addEventListener('click', () => {
				dataModal = el.getAttribute('data-modal');

				modal.forEach(function (mod) {
					if (mod.classList.contains('active')) {
						mod.classList.remove('active');
					}
				});

				modal.forEach(function (mod) {
					if (mod.getAttribute('data-modal') === dataModal) {
						window = mod;
						setTimeout(() => {
							window.classList.remove('close__modal--animations');
							window.classList.add('active');
						}, 1200);

					}
				});
			});

			el.addEventListener('click', () => {
				let close = window.querySelector('.modal__close');
				let wrapper = window.querySelector('.modal__wrapper');
				window.classList.remove('close__modal--animations');
				window.classList.add('active');

				window.addEventListener('click', (e) => {
					if (e.target != wrapper && !wrapper.contains(e.target)) {
						window.classList.add('close__modal--animations');
						window.classList.remove('active');
					}
				});
				close.addEventListener('click', () => {
					window.classList.add('close__modal--animations');
					window.classList.remove('active');
				});

			});
		});
	}
}

export function sticky() {
	window.addEventListener('scroll', function () {
		$('header').toggleClass('sticky', window.scrollY > 0);
	});
}

export function pageNav() {
	const headerLinks = $('.header__link');

	headerLinks.each(function () {
		$(this).on('click', function (event) {
			event.preventDefault();

			const targetId = $(this).attr('href');
			const targetElement = $(`${targetId}:first`);
			const targetOffset = targetElement.offset().top;
			$('html, body').animate({
				scrollTop: targetOffset
			}, 800);
		});
	});
}

export function inputPassword() {
	const inputs = document.querySelectorAll('.input__password')
	let index = true;
	if (inputs) {
		inputs.forEach(wrapper => {
			let svg = wrapper.querySelector('svg')
			let input = wrapper.querySelector('input')
			svg.addEventListener('click', () => {
				if (index) {
					input.type = "text"
					index = false
				} else {
					input.type = "password"
					index = true
				}
				wrapper.classList.toggle('active')
			})
		});
	}
}

export function newMob() {
	const newHeader = document.querySelector('.new__header');

	if (newHeader) {
		const newWrapper = document.querySelector('.new__wrapper');

		newHeader.addEventListener('click', () => {
			newHeader.classList.toggle('active');
			newWrapper.classList.toggle('active');
		});
	}
}

export function reviewsSlider() {
	const rev = new Swiper('.reviews__slider', {
		loop: true,
		modules: [Pagination, Navigation],
		spaceBetween: 110,
		slidesPerView: 1,
		centeredSlides: true,
		breakpoints: {
			992: {
				slidesPerView: 1.8,
			}
		},
		navigation: {
			nextEl: '.reviews__next',
			prevEl: '.reviews__prev',
		},
		pagination: {
			el: '.reviews__paginations',
			clickable: true,
		},
	});
}

export function shop() {
	const grid = document.querySelector('a.fa-grid');
	const list = document.querySelector('a.fa-list');
	const wrapper = document.querySelector('.shop__wrapper');

	const close = document.querySelector('.shop-banner__close');
	const banner = document.querySelector('.shop__banner');

	if (wrapper) {

		if (window.innerWidth > 992) {
			close.addEventListener('click', (e) => {
				e.preventDefault();
				banner.style.display = "none";
			})
			list.addEventListener('click', (e) => {
				e.preventDefault();
				list.classList.add('fa-solid');
				grid.classList.remove('fa-solid');
				wrapper.classList.add('shop__reverse');
			})
			grid.addEventListener('click', (e) => {
				e.preventDefault();
				grid.classList.add('fa-solid');
				list.classList.remove('fa-solid');
				wrapper.classList.remove('shop__reverse');
			})

		} else {
			wrapper.classList.remove('shop__reverse');
		}
	}


}

export function prSliderMobile() {
	const slider = document.querySelector('.prod__slider');

	if (slider) {
		const wrapper = document.querySelector('.prod__wrapper');
		const slides = document.querySelectorAll('.prod__item');

		if (window.innerWidth < 992) {
			slider.classList.add('swiper');
			wrapper.classList.add('swiper-wrapper');

			slides.forEach(slide => {
				slide.classList.add('swiper-slide');
			})

			const passSwiper = new Swiper(slider, {
				loop: true,
				modules: [Pagination, Navigation],
				spaceBetween: 10,
				slidesPerView: 1,
				navigation: {
					nextEl: '.products__next',
					prevEl: '.products__prev',
				},
				pagination: {
					el: '.products__paginations',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4,
				},
			});
		}
	}
}

export function variantSliderMobile() {
	const slider = document.querySelector('.variant__slider');

	if (slider) {

		if (window.innerWidth < 992) {

			const varSwiper = new Swiper(slider, {
				loop: true,
				spaceBetween: 10,
				slidesPerView: 1,
			});
		}
	}
}

export function filterButton() {
	const button = document.querySelector('.filter__mob');
	const filter = document.querySelector('.shop__fliter');

	if (filter) {

		button.addEventListener('click', (e) => {
			e.preventDefault();
			filter.classList.toggle('active');
		});

	}
}

export function hilfeBlock() {
	const button = document.querySelector('.detail__hilfe-title');
	const wrapper = document.querySelector('.hilfe__wrapper');

	if (wrapper) {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			wrapper.classList.toggle('active');
		});

	}

}

export function techBlock() {
	const button = document.querySelector('.detail__desc-title');
	const wrapper = document.querySelector('.detail__desc-wrapper');

	if (wrapper) {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			wrapper.classList.toggle('active');
			button.classList.toggle('active');
		});

	}

}


export function detailSliderMobile() {
	const slider = document.querySelector('.detail__slider');

	if (slider) {

		if (window.innerWidth < 992) {

			const passSwiper = new Swiper(slider, {
				loop: true,
				modules: [Pagination, Navigation],
				spaceBetween: 30,
				slidesPerView: 1,
				centeredSlides: true,
				pagination: {
					el: '.detail__paginations',
					clickable: true,
				},
			});
		}
	}
}
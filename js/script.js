const dataProduct = [
	{
		img: 'img/product.svg',
		title: 'Our Product',
		text: 'Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.',
		button: 'Read More',
	},
	{
		img: 'img/service.svg',
		title: 'Our Service',
		text: 'DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.',
		button: 'Read More',
	},
	{
		img: 'img/technology.svg',
		title: 'Our Technology',
		text: 'First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.',
		button: 'Read More',
	},
]
dataProduct.map(function (element) {
	product.insertAdjacentHTML('beforeend', `<div class = 'product-item'>
	<div class = 'item'>
	<img class = 'item__img' src="${element.img}" alt="">
	<h2 class = 'item__title'>${element.title}</h2>
	<p class = 'item__text'>${element.text}</p>
		<div>
			<a class = 'item__button' href="#" target="_blank">${element.button}</a></div>
		</div>
	</div>`)
})

// 1. Дропдауны для одного элемента
// 2. Сделать для 2-3 элементов
// 3. Создать бургер и скрыть в него все меню
// 4. Реализовать поиск на страницы - фиктивный

const landing = {
	dom: {
		menu: {
			lisp: document.querySelector('.menu__lisp'),
			burger: document.querySelector('.menu__burger'),
		},
		logo: {
			logoSelector: document.querySelector('.menu__logo')
		},
		buttons: {
			buttons: document.querySelector('.menu__buttons')
		}
	},
	menu: {
		content: [
			{
				arrow: 'img/arrow.svg',
				title: 'Services',
				link: 'https://www.google.com',
				dropdown: {
					have: false,
					content: []
				}
			},
			{
				title: 'Product',
				link: 'https://www.google.com',
				dropdown: {
					have: true,
					content: [
						{
							title: 'Client 1',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
						{
							title: 'Client 2',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
					]
				}
			},
			{
				title: 'Technology',
				link: 'https://www.google.com',
				dropdown: {
					have: false,
					content: []
				}
			},
			{
				title: 'About',
				link: 'https://www.google.com',
				dropdown: {
					have: true,
					content: [
						{
							title: 'About 1',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
						{
							title: 'About 2',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
					]
				}
			},
			{
				title: 'Client',
				link: 'https://www.google.com',
				dropdown: {
					have: true,
					content: [
						{
							title: 'Client 1',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
						{
							title: 'Client 2',
							link: 'https://www.google.com',
							dropdown: {
								have: false,
								content: []
							}
						},
					]
				}
			},
			{
				title: 'Partner',
				link: 'https://www.google.com',
				dropdown: {
					have: false,
					content: []
				}
			}
		]
	},
	logo: {
		img: 'img/logo.svg',
		town: 'DWIDASA',
		company: 'SAMSARA',
		country: 'INDONESIA',
	},
	buttons: {
		union: 'img/Union.svg',
		mail: 'img/mail.svg',
		shuffle: 'img/shuffle.svg',
	}
}

const loadMenu = function () {
	landing.dom.logo.logoSelector.outerHTML = `<div class= 'menu__logo__item'>
				<a class= 'menu__logo__item__img' href="#">
					<img src="${landing.logo.img}" alt="">
				</a>
			<div class="menu__logo__item__text">
				<p>${landing.logo.town}</p>
				<p>${landing.logo.company}</p>
				<p>${landing.logo.country}</p>
			</div>
			</div>`
	landing.dom.buttons.buttons.outerHTML = `<div class= 'menu__buttons__item'>
			<a class= 'menu__buttons__item__link' href="#">
				<img src="${landing.buttons.union}" alt="">
			</a>
			<a class= 'menu__buttons__item__link' href="#">
				<img src="${landing.buttons.mail}" alt="">
			</a>
			<a class= 'menu__buttons__item__link' href="#">
				<img src="${landing.buttons.shuffle}" alt="">
			</a>
			</div>`
	landing.menu.content.map(function (elem) {
		landing.dom.menu.lisp.insertAdjacentHTML('beforeend', `
			<div class="menu__lisp__item">
					<div class="menu__lisp__item__title">${elem.title}</div>
					${elem.dropdown.have ? `<div class='arrow'></div>` : `<div></div>`}
					<div class="menu__lisp__item__dropdown hidden" >
					${elem.dropdown.have ? elem.dropdown.content.map(function (item) {
			return `<div><a target="_blank" href="${item.link}">${item.title}</a></div>`
		}).join('') : `<div></div>`}
					</div >
			</div >
	`)
	})

	const itemsMenu = document.querySelectorAll('.arrow')

	itemsMenu.forEach(function (elem) {
		elem.onclick = function () {
			if (this.nextElementSibling.classList.contains('heightMenu')) {
				this.nextElementSibling.classList.remove('heightMenu')
				this.nextElementSibling.classList.remove('opacity')
				setTimeout(() => {
					this.nextElementSibling.classList.add('hidden')
					this.classList.remove('active')
				}, 200)
			} else {
				this.nextElementSibling.classList.remove('hidden')
				setTimeout(() => {
					this.nextElementSibling.classList.add('heightMenu')
					this.nextElementSibling.classList.add('opacity')
					this.classList.add('active')
				})
			}
		}
	})
}
window.onload = loadMenu

productButton.onclick = function () {
	if (product.classList.contains('hidden')) {
		product.classList.remove('hidden')
		setTimeout(() => {
			product.classList.remove('opacity2')
			this.style.color = '#fff'
			this.style.backgroundColor = 'red'
			this.innerHTML = 'Скрыть!'
		})
	} else {
		product.classList.add('opacity2')
		this.style.color = 'red'
		this.style.backgroundColor = '#fff'
		this.innerHTML = 'Показать!'
		setTimeout(() => {
			product.classList.add('hidden')
		}, 300)
	}
}

if (screen.width < 991) {
	console.log('!!!')
	landing.dom.menu.lisp.classList.add('hidden')
	landing.dom.menu.burger.classList.remove('hidden')
} else {
	console.log('!!!!!!!!')
}

const menuBurger = document.querySelector('.menu__burger')

menuBurger.onclick = function () {
	if (landing.dom.menu.lisp.classList.contains('hidden')) {
		landing.dom.menu.lisp.classList.remove('hidden')
		this.classList.remove('hidden')
		setTimeout(() => {
			landing.dom.menu.lisp.classList.add('opacity')
			this.classList.add('animation')
		})
	} else {
		landing.dom.menu.lisp.classList.remove('opacity')
		this.classList.add('hidden')
		setTimeout(() => {
			landing.dom.menu.lisp.classList.add('hidden')
			this.classList.remove('animation')
		}, 200)
	}

}





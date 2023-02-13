'use strict'
const body2 = document.querySelector('.body2')
const bodyBlur = document.querySelector('.bodyBlur')
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const quantity = document.querySelector('.quantity')
const time = document.querySelector('.time')
const time3 = document.querySelector('.time3')
const best = document.querySelector('.best')



class App {
	constructor(countTime, countTime2, countQuantity, property) {
		this.countTime = countTime
		this.countTime2 = countTime2
		this.countQuantity = countQuantity
		this.property = property

		btn1.addEventListener('click', this._basicFunctionality.bind(this))
		btn.addEventListener('click', this._secondFunctionality.bind(this))
		
		window.onload = this._getLocalStorage()
	}

	_basicFunctionality() {
		body2.style.display = 'none'
		bodyBlur.style.filter = 'blur(0px)'

		time.textContent = 9
		this.countTime2 = 60
		setTimeout(() => {
			let r = this.countQuantity
			if (r > this.property) best.textContent = r
			console.log(r)
			console.log(this.property)
			this._setLocalStorage(r)
		}, 9150)

		if (this.countTime !== 0 && this.countTime2 !== 0) {
			setInterval(() => {
				if (this.countTime2 !== 0 && this.countTime !== 0) {
					time3.textContent = String((this.countTime2 -= 1)).padStart(2, '0')
					if (this.countTime2 === 0) {
						time.textContent = this.countTime -= 1
					}
				} else {
					this.countTime2 = 60
					this.clearInterval
				}
			}, 16)
		}
	}

	_secondFunctionality() {
		if (this.countTime !== 0) {
			quantity.textContent = this.countQuantity += 1
		} else {
			let a = this.countQuantity
			if (a == this.countQuantity) {
				a
				this._setLocalStorage(a)
			}
		}
	}

	_setLocalStorage(b) {
		if (this.property < b) {
			let cc = b

			best.textContent = cc
			localStorage.setItem('property', JSON.stringify(cc))
		}
	}

	_getLocalStorage() {
		const data = JSON.parse(localStorage.getItem('property'))
		console.log(data)

		if (!data) return
		this.property = data

		best.textContent = data
	}

	_reset() {
		localStorage.removeItem('property')
	}
}

const app = new App(9, 0, 0, 0)

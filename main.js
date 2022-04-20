'use strict'

// !Menu Hamburguer
const menu = document.querySelectorAll('.menu-icon')
const menuLinks = document.querySelectorAll('.links')

menu.forEach(function (menuItem) {
  menuItem.addEventListener('click', () => {
    menuLinks.forEach(function (link) {
      link.classList.toggle('visibility')
    })
  })
})

//! Icon bell notifications
const bell = document.querySelector('#bell')
const notifications = document.querySelector('.notification')

bell.addEventListener('click', () => {
  notifications.classList.toggle('hidden')
})

// !switch toggle
const iconBox = document.querySelector('#box')
const iconTruck = document.querySelector('#Truck')
const check = document.querySelector('#check')
const circle = document.querySelector('#circle')
const textShip = document.querySelector('#ship-text')
const textFreight = document.querySelector('#freight-text')
const menuShip = document.querySelector('.nav__ship')
const menuFreight = document.querySelector('.nav__freight')

function ship() {
  circle.classList.add('label-active')
  iconBox.classList.add('active-icon')
  textShip.classList.remove('visible')
  textShip.style.transform = 'translateY(0rem)'
  iconTruck.classList.toggle('no-active-icon')
  textFreight.classList.add('text-small')
  menuFreight.style.transform = 'translateY(-9000px)'
  menuShip.style.opacity = 1
  menuShip.style.visibility = 'visible'
  menuShip.style.top = '-0.5rem'
}
function truck() {
  circle.classList.remove('label-active')
  iconBox.classList.remove('active-icon')
  textShip.classList.add('visible')
  textShip.style.transform = 'translateY(-1rem)'
  iconTruck.classList.toggle('no-active-icon')
  textFreight.classList.remove('text-small')
  menuFreight.style.transform = 'translateY(0px)'
  menuShip.style.opacity = 0
  menuShip.style.visibility = 'hidden'
  menuShip.style.top = '0'
}

iconBox.addEventListener('click', ship)
iconTruck.addEventListener('click', truck)

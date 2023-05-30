// script.js

const root1 = document.querySelector('[data-key = "order1"]')
const biscuits1 = document.querySelector('[class="biscuits"]')
const donuts1 = document.querySelector('[class = "donuts"]')
const pancakes1 = document.querySelector('[class = "pancakes"]')
const status1 = document.querySelector('[class="count"]')

const root2 = document.querySelector('[data-key = "order2"]')
const biscuits2 = document.querySelector('[class="biscuits"]')
const donuts2 = document.querySelector('[class = "donuts"]')
const pancakes2 = document.querySelector('[class = "pancakes"]')
const status2 = document.querySelector('[class="count"]')

const root3 = document.querySelector('[data-key = "order3"]')
const biscuits3 = document.querySelector('[class="biscuits"]')
const donuts3 = document.querySelector('[class = "donuts"]')
const pancakes3 = document.querySelector('[class = "pancakes"]')
const status3 = document.querySelector('[class="count"]')




biscuits1.text = root1.getAttribute("10")
donuts1.text = root1.getAttribute("13")
pancakes1.text = root1.getAttribute("0")
status1.text = root1.getAttribute("true") 


biscuits2.text = root2.getAttribute("5")
donuts2.text = root2.getAttribute("0")
pancakes2.text = root2.getAttribute("2")
status2.text = root2.getAttribute("false") 


biscuits3.text = root3.getAttribute("12")
donuts3.text = root3.getAttribute("11")
pancakes3.text = root3.getAttribute("15")
status3.text = root3.getAttribute("true") 

console.log(root1,root2,root3)


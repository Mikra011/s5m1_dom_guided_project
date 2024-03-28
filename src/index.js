// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.querySelector('.card')

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('.card-img-top')
const titleFirstCard = firstCard.querySelector('h2')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')

// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector('a:nth-of-type(1)')
const link2FirstCard = firstCard.querySelector('a:nth-of-type(2)')

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navLinks = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
navLinks.forEach(link => console.log(link.textContent))
// C- Turn the collection of links into a real array
const navLinksArr = Array.from(navLinks)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const anchorHome = navLinksArr.find(link => link.textContent === 'Home')

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = 'Bloomtech Dog'
titleFirstCard.textContent = 'I am a dog!'
subtitleFirstCard.textContent = 'Things to know about me'
textFirstCard.textContent = 'I am are friendly, kind and cool. I am always happy and you should always share your food with me!!!'
link2FirstCard.textContent = 'Dog Ipsum'

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog/')
link2FirstCard.href = 'https://dogipsum.com/'
imageFirstCard.src = 'https://files.secure.website/wscfus/10567870/25715020/happy-golden-w1200-o.jpg'
logoTitle.className = 'logo heading dog'

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
header.style.fontSize = '18px'
header.classList.add('sky')
header.classList.remove('sky')
// setInterval(() => header.classList.toggle('sky'), 800) 

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)
blogLink.classList.add('menu-item')

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
const thirdCard = firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)
document.querySelector('.card-group').appendChild(thirdCard)

// I must use it because of hyphens (-)
const data = {
    "contact" : {
        "contact-heading": "Contact", 
        "address": "Varos Minden u 43, Earth",
        "phone": "06701234567",
        "email": "some@bla.com"
    }
}

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
// I did it already
const contacts = document.querySelector('.contact-heading')
const address = document.querySelector('.address')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')

// bracket notation also is a must because of hyphens(-)
contacts.textcontent = data["contact"]["contact-heading"]
address.textContent = data["contact"]["address"]
phone.textContent = data["contact"]["phone"]
email.textContent = data["contact"]["email"]

const footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around';

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

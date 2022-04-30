// console.log('Hello world 🐱‍💻🤷‍♂️✌')

// const firstName = 'Naheem'
// const lastName = 'OLOYEDE';
// const mixName =[firstName, lastName]
// const yearsOfExp = 4;

// console.log(firstName, lastName, yearsOfExp);
// console.log('My name is '+ firstName + ' ' +lastName + 'i have for 4 yearsOfExp');

// //DOM Manipulation ==> Document object Module
// const h1 = document.querySelector('.headingPrimary');

// h1.addEventListener('click', function() {
//     h1.style.color = 'brown';
//     h1.style.backgroundColor = 'cyan';
//     h1.style.padding = '32px';
//     h1.textContent = mixName
// })



// console.log(h1);

// FOOTER

const date = new Date();
const currentYear = date.getFullYear();

const footerYear = document.querySelector('.year');
footerYear.textContent = currentYear;

// FOR MOBILE NAV
const btnNavEl = document.querySelector('.btnMobileNav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('navOpen');
})

//How to write function
// function addNumber (num1, num2) {
//     return num1 + num2;
// }

// console.log(addNumber(23, 47))
// console.log(addNumber(45, 35))

// Adding scroll Effectsm on Page
const allLinks= document.querySelectorAll('a:link');

allLinks.forEach(function(link){
    link.addEventListener('click',function(event){
        event.preventDefault();
        const href=link.getAttribute('href')

        // Scrolling to the top
        if (href==="#") {
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }

        if (href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'})
            headerEl.classList.toggle('navOpen');
        }

    })
})

// For The Stick NAv
const sectionHero = document.querySelector('.sectionHero');


// Observe the web page
const obs = new IntersectionObserver(function(entries){
    const entry = entries[0];
    if (entry.isIntersecting === false) {
        document.body.classList.add('sticky');

    }
    if (entry.isIntersecting === true) {
        document.body.classList.remove('sticky');
    };

}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
    
});
obs.observe(sectionHero);




function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
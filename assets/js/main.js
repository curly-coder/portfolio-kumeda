/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form')
//     contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//     e.preventDefault ()

//     // serviceID - templateID - #form - publicKey
//     emailjs.sendForm ('service_boln5kb', 'template_130eg8g', '#contact-form', 'cRWRj9vzZnFb3x32T')
//         .then(() => {
//             // Show sent message
//             contactMessage.textContent = 'Message sent successfully'

//             // Remove message after five seconds
//             setTimeout(() => {
//                 contactMessage.textContent = ''
//             }, 5000)

//             // Clear input fields
//             contactForm.reset()
//         }, ()=> {
//             // Show error message
//             contactMessage.textContent = 'Message not sent (service error) ❌'
//         })

// }

// contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal( `.home__data, .skills, .contact__container`)
sr.reveal( `.home__img`, {delay: 600})
sr.reveal( `.home__scroll`, {delay: 800})
sr.reveal( `.work__card, .services__card`, {interval: 100})
sr.reveal( `.about__content`, {origin: 'right'})
sr.reveal( `.about__img`, {origin: 'left'})


// Switch language 

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        element.innerText = element.getAttribute(`data-${language}`);
    });
}

document.getElementById("contact-form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Останавливаем отправку формы

        let emailInput = document.getElementById("user_email").value.trim();
        let messageBox = document.getElementById("contact-message");

        // Проверка email через API (пример с Abstract API)
        let apiKey = "122861af6d224528a375dc30734b9365"; // 🔹 Замените на свой ключ API
        let apiUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(emailInput)}`;

        try {
            let response = await fetch(apiUrl);
            let data = await response.json();

            if (data.is_valid_format.value && data.deliverability === "DELIVERABLE") {
                // Если email действительный, отправляем форму
                messageBox.innerText = "Email confirmed! Sending...";
                messageBox.style.color = "green";

                setTimeout(() => {
                    event.target.submit(); // Отправка формы
                }, 1000);
            } else {
                messageBox.innerText = "Email is invalid! Please enter an existing email.";
                messageBox.style.color = "red";
            }
        } catch (error) {
            console.error("Email validation error: ", error);
            messageBox.innerText = "Email validation error! Try again later.";
            messageBox.style.color = "red";
        }
    });
// for nav

const nav = document.querySelector('nav')
const navLogo = document.querySelector('.logo')

let navHeight = nav.clientHeight

window.addEventListener('scroll', () => {
  nav.classList.toggle('scroll-nav', scrollY > navHeight / 3)
  if (scrollY >= navHeight / 3) {
    navLogo.src = './images/logo-black.png'
  } else {
    navLogo.src = './images/logo.png'
  }
})

const navList = document.querySelectorAll('.nav-list li a')

navList.forEach((button) => {
  button.addEventListener('click', (e) => {
    document.querySelector('.active-link').classList.remove('active-link')
    e.target.classList.add('active-link')
  })
})

// for Intersection Observer

const donwnloadLinkObsever = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('link-js', entry.isIntersecting)
    })
  },
  {
    threshold: 0.5,
  }
)

const donwnloadLink = document.querySelectorAll('.link')
donwnloadLink.forEach((e) => {
  donwnloadLinkObsever.observe(e)
})

const featuresObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('features-js', entry.isIntersecting)
    })
  },
  {
    threshold: 0.2,
  }
)

const features = document.querySelectorAll('.features')
features.forEach((e) => {
  featuresObserver.observe(e)
})

const featuresListObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('features-list-js', entry.isIntersecting)
    })
  },
  {
    threshold: 0.2,
  }
)

const featuresList = document.querySelectorAll('.f')
featuresList.forEach((e) => {
  featuresListObserver.observe(e)
})

const mainSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[0].classList.add('active-link')
    }
  })
})

const mainSection = document.querySelector('.main')
mainSectionObserver.observe(mainSection)

const aboutSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[1].classList.add('active-link')
    }
  })
})

const aboutSection = document.querySelector('.about')
aboutSectionObserver.observe(aboutSection)

const featuresIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[2].classList.add('active-link')
    }
  })
})

const featuresSection = document.querySelector('.section-features')
featuresIntersectionObserver.observe(featuresSection)

const teamIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[3].classList.add('active-link')
    }
  })
})

const teamSection = document.querySelector('.team')
teamIntersectionObserver.observe(teamSection)

const testimonialsIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[4].classList.add('active-link')
    }
  })
})

const testimonialsSection = document.querySelector('.testimonials')
testimonialsIntersectionObserver.observe(testimonialsSection)

const questionIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[5].classList.add('active-link')
    }
  })
})

const questionSection = document.querySelector('.question')
questionIntersectionObserver.observe(questionSection)

const contactIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.active-link').classList.remove('active-link')
      navList[6].classList.add('active-link')
    }
  })
})

const contactSection = document.querySelector('.contact')
contactIntersectionObserver.observe(contactSection)

// for testimonials -----------------------------------------------------------------------------

const carousel = document.querySelector('.carousel')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const interval = 3000

let slide = document.querySelectorAll('.slide')
let index = 1
let loop

const firstSlide = slide[0].cloneNode(true)
const lastSlide = slide[slide.length - 1].cloneNode(true)

firstSlide.id = 'first-slide'
lastSlide.id = 'last-slide'

carousel.append(firstSlide)
carousel.prepend(lastSlide)

const slideWidth = slide[index].clientWidth

carousel.style.transform = `translateX(${-slideWidth * index}px)`

const slideLoop = () => {
  loop = setInterval(() => {
    moveToNextSlide()
  }, interval)
}

const getSlides = () => document.querySelectorAll('.slide')

carousel.addEventListener('transitionend', () => {
  slides = getSlides()
  if (slides[index].id === firstSlide.id) {
    carousel.style.transition = 'none'
    index = 1
    carousel.style.transform = `translateX(${-slideWidth * index}px)`
  }

  if (slides[index].id === lastSlide.id) {
    carousel.style.transition = 'none'
    index = slides.length - 2
    carousel.style.transform = `translateX(${-slideWidth * index}px)`
  }
})

const moveToNextSlide = () => {
  slide = getSlides()
  if (index >= slide.length - 1) return
  index++
  carousel.style.transition = ' .5s ease-out'
  carousel.style.transform = `translateX(${-slideWidth * index}px)`
}

carousel.addEventListener('mouseenter', () => {
  clearInterval(loop)
})

prevBtn.addEventListener('click', () => {
  if (index <= 0) return
  index--
  carousel.style.transition = '.5s ease-in-out'
  carousel.style.transform = `translateX(${-slideWidth * index}px)`
  clearInterval(loop)
})

prevBtn.addEventListener('mouseleave', slideLoop)

nextBtn.addEventListener('click', () => {
  slides = getSlides()
  if (index >= slides.length - 1) return
  index++
  carousel.style.transition = '.5s ease-in-out'
  carousel.style.transform = `translateX(${-slideWidth * index}px)`
  clearInterval(loop)
})

nextBtn.addEventListener('mouseleave', slideLoop)

carousel.addEventListener('mouseleave', slideLoop)

slideLoop()

//  for quesitons

const questions = document.querySelectorAll('.wrapper')
const chevronDown = document.querySelectorAll('.fa-chevron-down')
const questionList = document.querySelector('.questions-list')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('show-ans')
    question.querySelector('.fa-chevron-down').classList.toggle('chevron-up')
  })
})

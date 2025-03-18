import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const gallerySwiper = new Swiper('.gallery__swiper',
  {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".gallery__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },

  });
const fedbackSwiper = new Swiper('.feedback__swiper',
  {
    slidesPerView: 'auto',
    spaceBetween: 80,
    freeMode: true,
    pagination: {
      el: ".feedback__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.feedback__swiper-button-next',
      prevEl: '.feedback__swiper-button-prev',
    },
  });



const page = document.querySelector('.page')
const burgerMenu = page.querySelector('.header__burger')
const burgerMenuLineDekore = page.querySelector('.header__burger-line')
const headerNavElement = page.querySelector('.header__nav')
const offersButton = page.querySelector('.offers__button')
const popup = page.querySelector('.popup')
const form = page.querySelector('.form')
const formCheckbox = form['person-data']
const formName = form.name
const formPhone = form.phone
const formEmail = form.email
const formSubmite = form.submit
const formLabel = form.querySelector('.form__label')

formCheckbox.addEventListener('change', (evt) => {
  const checked = evt.target.checked
  checked ? formLabel.classList.add('form__label_active') : formLabel.classList.remove('form__label_active')
})

const closedPopupKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closedPopup()
  }
}
const closedPopup = () => {
  popup.classList.remove('popup_active')
  window.removeEventListener('keydown', closedPopupKeydown)
}
const openPopup = () => {
  popup.classList.add('popup_active')
  window.addEventListener('keydown', closedPopupKeydown)
}
burgerMenu.addEventListener('click', () => {
  burgerMenuLineDekore.classList.toggle('header__burger-line_active')
  headerNavElement.classList.toggle('header__nav_active')
})

offersButton.addEventListener('click', openPopup)

const phonePattern = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const formValid = () => {
  if (formName.value.length < 3) {
    formName.classList.add('form__input_error')
  } else {
    formName.classList.remove('form__input_error')
  }
  if (!phonePattern.test(formPhone.value)) {
    formPhone.classList.add('form__input_error')
  } else {
    formPhone.classList.remove('form__input_error')
  }
  if (!emailPattern.test(formEmail.value)) {
    formEmail.classList.add('form__input_error')
  } else {
    formEmail.classList.remove('form__input_error')
  }

  if (formName.value.length < 3 && !phonePattern.test(formPhone.value) && !emailPattern.test(formEmail.value)) {
    return true
  } else {
    return false
  }
}

console.log(formSubmite)
formSubmite.addEventListener('click', (evt) => {
  evt.preventDefault()
  console.log(formValid())
})
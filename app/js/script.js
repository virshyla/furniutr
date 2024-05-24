const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,


      breakpoints: {
        521: {
          slidesPerView: 2,
        },
        981: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        }
      },
  });

  let doc = document;
  
let a = doc.querySelectorAll('a')
for(let item of a){
  item.addEventListener('click', () => {
    event.preventDefault();
  })
}

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    
    let blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

let burg = doc.querySelector('.burger')
let b_line1 = doc.querySelector('.burg-line1')
let b_line2 = doc.querySelector('.burg-line2')
let b_line3 = doc.querySelector('.burg-line3')
let body = doc.body

let new_el = doc.querySelector('.new-el')

burg.addEventListener("click", (event) => {
  b_line1.classList.toggle('burg-line1-active')
  b_line2.classList.toggle('burg-line2-active')
  b_line3.classList.toggle('burg-line3-active')

  new_el.classList.toggle('new-el-active')
})

/* scroll to ... */

const anchors = document.querySelectorAll('a.scroll');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
 
    const blockID = anchor.getAttribute('href');
 
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

/* humburger menu */

const humburger = document.querySelector("#nav-icon1");

function addClassOne() {
	const menu = document.querySelector("nav");

	menu.classList.toggle("clicked");
	humburger.classList.toggle("open");
}

humburger.addEventListener("click", addClassOne);

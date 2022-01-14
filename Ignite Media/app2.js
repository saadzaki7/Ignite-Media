const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo');

// Start animation of dropdown
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

//Show active menu
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    const networkMenu = document.querySelector('#network-page')
    let scrollPos = window.scrollY

    //add highlight

    if(window.innerWidth>960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth>960 && scrollPos<1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth>960 && scrollPos<2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        networkMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth>960 && scrollPos<5000) {
      networkMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
      servicesMenu.classList.remove('highlight')
      return
  }

    if (elem && window.innerWidth <960 && scrollPos<600|| elem) {
        elem.classList.remove('highlight')
    }
}

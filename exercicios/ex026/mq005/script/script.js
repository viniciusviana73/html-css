function clickMenu() {
    menuItems.style.display == 'block' ?
    menuItems.style.display = 'none' : 
    menuItems.style.display = 'block'
}

function changeSize() {
    if (window.innerWidth >= 768) {
        menuItems.style.display = 'block'
    } else {
        menuItems.style.display = 'none'
    }
}
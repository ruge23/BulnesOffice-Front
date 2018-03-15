function scrollToElememnt(element){
    window.scrollTo({
        'behavior':'smooth',
        'top': element.offsetTop
    });
}


document.querySelector(".menu")
    .addEventListener('click', () => {
        document.querySelector(".menu-screen").classList.add("active");
    })

document.querySelector(".close")
    .addEventListener('click', () => {
        document.querySelector(".menu-screen").classList.remove("active");
    })

let links = document.querySelectorAll(".menu-screen a");

links.forEach(link => {
    link.addEventListener('click', (ev) => {
        document.querySelector(".menu-screen").classList.remove("active");
        
        //console.log(link.getAttribute('href'));
        const selector = link.getAttribute('href');
        
        if(window.scrollTo) ev.preventDefault();
        
        scrollToElememnt(document.querySelector(selector));

        return !!window.scrollTo;
    })
})
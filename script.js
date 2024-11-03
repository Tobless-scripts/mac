dropdown = document.querySelector(".dropdown");
dropdown.onclick = function() {
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active")
};

typing = document.querySelector('.typing');
dropdown.addEventListener('click',
    function(){
        if (typing.style.marginTop === "250px") {
            typing.style.marginTop = "0px";
        }else{
            typing.style.marginTop = "250px";
        }
});

new Typed('#typed-text', {
    strings: ["Purchase your Headphones & Accessories", "Get the best deals with us", "Purchase devices for your business", "Purchase Headphones & Gadgets"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});
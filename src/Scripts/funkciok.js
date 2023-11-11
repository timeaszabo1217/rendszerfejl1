function stickyNav() {
    const navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
}
window.addEventListener('scroll', stickyNav);

function hideCookie() {
    let cookie = document.getElementById("cookie");
    document.cookie = "cookieAccepted=true; SameSite=None; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    if (document.cookie.indexOf("cookie_accepted=true") >= 0) {
        cookie.style.display = "fixed";
    } else {
        cookie.style.display = "none";
    }
}
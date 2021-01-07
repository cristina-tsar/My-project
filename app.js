$(document).ready(function() {
        
    //mobile menu
    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");

    mobileMenu.addEventListener("click",function() {
        mobileMenu.classList.toggle("active-menu");
        if(mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
        } else {
            mainMenu.classList.remove("active-menu");
        }
    })

    // tabs
    let tabs = document.querySelectorAll(".tab-block")
    let tabText = document.querySelectorAll(".tab-content");
    let tabsWrap = document.querySelector(".tabs-block");

    function hideTabContent() {
        tabText.forEach(tab => {
            tab.classList.add("hide");
            tab.classList.remove("show")
        })
        tabs.forEach(item => {
            item.classList.remove("tab-active")
        })
    }
    function showTabContent(item = 0) {
        tabText[item].classList.add("show");
        tabText[item].classList.remove("hide");
        tabs[item].classList.add("tab-active");    
    }
    hideTabContent()
    showTabContent()

    tabsWrap.addEventListener("click",function(e) {
        let target = e.target    
        if(target && target.classList.contains("tab-block")) {
            tabs.forEach((item,i) => {
                if(target === item) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })

    //modal
    let modal = document.querySelector(".modal-subscribe");
    let closeBtn = document.querySelector(".btn-close");
    let openBtn = document.querySelectorAll(".btn-watch");

    function closeModal() {
        modal.classList.remove("show");
        modal.classList.add("hide")
    }

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        
    }
    setTimeout(openModal, 30000);

    openBtn.forEach((btn) => {
        btn.addEventListener("click",function(e) {
            e.preventDefault();
            openModal();
        })
    })

    closeBtn.addEventListener("click",closeModal) 

    modal.addEventListener("click",function(e) {
        if(e.target === modal) {
            closeModal()
        }
    })

    $(".slider-block").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })
    
})
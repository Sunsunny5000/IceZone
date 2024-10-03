document.addEventListener('DOMContentLoaded', () => {
    console.log("index.js enabled");

    // let max_width = window.screen.width;
    // let max_height = window.screen.height;

    // let html = document.getElementsByTagName("html");
    // let body = document.getElementsByTagName("body");
    // html.style.width = max_width;
    // html.style.height = max_height;
    // body.style.width = max_width;
    // body.style.height = max_height;

    // document.documentElement.style.setProperty('--screen-width', max_width + 'px');
    // document.documentElement.style.setProperty('--screen-height', max_height + 'px');

    // Header

    let logo_pic = document.getElementById("logo_pic");
    let sidebar_left = document.getElementById("sidebar_left");
    let logo_pic_click = false;
    logo_pic.addEventListener('click', function (evt) {
       if(!logo_pic_click){
            // console.log("click");
            logo_pic_click = true;
            logo_pic.style.transition = "all .3s";
            logo_pic.style.transform = "scale(0.9)";
            sidebar_left.style.animation = "sidebar_left_display 0.3s";
            sidebar_left.style.display = "flex";
            setTimeout(function(){
                sidebar_left.style.transform = "translateX(0%)";
                logo_pic_click = false;
                logo_pic.style.transition = "all .3s";
                logo_pic.style.transform = "scale(1.0)";
            }, 300)
        }
    });

    let nav_btn_1 = document.getElementById("nav_btn_1");
    let nav_btn_2 = document.getElementById("nav_btn_2");
    let nav_btn_3 = document.getElementById("nav_btn_3");
    let nav_btn_click = false;
    nav_btn_1.addEventListener("click", function (evt) {
        if(!nav_btn_click){
            nav_btn_click = true;
            console.log(this.innerHTML + 'btn is clicked');
            setTimeout(function(){
                nav_btn_click = false;
            }, 300)
        }
    });
    nav_btn_2.addEventListener("click", function (evt) {
        if(!nav_btn_click){
            nav_btn_click = true;
            console.log(this.innerHTML + 'btn is clicked');
            setTimeout(function(){
                nav_btn_click = false;
            }, 300)
        }
    });
    nav_btn_3.addEventListener("click", function (evt) {
        if(!nav_btn_click){
            nav_btn_click = true;
            console.log(this.innerHTML + 'btn is clicked');
            setTimeout(function(){
                nav_btn_click = false;
            }, 300)
        }
    });

    // Sidebar

    let sidebar_logo_pic = document.getElementById("sidebar_logo_pic");
    let sidebar_logo_pic_click = false;
    sidebar_logo_pic.addEventListener('click', function (evt) {
        if(!sidebar_logo_pic_click){
            // console.log("click");
            sidebar_logo_pic_click = true;
            sidebar_logo_pic.style.transition = "all .3s";
            sidebar_logo_pic.style.transform = "scale(0.9)";
            sidebar_left.style.animation = "sidebar_left_hidden 0.3s";
            setTimeout(function(){
                sidebar_left.style.display = "none";
                sidebar_left.style.transform = "translateX(-100%)";
                sidebar_logo_pic_click = false;
                sidebar_logo_pic.style.transition = "all .3s";
                sidebar_logo_pic.style.transform = "scale(1.0)";
            }, 300)
        }
    });
})

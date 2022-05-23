


var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
}

(function($){
	$(function(){

        
        
        
        $('.main-nav > ul > li').each(function(){
            var $this = $(this);
            
            $this.mouseenter( function(){
                $this.find('.sub-menu,.sub-menu-v1').slideDown()
            })
            $this.mouseleave( function(){
                $this.find('.sub-menu,.sub-menu-v1').slideUp();
            })
        })


    });
    
})(jQuery)

// mobile menu

let body = document.querySelector("body");
let menuBar = document.querySelector(".hamburger");

menuBar.addEventListener('click', function() {
    body.classList.toggle("navShow");
})


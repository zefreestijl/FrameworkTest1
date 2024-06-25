// 0. Show Menu
const showMenu1 = (toggleId1, navId1) =>
{
    const toggle1 = document.getElementById(toggleId1),
    nav1 = document.getElementById(navId1)

    if (toggle1 && nav1)
    {
        toggle1.addEventListener('click', ()=> {
            nav1.classList.toggle('show-menu');
            
        })
    }
}

showMenu1('nav_toggle1', 'nav_menu1');



// 1. Collapse Menu
const navLink = document.querySelectorAll('.nav_link');

function func_NavLinkFix(){
    const navMenu = document.getElementById('nav_menu1');
    navMenu.classList.remove('show-menu');
}
navLink.forEach( e=> e.addEventListener('click', func_NavLinkFix));



// 2. Scroll Section Active Link
var scrollY1 = window.pageYOffset;
const section1 = document.querySelectorAll('section[id]');

function func_ScrollActive()
{    
    scrollY1 = window.pageYOffset;


    section1.forEach( current => {
        var sectionHeight1 = current.offsetHeight;
        var sectionTop1 = current.offsetTop -50;


        sectionId1 = current.getAttribute('id');


        if (scrollY1 > sectionTop1 && scrollY1 <= sectionTop1 + sectionHeight1)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId1 + ']').
            classList.add('active-link');
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId1 + ']').
            classList.remove('active-link');
        }

        console.log(current.getAttribute('id'));
    })
}
window.addEventListener('scroll', func_ScrollActive);



// 3. Change Background of Nav Header while Scrolling Down
function func_ScrollHeader()
{
    var header1 = document.getElementById('header1');
    if (this.scrollY1 >= 200)   header1.classList.add('scroll-header');
    else    header1.classList.remove('scroll-header')
}
window.addEventListener('scroll', func_ScrollHeader);




// 4. Show Scroll Top Button
function func_ScrollToTop()
{
    var scrollTop1 = document.getElementById('scroll-top1');
    if (this.scrollY1 >= 550)   scrollTop1.classList.add('show-scroll');
    else    scrollTop1.classList.remove('show-scroll')
}
window.addEventListener('scroll', func_ScrollToTop);





// 5. MixItUp3 Project Filter
var mixer = mixitup('.project_container', {
    selectors: {
        target: '.project_content'
    },
    animation: {
        duration: 300
    }
});




// 6. Link Active Filter Projects
var linkProject1 = document.querySelectorAll('.project_item');

function func_ActiveProject()
{
    if (linkProject1)
    {
        linkProject1.forEach( e=> e.classList.remove('active_project'));
        this.classList.add('active_project');
    }
}
linkProject1.forEach(e=>e.addEventListener('click', func_ActiveProject));


// 7. Swipper Carousal - Slider
const swiper = new Swiper('.testimonial_container', {
    // Optional parameters
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
  });



// 8. GSAP Animation
gsap.from(".home_data", {opacity: 0, y: 0, duration: 2, delay: .2 });
gsap.from(".home_social", {opacity: 0, y: 150, duration: 1.5, delay: .3 });

gsap.from(".home_greeting, .home_name, .home_profession", 
{opacity: 0, y: 100, duration: 2, ease: 'expo.out', delay: .5 });

gsap.from(".nav_logo, .nav_toggle, .nav_item", 
{opacity: 0, x: 100, duration: 2, ease: 'expo.out', delay: .9 });


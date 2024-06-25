var left0b = null;
var right0c = null;

// Get OnLoad
window.addEventListener('load', (function () {


    left0b = document.getElementsByClassName('left0b')[0];

    
})) ;



// Collapse Left Panel
document.addEventListener('click', function(e){
    //console.log(window.getComputedStyle(left0b).width);


    if (e.target.id == 'middle0c')
    {
        if (window.getComputedStyle(left0b).width == "0px")
        {
            left0b.style.width = "22rem";
            left0b.style.opacity = 1;
            //left0b.style.display = 'block';

        }
            
        else if (window.getComputedStyle(left0b).width == "22rem" || !left0b.style.display)
        {
            left0b.style.width = "0px";
            left0b.style.opacity = 0;
            //left0b.style.display = 'none';
        }
            
        
    }
});

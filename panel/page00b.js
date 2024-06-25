var currentHighlight1 = null;
const arrDemo0 = ["0a", "0b"];
const arrDemo1 = ["1a", "1b", "1c", "1d"];
const arrDemo2 = ["2a","2aa", "2b", "2bb"];
const arrDemo3 = ["3a", "3b", "3c", "3cc"];
const arrDemo4 = ["4a", "4b"];
const arrDemo5 = ["5a", "5aa", "5b", "5c", "5cc"];
const arrDemo6 = ["6a", "6aa", "6b", "6c", "6cc"];
const arrDemo7 = ["7b", "7bb", "7c", "7d"];
const arrDemo8 = ["8a", "8aa", "8b", "8c"];
const arrDemo9 = ["9a", "9aa", "9b","9bb", "9c", "9cc", "9d" ];


window.onload = (function () {
    // 0. Expand Group
    var coll = document.getElementsByClassName("collapsible1");

    func_expand_init(coll);


    // 1. Title Controller
    const btn_title0 = document.getElementsByClassName('btn_title0')[0];

    btn_title0.addEventListener('click', (e)=>
    {
        func_expand_controll(coll)
        func_expand_controll(coll)
        func_expand_controll(coll)
            
    });


    // 2. Click Event on Each Tool - Highlight
    $(".tool1").on('click', function(e){
        
        func_highlightTool_Red(e, coll);

    });

    
    $(".tool1").on('mouseover', function(e){
        func_highlightTool_Grey(e, coll);

    });

    
    $(".collapsible1").on('mouseover', function(e){
        
        for (var i=0; i < $(".collapsible1").length; i++ )
        {
            var content1 = coll[i].nextElementSibling;   
            
            var color1 = "#747474";

            if (content1.id.includes('1'))
                color1 = "burlywood";
            else if (content1.id.includes('2'))
                color1 = "darkseagreen";
            else if (content1.id.includes('3'))
                color1 = "lightskyblue";
            else if (content1.id.includes('4'))
                color1 = "darkkhaki";
            
            if (currentHighlight1 != i)
            {
                coll[i].style.color = "#747474";
                coll[i].style.borderColor = color1;

                //coll[i].style.borderStyle = "none";
                //content1.style.borderStyle = "none";
                    

            }


        }
    });

    $(".tool1").on('mouseout', function(e){
        for (var i=0; i < $(".tool1").length; i++ )
        {
            var content1 = coll[i].nextElementSibling;   
            
            var color1 = "#747474";

            if (content1.id.includes('1'))
                color1 = "burlywood";
            else if (content1.id.includes('2'))
                color1 = "darkseagreen";
            else if (content1.id.includes('3'))
                color1 = "lightskyblue";
            else if (content1.id.includes('4'))
                color1 = "darkkhaki";
            
                
            if (currentHighlight1 != i)
            {
                coll[i].style.color = "#747474";
                
                coll[i].style.borderColor = color1;
                content1.style.borderColor = color1;

                //coll[i].style.borderStyle = "none";
                //content1.style.borderStyle = "none";
                    

            }


        }
    });


    // 3. Click on Tool - Show Icon    
    for (var i=0; i < $(".tool1").length; i++ )
    {
        var height1 = window.getComputedStyle($(".tool1")[i]).height;
        
        if ($(".icon_playback1")[i] != null)
            $(".icon_playback1")[i].style.lineHeight = height1;
    }

});


// Function
function func_highlightTool_Red(e, coll)
{
    // 2a. Change Style to Highlight Header

    for (var i=0; i < $(".tool1").length; i++ )
    {
        var content1 = coll[i].nextElementSibling;   

        //console.log( Array.from(e.target.classList).includes('bx') );        
        //console.log( e.target.parentNode.id === $(".tool1")[i].id );

        var color1 = "#747474";

        if (content1.id.includes('1'))
            color1 = "burlywood";
        else if (content1.id.includes('2'))
            color1 = "darkseagreen";
        else if (content1.id.includes('3'))
            color1 = "lightskyblue";
        else if (content1.id.includes('4'))
            color1 = "darkkhaki";

        
        //
        var id1 = e.target.id;
        var id2 = e.target.parentNode.id;

        if (id1.includes("color"))
        {            
            var c1 = e.target.nextElementSibling;
            id1 = c1.getElementsByClassName("tool1")[0].id;
            
        }
        


        if ($(".tool1")[i].id === id1
        || id2 === $(".tool1")[i].id)
        {
            currentHighlight1 = i;

            coll[i].style.color = "#d33939";

            coll[i].style.borderColor = "#eb6c6c";
            coll[i].style.borderWidth = "2px";
            coll[i].style.borderStyle = "solid";
            coll[i].style.borderBottom = "none";

            content1.style.borderColor = "#eb6c6c";
            content1.style.borderWidth = "2px";
            content1.style.borderStyle = "solid";
            content1.style.borderTop = "none";


            if ($(".icon_playback1")[i] != null)
                $(".icon_playback1")[i].style.opacity = .5;
        }                
            
        else
        {
            coll[i].style.color = "#747474";            
            coll[i].style.borderColor = color1;

            content1.style.borderColor = color1;

            //coll[i].style.borderStyle = "none";
            //content1.style.borderStyle = "none";
            
            if ($(".icon_playback1")[i] != null)
                $(".icon_playback1")[i].style.opacity = .0;
        }                


    }

    // 2b. Change iFrame Demo Page by Current Highlight
    var frame0c = this.top.document.getElementsByClassName('iframe0c')[0];
    
    var html1 = null;
    
    if($(".panel0")[0].id == "page00")
    var html1 = arrDemo0[currentHighlight1];

    else if($(".panel0")[0].id == "page01")
        var html1 = arrDemo1[currentHighlight1];

    else if($(".panel0")[0].id == "page02")
        var html1 = arrDemo2[currentHighlight1];

    else if($(".panel0")[0].id == "page03")
        var html1 = arrDemo3[currentHighlight1];

    else if($(".panel0")[0].id == "page04")
        var html1 = arrDemo4[currentHighlight1];

    else if($(".panel0")[0].id == "page05")
        var html1 = arrDemo5[currentHighlight1];
    
    else if($(".panel0")[0].id == "page06")
        var html1 = arrDemo6[currentHighlight1];

    else if($(".panel0")[0].id == "page07")
        var html1 = arrDemo7[currentHighlight1];

    else if($(".panel0")[0].id == "page08")
        var html1 = arrDemo8[currentHighlight1];

    else if($(".panel0")[0].id == "page09")
        var html1 = arrDemo9[currentHighlight1];

    

    if (window.location.href.includes('127.0.0.1'))
        html1 = "http://127.0.0.1:5500/demo/demo" + html1 + ".html";  // for Live Server

    else if (window.location.href.includes('192.168.3.103'))
        html1 = "http://192.168.3.103:5500/demo/demo" + html1 + ".html";  // for Live Server - WIFI

    else if (window.location.href.includes('172.18.100.21'))
        html1 = "http://172.18.100.21:5500/demo/demo" + html1 + ".html";  // for Live Server - PC

    else
        html1 = "../DLN_Revit_Addin_Document/demo/demo" + html1 + ".html"; // for Git Pages

        
    frame0c.src = html1;


}


function func_highlightTool_Grey(e, coll)
{
    var color1 = "#747474";


    for (var i=0; i < $(".tool1").length; i++ )
    {
        var content1 = coll[i].nextElementSibling;   
        
        if (content1.id.includes('1'))
            color1 = "burlywood";
        else if (content1.id.includes('2'))
            color1 = "darkseagreen";
        else if (content1.id.includes('3'))
            color1 = "lightskyblue";
        else if (content1.id.includes('4'))
            color1 = "darkkhaki";


        if (currentHighlight1 != i)
        {
            if ($(".tool1")[i].id === e.target.id
        || e.target.parentNode.id === $(".tool1")[i].id )
            {            
                coll[i].style.color = "#d33939";

                coll[i].style.borderColor = "747474";
                coll[i].style.borderWidth = "2px";
                coll[i].style.borderStyle = "solid";
                coll[i].style.borderBottom = "none";

                content1.style.borderColor = "747474";
                content1.style.borderWidth = "2px";
                content1.style.borderStyle = "solid";
                content1.style.borderTop = "none";
            }                    
                
            else
            {
                coll[i].style.color = "747474";
                
                coll[i].style.borderColor = color1;
                content1.style.borderColor = color1;

                //coll[i].style.borderStyle = "none";
                //content1.style.borderStyle = "none";
            }                

        }
    }

}



var startX1 = null; var endX1 = null;
var startY1 = null; var endY1 = null;
var startTime1 = null;

document.addEventListener("touchstart", function(e)
{ 
    if (e.touches.length == 1)
      startTime1 = Date.now();
  
    if (Number(Date.now() -  startTime1) || startTime1 == null)
    {
      startX1 = startY1 = endX1 = endY1 = null;
      startTime1 = null;
      return;
    }
      
    startX1 = e.touches[0].clientX;
    startY1 = e.touches[0].clientY;
} )

document.addEventListener("touchend", function(e){ func_slideCheck(e) } )

function func_slideCheck(e)
{
    if (Number(Date.now() -  startTime1) < 100 || startX1 == null)
      return;
    
    var left0b = this.top.document.getElementsByClassName('left0b')[0];

    endX1 = e.changedTouches[0].clientX;
    endY1 = e.changedTouches[0].clientY;

    if (Math.abs(endY1 - startY1) > Math.abs(endX1 - startX1))
        return;

    if (endX1 - startX1 < -30)
    {
        if (window.getComputedStyle(left0b).width == "22rem" || !left0b.style.display)
        {
            left0b.style.width = "0px";
            left0b.style.opacity = 0;
        }
}
}





//
var is_expand1 = false;

// Expand Groups
function func_expand_controll(coll)
{   
    var i;
    is_expand1 = !is_expand1;

    for (i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;      

        coll[i].classList.toggle("active1");  
        
        if (!content.style.maxHeight && coll[i].classList.length == 1)
        {
            coll[i].classList.toggle("active1");  
        } 


        //
        if (is_expand1 )
        {
            content.style.maxHeight = null;
        } 
        else
        {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
        

    }
    
}


function func_expand_init(coll)
{   
    var i;
    
    for (i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;      

        coll[i].classList.toggle("active1");
        content.style.maxHeight = content.scrollHeight + "px";

        coll[i].addEventListener("click", function(e) 
        {
            this.classList.toggle("active1");  
            var content = this.nextElementSibling;   

            if (content.style.maxHeight )
            {
                //content.style.maxHeight = null;
                
            } 
            else
            {
                content.style.maxHeight = content.scrollHeight + "px";
            } 

            func_highlightTool_Red(e, coll);
        });
    }
    
}
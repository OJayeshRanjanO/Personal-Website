/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
function updateScreen(){
    var w = $(document).innerWidth();
//    var h = $(document).innerHeight();
    var h = $(".firstScreen").innerHeight() + $(".secondScreen").innerHeight() + $(".thirdScreen").innerHeight() + $(".fourthScreen").innerHeight() + $(".fifthScreen").innerHeight();
    var x = $("#WorkExperience").innerWidth();
    
//    var dt = new Date();
//var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var txt = w + " X " + h
    document.getElementById("test").innerHTML = txt;
    
    if (w >= 600){
        
//        alert('test');
        $("#RA-Advisor").text("Advisor: Dr. Paul Fodor")
        $("#Intern-Employer").text("Employer: Vibha Mullick")
        $("#S-TA-Instructor1").text("Instructor: Dr. Kevin McDonnell")
        $("#S-TA-Instructor2").text("Instructor: Michael Tashbook")
        $("#TA-Instructor1").text("Instructor: Dr. Kevin McDonnell")
        $("#TA-Instructor2").text("Instructor: Michael Tashbook")
        $("#TA-Instructor3").text("Instructor: Dr. Paul Fodor")
    }else{
        $("#RA-Advisor").text("Advisor: P. Fodor")
        $("#Intern-Employer").text("Employer: V. Mullick")
        $("#S-TA-Instructor1").text("Instructor: K. McDonnell")
        $("#S-TA-Instructor2").text("Instructor: M. Tashbook")
        $("#TA-Instructor1").text("Instructor: K. McDonnell")
        $("#TA-Instructor2").text("Instructor: M. Tashbook")
        $("#TA-Instructor3").text("Instructor: P. Fodor")
        
    }
    
}

//function test1(){
//            $("#RA-Advisor").text("Advisor: Dr. Paul Fodor")
////document.getElementById("text500").textContent = "This is some text";
//}

function takeAction(){
//    setInterval(function(){ alert("Hello"); },5000);
//            alert('I am in');
    var w = $(document).innerWidth();
    var dt = new Date();
    if (dt.getHours() >= 3 && dt.getHours() < 9){
        //Morning
        $('.firstScreen').css('background-image','url(./images/mountainDawn.png)')
        $('.secondScreen').css('background-color','#275977')
        $('.aboutMe').css('background-color','#103535')
        $('.fifthScreen').css('background-color','#275977')
        if (w >= 600){
            $("#screenContent").css('background-image','url(./images/mountainDawn.png)')
        }
    }else if(dt.getHours() >= 9 && dt.getHours() < 15){
        //Day
         $('.firstScreen').css('background-image','url(./images/mountainNoon.png)')
        $('.secondScreen').css('background-color','#3f682b')
        $('.aboutMe').css('background-color','#003802')
        $('.fifthScreen').css('background-color','#3f682b')
        if (w >= 600){
            $("#screenContent").css('background-image','url(./images/mountainNoon.png)')
        }
    }else if(dt.getHours() >= 15 && dt.getHours() < 21){
        //Evening
        $('.firstScreen').css('background-image','url(./images/mountainDusk.png)')
        $('.secondScreen').css('background-color','#74008c')
        $('.aboutMe').css('background-color','#2e0038')
        $('.fifthScreen').css('background-color','#74008c')
        if (w >= 600){
            $("#screenContent").css('background-image','url(./images/mountainDusk.png)')
        }
    }else if((dt.getHours() >= 21) || (dt.getHours() < 3)){//Night
        $('.firstScreen').css('background-image','url(./images/mountainNight.png)')
        $('.secondScreen').css('background-color','#4b2e83')
        $('.aboutMe').css('background-color','#002638')
        $('.fifthScreen').css('background-color','#4b2e83')
        if (w >= 600){
            $("#screenContent").css('background-image','url(./images/mountainNight.png)')
        }
    }
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
//    document.getElementById("demo").innerHTML = time; 

}
var txt = setInterval(function(){ takeAction()}, 1000);



//$(window).onload(function(){
         var description = 'Code Blue App Project for Dr Paul Richman of Stony Brook University - School of Medicine. This app serves as a monitoring and recommendation tool for someone who had Cardiac Arrest. The functionalities of this app includes, but not limited to -  monitor medication, procedures.';
     var url = 'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif';
//var url = 'tst';
        $("#projectDescription").text(description);
    $("#projectDisplay").css('background-image','url('+url+')');
//    
//});


$(document).ready(function(){
    $('html, body').animate({
        scrollTop: $(".firstScreen").offset().top
    }, 1);

    
    
    $( "#linkedIn" ).mouseenter(function() {
        $( "#linkedIn" ).empty();
//        $( "#linkedIn" ).animate({},5000,function(){
        $( "#linkedIn" ).append('<img src="./images/linkedIn-color.png" title="Facebook" width="20" height="20">')
//        });
    });
    $( "#linkedIn" ).mouseleave(function() {
        $( "#linkedIn" ).empty();
//                $( "#linkedIn" ).animate({},5000,function(){
        $( "#linkedIn" ).append('<img src="./images/linkedIn-white.png" title="Facebook" width="20" height="20">')
//                });
    });
    $( "#linkedIn" ).click(function() {
        window.open('https://www.linkedin.com/in/jayesh-ranjan-b139a9a8/')
    });
    
    
    $( "#facebook" ).mouseenter(function() {
        $( "#facebook" ).empty();
//        $( "#linkedIn" ).animate({},5000,function(){
        $( "#facebook" ).append('<img src="./images/facebook-color.png" title="Facebook" width="20" height="20">')
//        });
    });
    $( "#facebook" ).mouseleave(function() {
        $( "#facebook" ).empty();
//                $( "#linkedIn" ).animate({},5000,function(){
        $( "#facebook" ).append('<img src="./images/facebook-white.png" title="Facebook" width="20" height="20">')
//                });
    });
    $( "#facebook" ).click(function() {
        window.open('https://www.facebook.com/profile.php?id=100011379529253')
    });
    
    
    $( "#email" ).mouseenter(function() {
        $( "#email" ).empty();
//        $( "#linkedIn" ).animate({},5000,function(){
        $( "#email" ).append('<img src="./images/gmail-color.png" title="Email" width="20" height="26">')
//        });
    });
    $( "#email" ).mouseleave(function() {
        $( "#email" ).empty();
//                $( "#linkedIn" ).animate({},5000,function(){
        $( "#email" ).append('<img src="./images/gmail-white.png" title="Email" width="20" height="26">')
        $( "#emailID").css('display','none');
    });
    
    $( "#email" ).click(function(){
        $( "#emailID").css('display','block');
                            
    });
});

function resumeOnClick(){
//    alert('em')
    $('html, body').animate({
        scrollTop: $(".thirdScreen").offset().top
    }, 500);
}

function aboutMeOnClick(){
//    alert('em')
    $('html, body').animate({
        scrollTop: $(".secondScreen").offset().top
    }, 1000);
}

function projectsOnClick(){
    $('html, body').animate({
        scrollTop: $(".fourthScreen").offset().top
    }, 1500);   
}

function contactMeOnClick(){
    $('html, body').animate({
        scrollTop: $(".fifthScreen").offset().top
    }, 2000);   
}
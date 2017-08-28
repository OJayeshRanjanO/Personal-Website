

$(document).ready(function(){
    var todoList = {description:'Implementation of a To-Do list maker that lets users add items in their list of “To-Do” items.',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
    
    var mapEditor = {description:'Map editor for a game using Java, JavaFX, HTML, CSS and XML that quizzes user on geographic locations around the globe.',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
    
    var codeBlue = {description:'Code Blue App Project for Dr Paul Richman of Stony Brook University - School of Medicine. This app serves as a monitoring and recommendation tool for someone who had Cardiac Arrest. The functionalities of this app includes, but not limited to -  monitor medication, procedures.',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
    
    var eliza = {description:'A REST-based Eliza service with cookie-based session support that lets user resume their current therapy session. In addition, users can create their accounts, verify their accounts with email validation and retrieve their past conversations.',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
    
    var discussionForum = {description:'A discussion forum based on client – server architecture model.',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
 
    var bash = {description:'Custom implementation of bash that lets user pipe output to several files, run executables, and custom features such as displaying job/processes list, using key bindings',url:'https://media.giphy.com/media/13gcxAXZP1cLC/giphy.gif'}
    
    
    var projects = [codeBlue, eliza, mapEditor, todoList, bash];
    var index = 0
    
    
   $("#backButton").click(function(){
        index-=1
        if (index < 0){
           index = projects.length-1;
       }
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   });

    $("#nextButton").click(function(){
        index+=1
        if (index > projects.length-1){
           index = 0;
       }
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   }); 
    
    $("#homeButton").click(function(){
        index = 0;
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   });
    
//    powerButton
    
    $("#prevButtonBig").click(function(){
        index-=1
        if (index < 0){
           index = projects.length-1;
       }
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   });
    
    $("#nextButtonBig").click(function(){
        index+=1
        if (index > projects.length-1){
           index = 0;
       }
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   });
    
        $("#powerButton").click(function(){
        index = 0;
       $("#projectDescription").text(projects[index].description);
       $("#projectDisplay").css('background-image','url('+projects[index].url+')')
   });
    
    
});
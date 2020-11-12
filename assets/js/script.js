$(document).ready(function(){

    $(window).on('scroll',function(){
       
        var scroll = $(window).scrollTop();
        console.log(scroll);
       if (scroll >= 50){
        $("#header").addClass("nav-white");
        
       }else{
        $("#header").removeClass("nav-white");
       }
       
    });

    $("#command").on('click',function(){
       
        $("#louer").addClass("animate__animated animate__pulse text-dark");
            
            $("#louer").on('mouseout mouseleave', function(){
                $("#louer").removeClass("animate__animated animate__pulse text-dark");
            
        
            });
        });


        

  
    $('#spiner').fadeOut(1000);

   
    });



$(document).ready(function(){
  
   var audio0 = document.getElementsByTagName("audio")[0];
     var audio1 = document.getElementsByTagName("audio")[1];
   
    var fla=1;
     var a=2;
     min= parseInt($('#clock').text())-1;
      sec=60;
    
    $("#break_plus").on("click", function(){
        if(fla==1){
            
            
        
               a++;
        console.log(a);
                 $("#break").html(a);
        }
     });
    
    $("#break_minus").on("click", function(){
    
        if(a>1 && fla==1)
    { 
                a--;
                 console.log(a);
                  $("#break").html(a);
               
            }
        
         
        
    });
    
    $("#session").html(25);
    $("#clock").html(25);
    var b=25;
    $("#session_plus").on("click", function(){
        if(b<50 && fla==1){
            
            b++;
            min++;
                 $("#session").html(b);
            $("#clock").html(b);
        }
               
     });
    
    $("#session_minus").on("click", function(){
    
        if(b>1 && fla==1)
            {
                
            b--;
                min--;
                
                  $("#session").html(b);
                 $("#clock").html(b);
            }
        
    });
    
    
   
    
    
  $('#display').click(function(){
      

   if(fla==1)
       {
           
       
          
    a = setInterval(function(){
      if (sec==0 && min == 0) {
        if ($('#name').text() == 'Session') {
                  audio1.play();
           $('#name').text('Break time');
       
             $('#child').attr('style', 'height: 285px')
                            $('#child').attr('style', 'background:linear-gradient(to right, #c33764, #1d2671);')
                       $("#name").addClass("animated slideInLeft");
         min=  parseInt($('#break').text())-1; 
            sec=59;
            
            
        }
        else {
          $('#name').text('Session');
            audio1.play();
             $("#name").addClass("animated slideInRight");
            
            min=parseInt($('#session').text())-1;
             
            sec=59;
             $('#child').attr('style', 'height: 285px');
        }
      }
      else if (sec==0) {
          
           audio1.play();
        min -= 1
         
        sec = 59
          
      }
        
      else {
        sec -= 1
          audio0.play();
            console.log(sec);
      }
        
          $('#child').slideUp(min * 60 * 1000 + sec * 1000, "linear");         
      if (sec < 10) { $('#clock').text(min + ':' + '0' + sec) }
      if (min < 10) { $('#clock').text('0' + min + ':' + sec) }
      if (sec < 10 && min < 10) { $('#clock').text('0' + min + ':' + '0' + sec) }
      if (sec >= 10 && min >= 10) { $('#clock').text(min + ':' + sec) }
    }, 1000)
           
        fla=0;   
       }
      
      else if(fla==0)
          {
              $("#child").stop(true);
              clearInterval(a);
              fla=1;
              
          }
 
})
  
  

});


    
    
    
    




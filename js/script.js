// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$('button').click(function(){ 
    var searchTerm = $('input').val();
    
    
    var request_url = "https://api.giphy.com/v1/gifs/search?q="+ searchTerm + "g&ratin=pg&api_key=dc6zaTOxFJmzC";
     
    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
          
           
              
          
           var pic_url = response.data[0].images.original.url;
           $('.text-center').append('<img src=' + pic_url + '>');
      },
    }); 
    
});


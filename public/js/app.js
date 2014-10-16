$(function(){

  $.ajax('/templates/home.html').success(function(htmlText){
    $('#content').html(htmlText)
  })

})

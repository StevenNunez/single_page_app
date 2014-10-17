function fetchPage(page) {
  var url = '/templates/' + page + '.html';
  $.ajax(url).success(function(htmlText){
    $('#content').html(htmlText);
  });
}

function init(){
  $('.home-link, .about-link, .contact-link').click(function(e){
    e.preventDefault();
    var pageFromTarget = e.target.className.split('-')[0];
    fetchPage(pageFromTarget);
  })

  if (location.hash){
    var page = location.hash.slice(1,location.hash.length);
    fetchPage(page);
  } else {
    fetchPage('home');
  }

  $('#content').on('click', 'form.contact input[type=submit]', function(e){
    e.preventDefault();
    var data = $(this).parent('form').serialize();
    $.post('/contact', data, function(response){
      $('#content').html(response);
    })
  })
}

$(function(){
  init();
})

$(document).ready(function(){
  var add = 0
   $('#more').click(function(){
     add++;
     $('#text').html("Votre score est de"+add);
   });
  $('#less').click(function(){
    add--;
    $('#text').html("Votre score est de"+add)
  });
});

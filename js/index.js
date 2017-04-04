/* main js */



/*function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}*/

$('.js-quantity-increase').click(function(){
var text = $('.js-quantity-text').val();
   var number = parseInt(text) + 1;
   $('.js-quantity-text').val(number);
});

$('.js-quantity-decrease').click(function(){
  var text = $('.js-quantity-text').val();
   var number = parseInt(text) - 1;


   if(number <= 0){
     /* do not do anything*/
   }else{
     $('.js-quantity-text').val(number);
   }
});

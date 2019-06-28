// jQuery(document).ready(function(){
//   $('main h1').mousemove(function(e){
//     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
//     var rYP = (e.pageY - this.offTop-$(this).height()/2);
//     $('main h1').css('text-shadow',+rYP/10+'px '+rXP/80+'px rgba(34,43,11,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,238,0.1) '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
//   });
// });

jQuery(document).ready(function(){
  $('main h1').mousemove(function(e){
    var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
    var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
    $('main h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(9, 235, 255,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(218, 9, 255,.7)');
  });
});

jQuery(document).ready(function(){
  $('.skill h1').mousemove(function(e){
    var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
    var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
    $('.skill h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(21, 255, 255,.8), '+rYP/8+'px '+rXP/60+'px rgba(255, 251,0,1), '+rXP/70+'px '+rYP/12+'px rgba(40, 255, 21,.7)');
  });
});

jQuery(document).ready(function(){
  $('.work h1').mousemove(function(e){
    var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
    var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
    $('.work h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(246, 43, 43,.8), '+rYP/8+'px '+rXP/60+'px rgba(43, 131, 246,1), '+rXP/70+'px '+rYP/12+'px rgba(33, 243, 44,.7)');
  });
});

$('.burger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');      
  }
});


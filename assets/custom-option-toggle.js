$(function () {
  $('.unavailable').parent('.option-2').css('display', 'none');

  $('.option-1').click(function () {
    console.log('test');
    setTimeout(() => {
      $('.option-2').css('display', 'inline-block');
      $('.unavailable').parent('.option-2').css('display', 'none');
    }, 5);
  });
});

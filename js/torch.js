

$(function(){
  // alert('OK !')

  const svgPath = document.querySelectorAll('.torchline');

  // const svgText = anime({
  //   targets: svgPath,
  //   loop: true,
  //   // direction: 'alternate',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: 'easeInOutSine',
  //   duration: 1000,
  //   opacity:0,
  //   // delay: (el, i) => { return i * 500 }
  // });

  anime({
    targets: svgPath,
    strokeDashoffset: [0, anime.setDashoffset],
    easing: 'easeInOutSine',
    duration: 500,
    // delay: 1000,
    // direction: 'alternate',
    loop: true
  });
  

})
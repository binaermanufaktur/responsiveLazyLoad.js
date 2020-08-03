function ResponsiveLazyLoadImg(
  screenSizes = {
    small : 640,
    medium : 1024
  }){
  this.init = function() {
    var screen = calculateScreen(screenSizes);
    var lazyimages = document.querySelectorAll('.lazy-responsive-image');
    initImageScr(lazyimages, screen);
    window.onscroll = function (){
      initImageScr(lazyimages, screen)
    };
    window.onresize = function()
    {
      initImageScr(lazyimages, screen);
    };


  }
}
export {ResponsiveLazyLoadImg};

function calculateScreen(screenSizes){
  screen.size = ($(window).width()<screenSizes.medium) ? ($(window).width()<screenSizes.small) ? 'mobile' : 'medium' : 'large';
  screen.isHighRes = (window.devicePixelRatio>1);
  return screen;
}

function isAboveViewportBottom(el){
  var rect = el.getBoundingClientRect();

  return (
    rect.top <= window.innerHeight
  );
}




function initImageScr(lazyImages, screen){
  for (var i = 0; i < lazyImages.length; i++) {
    var lazyimage = lazyImages[i];
    if(isAboveViewportBottom(lazyimage) && !(lazyimage.classList.contains('src-loaded'))){
      switch(screen){
        case 'mobile':
          lazyimage.src=lazyimage.dataset.smallImgsrc;
          break;
        case 'medium':
          lazyimage.src=lazyimage.dataset.mediumImgsrc;
          break;
        case 'large':
          lazyimage.src=lazyimage.dataset.largeImgsrc;
          break;
        default:
          lazyimage.src=lazyimage.dataset.smallImgsrc;
      }
    }
  }


}


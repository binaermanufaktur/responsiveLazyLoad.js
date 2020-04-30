function ResponsiveLazyLoadImg(
  screenSizes = {
    small : 640,
    medium : 1024
  }){
  this.init = function() {
    var screen = calculateScreen(screenSizes);
    var lazyimages = document.querySelectorAll('.lazy-responsive-image');
    initImageScr(lazyimages, screen);
    window.onscroll = initImageScr(lazyimages, screen);
    window.onresize = initImageScr(lazyimages, screen);


  }
}
export {ResponsiveLazyLoadImg};

function calculateScreen(screenSizes){
  return ($(window).width()<screenSizes.medium) ? ($(window).width()<screenSizes.small) ? 'mobile' : 'medium' : 'large';
}

function isAboveViewportBottom(){
  return this.offsetTop < window.innerHeight;
}




function initImageScr(lazyImages, screen){
  for (var i = 0; i < lazyImages.length; i++) {
    var lazyimage = lazyImages[i];
    if(isAboveViewportBottom.call(lazyimage) && !(lazyimage.classList.contains('src-loaded'))){
      switch(screen){
        case 'mobile':
          this.src=this.dataset.smallImgsrc;
          break;
        case 'medium':
          this.src=this.dataset.mediumImgsrc;
          break;
        case 'large':
          this.src=this.dataset.largeImgsrc;
          break;
        default:
          this.src=this.dataset.smallImgsrc;
      }
    }
  }


}


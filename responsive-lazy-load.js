function ResponsiveLazyLoadImg(
  breakPoints = {
    small : 640,
    medium : 1024
  }){

  this.breakPoints = breakPoints;

  this.init = function() {
    var screen = calculateScreen(this.breakPoints);
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

function calculateScreen(breakPoints){
  screen.size = ($(window).width()<breakPoints.medium) ? ($(window).width()<breakPoints.small) ? 'mobile' : 'medium' : 'large';
  screen.isHighRes = (window.devicePixelRatio>1);
  return screen;
}

function isAboveViewportBottom(el){
  var rect = el.getBoundingClientRect();

  return (
    rect.top <= window.innerHeight
  );
}



/* Sets image src attribute to highRes data src if screen is highRes and highRes data source is defined.
   Else sets image src attribute to data src attribute if data src attribute is defined.
   Else does not change image src attribute.
 */
function initImageScr(lazyImages, screen){
  for (var i = 0; i < lazyImages.length; i++) {
    var lazyimage = lazyImages[i];
    if(isAboveViewportBottom(lazyimage) && !(lazyimage.classList.contains('src-loaded'))){
      var newSrc = "";
      switch(screen.size){
        case 'mobile':
          newSrc = screen.isHighRes ?
            lazyimage.dataset.smallImgsrcHighres!==undefined ?
              lazyimage.dataset.smallImgsrcHighres : lazyimage.dataset.smallImgsrc!==undefined ?
                lazyimage.dataset.smallImgsrc : null : lazyimage.dataset.smallImgsrc;
          break;
        case 'medium':
          newSrc = screen.isHighRes ?
            lazyimage.dataset.mediumImgsrcHighres!==undefined ?
              lazyimage.dataset.mediumImgsrcHighres : lazyimage.dataset.mediumImgsrc!==undefined ?
                lazyimage.dataset.mediumImgsrc : null : lazyimage.dataset.mediumImgsrc;
          break;
        case 'large':
          newSrc = screen.isHighRes ?
            lazyimage.dataset.largeImgsrcHighres!==undefined ?
              lazyimage.dataset.largeImgsrcHighres : lazyimage.dataset.largeImgsrc!==undefined ?
                lazyimage.dataset.largeImgsrc : null : lazyimage.dataset.largeImgsrc;
          break;
        default:
          newSrc = screen.isHighRes ?
            lazyimage.dataset.smallImgsrcHighres!==undefined ?
              lazyimage.dataset.smallImgsrcHighres : lazyimage.dataset.smallImgsrc!==undefined ?
                lazyimage.dataset.smallImgsrc : null : lazyimage.dataset.smallImgsrc;
      }
      if(lazyimage.src !== newSrc){
        if (newSrc !== null){
          lazyimage.src = newSrc;
        }
        lazyimage.classList.add('src-loaded');
        srcLoaded = true;
      }
    }
  }

}


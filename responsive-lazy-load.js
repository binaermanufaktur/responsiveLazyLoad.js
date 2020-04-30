function ResponsiveLazyLoadImg(screenSizes = {
  small : 640,
  medium : 1024
}){


  this.init = function(){
    console.log('init');
    var screen = calculateScreen(screenSizes);
      var lazyimages = document.querySelectorAll('.lazy-responsive-image');
      console.log(lazyimages);
      for (var i = 0; i < lazyimages.length; i++) {
        var lazyimage = lazyimages[i];
       if(isAboveViewportBottom.call(lazyimage)){
         initImageScr.call(lazyimage, screen);
       }
      }


  }

}

function calculateScreen(screenSizes){

  return ($(window).width()<screenSizes.medium) ? ($(window).width()<screenSizes.small) ? 'mobile' : 'medium' : 'large';
}

function isAboveViewportBottom(){
  return this.offsetTop < window.innerHeight;
}


export {ResponsiveLazyLoadImg};

function initImageScr(screen){
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


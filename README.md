# responsiveLazyLoad.js
A small js plugin to handle repsonsive lazy loading of images

## import
```javascript
import {ResponsiveLazyLoadImg} from 'path/to/responsive-lazy-load';
```

## initialize
```javascript
const responsiveLazyLoadImg = new ResponsiveLazyLoadImg({small: 640, medium: 1024}, 100);
responsiveLazyLoadImg.init();
```
Parameters (optional):
* The breakPoints object defines the breakpoints for the different data-src in the img tag.  
 It defaults to the values depicted here:  
 `{small: 640, medium: 1024}`.  
 We calculate screen size as follows:
  * small screen: 0 <= window.innerWidth < small
  * medium screen:  small <= window.innerWidth < medium
  * large screen: medium <= window.innerWidth  
 
* The offSet number defines how much pixels below the fold (or above with negative value) the image src is injected and defaults to:  
``100`` 
 
Typically use the ``init()`` function on DOM loaded or DOM ready and whenever you need to reinitialize responsiveLazyLoad images.

## usage
use the following markup on your images:
```html
<img
    class="lazy-responsive-image"
    data-small-imgsrc="/path/to/imageForSmallScreens.jpg"
    data-medium-imgsrc="/path/to/imageForMediumScreens.jpg"
    data-large-imgsrc="/path/to/imageForLargeScreens.jpg"
    data-small-imgsrc-highres="/path/to/imageForSmallScreensInHighRes.jpg"
    data-medium-imgsrc-highres="/path/to/imageForMediumScreensInHighRes.jpg"
    data-large-imgsrc-highres="/path/to/imageForLargeScreensInHighRes.jpg"
    src="/path/to/placeholder.jpg">
```
The highRes values are used if a [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) > 1 is detected (i.e. for retina displays)  
If no highRes value is defined, we fall back to the standard data-imgsrc for that screen size, if no data-imgsrc for that screen size is defined we fall back to the placeholder image.
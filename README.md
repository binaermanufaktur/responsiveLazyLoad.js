# responsiveLazyLoad.js
A small js plugin to handle repsonsive lazy loading of images

## import
```javascript
import {ResponsiveLazyLoadImg} from 'path/to/responsive-lazy-load';
```

##initialize
```javascript
const responsiveLazyLoadImg = new ResponsiveLazyLoadImg({small: 640, medium: 1024});
responsiveLazyLoadImg.init();
```
The breakPoints object is optional and defaults to the values depicted here (`{small: 640, medium: 1024}`.  
Typically use the ``init()`` function on DOM loaded or DOM ready.

##usage
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
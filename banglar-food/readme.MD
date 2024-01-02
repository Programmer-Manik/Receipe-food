# Assignment-10

- Component file have ActiveLink, Layouts, pages,
- providers have AuthProviders
- routs have Routes and private route
- pages to home component have recipe card
- ViewRecupes have ViewsCard and ViewHero
- lazy loaded image using this package its working blur npm i --save react-lazy-load-image-component

```js
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ image }) => (
  <LazyLoadImage alt={image.alt} effect="blur" src={image.src} />
);
```

- [b7a9-career-hub-mdsumonali372](https://food-recipe-1f79b.web.app)

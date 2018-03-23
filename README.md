# tesseract-html

a simple html builder written in typescript. With this you can write html markup without having to write
markup. This project has no dependencies and will generate valid DOM elements with vanilla javascript alone.

## Example Usage
```typescript
import { div, img, p } from "tesseract-html/dist";

div({
    className: "block",
    id: "a-very-unique-id",
    aria: {
      hidden: "false"
    }
  },
  div({
      className: "block__element",
      data: {
        visible: true,
        "has-image": true
      }
    },
    img({
      src: "http://i0.kym-cdn.com/entries/icons/original/000/012/748/circle.jpg",
      alt: "some kind of image"
    }),
    p({ textContent: "This is some kind of image" })
  )
);

```

Elements can be nullable or undefined allowing you to write blocks like this


```typescript
const test = (condition: boolean) => {
  if (condition) return div();
  return null;
}

div({}, test(true)); // renders 2 nested divs.
div({}, test(false)); // no problem. renders a single div

```
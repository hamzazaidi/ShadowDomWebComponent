# my-component

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description     | Type     | Default |
| ---------- | ---------- | --------------- | -------- | ------- |
| `complete` | `complete` | progress status | `string` | `0`     |

---

## Usage

```html
<progress-bar></progress-bar>
```

```javascript
(function() {
  var progress = document.querySelector("progress-bar"),
    complete = 0;

  var progressInterval = setInterval(function() {
    complete += 1;

    if (complete <= 100) {
      progress.setAttribute("complete", complete);
    } else {
      clearInterval(progressInterval);
    }
  }, 100);
})();
```

_Built with [StencilJS](https://stenciljs.com/)_

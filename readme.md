Just add this code to your JavaScript. Adding a "?reload" to your URL will cause
the page to be periodically reloaded.

```js
// Periodically check reload checkbox state
setInterval(function() {
	if (window.location.href.split("?").pop() === "reload")
		window.location.reload()
}, 2000)
```

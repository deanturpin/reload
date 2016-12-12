onload = function() {

	"use strict"

	// Periodically check reload checkbox state
	setInterval(function () {

		if (window.location.href.split("?").pop() === "reload")
			window.location.reload()
	}, 2000)
}

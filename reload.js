
onload = function() {

	"use strict"

	console.log(new Date())

	// Periodically check reload checkbox state
	setInterval(function () {

		if (document.getElementById("reload").checked === true) {

			window.location.reload()
		}
	}, 2000)
}

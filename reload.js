
onload = function() {

	"use strict"

	console.log(new Date())

	// Create form
	var form = document.createElement("form")
	var body = document.getElementsByTagName("body")[0]

	// Configure form
	form.text = "blah"

	// <form style="float: right">
	// <input type="checkbox" id="reload" checked>reload<br>
	// </form>

	// Add it to the DOM
	body.appendChild(form)

	// Periodically check reload checkbox state
	setInterval(function () {

		if (document.getElementById("reload").checked === true) {

			window.location.reload()
		}
	}, 1000)
}

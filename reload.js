onload = function() {

	"use strict"

	// Create form
	var form = document.createElement("form")
	var body = document.getElementsByTagName("body")[0]

	// Configure form
	const input = document.createElement("input")
	form.style.float = "right"
	input.setAttribute("type", "checkbox")
	input.setAttribute("checked", true)
	input.setAttribute("id", "reload")
	input.name = "reload"

	// Add it to the DOM
	form.appendChild(input)
	body.appendChild(form)

	// Periodically check reload checkbox state
	setInterval(function () {

		if (document.getElementById("reload").checked === true) {
			window.location.reload()
		}
	}, 2000)
}

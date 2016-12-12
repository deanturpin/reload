
onload = function() {

	"use strict"

	console.log(new Date())

	// Create form
	var form = document.createElement("form")
	var body = document.getElementsByTagName("body")[0]

	// Configure form
	const input = document.createElement("input")
	form.style.float = "right"
	input.setAttribute("type", "checkbox")
	input.setAttribute("checked", true)
	input.setAttribute("id", "reload")
	input.htmlFor = "reload"
	input.setAttribute("value", "reload")
	// input.text
	// input.setProperty("checked", false)
	input.name = "reload"
	// input.setProperty("checked", true)

	// <form style="float: right">
	// <input type="checkbox" id="reload" checked>reload<br>
	// </form>

	// Add it to the DOM
	form.appendChild(input)
	body.appendChild(form)
	// document.head.appendChild(form)

	// Periodically check reload checkbox state
	setInterval(function () {

		if (document.getElementById("reload").checked === true) {

			window.location.reload()
		}

	}, 1000)
}

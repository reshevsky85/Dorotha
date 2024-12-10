$(document).ready(function () {
	$("#batonik").click(function () {
		$("#oils_per_supplier").slideToggle("slow");
	});
	$("#batonik2").click(function () {
		$("#oils_per_supplier2").slideToggle("slow");
	});
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
	sidebar.classList.toggle("close");
	toggleButton.classList.toggle("rotate");
}

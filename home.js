const typedHome = new Typed(".multiple-text", {
	strings: [
		"Improve communication flow",
		"Know Flora's workers",
		"Know Flora's QA contacts",
		"Enjoy and keep in Touch!",
	],
	typeSpeed: 50,
	backSpeed: 10,
	backDelay: 1000,
	loop: true,
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
	sidebar.classList.toggle("close");
	toggleButton.classList.toggle("rotate");
}

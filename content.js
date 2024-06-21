const scrollUpButton = document.createElement("button");
scrollUpButton.textContent = "⬆";
scrollUpButton.style.position = "fixed";
scrollUpButton.style.bottom = "100px";
scrollUpButton.style.right = "10px";
scrollUpButton.style.zIndex = "1000";
scrollUpButton.style.padding = "10px";
scrollUpButton.style.fontSize = "20px";
scrollUpButton.style.cursor = "pointer";

const scrollDownButton = document.createElement("button");
scrollDownButton.textContent = "⬇";
scrollDownButton.style.position = "fixed";
scrollDownButton.style.bottom = "50px";
scrollDownButton.style.right = "10px";
scrollDownButton.style.zIndex = "1000";
scrollDownButton.style.padding = "10px";
scrollDownButton.style.fontSize = "20px";
scrollDownButton.style.cursor = "pointer";

document.body.appendChild(scrollUpButton);
document.body.appendChild(scrollDownButton);

scrollUpButton.addEventListener("click", () => {
	window.scrollBy(0, -100);
});

scrollDownButton.addEventListener("click", () => {
	window.scrollBy(0, 100);
});

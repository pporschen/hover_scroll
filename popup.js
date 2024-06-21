document.getElementById("scroll-up").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			function: scrollUp,
		});
	});
});

document.getElementById("scroll-down").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			function: scrollDown,
		});
	});
});

function scrollUp() {
	window.scrollBy(0, -100);
}

function scrollDown() {
	window.scrollBy(0, 100);
}

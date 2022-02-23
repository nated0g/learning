document.querySelectorAll('li').forEach(item => {
	item.addEventListener('click', event => {
		document.body.className = item.className;
		document.body.style.color = "white";	
	})
})
const btn = document.querySelector('.fa-regular');
let text = document.querySelector('.text');
let sides = document.querySelector('.sides');

const addGlow = () => {
	console.log('Test');
	text.classList.toggle('text-glow');
	sides.classList.toggle('text-glow');
	btn.classList.toggle('text-glow');
};

btn.addEventListener('click', addGlow);

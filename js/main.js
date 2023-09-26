const button = document.querySelector('.title-bottom');
const body = document.querySelector('.section');
const poster = document.querySelector('.poster');

const strobo = () => {
	body.classList.toggle('body-strobo');
	poster.classList.toggle('poster-strobo');
	console.log('test');
};

button.addEventListener('click', strobo);

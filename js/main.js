const button = document.querySelector('.title-bottom');
const body = document.querySelector('.section');

const strobo = () => {
	body.classList.toggle('body-strobo');
	console.log('test');
};

button.addEventListener('click', strobo);

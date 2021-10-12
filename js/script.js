const titleClickHandler = function (event) {
	const clickedElement = this;
	event.preventDefault();
	console.log('Link was clicked!')
	console.log(event);

	const activeLinks = document.querySelectorAll('.titles a.active');

	for (let activeLink of activeLinks) {
		activeLink.classList.remove('active');
	}

	clickedElement.classList.add('active');

	const activeArticles = document.querySelectorAll('.posts article.active');

	for (let activeArticle of activeArticles) {
		activeArticle.classList.remove('active');
	}

	const articleSelector = clickedElement.getAttribute('href');

	const clickedArticle = document.querySelector(articleSelector);
	clickedArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for (let link of links) {
	link.addEventListener('click', titleClickHandler);
}
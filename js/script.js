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

const optArticleSelector = '.post',
	optTitleSelector = '.post-title',
	optTitleListSelector = '.titles';

const titleList = document.querySelector(optTitleListSelector);
titleList.innerHTML = '';

const articles = document.querySelectorAll(optArticleSelector);
let html = '';

for (let article of articles) {

	const articleId = article.getAttribute('id');

	const articleTitle = article.querySelector(optTitleSelector).innerHTML;

	const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
	console.log('link wygenerowany');


	/* find the title element */

	/* get the title from the title element */

	/* create HTML of the link */

	/* insert link into titleList */

	html = html + linkHTML;
}

titleList.innerHTML = html;

const links = document.querySelectorAll('.titles a');

for (let link of links) {
	link.addEventListener('click', titleClickHandler);
}

generateTitleLinks();
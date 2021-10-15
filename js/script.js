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
	optTitleListSelector = '.titles',
	optArticleTagsSelector = '.post-tags .list',
	optArticleAuthorSelector = '.post-author';
	
function generateTitleLinks(customSelector = ''){

const titleList = document.querySelector(optTitleListSelector);
titleList.innerHTML = '';

const articles = document.querySelectorAll(optArticleSelector + customSelector);
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
}

function generateTags(){

	const articles = document.querySelectorAll(optArticleSelector);

	for (let article of articles) {

	const titleList = article.querySelector(optArticleTagsSelector);
	
	let html = '';

	const articleTags = article.getAttribute('data-tags');

	  const articleTagsArray = articleTags.split(' ');

	  for(let tag of articleTagsArray) {
		  console.log('.data-tags');

		const linkHTML = '<li><a href="#' + '"><span>' + articleTags + '</span></a></li>';
  
		titleList.innerHTML = titleList.innerHTML + linkHTML;

	  }
  }
}

function tagClickHandler(event){

	event.preventDefault();

	const clickedElement = this;

	const href = clickedElement.getAttribute('href');
  

	const tag = href.replace('#tag-', '');

	const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

	for (let tagLink of tagLinks) {
		tagLink.classList.remove('active');
	}
  
	/* find all tag links with "href" attribute equal to the "href" constant */
  
	/* START LOOP: for each found tag link */
  
	  /* add class active */
  
	/* END LOOP: for each found tag link */
  
	/* execute function "generateTitleLinks" with article selector as argument */

	generateTitleLinks('[data-tags~="' + tag + '"]');

  }
  
  function addClickListenersToTags(){
	/* find all links to tags */
  
	/* START LOOP: for each link */
  
	  /* add tagClickHandler as event listener for that link */
  
	/* END LOOP: for each link */
  }

  
  
  generateTitleLinks();
  generateTags();
  addClickListenersToTags();
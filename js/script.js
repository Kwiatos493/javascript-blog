const templates = {
	articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
	tagLink: Handlebars.compile(document.querySelector('#template-article-tag').innerHTML),
	articleAuthor: Handlebars.compile(document.querySelector('#template-article-author').innerHTML),
	tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
	authorCloudLink: Handlebars.compile(document.querySelector('#template-author-cloud-link').innerHTML)
  }

const titleClickHandler = function (event) {
	const clickedElement = this;
	event.preventDefault();
	console.log("Link was clicked!");
	console.log(event);
  
	const activeLinks = document.querySelectorAll(".titles a.active");
  
	for (let activeLink of activeLinks) {
	  activeLink.classList.remove("active");
	}
  
	clickedElement.classList.add("active");
  
	const activeArticles = document.querySelectorAll(".posts article.active");
  
	for (let activeArticle of activeArticles) {
	  activeArticle.classList.remove("active");
	}
  
	const articleSelector = clickedElement.getAttribute("href");
  
	const clickedArticle = document.querySelector(articleSelector);
	clickedArticle.classList.add("active");
  };
  
  const optArticleSelector = ".post",
	optTitleSelector = ".post-title",
	optTitleListSelector = ".titles",
	optArticleTagsSelector = ".post-tags .list",
	optArticleAuthorSelector = ".post-author",
	optTagsListSelector = ".tags.list",
	optCloudClassCount = "5",
	optCloudClassPrefix = "tag-size-",
	optAuthorsListSelector =".authors.list";
  
  function generateTitleLinks(customSelector = "") {
	const titleList = document.querySelector(optTitleListSelector);
	titleList.innerHTML = "";
  
	const articles = document.querySelectorAll(
	  optArticleSelector + customSelector
	);
	let html = "";
  
	for (let article of articles) {
	  const articleId = article.getAttribute("id");
  
	  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
	  const linkHTMLData = {id: articleId, title: articleTitle};
	  const linkHTML = templates.articleLink(linkHTMLData);
	  console.log("link wygenerowany");
  
	  /* find the title element */
  
	  /* get the title from the title element */
  
	  /* create HTML of the link */
  
	  /* insert link into titleList */
  
	  html = html + linkHTML;
	}
  
	titleList.innerHTML = html;
  
	const links = document.querySelectorAll(".titles a");
  
	for (let link of links) {
	  link.addEventListener("click", titleClickHandler);
	}
  }

  function calculateTagsParams(tags) {
	const params = { max: 0, min: 999999 };

	for (let tag in tags){
		params.max = Math.max(tags[tag], params.max);
		params.min = Math.min(tags[tag], params.min);
		console.log(tag + ' is used ' + tags[tag] + ' timse ');	
	}

	return params;

  }

  function calculateTagClass(count, params){
	const normalizedCount = count - params.min;
	const normalizedMax = params.max - params.min;
	const percentage = normalizedCount / normalizedMax;
	const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

	return optCloudClassPrefix + classNumber;
  }
  
  function generateTags() {
	const allTags = {tags: []};
	const articles = document.querySelectorAll(optArticleSelector);
  
	for (let article of articles) {
	  const titleList = article.querySelector(optArticleTagsSelector);
  
	  let html = "";
  
	  const articleTags = article.getAttribute("data-tags");
  
	  const articleTagsArray = articleTags.split(" ");
  
	  for (let tag of articleTagsArray) {
		console.log(".data-tags");
  
		const taglinkHTMLData = {id: tag, title: tag};
		const tagLinkHTML = templates.tagLink(taglinkHTMLData);
  
		titleList.innerHTML = tagLinkHTML;

		if(!allTags[tag]) {
			
			allTags[tag] = 1;
		  } else {
			  allTags[tag]++;
		  }
	  }
	}

	const tagList = document.querySelector('.tags');
  
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)
  const allTagsData = {tags: []};

  for(let tag in allTags){
	const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + '</a></li>';
	console.log('tagLinkHTML:', tagLinkHTML);
	allTagsData.tags.push({
		tag: tag,
		count: allTags[tag],
		className: calculateTagClass(allTags[tag], tagsParams)
	  });
  }
  tagList.innerHTML = '<li><a href="' + '"><span>' + allTags + "</span></a></li>";
  }

  function tagClickHandler(event) {
	event.preventDefault();
  
	const clickedElement = this;
  
	const href = clickedElement.getAttribute("href");
  
	const tag = href.replace("#tag-", "");
  
	const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  
	for (let tagLink of tagLinks) {
	  tagLink.classList.remove("active");
	}
  
	const tagLinksHref = document.querySelectorAll('a.active[href^="#tag-"]');
  
	for (let tagLink of tagLinks) {
	  tagLink.classList.add("active");
	}
  
	generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  
  function addClickListenersToTags() {
	const tagsLink = document.querySelectorAll('a.active[href^="#tag-"]');
  
	for (let taglink of tagsLink) {
	  link.addEventListener("click", tagClickHandler);
	}
  }
  
  function generateAuthors() {
	const allAuthors = {authors: []};
	const articles = document.querySelectorAll(optArticleSelector);
  
	for (let article of articles) {
	  const authorElement = article.querySelector(optArticleAuthorSelector);
  
	  let html = "";
  
	  const author = article.getAttribute("data-author");

	  const authorLinkHTMLData = {author: author};
      const authorLinkHTML = templates.articleAuthor(authorLinkHTMLData);
  
	  authorElement.innerHTML = authorLinkHTML;

	}
	const author = document.querySelector('.author');
	let allAuthorsHTML = '';

	for(let author in allAuthors){
		const authorLinkHTML = '<li><a class="' + '" href="#author-' + '</a></li>';
		console.log('authorLinkHTML:', authorLinkHTML);
		allAuthors.authors.push({
			author: author,
			count: allAuthors[author],
		  });
	}
	author.innerHTML = '<li><a href="' + '"><span>' + allAuthorsHTML + "</span></a></li>";
  }
  
  function authorClickHandler(event) {
	event.preventDefault();
  
	const clickedElement = this;
  
	const author = clickedElement.getAttribute("data-author");
  
	const hrefAuthor = author.replace("#author", "");
  
	const authorLinks = document.querySelectorAll('a.active[href^="#author"]');
  
	for (let authorLink of authorLinks) {
	  authorLink.classList.remove("active");
	}
  
	const authorHref = document.querySelectorAll('a.active[href^="#author"]');
  
	for (let authorLink of authorLinks) {
	  authorLink.classList.add("active");
	}
  
	generateAuthors('[data-author~="' + author + '"]');
  }
  
  function addClickListenersToAuthors() {
	const authorsLink = document.querySelectorAll('a.active[href^="#tag-"]');
  
	for (let authorlink of authorsLink) {
	  link.addEventListener("click", authorClickHandler);
	}
  }
  
  generateTitleLinks();
  calculateTagsParams();
  generateTags();
  addClickListenersToTags();
  generateAuthors();
  addClickListenersToAuthors();
  
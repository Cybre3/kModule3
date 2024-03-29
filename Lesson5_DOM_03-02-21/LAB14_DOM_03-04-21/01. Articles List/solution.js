function createArticle() {
    // declare DOM variables
    const title = document.getElementById('createTitle');
    const content = document.getElementById('createContent');
    const articles = document.getElementById('articles');
    console.log(title.value);

    if (!title.value || !content.value) {
        return;
    }

//----- Less efficient way - this way realoads the page everytime article created ------//

    // articles.innerHTML += `	
	// <article>
	// 	<h3>${title.value}</h3>
	// 	<p>${content.value}</p>
	// </article>
	// `;


//---------------- More efficient practice ---------------------//

    // create an article
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerText = title.value;
    p.innerText = content.value;

    article.appendChild(h3);
    article.appendChild(p);
    articles.appendChild(article);

    // clear my inputs
    title.value = '';
    content.value = '';
}

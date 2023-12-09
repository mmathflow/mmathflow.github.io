document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-input');
  const articles = document.querySelectorAll('.post-container');

  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase();

    articles.forEach(article => {
      const articleName = article.querySelector('.article-name').textContent.toLowerCase();
      const articleDescription = article.querySelector('.article-description').textContent.toLowerCase();

      if (articleName.includes(searchQuery) || articleDescription.includes(searchQuery)) {
        article.style.display = 'flex'; // Show the article
      } else {
        article.style.display = 'none'; // Hide the article
      }
    });
  });
});


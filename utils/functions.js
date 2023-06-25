function parseJson(file) {
  var json = JSON.parse(file);
  return json;
}

function getBooks() {
  const books = parseJson("../data/books.json");
  return books;
}

function parseBooks() {
  const books = getBooks();
  const parsedBooks = books.map((book) => {
    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
      <div class="portfolio-wrap">
        <img
          src="assets/img/portfolio/portfolio-8.jpg"
          class="img-fluid"
          alt=""
        />
        <div class="portfolio-info">
          <h4>Card 3</h4>
          <p>Card</p>
          <div class="portfolio-links">
            <a
              href="assets/img/portfolio/portfolio-8.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox"
              title="Card 3"
            >
              <i class="bx bx-plus"></i>
            </a>
            <a
              href="portfolio-details.html"
              data-gallery="portfolioDetailsGallery"
              data-glightbox="type: external"
              class="portfolio-details-lightbox"
              title="Portfolio Details"
            >
              <i class="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>;
  });
  return parsedBooks;
}

import bookCover from "../../../assets/bookCover.jpg";
import NewBooks from "../../elements/FormNewBook";

export default function ProductList({ books, onAddBook }) {
  return (
    <>
      <NewBooks onAddBook={onAddBook} />
      <section
        className="album py-5 bg-body-tertiary"
        aria-label="Koleksi buku"
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <article className="card h-100 shadow-sm">
                  <img
                    src={book.image || bookCover}
                    alt={`Sampul ${book.title}`}
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h2 className="h5 card-title">{book.title}</h2>
                    <p className="text-body-secondary mb-2">
                      {book.author} &middot; {book.year}
                    </p>
                    <p className="card-text">{book.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

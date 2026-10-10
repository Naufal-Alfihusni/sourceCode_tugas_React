import { useState } from "react";
import bookCover from "../../../assets/bookCover.jpg";

const emptyBook = {
  title: "",
  author: "",
  year: "",
  description: "",
};

export default function ProductList({ books, onAddBook }) {
  const [newBook, setNewBook] = useState(emptyBook);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewBook((currentBook) => ({ ...currentBook, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddBook({
      ...newBook,
      year: Number(newBook.year),
      image: bookCover,
    });
    setNewBook(emptyBook);
  }

  return (
    <>
      <section id="book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light">Daftar Buku</h1>
            <p className="lead text-body-secondary">
              Jelajahi koleksi buku dan tambahkan buku baru ke dalam daftar.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-5" aria-labelledby="add-book-heading">
        <h2 id="add-book-heading" className="h3 mb-3">
          Tambah Buku Baru
        </h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="book-title" className="form-label">
              Judul buku
            </label>
            <input
              id="book-title"
              name="title"
              className="form-control"
              value={newBook.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="book-author" className="form-label">
              Penulis
            </label>
            <input
              id="book-author"
              name="author"
              className="form-control"
              value={newBook.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="book-year" className="form-label">
              Tahun terbit
            </label>
            <input
              id="book-year"
              name="year"
              type="number"
              min="0"
              className="form-control"
              value={newBook.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-9">
            <label htmlFor="book-description" className="form-label">
              Deskripsi
            </label>
            <input
              id="book-description"
              name="description"
              className="form-control"
              value={newBook.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Tambah Buku
            </button>
          </div>
        </form>
      </section>

      <section className="album py-5 bg-body-tertiary" aria-label="Koleksi buku">
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

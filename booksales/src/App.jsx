import "./App.css";
import bookCover from "./assets/bookCover.jpg";
import { useState } from "react";

function App() {
  const [contactStatus, setContactStatus] = useState("");

  return (
    <>
      <div className="container">
        {/* Hearder */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: " rgb(116, 192, 252)" }}
              ></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#home" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#book" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {/* Hero */}
        <div id="home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                The Pragmatic Programmer: From Journeyman to Master is a book
                about computer programming and software engineering
              </h1>
              <p className="lead">
                written by Andrew Hunt and David Thomas and published in October
                1999. It is used as a textbook in related university courses.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="./src/assets/the_pragmatic_programmer.jpg"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>

        {/* Product List */}
        <section id="book" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Views
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Other Book
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={bookCover}
                    alt="Sampul buku"
                    className="card-img-top"
                    style={{ height: 225, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <section id="team" className="container py-5">
          <div className="row py-lg-4 text-center">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2 className="display-5 fw-semibold">Tim Bookstore</h2>
              <p className="lead text-body-secondary">
                Kami senang membantu Anda menemukan bacaan yang tepat—mulai dari
                memilih buku hingga memastikan pesanan sampai dengan aman.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i
                      className="fa-solid fa-book-open fa-3x"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Kurator Buku</h3>
                  <p className="card-text text-body-secondary">
                    Memilih koleksi buku yang inspiratif dan berkualitas untuk
                    menemani perjalanan membaca Anda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i
                      className="fa-solid fa-comments fa-3x"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Layanan Pelanggan</h3>
                  <p className="card-text text-body-secondary">
                    Siap membantu menjawab pertanyaan dan memberi rekomendasi
                    buku sesuai minat Anda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i
                      className="fa-solid fa-box-open fa-3x"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h3 className="h5 card-title">Tim Pemesanan</h3>
                  <p className="card-text text-body-secondary">
                    Mengelola pesanan dan pengemasan dengan teliti agar buku
                    pilihan Anda tiba dalam kondisi baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-body-tertiary py-5">
          <div className="container">
            <div className="row py-lg-4 text-center">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h2 className="display-5 fw-semibold">Hubungi Bookstore</h2>
                <p className="lead text-body-secondary">
                  Punya pertanyaan tentang buku atau pesanan? Kami senang
                  mendengar dari Anda.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="card h-100 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-4">Informasi Toko</h3>
                    <div className="d-flex gap-3 mb-4">
                      <i
                        className="fa-solid fa-clock text-primary mt-1"
                        aria-hidden="true"
                      ></i>
                      <div>
                        <h4 className="h6 mb-1">Jam layanan</h4>
                        <p className="text-body-secondary mb-0">
                          Senin–Sabtu, 09.00–17.00 WIB
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <i
                        className="fa-solid fa-book text-primary mt-1"
                        aria-hidden="true"
                      ></i>
                      <div>
                        <h4 className="h6 mb-1">Bantuan seputar buku</h4>
                        <p className="text-body-secondary mb-0">
                          Tanyakan ketersediaan, rekomendasi, atau informasi
                          pesanan melalui formulir ini.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h4 mb-4">Kirim Pesan</h3>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        setContactStatus(
                          "Formulir ini belum terhubung ke layanan pengiriman, jadi pesan belum terkirim.",
                        );
                      }}
                    >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="contactName" className="form-label">
                            Nama
                          </label>
                          <input
                            id="contactName"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Nama Anda"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactEmail" className="form-label">
                            Email
                          </label>
                          <input
                            id="contactEmail"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="nama@email.com"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="contactMessage"
                            className="form-label"
                          >
                            Pesan
                          </label>
                          <textarea
                            id="contactMessage"
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder="Ceritakan apa yang ingin Anda tanyakan..."
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Kirim Pesan
                          </button>
                          {contactStatus && (
                            <p
                              className="small text-body-secondary mt-3 mb-0"
                              role="status"
                            >
                              {contactStatus}
                            </p>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#home" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#book" className="nav-link px-2 text-body-secondary">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link px-2 text-body-secondary">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link px-2 text-body-secondary"
                >
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">
              &copy; 2025 Bookstore By Alfihusni React
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

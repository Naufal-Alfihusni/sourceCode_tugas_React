import { useState } from "react";
import Hearder from "../../components/shared/Hearder";
import Footer from "../../components/shared/Footer";

export default function Contact() {
  const [contactStatus, setContactStatus] = useState("");
  return (
    <>
      <section id="contact" className=" py-5">
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
                        <label htmlFor="contactMessage" className="form-label">
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
    </>
  );
}

import Footer from "../../components/shared/Footer";
import Hearder from "../../components/shared/Hearder";

export default function Team() {
  return (
    <>
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
                  Siap membantu menjawab pertanyaan dan memberi rekomendasi buku
                  sesuai minat Anda.
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
    </>
  );
}

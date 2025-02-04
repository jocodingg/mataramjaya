import {Container, Row, Col, Button} from "react-bootstrap"
const KueNoer = () => {
  const product = {
    id: 1,
    name: "Kue Ulang Tahun Noer Khasanah",
    image: "/kuenoer.png", // Ganti dengan path gambar Anda
    category: "kue",
    rating: 0,
    reviews: 0,
    price: "Rp 100.000",
    description:
    "Toko Kue Tart Bu Noer Khasanah adalah penyedia kue tart ulang tahun berkualitas tinggi yang dibuat dengan cinta dan bahan-bahan terbaik. Dengan desain yang elegan dan rasa yang lezat, kue tart Bu Noer Khasanah menjadi pilihan sempurna untuk merayakan momen istimewa Anda. Tersedia dalam berbagai ukuran, rasa, dan hiasan sesuai permintaan, kue kami akan memberikan sentuhan manis yang tak terlupakan untuk setiap perayaan. Cocok untuk segala usia dan acara, menjadikan setiap ulang tahun lebih berkesan.",
    link: "https://www.facebook.com/share/15vxvksxR4/?mibextid=qi2Omg", // Link ke toko
  };
  return (
    <Container className="mabel-page mt-5">
      <Row>
        <Col md={4}>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid shadow-sm rounded"
          />
        </Col>
        <Col md={8}>
          <h2 className="fw-bold">{product.name}</h2>
          <div className="d-flex align-items-center my-3">
            {/* Rating */}
            <div className="rating me-3">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < product.rating ? "text-warning" : "text-muted"}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted">
              Penilaian ({product.reviews})
            </span>
            <span className="mx-3">|</span>
            <span className="text-muted">{product.category}</span>
          </div>
          <h3 className="text-danger fw-bold">{product.price}</h3>
          <p className="mt-3">{product.description}</p>
          <p>
            Link Pemesanan:{" "}
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {product.link}
            </a>
          </p>
          <Button variant="primary" href={`https://wa.me/+6288287747850`} target="_blank">
            Hubungi Penjual
          </Button>
        </Col>
      </Row>
      <Row className="fotomabel">
        <Col>
        <img src="/kue1.png" alt="kue1" />
        </Col>
        <Col>
        <img src="/kue2.png" alt="kue2" />
        </Col>
        <Col>
        <img src="/kue3.png" alt="kue3" />
        </Col>
        <Col>
        <img src="/kue4.png" alt="kue4" />
        </Col>
        <Col>
        <img src="/kue5.png" alt="kue5" />
        </Col>
        <Col>
        <img src="/kue6.png" alt="kue6" />
        </Col>
      </Row>
    </Container>
  )
}

export default KueNoer 
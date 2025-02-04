import {Container, Row, Col, Button} from "react-bootstrap"
const KeripikbuFeb = () => {
  const product = {
    id: 4,
    name: "Keripik Singkong bu Febriani",
    image: "/keripik.jpg", // Ganti dengan path gambar Anda
    category: "Makanan Ringan",
    rating: 0,
    reviews: 0,
    price: "Rp 5.000",
    description:
    "Toko Keripik Singkong Bu Febriani adalah penyedia camilan renyah berkualitas tinggi yang mengkhususkan diri dalam pembuatan keripik singkong. Dibuat dari singkong pilihan dengan proses yang higienis dan bumbu khas, keripik singkong Bu Febriani menawarkan varian original, pedas, dan jagung manis dengan rasa gurih dan renyah yang memanjakan lidah. Cocok untuk menemani waktu santai, acara keluarga, atau sebagai oleh-oleh dengan cita rasa yang istimewa.",
    link: "-", // Link ke toko
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
          <Button variant="primary" href={`https://wa.me/+6285609839801`} target="_blank">
            Hubungi Penjual
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default KeripikbuFeb
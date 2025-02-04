import {Container, Row, Col, Button} from "react-bootstrap"
const KeripikmasFarhan = () => {
  const product = {
    id: 1,
    name: "Keripik Mas Farhan",
    image: "/keripikmasfar.png", // Ganti dengan path gambar Anda
    category: "Makanan Ringan",
    rating: 0,
    reviews: 0,
    price: "Rp 1.000",
    description:
    "Toko Keripik Mas Farhan adalah penyedia camilan renyah dan lezat dengan tiga varian rasa favorit: Original yang gurih, Sambal yang pedas menggoda, dan Jagung Manis yang nikmat. Dibuat dari bahan pilihan dengan harga terjangkau mulai dari 1000-an, keripik Mas Farhan cocok untuk segala suasana, baik untuk camilan harian maupun teman bersantai. Rasakan kelezatan yang pas di kantong, tetapi luar biasa di setiap gigitan!",
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
          <Button variant="primary" href={`https://wa.me/+6283168516726`} target="_blank">
            Hubungi Penjual
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default KeripikmasFarhan
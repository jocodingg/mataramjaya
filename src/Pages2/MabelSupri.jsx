import {Container, Row, Col, Button} from "react-bootstrap"
const MabelSupri = () => {
  const product = {
    id: 1,
    name: "Toko Meubel Supri",
    image: "/kursikayu.jpg", // Ganti dengan path gambar Anda
    category: "Parabotan",
    rating: 0,
    reviews: 0,
    price: "Rp 500.000",
    description:
    "Toko Mabel supri adalah penyedia furnitur berkualitas tinggi yang mengkhususkan diri dalam pembuatan kursi, meja, dan berbagai perabot lainnya. Dibuat dari bahan kayu pilihan dengan sentuhan desain modern dan elegan, produk Mabel tidak hanya tahan lama tetapi juga mempercantik setiap ruangan. Cocok untuk melengkapi rumah, kantor, atau ruang usaha Anda dengan gaya dan kenyamanan.",
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
          <Button variant="primary" href={`https://wa.me/+6282180092889`} target="_blank">
            Hubungi Penjual
          </Button>
        </Col>
      </Row>
      <Row className="fotomabel">
        <Col>
        <img src="/kursi.jpg" alt="kursi" />
        </Col>
        <Col>
        <img src="/sofa.jpg" alt="sofa" />
        </Col>
        <Col>
        <img src="/springbed.jpg" alt="springbed" />
        </Col>
        <Col>
        <img src="/kursikayu.jpg" alt="kursikayu" />
        </Col>
      </Row>
    </Container>
  )
}

export default MabelSupri
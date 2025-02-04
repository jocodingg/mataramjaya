import {Container, Row, Col, Button} from 'react-bootstrap'
const TempepakPogo = () => {
    const product = {
        id: 1,
        name: "Tempe pak Pogo",
        image: "/tempe1.jpg", // Ganti dengan path gambar Anda
        category: "Makanan Pokok",
        rating: 0,
        reviews: 0,
        price: "Rp 1.000",
        description:
        "Toko Tempe Pak Pogo adalah penyedia tempe berkualitas yang menawarkan tempe dengan harga terjangkau, hanya seribu rupiah. Dibuat dari kedelai pilihan, tempe Pak Pogo memiliki cita rasa yang enak dan cocok untuk melengkapi hidangan Anda. Tempe ini sempurna untuk berbagai kebutuhan dapur, baik untuk rumah tangga, usaha kuliner, maupun restoran yang mengutamakan rasa dan kualitas.",
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
              <Button variant="primary" href={`https://wa.me/+6288286248866`} target="_blank">
                Hubungi Penjual
              </Button>
            </Col>
          </Row>
          <Row className="fotomabel">
            <Col>
            <img src="/tempe.jpg" alt="tempe" />
            </Col>
            <Col>
            <img src="/tempe1.jpg" alt="tempe1" />
            </Col>
            <Col>
            <img src="/tempe2.jpg" alt="tempe2" />
            </Col>
            <Col>
            <img src="/tempe3.jpg" alt="tempe3" />
            </Col>
          </Row>
        </Container>
      )
    }

export default TempepakPogo
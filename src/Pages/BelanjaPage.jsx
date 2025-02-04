import {Container, Row, Col} from "react-bootstrap"
import {products} from "../data/index"
import { useNavigate } from "react-router-dom"

const BelanjaPage = () => {
  let navigate = useNavigate()
  const handleNavigation = (product) => {
    if (product.id === 1) {
      navigate(`/mabel/${product.id}`); // Arahkan ke BelanjaPage untuk produk pertama
    } else if (product.id === 2 ) {
      navigate(`/kuenoer/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk kedua
    } else if (product.id === 3 ) {
      navigate(`/keripikmasfarhan/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk ketiga
    } else if (product.id === 4 ) {
      navigate(`/keripikbufeb/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk keempat
    } else if (product.id === 5 ) {
      navigate(`/tempepakpogo/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk kelima
    } else {
      navigate(`/halaman-lain/${product.id}`); // Arahkan ke HalamanLainPage untuk produk keenam
    }
  };
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
            <h1 className="produk text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Produk Desa</h1>
            <h1 className="mtrm text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Mataram Jaya</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s mt-4">Kami menyediakan berbagai produk UMKM asli dari Desa Mataram Jaya. Dukung kearifan lokal dengan berbelanja hasil karya terbaik dari masyarakat setempat, mulai dari kerajinan tangan, makanan khas, hingga produk unggulan lainnya.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
          {products.map((product) => (
              <Col key={product.id} className="mb-5"                 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={product.delay}>
                <div className="product-card shadow-sm" onClick={() => handleNavigation(product)} style={{ cursor: "pointer" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h5 className="product-name">{product.name}</h5>
                    <p className="product-category">{product.category}</p>
                    <div className="product-rating">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={index}
                          className={
                            index < Math.floor(product.rating)
                              ? "star full-star"
                              : index < product.rating
                              ? "star half-star"
                              : "star"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BelanjaPage
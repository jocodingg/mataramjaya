import {Container, Row, Col} from "react-bootstrap"
import {beritadesa} from "../data/index"
import { useNavigate } from "react-router-dom";

const BeritaPage = () => {
  let navigate = useNavigate()
  const handleNavigation = (berita) => {
    if (berita.id === 1) {
      navigate(`/berita1/${berita.id}`); // Arahkan ke BelanjaPage untuk berita pertama
    } else if (berita.id === 2 ) {
      navigate(`/berita2/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita
    } else if (berita.id === 3 ) {
      navigate(`/berita3/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 4 ) {
      navigate(`/berita4/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 5 ) {
      navigate(`/berita5/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 6 ) {
      navigate(`/berita6/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 7 ) {
      navigate(`/berita7/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 8 ) {
      navigate(`/berita8/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else if (berita.id === 9 ) {
      navigate(`/berita9/${berita.id}`); // Arahkan ke ProdukKhususPage untuk berita 
    } else {
      navigate(`/halaman-lain/${berita.id}`); 
    }
  };
  return (
    <div className="berita-page">
      <div className="berita min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Berita Terbaru
              </h1>
              <p className="des text-center animate__animated animate__fadeInUp animate__delay-1s">
                Tetap up-to-date dengan informasi terkini dari Desa Mataram Jaya.
              </p>
            </Col>
          </Row>
          <Row>
            {beritadesa.map((berita) => (
              <Col
                key={berita.id}
                xs={12}
                sm={6}
                md={3}
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={berita.delay}
              >
                <div className="berita-card shadow rounded overflow-hidden">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="berita-image w-100"
                  />
                  <div className="berita-content p-3 position-relative">
                    <div className="berita-date position-absolute top-10 end-0 bg-primary text-white rounded px-2 py-1">
                      <small>{berita.date}</small>
                    </div>
                    <h5 className="fw-bold">{berita.title}</h5>
                    <p className="text-muted">{berita.description}</p>
                    <button className="btn btn-primary" onClick={() => handleNavigation(berita)}>
                      {berita.buttonText}
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BeritaPage
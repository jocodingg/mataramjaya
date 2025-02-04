import { Container, Row, Col } from "react-bootstrap"
import{ beritadesa} from "../data/index"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from "../data/index";
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate()
  const images = [
    "galeri1.jpg",
    "galeri2.jpg",
    "galeri3.jpg",
    "galeri4.jpg",
    "galeri5.jpg",
    "galeri6.jpg",
  ];
  // Fungsi navigasi berdasarkan kondisi
  const handleNavigation = (product) => {
    if (product.id === 1) {
      navigate(`/mabel/${product.id}`); // Arahkan ke BelanjaPage untuk produk pertama
    } else if (product.id === 2 ) {
      navigate(`/kuenoer/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (product.id === 3 ) {
      navigate(`/keripikmasfarhan/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (product.id === 4 ) {
      navigate(`/keripikbufeb/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (product.id === 2 ) {
      navigate(`/keripikbufeb/${product.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else {
      navigate(`/halaman-lain/${product.id}`); // Arahkan ke HalamanLainPage untuk produk lainnya
    }
  };
  const handleNavigation1 = (berita) => {
    if (berita.id === 1) {
      navigate(`/berita1/${berita.id}`); // Arahkan ke BelanjaPage untuk produk pertama
    } else if (berita.id === 2 ) {
      navigate(`/berita2/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 3 ) {
      navigate(`/berita3/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 4 ) {
      navigate(`/berita4/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 5 ) {
      navigate(`/berita5/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 6 ) {
      navigate(`/berita6/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 7 ) {
      navigate(`/berita7/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 8 ) {
      navigate(`/berita8/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else if (berita.id === 9 ) {
      navigate(`/berita9/${berita.id}`); // Arahkan ke ProdukKhususPage untuk produk tertentu
    } else {
      navigate(`/halaman-lain/${berita.id}`); // Arahkan ke HalamanLainPage untuk produk lainnya
    }
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Website Resmi <br /> <span> Desa Mataram </span><er /> Jaya
              </h1>
              <h2 className="fw-bold mt-0 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="rounded-underscore"></div>
              </h2>
              <p className="paragraf-1 mb-4 animate__animated animate__fadeInUp animate__delay-1s"> Selamat Datang di Website Resmi Desa Mataram Jaya Kecamatan Bandar Mataram, Kabupaten Lampung Tengah </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <p className="paragraf-2 animate__animated animate__fadeInUp animate__delay-1s">Halo dan selamat datang di Website Resmi Desa Mataram Jaya! <br /> Website ini menjadi media informasi dan komunikasi untuk memberikan pelayanan terbaik kepada masyarakat. Akses berbagai informasi tentang kegiatan, program, dan potensi desa, serta mari bersama membangun Desa Mataram Jaya yang lebih maju, mandiri, dan sejahtera.</p>
            <h6 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">Pemerintah Desa Mataram Jaya</h6>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Berita Terbaru</h1>
            <p className="text-center">Tetap up-to-date dengan informasi terkini dari Desa Mataram Jaya.</p>
          </Col>
        </Row>
        <Row>
        {beritadesa.slice(0, 8).map((berita)  => (
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
                    <button className="btn btn-primary" onClick={() => handleNavigation1(berita)}>
                      {berita.buttonText}
                    </button>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/berita")}data-aos="fade-up" data-aos-duration="1000">Lihat Semua Berita<i className="fa-solid fa-chevron-right ms-1"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Produk Desa Mataram Jaya</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="shadow-sm">
                <div className="product-card" onClick={() => handleNavigation(product)} // Panggil fungsi navigasi
                  style={{ cursor: "pointer" }}>
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
              </SwiperSlide>
            ))}
      </Swiper>
          </Row>
        </Container>
        <Container>
          <Row className="mt-5">
            <Col>
            <div
              id="map"
              style={{
                width: "100%",
                height: "0", // Tinggi awal 0
                paddingBottom: "42%", // Rasio aspek (16:9)
                position: "relative", // Penting untuk iframe di dalam
                borderRadius: "8px",
                overflow: "hidden", // Mencegah konten keluar
                border: "1px solid #ddd",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Mataram%20Jaya+(Web%20desa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            </Col>
          </Row>
        </Container>
        <Container>
        <div className="gallery-container">
        <h1 className="fw-bold mt-5">GALERI DESA</h1>
        <p>Menampilkan kegiatan-kegiatan yang berlangsung di desa</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="see-more pb-3">
          <Link to="/galeripage">Lihat foto lebih banyak..</Link>
        </div>
        </div>
        </Container>
      </div>
    </div>
  )
}

export default HomePage
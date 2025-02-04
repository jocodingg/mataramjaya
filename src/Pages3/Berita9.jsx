import {Container, Row, Col} from 'react-bootstrap'

const Berita9 = () => {
  const berita = {
    id: 9,
    title: "Pengadaan Alat Transportasi Pelayanan Kesehatan Kampung Mataram Jaya",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tantowi Gunawan Napitupulu  - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.32</p>
            <img src="/galeri9.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Ambulance desa Kampung Mataram Jaya (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p> Pada tanggal 1 Agustus 2023, Pemerintah Desa Kampung Mataram Jaya secara resmi mengimplementasikan program pengadaan alat transportasi pelayanan kesehatan yang didanai sepenuhnya melalui alokasi dana desa. Program ini dirancang sebagai langkah strategis untuk mengatasi tantangan aksesibilitas layanan kesehatan di wilayah pedesaan, sekaligus memastikan tersedianya fasilitas yang memadai bagi seluruh lapisan masyarakat.
                  <br /><br />
                  Pengadaan alat transportasi kesehatan ini merupakan manifestasi dari komitmen pemerintah desa terhadap peningkatan kualitas hidup masyarakat, khususnya dalam aspek pelayanan kesehatan. Fasilitas transportasi ini diharapkan mampu mempercepat dan mempermudah akses masyarakat ke fasilitas medis, terutama dalam situasi darurat, yang selama ini sering terhambat oleh keterbatasan logistik di daerah terpencil.
                  <br /><br />
                  Kebutuhan akan pengadaan transportasi kesehatan ini muncul sebagai respons terhadap berbagai tantangan struktural yang dihadapi masyarakat Kampung Mataram Jaya. Program ini tidak hanya bertujuan memberikan solusi jangka pendek, tetapi juga dirancang sebagai bagian dari pendekatan holistik untuk membangun sistem kesehatan yang inklusif, efisien, dan berkelanjutan di tingkat desa.
                  <br /><br />
                  Inisiatif ini telah mendapatkan apresiasi yang luas dari masyarakat setempat, yang mengakui pentingnya intervensi ini dalam memenuhi kebutuhan mendasar mereka. Dukungan publik terhadap program ini mencerminkan keberhasilan pemerintah desa dalam mengidentifikasi dan merespons kebutuhan masyarakat secara tepat sasaran. Alat transportasi kesehatan yang disediakan tidak hanya meningkatkan harapan masyarakat terhadap pelayanan yang responsif, tetapi juga memperkuat kepercayaan terhadap pemerintah desa.
                  <br /><br />
                  Sebagai bagian dari komitmen jangka panjang, pemerintah desa akan terus memantau implementasi dan pemanfaatan alat transportasi ini untuk memastikan optimalisasi penggunaannya. Langkah ini diharapkan dapat menciptakan dampak yang signifikan dalam memperbaiki akses layanan kesehatan, sekaligus menjadi model yang dapat diadopsi oleh desa lain dalam memanfaatkan dana desa untuk meningkatkan pelayanan publik yang esensial dan strategis.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita9
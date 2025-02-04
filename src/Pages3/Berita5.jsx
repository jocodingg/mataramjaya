import {Container, Row, Col} from 'react-bootstrap'

const Berita5 = () => {
  const berita = {
    id: 5,
    title: "Peringatan Hari Kemerdekan yang Diselenggarakan Pemuda Karang Taruna Dusun 02 Kampung Mataram Jaya",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tirta Pratama - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.26</p>
            <img src="/galeri5.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Malam acara peringatan hari kemerdekaan 17 Agustus 2024 (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p>Pada 17 Agustus 2024, Pemuda Karang Taruna Dusun 02 Kampung Mataram Jaya menyelenggarakan peringatan Hari Kemerdekaan dengan semarak dan antusias. Acara ini berlangsung di Dusun 02 dengan berbagai kegiatan, termasuk penampilan video kreatif sebagai bagian dari perayaan.
                <br /><br />
                Kepala Kampung Mataram Jaya, Made Pujana, turut hadir dalam kegiatan tersebut untuk memberikan dukungan dan semangat kepada para pemuda Karang Taruna. Kehadiran beliau menjadi motivasi tersendiri bagi pemuda setempat untuk terus aktif dalam kegiatan sosial dan kebudayaan di kampung mereka.
                <br /><br />
                Perayaan ini tidak hanya menjadi momen refleksi atas perjuangan kemerdekaan, tetapi juga ajang memperkuat rasa persatuan dan semangat gotong royong di antara warga Dusun 02. Dengan inisiatif yang digerakkan oleh pemuda, acara ini membuktikan bahwa generasi muda memiliki peran penting dalam menjaga semangat kebangsaan di tengah masyarakat.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita5
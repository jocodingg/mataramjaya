import {Container, Row, Col} from 'react-bootstrap'

const Berita4 = () => {
  const berita = {
    id: 4,
    title: "Acara Rutin Bulanan Pemuda Karang Taruna Dusun 2 Kampung Mataram Jaya",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tirta Pratama - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.08</p>
            <img src="/galeri4.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Acara perkumpulan (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p>Pemuda Karang Taruna Dusun 02 Kampung Mataram Jaya secara rutin mengadakan pertemuan bulanan yang berlangsung setiap tanggal 15, pukul 20.00-22.00. Kegiatan ini diikuti oleh 32 anggota pemuda dengan agenda utama membahas perkembangan organisasi dan merencanakan kegiatan-kegiatan di masa depan.
                <br /><br />
                Forum ini menjadi ruang diskusi produktif untuk menggali ide-ide baru serta merancang program yang bermanfaat bagi masyarakat Dusun 02. Dalam setiap pertemuan, pemuda Karang Taruna juga berkomitmen untuk terus meningkatkan peran aktif mereka dalam mendukung pembangunan desa, baik di bidang sosial, budaya, maupun olahraga.
                <br /> <br />
                Dengan semangat kebersamaan dan visi yang jelas, kegiatan rutin ini menjadi bukti nyata kontribusi pemuda dalam memperkokoh keberlanjutan pembangunan di Kampung Mataram Jaya. Kepala Kampung menyampaikan apresiasinya terhadap inisiatif ini dan berharap agar semangat para pemuda terus terjaga untuk membawa perubahan positif di masa mendatang.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita4
import {Container, Row, Col} from 'react-bootstrap'

const Berita6 = () => {
    const berita = {
        id: 6,
        title: "Pagelaran Wayang Kulit Semalam Suntuk Kampung Mataram Jaya Memperingati 1 Muharam dan Brsih Desa",
      };
    
      return (
        <div className="berita1">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
                <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tirta Pratama - <span>KKN Unila 2025</span> </p>
                <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.59</p>
                <img src="/galeri6.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Pagelaran malam wayang kulit semalam suntuk (Sumber: facebook Mataram Jaya)</p>
                <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
                  <p>Pada tanggal 4 Agustus 2024, Kampung Mataram Jaya menjadi tuan rumah pagelaran wayang kulit semalam suntuk yang berlangsung di Lapangan Merdeka. Acara ini merupakan bagian dari perayaan 1 Muharam sekaligus ritual tahunan tradisi bersih desa. Diselenggarakan oleh Pemerintah Desa Mataram Jaya, kegiatan ini berfungsi sebagai upaya pelestarian budaya tradisional sekaligus sarana mempererat hubungan sosial dalam komunitas.
                      <br /> <br />
                      Tradisi bersih desa memiliki dimensi filosofis yang mendalam, mengintegrasikan refleksi spiritual dan pembaharuan lingkungan. Sebagai momen peralihan dalam kalender Hijriah, perayaan ini mencerminkan rasa syukur kolektif sekaligus harapan akan kemakmuran yang berkelanjutan. Tradisi ini, yang diwariskan secara turun-temurun, menegaskan pentingnya kohesi sosial dan nilai-nilai lokal dalam kehidupan masyarakat pedesaan.
                      <br /><br />
                      Lebih dari sekadar hiburan, acara ini dirancang untuk menguatkan solidaritas komunitas dan semangat gotong royong di antara warga. Pemilihan lokasi di Lapangan Merdeka, dengan kapasitas yang memadai, mencerminkan komitmen pemerintah desa dalam memastikan akses yang inklusif bagi seluruh masyarakat. Selain itu, penyelenggaraan acara ini diharapkan mampu menegaskan identitas budaya Kampung Mataram Jaya di tengah tantangan globalisasi..
                      <br /><br />
                      Melalui keberhasilan acara ini, Kampung Mataram Jaya kembali menegaskan perannya sebagai penjaga tradisi dan warisan budaya lokal. Acara ini menjadi bukti nyata bahwa komitmen terhadap budaya dapat memberikan kontribusi signifikan terhadap pembangunan sosial, sekaligus memperkuat rasa kebersamaan di kalangan masyarakat.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }

export default Berita6
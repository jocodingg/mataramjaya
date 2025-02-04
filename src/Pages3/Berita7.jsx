import {Container, Row, Col} from 'react-bootstrap'

const Berita7 = () => {
    const berita = {
        id: 7,
        title: "Projects Finish 4 Unit Bedah Rumah Kampung Mataram Jaya Tahun 2024",
      };
    
      return (
        <div className="berita1">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
                <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tirta Pratama - <span>KKN Unila 2025</span> </p>
                <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.19</p>
                <img src="/galeri7.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Hasil Project finish bedah rumah di Kampung Mataram Jaya (Sumber: facebook Mataram Jaya)</p>
                <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
                  <p>Proyek bedah rumah yang mencakup empat unit hunian di Kampung Mataram Jaya telah berhasil diselesaikan pada tanggal 20 Juli 2024. Proyek ini berlangsung selama satu bulan, dimulai dari 20 Juni hingga 20 Juli 2024, dengan fokus memberikan hunian yang layak bagi warga di Dusun 02, yaitu Bapak Bejo dan Ibu Mardiah, serta Dusun 06, yaitu Bapak Sarji dan Bapak Nyoman Suarse.
<br /><br />
Proyek ini sepenuhnya didanai oleh Dinas Permukiman Kabupaten Lampung Tengah sebagai bagian dari inisiatif pemerintah yang lebih luas untuk meningkatkan kesejahteraan masyarakat melalui penyediaan rumah layak huni. Inisiatif ini merupakan hasil dari pengajuan resmi yang dilakukan oleh pemerintah desa Kampung Mataram Jaya kepada Dinas Permukiman, yang mencerminkan kolaborasi efektif antara otoritas desa dan kabupaten dalam menangani kebutuhan mendesak masyarakat yang kurang terlayani.
<br /><br />
Tujuan utama dari proyek ini adalah memastikan bahwa warga Kampung Mataram Jaya memiliki akses ke hunian yang memenuhi standar keselamatan, kenyamanan, dan kelayakan. Penyelesaian renovasi ini diharapkan dapat secara signifikan meningkatkan kualitas hidup penerima manfaat, yaitu Bapak Bejo, Ibu Mardiah, Bapak Sarji, dan Bapak Nyoman Suarse. Selain itu, inisiatif ini menegaskan komitmen pemerintah untuk secara langsung mendukung masyarakatnya dalam mencapai standar hidup yang lebih baik.
<br /><br />
Proyek ini menjadi contoh nyata tanggapan proaktif pemerintah terhadap kebutuhan mendesak masyarakat dan diharapkan dapat menjadi model untuk inisiatif serupa di masa mendatang. Harapannya, program seperti ini akan terus dilaksanakan untuk memberikan manfaat bagi lebih banyak warga di Kampung Mataram Jaya maupun wilayah lainnya di Kabupaten Lampung Tengah.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }

export default Berita7
import { Container, Row, Col } from "react-bootstrap";

const Berita1 = () => {
  const berita = {
    id: 1,
    title: "Penyerahan Bola Voli dan Net dari Bapak Kakam Made Pujana untuk Dusun 02",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Joko Sulistiyo - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 21.17</p>
            <img src="/galeri1.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Penyerahan bola voli dan net dari Bapak Made Pujana selaku Kakam Mataram Jaya (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p>Pada tanggal 24 Desember 2025, sebuah kegiatan berharga berlangsung di Dusun 02. Kepala Kampung Mataram Jaya, Bapak Made Pujana, dengan penuh empati menyerahkan bantuan berupa bola voli dan net kepada masyarakat Dusun 02. <br /> <br /> Penyerahan ini dilakukan sebagai bentuk perhatian dan dukungan beliau terhadap perkembangan minat dan bakat warga kampung, khususnya dalam bidang olahraga.
                Kegiatan ini dibiayai sepenuhnya menggunakan dana pribadi dari Bapak Made Pujana, sebuah tindakan mulia yang mencerminkan kepedulian beliau terhadap kesejahteraan dan kemajuan masyarakat kampung. Bantuan ini diharapkan dapat memotivasi generasi muda serta seluruh warga untuk lebih aktif dalam kegiatan olahraga, sekaligus mempererat tali persaudaraan di antara mereka. <br />
                <br />
                Lokasi penyerahan di Dusun 02 dipilih dengan tujuan menjangkau masyarakat yang memerlukan sarana dan prasarana olahraga yang memadai. Dengan adanya bola voli dan net ini, diharapkan kegiatan olahraga dapat lebih sering diadakan, baik dalam bentuk latihan rutin maupun kompetisi lokal. Selain itu, olahraga juga menjadi sarana penting untuk menjaga kesehatan fisik dan mental masyarakat.
                Kegiatan ini mendapat sambutan hangat dari warga Dusun 02. Banyak yang mengapresiasi langkah Bapak Made Pujana karena merasa bahwa bantuan ini sangat bermanfaat dan tepat sasaran. Salah satu warga menyampaikan rasa terima kasihnya dan berharap agar kegiatan serupa dapat terus dilakukan di masa mendatang.
                Dengan adanya bantuan ini, Dusun 02 kini memiliki sarana yang lebih baik untuk berolahraga. Semoga inisiatif mulia dari Bapak Made Pujana dapat menjadi inspirasi bagi tokoh-tokoh lain untuk terus mendukung kemajuan masyarakat kampung Mataram Jaya.`</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita1
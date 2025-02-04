import {Container, Row, Col} from 'react-bootstrap'

const Berita8 = () => {
    const berita = {
        id: 8,
        title: "Pembuatan Badan Jalan Dusun 02 Rukun Karya Kampung Mataram Jaya",
      };
    
      return (
        <div className="berita1">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
                <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tantowi Gunawan Napitupulu - <span>KKN Unila 2025</span> </p>
                <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 22.21</p>
                <img src="/galeri8.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Jalan desa yang sedang mengalami perbaikan (Sumber: facebook Mataram Jaya)</p>
                <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
                  <p>Pada rentang waktu 25 Maret hingga 25 April, Pemerintah Desa Mataram Jaya melaksanakan pembangunan badan jalan sepanjang 600 meter di Dusun 02, Rukun Karya. Inisiatif ini, yang sepenuhnya didanai melalui alokasi dana desa, dirancang untuk mengatasi hambatan infrastruktur yang selama ini menghambat efisiensi distribusi hasil pertanian. Dengan jalan baru ini, aksesibilitas petani ke pasar dan pusat distribusi diperkirakan akan meningkat secara signifikan, mengurangi kendala logistik yang sering kali memengaruhi produktivitas pertanian.
                      <br /><br />
                      Selain manfaat langsung bagi sektor pertanian, proyek ini juga sejalan dengan kebijakan strategis desa dalam meningkatkan kesejahteraan masyarakat secara menyeluruh. Jalan ini diharapkan berfungsi sebagai katalisator untuk pengembangan aktivitas ekonomi lainnya, termasuk perdagangan hasil tani dan eksplorasi potensi lokal. Hal ini memperkuat visi desa dalam menciptakan lingkungan yang nyaman serta mendukung keberlanjutan ekonomi.
                      <br /><br />
                      Kepala Desa Mataram Jaya menegaskan bahwa proyek ini mencerminkan komitmen kuat pemerintah desa terhadap pembangunan berbasis kebutuhan masyarakat. "Pembangunan infrastruktur ini bukan sekadar upaya meningkatkan aksesibilitas, tetapi juga langkah konkret untuk mendorong produktivitas ekonomi masyarakat Dusun 02," ungkapnya.
                      <br /><br />
                      Proyek pembangunan badan jalan di Dusun 02 ini diharapkan menjadi titik awal transformasi yang lebih luas, tidak hanya untuk sektor pertanian tetapi juga bagi pengembangan ekonomi desa secara menyeluruh. Dengan langkah ini, Desa Mataram Jaya memperlihatkan dedikasi dalam membangun komunitas yang tangguh, produktif, dan berkelanjutan.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }

export default Berita8
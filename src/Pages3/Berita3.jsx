import  {Container, Row, Col} from 'react-bootstrap';

const Berita3 = () => {
  const berita = {
    id: 3,
    title: "Pembangunan lapangan bola voli Kampung Mataram Jaya dari Dispora Provinsi Lampung.",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Tirta Pratama - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 21.59</p>
            <img src="/galeri3.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Lapangan voli yang dibangun dispora Lampung (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p>Pada tanggal 10 November 2024, pembangunan lapangan bola voli di Kampung Mataram Jaya oleh Dinas Pemuda dan Olahraga (Dispora) Provinsi Lampung resmi selesai, menandai langkah signifikan dalam pengembangan infrastruktur olahraga di tingkat lokal. Proyek ini dirancang secara strategis untuk mendukung pengembangan bakat, minat, dan aktivitas olahraga di kalangan pemuda Kampung Mataram Jaya, sekaligus menyediakan fasilitas yang memenuhi kebutuhan olahraga masyarakat secara keseluruhan.
<br /><br />
Terletak di kawasan Lapangan Merdeka Kampung Mataram Jaya, lapangan ini dirancang sebagai fasilitas multifungsi yang mampu menampung berbagai kegiatan olahraga, mulai dari latihan rutin hingga penyelenggaraan turnamen lokal. Keberadaan lapangan ini tidak hanya dimaksudkan untuk meningkatkan partisipasi pemuda dalam aktivitas olahraga, tetapi juga untuk mempromosikan kesehatan masyarakat, memperkuat interaksi sosial, dan mendukung pembentukan komunitas yang lebih harmonis.
<br /><br />
Peresmian lapangan bola voli dilaksanakan pada tanggal 20 November 2024, dihadiri oleh tokoh masyarakat, pejabat daerah, dan para pemuda setempat. Acara ini menjadi simbolisasi penting dari komitmen pemerintah daerah dalam mendorong pengembangan sarana olahraga sebagai bagian dari agenda pemberdayaan masyarakat. Dalam sambutannya, para pemimpin daerah menekankan pentingnya peran olahraga dalam meningkatkan kualitas hidup dan membangun generasi muda yang berdaya saing.
<br /><br />
Proyek ini sepenuhnya dibiayai oleh Dispora Provinsi Lampung, yang mengalokasikan dana sebagai bagian dari inisiatif untuk memperluas akses masyarakat pedesaan terhadap infrastruktur olahraga berkualitas. Pendanaan ini mencerminkan prioritas pemerintah dalam mengintegrasikan pengembangan olahraga ke dalam kebijakan pembangunan daerah, khususnya untuk mendukung pemuda di wilayah-wilayah yang sebelumnya kurang terlayani.
<br /><br />
Dengan adanya fasilitas baru ini, pemuda Kampung Mataram Jaya memiliki kesempatan lebih besar untuk mengembangkan potensi mereka di bidang olahraga, baik secara individual maupun kolektif. Lapangan ini diharapkan menjadi pusat kegiatan olahraga yang produktif, berkontribusi pada pembentukan lingkungan yang sehat, dan mendorong kemajuan sosial-ekonomi melalui penguatan komunitas yang aktif dan dinamis. Pemerintah setempat juga berharap bahwa infrastruktur ini akan menjadi model bagi pengembangan serupa di wilayah lain, sehingga manfaatnya dapat dirasakan secara luas dan berkelanjutan.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita3
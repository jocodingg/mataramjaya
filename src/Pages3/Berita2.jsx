import { Container, Row, Col } from "react-bootstrap";

const Berita2 = () => {
  const berita = {
    id: 2,
    title: "Kedatangan Mahasiswa Pra KKN Universitas Lampung",
  };

  return (
    <div className="berita1">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold animate__animated animate__fadeInDown animate__delay-0.4s text-center">{berita.title}</h1>
            <p className="author text-center fw-bold animate__animated animate__fadeInDown animate__delay-0.3s">Joko Sulistiyo - <span>KKN Unila 2025</span> </p>
            <p className="date text-center animate__animated animate__fadeInDown animate__delay-0.2s">Sabtu, 25 Jan 2025, 21.17</p>
            <img src="/galeri2.jpg" alt="fotoberita1" className="img-fluid animate__animated animate__fadeInLeft animate__delay-0.5s d-block mx-auto"/> <br /> <p className="ketfoto text-center">Penyerahan bola voli dan net dari Bapak Made Pujana selaku Kakam Mataram Jaya (Sumber: facebook Mataram Jaya)</p>
            <div className="berita1-content mt-4 animate__animated animate__fadeInUp animate__delay-0.7s">
              <p>Pada tanggal 6–7 Desember 2024, mahasiswa Universitas Lampung mengunjungi Kampung Mataram Jaya, Kecamatan Bandar Mataram, untuk melaksanakan kegiatan Pra Kuliah Kerja Nyata (Pra KKN). Kegiatan ini bertujuan untuk melakukan observasi terkait kebutuhan dan potensi desa sebagai persiapan untuk pelaksanaan program kerja KKN yang dijadwalkan berlangsung pada Januari hingga Februari 2025.
                  <br /><br />
                  Mahasiswa Pra KKN tiba pukul 11.00 setelah dijemput dari kantor Kecamatan Bandar Mataram oleh Kaur Umum. Setibanya di Kampung Mataram Jaya, mereka langsung menuju kantor kepala desa untuk mengadakan audiensi bersama perangkat desa. Dalam audiensi tersebut, mahasiswa mendapatkan arahan mengenai kebutuhan desa dan berbagai aspek yang memerlukan perhatian dalam perencanaan program kerja KKN.
                  <br /><br />
                  Selama kegiatan berlangsung, mahasiswa ditempatkan di rumah Mbah Mul. Kehadiran mereka di kampung ini diharapkan mampu menghasilkan perencanaan program yang relevan dan bermanfaat, sesuai dengan kebutuhan masyarakat setempat. Observasi ini menjadi langkah awal yang penting untuk memastikan program KKN mendatang dapat memberikan kontribusi nyata bagi perkembangan Kampung Mataram Jaya.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Berita2
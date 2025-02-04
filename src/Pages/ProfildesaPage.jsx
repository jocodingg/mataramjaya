import {Container, Row, Col} from "react-bootstrap"

const ProfildesaPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col className="visi mb-5">
            <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">VISI</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Terwujudnya Kampung Mataram Jaya Yang Aman, Maju, Trasfaran dan Berkeadilan</p>
            </Col>
          </Row>
          <Row>
            <Col className="misi mb-4">
            <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">MISI</h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s"> 1. Mengoptimalkan fasilitas yang ada termasuk SDM demi peningkatan pelayanan masyarakat. <br /> 2. Tercapainya Pemerintah desa yang bersih melalui transparansi penggunaan anggaran dan realisasinya. <br /> 3. Mengoptimalkan sarana dan prasarana yang ada di desa. <br /> 4. Pengadaan sarana dan prasarana yang dibutuhkan. <br /> 5. Menata dan meningkatkan administrasi kependudukan dan kearsipan sesuai aturan yang ada. <br /> 6. Meningkatkan SDM dengan cara bekerjasama dengan instansi terkait. <br /> 7. Mengefektifkan kerja keras perangkat yang ada demi kesejahteraan masyarakat </p>
            </Col>
          </Row>
          <Row className="py-3 mb-4">
            <Col className="d-flex flex-column align-items-center">
            <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Bagan Desa</h1>
            <img src="perangkat.png" alt="perangkat desa" className="perdes img-fluid mt-2 animate__animated animate__fadeInUp animate__delay-0.8s"/>
            </Col>
          </Row >
          <Row className="pb-4 py-3">
            <Col>
            <h5 className="fw-bold">Struktur Organisasi Pemerintahan Desa</h5>
            <img src="strukturdesa.png" alt="struktur organisasi" className="sd img-fluid mt-2 center-image"/>
            </Col>
          </Row>
          <Row className="pb-4 py-3">
            <Col>
            <h5 className="fw-bold">Struktur Badan Permusyawaratan Desa</h5>
            <img src="bpd.png" alt="BPD" className="bpd img-fluid mt-2 center-image"/>
            </Col>
          </Row>
          <Row className="mt-3">
            <h1 className="fw-bold">Peta Lokasi Desa</h1>
            <Col md={6}>
            <h5 className="fw-bold">Desa Mataram Jaya</h5>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td><strong>Batas Desa:</strong></td>
                </tr>
                <tr>
                  <td><strong>Utara:</strong></td>
                  <td>Desa Sumber Rejeki Mataram</td>
                </tr>
                <tr>
                  <td><strong>Timur:</strong></td>
                  <td>Kali Way Seputih</td>
                </tr>
                <tr>
                  <td><strong>Selatan:</strong></td>
                  <td>Desa Sriwijaya Mataram</td>
                </tr>
                <tr>
                  <td><strong>Barat:</strong></td>
                  <td>Desa Mataram Udik</td>
                </tr> <br />
                <tr>
                  <td><strong>Luas Desa:</strong></td>
                  <td>2796 Ha</td>
                </tr> <br />
                <tr>
                  <td><strong>Jumlah Penduduk:</strong></td>
                  <td>4815 Jiwa</td>
                </tr>
              </tbody>
            </table>
            </Col>
            <Col md={6}>
            <div
              id="map"
              style={{
                width: "100%",
                height: "0", // Tinggi awal 0
                paddingBottom: "56.25%", // Rasio aspek (16:9)
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
          <Row className="mt-5">
            <h1 className="fw-bold">Potensi Desa</h1>
            <Row>
              <Col>
              <h5 className="fw-bold text-center mt-4">Kondisi Geografis</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tinggi tempat dari permukaan laut:</strong></td>
                        <td style={{ padding: "5px 10px" }}>74 m</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Curah hujan rata-rata per tahun:</strong></td>
                        <td style={{ padding: "5px 10px" }}>-</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Keadaan suhu rata-rata:</strong></td>
                        <td style={{ padding: "5px 10px" }}>29-34°C</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Perikanan</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Pemilik Kolam:</strong></td>
                        <td style={{ padding: "5px 10px" }}>20 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Nelayan / Pencari Ikan di Sungai:</strong></td>
                        <td style={{ padding: "5px 10px" }}>100 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Pedagang Ikan:</strong></td>
                        <td style={{ padding: "5px 10px" }}>100 orang</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Pertanian</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Peladangan:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1373.25 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Persawahan:</strong></td>
                        <td style={{ padding: "5px 10px" }}>50 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Sawah Tadah Hujan:</strong></td>
                        <td style={{ padding: "5px 10px" }}>35 Ha</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Perkebunan</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Perkebunan Karet:</strong></td>
                        <td style={{ padding: "5px 10px" }}>20 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Perkebunan Sawit:</strong></td>
                        <td style={{ padding: "5px 10px" }}>3303 Ha</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <h5 className="fw-bold text-center mt-4">Peternakan</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Sapi:</strong></td>
                        <td style={{ padding: "5px 10px" }}>716 ekor</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Kambing:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1.628 ekor</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Ayam:</strong></td>
                        <td style={{ padding: "5px 10px" }}>3.526 ekor</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Itik/bebek:</strong></td>
                        <td style={{ padding: "5px 10px" }}>94 ekor</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Angsa:</strong></td>
                        <td style={{ padding: "5px 10px" }}>13 ekor</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Kandang ayam potong:</strong></td>
                        <td style={{ padding: "5px 10px" }}>5 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Kandang ayam petelur:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Budidaya burung:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 orang</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Pertanahan</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tanah Kas Kampung/Kantor Kampung:</strong></td>
                        <td style={{ padding: "5px 10px" }}>5 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tanah Pemakaman Umum:</strong></td>
                        <td style={{ padding: "5px 10px" }}>22.500 m&sup2;</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Lapangan Sepak Bola:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tanah Yang Sudah Bersertifikat:</strong></td>
                        <td style={{ padding: "5px 10px" }}>592.5 Ha</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tanah Yang Belum Bersertifikat:</strong></td>
                        <td style={{ padding: "5px 10px" }}>256.5 Ha</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Industri/Kerajinan</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tahu:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tempe:</strong></td>
                        <td style={{ padding: "5px 10px" }}>4 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Meubeler:</strong></td>
                        <td style={{ padding: "5px 10px" }}>5 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Tiwul:</strong></td>
                        <td style={{ padding: "5px 10px" }}>10 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Kerupuk:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Keripik:</strong></td>
                        <td style={{ padding: "5px 10px" }}>8 orang</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Sapu Serabut Kelapa:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1 orang</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
              <Col>
              <h5 className="fw-bold text-center mt-4">Perhubungan dan Transportasi</h5>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  className="elemen-center"
                  style={{
                    border: "3px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Jalan Aspal:</strong></td>
                        <td style={{ padding: "5px 10px" }}>1.750 Km</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Jalan Onderlag:</strong></td>
                        <td style={{ padding: "5px 10px" }}>8 Km</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "5px 10px" }}><strong>Jalan Tanah:</strong></td>
                        <td style={{ padding: "5px 10px" }}>4 Km</td>
                      </tr>
                    </tbody>
                  </table>
                </button>
              </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ProfildesaPage
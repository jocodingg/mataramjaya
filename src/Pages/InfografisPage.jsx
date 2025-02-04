import { Container, Row, Col } from "react-bootstrap"
import { Bar, Pie } from 'react-chartjs-2';
import { statistikDesa } from "../data/index";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const InfografisPage = () => {
  const { totalPenduduk, kepalaKeluarga, lakiLaki, perempuan, umur, dusun, pendidikan, pekerjaan } = statistikDesa;

  const umurData = {
    labels: umur.kelompok,
    datasets: [
      {
        label: 'Jumlah',
        data: umur.jumlah,
        backgroundColor: '#36A2EB'
      }
    ]
  };

  const dusunData = {
    labels: dusun.map(d => d.nama),
    datasets: [
      {
        label: 'Jumlah',
        data: dusun.map(d => d.jumlah),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40', '#FF6F61', '#36D7B7', '#8E44AD', '#E74C3C', '#F39C12', '#1F77B4', '#2ECC71']
      }
    ]
  };

  const pendidikanData = {
    labels: pendidikan.tingkat,
    datasets: [
      {
        label: 'Jumlah',
        data: pendidikan.jumlah,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  const pekerjaanData = {
    labels: pekerjaan.map(p => p.nama),
    datasets: [
      {
        label: 'Jumlah',
        data: pekerjaan.map(p => p.jumlah),
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
      }
    ]
  };
  return (
    <div className="profil-desa pt-5">
      <div className="profil min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Statistik Penduduk</h1>
            <div className="container">
            <div className="cards-container">
              {[
                { title: 'Total Penduduk:', value: statistikDesa.totalPenduduk, image: 'totalpen.png' },
                { title: 'Kepala Keluarga:', value: statistikDesa.kepalaKeluarga, image: 'family.png' },
                { title: 'Laki-Laki:', value: statistikDesa.lakiLaki, image: 'male.png' },
                { title: 'Perempuan:', value: statistikDesa.perempuan, image: 'female.png' },
              ].map((item, index) => (
                <div key={index} className="card">
                  <h2 className="fw-bold"><img src={`/${item.image}`} alt={item.title} /> {item.title}<strong> {item.value}</strong></h2>
                </div>
              ))}
            </div>
              <h2 className="pt-5 fw-bold">Berdasarkan Kelompok Umur</h2>
              <Bar data={umurData} />
              <h2 className="pt-5 fw-bold">Berdasarkan Dusun</h2>
              <div className="chart-container">
                <Pie data={dusunData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <h2 className="pt-5 fw-bold">Berdasarkan Pendidikan</h2>
              <Bar data={pendidikanData} />
              <h2 className="pt-5 fw-bold">Berdasarkan Pekerjaan</h2>
              <div className="pt-4 table-container">
                <table className="styled-table"></table>
              <div className="table-container">
                <table className="styled-table">
                    <thead>
                      <tr>
                        <th>Pekerjaan</th>
                        <th>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statistikDesa.pekerjaan.map((item, index) => (
                        <tr key={index}>
                          <td>{item.nama}</td>
                          <td>{item.jumlah}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h2 className="pt-5 fw-bold text-center">Berdasarkan Agama</h2>
                  <div className="religion-container">
                    {statistikDesa.agama.map((item, index) => (
                      <div key={index} className="religion">
                        <img src={`/${item.nama.toLowerCase()}.png`} alt={item.nama} />
                        <h2>{item.nama}</h2>
                        <p><strong>{item.jumlah}</strong></p>
                      </div>
                    ))}
                  </div>
            </div>
          </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default InfografisPage
import {Container, Row, Col} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"

const FooterComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedText, setHighlightedText] = useState([]);
  const navigate = useNavigate();

  // Menangani pencarian dan memberikan highlight
  const handleSearch = () => {
    removeHighlights();
    const searchWords = searchTerm.toLowerCase().split(" ");
    const bodyText = document.body.innerHTML;
    
    let highlighted = [];
    let found = false;

    // Proses mencari kata yang dicari dan memberi highlight
    searchWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi"); // Mencari kata tanpa memperhatikan huruf besar/kecil
      const matches = bodyText.match(regex);
      
      if (matches) {
        highlighted = highlighted.concat(matches);
        found = true; // Menandakan kata ditemukan
      }
    });

    if (found) {
      setHighlightedText(highlighted);
      highlightResults(); // Panggil highlightResults saat pencarian selesai
      scrollToFirstMatch(); // Scroll ke hasil pertama
    }
  };

  // Fungsi untuk menghapus highlight yang ada sebelumnya
  const removeHighlights = () => {
    const highlightedElements = document.querySelectorAll(".highlight");
    highlightedElements.forEach((el) => {
      el.classList.remove("highlight");
    });
  };

  // Fungsi untuk memberi highlight pada kata-kata yang ditemukan
  const highlightResults = () => {
    if (searchTerm.trim() === "") return;

    const bodyContent = document.body;
    const textNodes = [];

    // Ambil semua teks dalam halaman
    function getTextNodes(element) {
      if (element.nodeType === 3) { // Jika node adalah teks
        textNodes.push(element);
      } else {
        Array.from(element.childNodes).forEach(getTextNodes);
      }
    }

    getTextNodes(bodyContent);

    // Cari dan beri highlight pada setiap teks yang ditemukan
    textNodes.forEach((node) => {
      let text = node.nodeValue;
      if (text && text.toLowerCase().includes(searchTerm.toLowerCase())) {
        const regex = new RegExp(`(${searchTerm})`, "gi");
        const newText = text.replace(regex, `<span class="highlight">$1</span>`);
        const span = document.createElement("span");
        span.innerHTML = newText;
        node.replaceWith(span);
      }
    });
  };

  // Fungsi untuk scroll ke hasil pertama yang ditemukan
  const scrollToFirstMatch = () => {
    const firstMatch = document.querySelector(".highlight");
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <h2 className="fw-bold "style={{ color: "#D0B206" }}>Desa Mataram Jaya.</h2>
          <p className="desc" >Terima kasih telah mengunjungi website Desa Mataram Jaya, tempat informasi desa terkini dan terpercaya.</p>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">pemerintahankampungmataramjaya@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="profildesa">Profil desa</Link>
          <Link to="infografis">Infografis</Link>
          <Link to="berita">Berita</Link>
          <Link to="belanja">Belanja</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Cari informasi di website</h5>
          <div className="search-form">
            <input type="text" placeholder="Search..." className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="btn btn-danger rounded-end rounded-0" onClick={handleSearch}>Search</button>
          </div>
          <div className="social mt-2">
            <a href="https://web.facebook.com/share/g/17vD3wgv7F/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date ().getFullYear()} by <span className="fw-bold">KKN UNILA 2025</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
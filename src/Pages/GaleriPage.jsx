import { useState } from "react";

const GaleriPage = () => {
    const images = [
        "galeri1.jpg", // Ganti dengan URL gambar Anda
        "galeri2.jpg",
        "galeri3.jpg",
        "galeri4.jpg",
        "galeri5.jpg",
        "galeri6.jpg",
        "galeri7.jpg",
        "galeri8.jpg",
        "galeri9.jpg",
        "galeri10.jpg",
      ];
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
      setSelectedImage(image);
    };
    const closeModal = () => {
      setSelectedImage(null);
    };

      return (
      <div className="galeripage">
        <div className="gallery-container">
            <h1 className="mt-4 fw-bold">GALERI DESA</h1>
            <p>Menampilkan kegiatan-kegiatan yang berlangsung di desa</p>
            <div className="gallery-grid">
            {images.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => openModal(image)}>
                <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
            </div>
        </div>
        {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
        </div>
  )
}

export default GaleriPage
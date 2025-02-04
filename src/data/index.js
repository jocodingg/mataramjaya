// Data Route
export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "profildesa",
    text: "Profil Desa",
  },
  {
    id: 3,
    path: "infografis",
    text: "Infografis",
  },
  {
    id: 4,
    path: "berita",
    text: "Berita",
  },
  {
    id: 5,
    path: "belanja",
    text: "Belanja",
  },
];

// Data Infografis
export const statistikDesa = {
  totalPenduduk: 4815, 
  kepalaKeluarga: 1509,
  lakiLaki: 2238,
  perempuan: 2277,
  umur: {
    kelompok: ['0-1', '1-5', '5-7', '7-15', '15-56', '56+'],
    jumlah: [147, 441, 303, 733, 2741, 1176],
  },
  dusun: [
    { nama: 'Dusun 01', jumlah: 430 },
    { nama: 'Dusun 02', jumlah: 317 },
    { nama: 'Dusun 03', jumlah: 493 },
    { nama: 'Dusun 04', jumlah: 414 },
    { nama: 'Dusun 05', jumlah: 358 },
    { nama: 'Dusun 06', jumlah: 409 },
    { nama: 'Dusun 07', jumlah: 405 },
    { nama: 'Dusun 08', jumlah: 464 },
    { nama: 'Dusun 09', jumlah: 429 },
    { nama: 'Dusun 10', jumlah: 377 },
    { nama: 'Dusun 11', jumlah: 356 },
    { nama: 'Dusun 12', jumlah: 363 }
  ],
  pendidikan: {
    tingkat: ['Tidak Tamat SD', 'SD', 'SMP', 'SMA', 'Diploma', 'Sarjana'],
    jumlah: [775, 1828, 853, 427, 22, 29]
  },
  pekerjaan: [
    { nama: 'Petani', jumlah: 1972 },
    { nama: 'Buruh Tani', jumlah: 334 },
    { nama: 'PEdagang', jumlah: 286 },
    { nama: 'PNS', jumlah: 29 },
    { nama: 'Honorer', jumlah: 31 },
    { nama: 'TNI', jumlah: 1 },
    { nama: 'POLRI', jumlah: 3 },
    { nama: 'Dokter', jumlah: 3 },
    { nama: 'Bidan/Perawat', jumlah: 7 },
    { nama: 'Jasa', jumlah: 26 },
    { nama: 'Pengajian/Industri Rumahan', jumlah: 14 },
    { nama: 'Nelayan', jumlah: 11 },
    { nama: 'Wiraswasta', jumlah: 1217 }
  ],
  agama: [
    {nama: 'Islam', jumlah: 4358},
    {nama: 'Hindu', jumlah: 430},
    {nama: 'Protestan', jumlah: 0},
    {nama: 'Khatolik', jumlah: 0},
    {nama: 'Budha', jumlah: 0},
    {nama: 'Konghucu', jumlah: 0}
  ]
};

// Data Berita
export const beritadesa = [
  {
    id: 1,
    title: "Penyerahan bola voli dan net dari bapak Kakam Made Pujana untuk dusun 02",
    description:
      "Pada tanggal 24 Desember 2025, sebuah kegiatan berharga berlangsung di Dusun 02. Kepala Kampung Mataram Jaya, Bapak Made Pujana, dengan penuh empati menyerahkan bantuan berupa bola voli dan net kepada masyarakat Dusun 02. <br /> <br /> Penyerahan ini dilakukan sebagai bentuk perhatian dan dukungan beliau terhadap perkembangan minat dan bakat warga kampung, khususnya dalam bidang olahraga.",
    date: "24 Des 2024",
    image: "galeri1.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 100,
  },
  {
    id: 2,
    title: "Kedatangan Mahasiswa Pra KKN Universitas Lampung",
    description:
      "Pada tanggal 6–7 Desember 2024, mahasiswa Universitas Lampung mengunjungi Kampung Mataram Jaya, Kecamatan Bandar Mataram, untuk melaksanakan kegiatan Pra Kuliah Kerja Nyata (Pra KKN).",
    date: "09 Des 2024",
    image: "galeri2.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 3,
    title: "Pembangunan lapangan bola voli kampung mataram jaya dari dispora provinsi lampung",
    description:
      "Pada tanggal 10 November 2024, pembangunan lapangan bola voli di Kampung Mataram Jaya oleh Dinas Pemuda dan Olahraga (Dispora) Provinsi Lampung resmi selesai, menandai langkah signifikan dalam pengembangan infrastruktur olahraga di tingkat lokal. Proyek ini dirancang secara strategis untuk mendukung pengembangan bakat, minat, dan aktivitas olahraga di kalangan pemuda Kampung Mataram Jaya, sekaligus menyediakan fasilitas yang memenuhi kebutuhan olahraga masyarakat secara keseluruhan.",
    date: "10 Nov 2024",
    image: "galeri3.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 4,
    title: "Acara rutin bulanan pemuda karang taruna Dusun 2 Kampung Mataram Jaya",
    description:
      "Pemuda Karang Taruna Dusun 02 Kampung Mataram Jaya secara rutin mengadakan pertemuan bulanan yang berlangsung setiap tanggal 15, pukul 20.00-22.00. Kegiatan ini diikuti oleh 32 anggota pemuda dengan agenda utama membahas pe",
    date: "07 Nov 2024",
    image: "galeri4.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 5,
    title: "Peringatan hari kemerdekan yang diselenggarakan pemuda karang taruna Dusun 02 Kampung Mataram Jaya",
    description:
      "Pada 17 Agustus 2024, Pemuda Karang Taruna Dusun 02 Kampung Mataram Jaya menyelenggarakan peringatan Hari Kemerdekaan dengan semarak dan antusias. Acara ini berlangsung di Dusun 02 dengan berbagai kegiatan, termasuk penampilan video kreatif sebagai bagian dari perayaan.",
    date: "17 Agust 2024",
    image: "galeri5.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 6,
    title: "Pagelaran Wayang Kulit semalam suntuk Kampung Mataram Jaya memperingati 1 Muharam dan brsih desa",
    description:
      "Pada tanggal 4 Agustus 2024, Kampung Mataram Jaya menjadi tuan rumah pagelaran wayang kulit semalam suntuk yang berlangsung di Lapangan Merdeka. Acara ini merupakan bagian dari perayaan 1 Muharam sekaligus ritual tahunan tradisi bersih desa. Diselenggarakan oleh Pemerintah Desa Mataram Jaya, kegiatan ini berfungsi sebagai upaya pelestarian budaya tradisional sekaligus sarana mempererat hubungan sosial dalam komunitas.",
    date: "04 Agust 2024",
    image: "galeri6.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 7,
    title: "Projects finish 4 unit bedah rumah kampung Mataram jaya tahun 2024",
    description:
      "Proyek bedah rumah yang mencakup empat unit hunian di Kampung Mataram Jaya telah berhasil diselesaikan pada tanggal 20 Juli 2024. Proyek ini berlangsung selama satu bulan, dimulai dari 20 Juni hingga 20 Juli 2024, dengan fokus memberikan hunian yang layak bagi warga di Dusun 02, yaitu Bapak Bejo dan Ibu Mardiah, serta Dusun 06, yaitu Bapak Sarji dan Bapak Nyoman Suarse.",
    date: "20 Jul 2024",
    image: "galeri7.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },
  {
    id: 8,
    title: "Pembuatan badan jalan Dusun 02 Rukun Karya kampung Mataram jaya",
    description:
      "Pada rentang waktu 25 April hingga 25 Maret, Pemerintah Desa Mataram Jaya melaksanakan pembangunan badan jalan sepanjang 600 meter di Dusun 02, Rukun",
    date: "25 Apr 2024",
    image: "galeri8.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 200,
  },
  {
    id: 9,
    title: "Pengadaan alat transportasi pelayanan kesehatan Kampung Mataram Jaya",
    description:
      "Pada tanggal 1 Agustus 2023, Pemerintah Desa Kampung Mataram Jaya secara resmi mengimplementasikan program pengadaan alat transportasi pelayanan kesehatan yang .",
    date: "01 Agust 2023",
    image: "galeri9.jpg",
    buttonText: "Baca Selengkapnya...",
    delay: 300,
  },

];

// Data Belanja Produk Desa
export const products = [
  {
    id: 1,
    image: "kursikayu.jpg",
    name: "Meubel Pak Supri",
    category: "Parabotan",
    price: "Rp 1000.000",
    rating: 0,
    delay: 100,
  },
  {
    id: 2,
    image: "kuenoer.png", 
    name: "Kue Ulang Tahun Bu Noer",
    category: "Kue",
    price: "Rp 100.000",
    rating: 0,
    delay: 200,
  },
  {
    id: 3,
    image: "keripikmasfar.png",
    name: "Keripik Singkong mas Farhan",
    category: "Makanan Ringan",
    price: "Rp 5.000",
    rating: 4.5,
    delay: 300,
  },
  {
    id: 4,
    image: "keripik.jpg", 
    name: "Keripik Singkong Bu Febriani",
    category: "Makanan ringan",
    price: "Rp 5.000",
    rating: 0,
    delay: 300,
  },
  {
    id: 5,
    image: "tempe.jpg", 
    name: "Tempe pak Pogo",
    category: "Makanan Pokok",
    price: "Rp 1.000",
    rating: 0,
    delay: 200,
},
];

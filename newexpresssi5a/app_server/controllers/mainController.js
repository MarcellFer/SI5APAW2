const index = (req, res) => {
    res.render('index', { title: 'Express', layout: 'main' });
}

const about = (req, res) => {
    res.render('about', {title: "About Us", layout: "main"});
}

const contact = (req, res) => {
    res.render('contact', {title: "Contact Us", layout: "main"});
}
const prodi = (req, res) => {
    const proddi = [
      {kode : 24, namaProdi : "Sistem Informasi", singkatan : "SI", namaFakultas : "Fakultas Ilmu Komputer an Rekayasa"},
      {kode : 25, namaProdi : "Informatika", singkatan : "IF", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
      {kode : 11, namaProdi : "Manajemen Informatika", singkatan : "MI", namaFakultas : "Fakultas Ilmu domputer Dan Rekayasa"},
      {kode : 27, namaProdi : "Teknik Elektro", singkatan : "TE", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
      {kode : 20, namaProdi : "Akuntansi", singkatan : "AK", namaFakultas : "Fakultas Ekonomi dan Bisnis"},
      {kode : 21, namaProdi : "Manajemen", singkatan : "MJ", namaFakultas : "Fakultas Ekonomi dan Bisnis"}
    ];
    res.render('prodi', {prodi, title: "Program Studi", layout: "main"});
}
/* GET home page. */
('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'main' });
});

// get about page
router.get("/about",(req, res) => { 
  // res.send("About Us");
  res.render('about', {title: "About Us", layout: "main"});
});


router.get("/prodi",(req, res) => { 
  // res.send("About Us");
  const prodi = [
    {kode : 24, namaProdi : "Sistem Informasi", singkatan : "SI", namaFakultas : "Fakultas Ilmu Komputer an Rekayasa"},
    {kode : 25, namaProdi : "Informatika", singkatan : "IF", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
    {kode : 11, namaProdi : "Manajemen Informatika", singkatan : "MI", namaFakultas : "Fakultas Ilmu domputer Dan Rekayasa"},
    {kode : 27, namaProdi : "Teknik Elektro", singkatan : "TE", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
    {kode : 20, namaProdi : "Akuntansi", singkatan : "AK", namaFakultas : "Fakultas Ekonomi dan Bisnis"},
    {kode : 21, namaProdi : "Manajemen", singkatan : "MJ", namaFakultas : "Fakultas Ekonomi dan Bisnis"}
  ];
  res.render('prodi', {prodi, title: "Program Studi", layout: "main"});
});

router.get("/about",(req, res) => { 
  // res.send("About Us");
  res.render('about', {title: "About Us", layout: "main"});
});

router.get("/contact",(req, res) => { 
  // res.send("Contact Us");
  //res.sendFile(__dirname + "/contact.html");
  res.render('contact', {title: "Contact Us", layout: "main"});
});

module.exports = {index, about, contact, prodi};
const express = require("express"); // impor module express
const app = express(); // express application
const port = 3000; // port yang akan digunakan 
 
app.set('view engine', 'ejs');

app.get("/",(req, res) => { // method (req untuk request, res untuk respon)
  // res.send("Hello World");
  res.render('index');
});
 
app.get("/about",(req, res) => { 
  // res.send("About Us");
  res.render('about');
});

app.get("/contact",(req, res) => { 
  // res.send("Contact Us");
  //res.sendFile(__dirname + "/contact.html");
  res.render('contact');
});

app.get("/mahasiswa",(req, res) => { 
  res.json({
      status:"Success",
      message: "Data Mahasiswa",
      data: ["Reza", "Gilang", "Fadhil"]
  });
});

app.get("/nilai",(req, res) => { 
  res.json({
      status:"Success",
      message: "Data Nilai",
      data: [
        {mk: "Bahasa Indonesia", nilai: "A"},
        {mk: "PAW 1", nilai: "A"},
        {mk: "PAB 1", nilai: "B+"}
      ]
  });
});


app.get("/fakultas/:id", (req, res) =>{
  // res.send(`Fakultas id : ${req.params.id}`);
  res.send("Fakultas ID : "+ req.params.id);
});

// jika route yang diakses tidak terdaftar, maka ditampilkan not found
app.use("/",(req, res) => {
  res.status(404); // http response code not found
  res.send("<h1>Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server dapat diakses : http://localhost:${port}`);
});
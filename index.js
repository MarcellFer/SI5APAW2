const express = require("express"); // impor module express
const app = express(); // express application
const port = 3000; // port yang akan digunakan 
 
app.get("/",(req, res) => { // method (req untuk request, res untuk respon)
  res.send("Hello World");
});
 
app.get("/about",(req, res) => { 
  res.send("About Us");
});

app.get("/contact",(req, res) => { 
  res.send("Contact Me");
});

app.listen(port, () => {
  console.log(`Server dapat diakses : http://localhost:${port}`);
}); 
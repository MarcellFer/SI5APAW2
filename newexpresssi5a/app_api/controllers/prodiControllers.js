// impor model prodi
const { prodi } = require('../../app_server/controllers/mainController');
const fakultas = require('../models/prodi');

// fungsi untuk mengambil isi collection fakultas
const getAllProdi = async (req, res) => {
    try {
        // mengambil semua prodi dari database
        const result = await prodi.find();
        // mengirimkan respon berisi data fakultas dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { getAllProdi };
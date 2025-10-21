// impor model Fakultas
const fakultasSchema = require('../models/fakultas');

// fungsi untuk mengambil isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // mengambil semua fakultas dari database
        const result = await fakultasSchema.find();
        // mengirimkan respon berisi data fakultas dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

const createFakultas = async (req, res)=> {
    //buat insatance fakultas baru
    const fakultas = new fakultasSchema({
        nama: req.body.nama,
        singkatan: req.body.singkatan
    })
    
    // simpan data fakultas ke dalam collection
    const hasil = await fakultas.save();
    //beri response json http_created
    res.status(201).json(hasil);
}

// export
module.exports = { getAllFakultas, createFakultas };
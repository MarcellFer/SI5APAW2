const matakuliah = require('../models/matakuliah');

const getAllMatakuliah = async (req, res) => {
    try {
        const result = await matakuliah.find().populate('prodi_id', 'nama singkatan');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMatakuliahById = async (req, res) => {
    try {
        const result = await matakuliah.findById(req.params.id).populate('prodi_id', 'nama singkatan');
        if (!result) return res.status(404).json({ message: 'Mata kuliah tidak ditemukan' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMatakuliah = async (req, res) => {
    try {
        const { kode, nama, sks, semester, prodi_id } = req.body;
        const newMatkul = new matakuliah({ kode, nama, sks, semester, prodi_id });
        const saved = await newMatkul.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateMatakuliah = async (req, res) => {
    try {
        const updated = await matakuliah.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Mata kuliah tidak ditemukan' });
        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteMatakuliah = async (req, res) => {
    try {
        const deleted = await matakuliah.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Mata kuliah tidak ditemukan' });
        res.status(200).json({ message: 'Mata kuliah dihapus' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllMatakuliah, getMatakuliahById, createMatakuliah, updateMatakuliah, deleteMatakuliah };

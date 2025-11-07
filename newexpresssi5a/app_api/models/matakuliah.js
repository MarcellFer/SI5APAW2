const mongoose = require('mongoose');

const matakuliahSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true,
        trim: true
    },
    nama: {
        type: String,
        required: true,
        trim: true
    },
    sks: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    prodi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'prodi',
        required: true
    }
});

const matakuliah = mongoose.model('matakuliah', matakuliahSchema);

module.exports = matakuliah;

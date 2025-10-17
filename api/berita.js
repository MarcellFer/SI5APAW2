const connectDB = require('../newexpresssi5a/app_api/models/db');
const beritaController = require('../newexpresssi5a/app_api/controllers/beritaControllers');
const BeritaModel = require('../newexpresssi5a/app_api/models/berita');

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    return beritaController.getAllBerita(req, res);
  }

  if (req.method === 'POST') {
    try {
      const newBerita = new BeritaModel(req.body);
      const saved = await newBerita.save();
      return res.status(201).json(saved);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).json({ message: 'Method not allowed' });
};

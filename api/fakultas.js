const connectDB = require('../newexpresssi5a/app_api/models/db');
const fakultasController = require('../newexpresssi5a/app_api/controllers/fakultasControllers');

module.exports = async (req, res) => {
  // Ensure DB connection
  await connectDB();

  if (req.method === 'GET') {
    return fakultasController.getAllFakultas(req, res);
  }

  res.setHeader('Allow', 'GET');
  res.status(405).json({ message: 'Method not allowed' });
};

itemsController.js

const pool = require('../db'); // Assuming you have a pool configured for PostgreSQL

const getAllItems = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Implement other controller functions for createItem, updateItem, and deleteItem

module.exports = {
  getAllItems,
  getItemById,
  // Add other controller functions here
};

const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all blog posts
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM blog_posts';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Create a new blog post
router.post('/', (req, res) => {
    const { title, content, author } = req.body;
    const sql = 'INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)';
    db.query(sql, [title, content, author], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: result.insertId, title, content, author, date: new Date() });
    });
});


// DELETE a blog post by ID
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    const sql = 'DELETE FROM blog_posts WHERE id = ?';
    db.query(sql, [postId], (err, result) => {
        if (err) {
            console.error('Error deleting blog post:', err);
            return res.status(500).json({ error: 'Error deleting blog post' });
        }
        res.json({ message: 'Blog post deleted successfully' });
    });
});

module.exports = router;

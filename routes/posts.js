const express = require('express');

const { getAllPost, createPost, getPostById, deletePost, updatePost } = require('../controllers/posts.js');

const router = express.Router();

router.get('/', getAllPost);

router.post('/', createPost);

router.get('/:id', getPostById);

router.delete('/:id', deletePost);

router.patch('/:id', updatePost);

module.exports = router;
const Post = require('../models/Post.js');

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
}

const createPost = async (req, res) => {
    const { title, description } = req.body;
    const post = new Post({
        title: title,
        description: description
    })

    try {
        const savedPost = post.save();
        res.json(savedPost);
        console.log('SUCCESS');
    } catch (error) {
        res.json({ message: error });
    }
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const post = await Post.updateOne({ _id: id }, { $set: { title: title, description: description } });
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = { getAllPost, createPost, getPostById, deletePost, updatePost };
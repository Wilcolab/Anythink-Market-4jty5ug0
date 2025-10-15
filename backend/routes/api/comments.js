/**
 * @file Defines the Express router for handling comment-related API endpoints.
 * @module routes/api/comments
 */

/**
 * Express router to mount comment related functions on.
 * @type {object}
 * @const
 * @namespace commentsRouter
 */

/**
 * @route   GET /api/comments/
 * @desc    Get all comments
 * @access  Public
 * @returns {Promise<Array<Comment>>} A promise that resolves to an array of all comments.
 * @throws  {Error} Will throw an error if the database query fails.
 */

/**
 * @route   DELETE /api/comments/:id
 * @desc    Delete a comment by its ID
 * @access  Public
 * @param   {string} req.params.id - The ID of the comment to delete.
 * @returns {Promise<Object>} A promise that resolves to a JSON object with a success message.
 * @throws  {Error} Will throw an error if the comment is not found or the database operation fails.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// delete a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
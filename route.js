const express = require("express");
const router = express.Router();
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");


router.get("/", (req, res) => {
    res.render("home");
});

router.post("/get-data", (req, res) => {
    const { link } = req.body;
    res.send(link);
});

module.exports = router;
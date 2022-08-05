const express = require("express");
const router = express.Router();
const { getLinkPreview } = require("link-preview-js");


router.get("/", (req, res) => {
    res.render("home");
});

router.post("/get-data", async (req, res) => {
    const { link } = req.body;
    const preview = await getLinkPreview(link);
    res.send(preview);
});

module.exports = router;
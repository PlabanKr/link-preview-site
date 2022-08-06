const express = require("express");
const router = express.Router();
const { getLinkPreview } = require("link-preview-js");


router.get("/", (req, res) => {
    const data = req.cookies["data"];
    res.clearCookie("data", { httpOnly:true });
    res.render("home/home");
});

router.get("/preview", (req, res) => {
    const data = req.cookies.data;
    res.render("preview/preview", {data});
})

router.post("/get-data", async (req, res) => {
    const { link } = req.body;
    const preview = await getLinkPreview(link);
    res.cookie("data", preview, { httpOnly: true });
    res.redirect("/preview");
});

module.exports = router;
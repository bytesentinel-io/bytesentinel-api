const router = require("express").Router();

router.get("/", async (req, res) => {
    await res.status(200).send()
});

module.exports = router;
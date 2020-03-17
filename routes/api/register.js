const express = require("express");
let router = express.Router();
let svgCaptcha = require("svg-captcha");

/* register. */
router.get("/code", (req, res) => {
    let captcha = svgCaptcha.create();
    // 将生成的验证码存到session中
    req.session.captcha = captcha.text;
    console.log(req.session);

    res.type("svg");
    res.status(200).send(captcha.data);
});

router.post("/", (req, res) => {
    console.log(req.body, req.session.captcha);
    res.send("成功");
});

module.exports = router;

const express = require("express");
let router = express.Router();

/* login. */
router.post("/", (req, res) => {
    // POST请求数据：req.body
    console.log(req.sessionID);

    let { username, password } = req.body;

    // res.send({ code: 200, info: "连接成功" });

    // if (username == "annan" && password == "123") {

    //     res.send({ code: 200, info: "登录成功" })
    // } else {
    //     res.send({ code: 201, info: "登录失败" })
    // }
});

module.exports = router;

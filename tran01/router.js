var router = require("express").Router()

// routerに関わらず、アクセス日時を出力するミドルウェア
// router.use((req, res, next) => {
//   console.log((new Date()).toISOString());
//   next();
// });

router.get("/p1", (req, res) => {
  req.session.user = {name: "ORE", age: 15}
  res.render("shop/page1")
})

router.get("/p2", (req, res) => {
  console.log("/p2")
  res.render("shop/page2")
})

router.get("/p3", (req, res) => {
  console.log("/p3")
  res.render("shop/page3")
})

router.post("/p2/confirm", (req, res) => {
  console.log("/shop/p2/confirm")

  // 入力データ検証
  if(req.session.user) {
    const {age} = req.session.user
    console.log("age=", age)
    res.redirect("/shop/p3")
  } else {
    res.redirect("/shop/p2")  // 失敗
  }
})

module.exports = router

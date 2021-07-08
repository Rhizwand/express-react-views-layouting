const index = function (req, res) {
  res.render("index", { name: "Rhize", title: "Home" });
};

export { index };

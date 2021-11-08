// CONTROLLER INDEX

exports.index = function (req, res, next) {
  res.render("index", {
    title: "MVC/SQL Boilerplate-App",
    subtitle: "Made with love by Manuel Martín 'Manoplo'",
  });
};

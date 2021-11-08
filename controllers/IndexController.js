// CONTROLLER INDEX

exports.getIndex = (req, res, next) => {
  res.render("index", {
    title: "MVC/SQL Boilerplate-App",
    subtitle: "Made with love by Manuel Martín 'Manoplo'",
  });
};

exports.formSubmit = (req, res, next) => {};

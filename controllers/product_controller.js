function index(req, res) {
  res.send("Show all products")
}

function show(req, res) {
  res.send("Show one product")
  
}

function make(req, res) {
  res.send("Show product form")
  
}

module.exports = {
  index,
  show,
  make
}
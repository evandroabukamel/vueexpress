module.exports = function(app) {
  const routes = [
    { path: '/', router: require('./routes/index') },
    { path: '/users', router: require('./routes/users') },
    { path: '/products', router: require('./routes/products') },
    { path: '/categories', router: require('./routes/categories') },
    { path: '/seeder', router: require('./routes/seeder/products') }
  ]

  routes.forEach(function (element, index) {
    app.use(element.path, element.router)
  })
}
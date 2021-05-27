var proxy = ''

switch(process.env.NODE_ENV) {
    case 'docker':
    proxy = 'http://api:8000'
    break
	case 'development':
    proxy = 'http://localhost:8000'
    break
    case 'test':
    proxy = 'http://127.0.0.1:8008'
    break
    case 'production':
    proxy = 'http://54.188.218.63'
    break
}

module.exports = {
  publicPath: '/',

  'devServer': {
    'port': 3000,
    'proxy': proxy,
    'disableHostCheck': true,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  },

  'transpileDependencies': [
    'vuetify'
  ],

  transpileDependencies: [
    'vuetify'
  ]
}

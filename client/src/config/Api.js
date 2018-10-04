import axios from 'axios'
const adapter = require('axios/lib/adapters/http')

export default () => {
  return axios.create({
		baseURL: 'http://localhost:3000',
		adapter,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS,HEAD',
			'Content-Type': 'application/json'
		}
		
  });
}
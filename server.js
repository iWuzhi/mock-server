const express = require('express')
const app = express()
const cors = require('cors')

const API = require('require-all')({
  dirname     :  __dirname + '/api',
  recursive   : true
});
const PORT = 8084;

app.use(cors({
  origin: '*'
}))
 
Object.values(API).forEach(apiModuleItem => {
  Object.getOwnPropertyNames(apiModuleItem).forEach(apiItemKey => {
     const [ method, path] = apiItemKey.split(' ');
     app.use(path, function(req, res) {
       res.json(apiModuleItem[apiItemKey]);
     });
   })
})

app.listen(PORT)

console.log(`Hey, mock server has started on: ${PORT}`);
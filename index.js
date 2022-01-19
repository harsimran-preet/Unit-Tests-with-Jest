const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      

function div (a, b){
    return a / b;
  }
  
  function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)))
      return true;
    }
    return false;
  }

exports.sum = sum;
exports.div = div;
exports.containsNumbers = containsNumbers;
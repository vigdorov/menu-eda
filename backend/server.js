const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const app = express();

app.get('/products', (req, res) => {
  console.log('Подключился новый клиент');

  MongoClient.connect(url, (err, client) => {
    const db = client.db('menu-eda');
    const collection = db.collection('products');
    collection.find().toArray().then(productsList => {
      res.header({
        'Access-Control-Allow-Origin': '*'
      });
      res.send(productsList);
      client.close();
    });
  });
});

app.listen(3050, () => {
  console.log('Сервер запущен на порту 3050');
});

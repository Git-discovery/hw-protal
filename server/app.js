const express = require('express');
const Router = express.Router();
// const mockjs = require('mockjs');

const homeCarousel = require('./home/carousel.json');
const infos = require('./home/info.json');
const news = require('./home/news.json');

Router.get('/home/carousel', function(req, res){
  return res.json(homeCarousel);
});

Router.get('/home/infos', function(req, res){
  return res.json(infos);
});

Router.get('/home/news', function(req, res){
  return res.json(news);
});

module.exports = Router;

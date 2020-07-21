const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
// const slugify = require('transliteration').slugify;
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

config
  .options.html(true).end()

  .plugin('anchor').use(anchorPlugin, [
    {
      permalinkSymbol:'#', //修改默认链接的图案，默认是¶
      permalink: true, //是否在标题旁添加链接
      permalinkBefore: true,//将链接放在标题的左边
    }
  ]).end()

  .plugin('containers').use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;

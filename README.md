# Blockchain Started

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

本專案用以進行區塊鏈入門教學與研究。

## 檔案介紹

以下檔案均為獨立範例：
* config：建立創世區塊用的 config 檔。
* hash：模擬比特幣建立 hash ID 的方式。
* mining：模擬比特幣挖礦的過程。
* block：簡單實作 Block Header 資料結構。


## 建立 Genesis Block
```
var config = require('./config.js')

var genesis = new Block(config.genesis)
```

## 安裝
```
npm i
```
或
```
yarn
```

## License
MIT
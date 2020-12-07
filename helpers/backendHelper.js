const axios = require("axios");

const url = `https://spectrocoin.com/scapi/ticker/usd/btc`;
const timeouts = require("../staticValues/constants.json");

const request = axios.create({
  timeout: timeouts.requestTimeout
});

module.exports = {
  request,
  url,

  getBtcPrice() {
    return request.get(url).catch(error => error.response);
  }
};
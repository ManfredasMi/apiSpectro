const helper = require("../helpers/backendHelper");
const validation = require("../helpers/validation");
const scenarioData = require("../staticValues/scenarioData.json");

describe("API endpoint test ", () => {
  it("Expect get current BTC price endpoints status code and response data fields to be valid", done => {
    helper.getBtcPrice().then(({ data, status }) => {
      validation.expectCondition(
        scenarioData.success.httpStatusCode,
        status,
        `get current BTC price endpoints request returned invalid http status code. Was expecting ${
          scenarioData.success.httpStatusCode
        } but got ${status} instead`
      );
      // checking if each returned data field has value
        Object.values(data).forEach(value => {
            console.log(value);
          validation.expectCondition(
            value !== null,
            true,
            `get current BTC price endpoints request returned null ${value} response.`
          );
        });
      done();
    });
  });
});
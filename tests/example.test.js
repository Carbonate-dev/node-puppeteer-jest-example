const {Puppeteer} = require("@carbonate/sdk/dist/browser");
const SDK = require("@carbonate/sdk").default;
const {describe, expect, test} = require("@jest/globals");

let browser = new Puppeteer(page);
let sdk = new SDK(
    browser,
    __dirname + '/cache',
    // "<your user ID>", // TODO: Change me
    // "<your api key>" // TODO: Change me
);

setSDK(sdk);

describe("Select Test", () => {
  test("Select birthday from the event type dropdown", async () => {
    await sdk.load(
        'https://carbonate.dev/demo-form'
    );

    await sdk.action('select Birthday from the event type dropdown')

    expect(
        await sdk.assertion('the event type dropdown should be set to Birthday')
    ).toBe(true);
  });
});

describe("Select Test Advanced", () => {
  test("Select birthday from the event type dropdown", async () => {
    await sdk.load(
        'https://carbonate.dev/demo-form'
    );

    const dropdown = await sdk.lookup('The dropdown')

    await dropdown.select('Birthday')

    expect(
        await (await dropdown.getProperty('value')).jsonValue()
    ).toBe('Birthday');
  });
});
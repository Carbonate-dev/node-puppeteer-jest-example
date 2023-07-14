module.exports = {
  preset: "jest-puppeteer",
  testEnvironment: "@carbonate/sdk/dist/jest/puppeteer.js",
  testTimeout: 30000 // Tweak this to suit your needs
};
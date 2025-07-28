module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "html",
    "json",
    "text",
    "lcov",
    "clover",
    "cobertura"
  ],
  reporters: [
    "default",
    ["jest-sonar", {
      outputDirectory: "coverage",
      outputName: "sonar-report.xml",
    }]
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "node_modules/",
    "dist/"
  ],
  verbose: true,
};
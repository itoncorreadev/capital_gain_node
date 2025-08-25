const { execSync } = require("child_process");
const path = require("path");

describe("CLI", () => {
  const cliPath = path.resolve(__dirname, "../bin/cli.js");
  const file1 = path.resolve(__dirname, "fixtures/case_1.txt");
  const file2 = path.resolve(__dirname, "fixtures/case_2.txt");

  it("executes with two files and returns expected output", () => {
    const output = execSync(`node ${cliPath} ${file1} ${file2}`).toString().trim().split("\n");

    const parsedOutput = output.map((line) => JSON.parse(line));

    expect(parsedOutput).toEqual([
      [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }],
      [{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }],
    ]);
  });
});

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage Contract", function () {
  let simpleStorage;

  beforeEach(async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
  });

  it("Should store and return the correct value", async function () {
    await simpleStorage.setValue(100);
    expect(await simpleStorage.getValue()).to.equal(100);
  });

  it("Should update stored value correctly", async function () {
    await simpleStorage.setValue(200);
    expect(await simpleStorage.getValue()).to.equal(200);
  });
});

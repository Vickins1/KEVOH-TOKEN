const { expect } = require("chai");

describe("KEVOH Contract", function () {
  it("Should deploy the contract", async function () {
    const [owner] = await ethers.getSigners();
    expect(await KEVOH.owner()).to.equal(owner.address);
  });

  it("Should mint tokens correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    await KEVOH.mint(addr1.address, ethers.utils.parseUnits("100", 18));
    const balance = await KEVOH.balanceOf(addr1.address);
    expect(balance).to.equal(ethers.utils.parseUnits("100", 18));
  });
});

const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const initialSupply = ethers.parseUnits("1000000", 18); 

    const KEVOH = await ethers.getContractFactory("KEVOH");

    const kevoh = await KEVOH.deploy(initialSupply);

    await kevoh.waitForDeployment();

    console.log("KEVOH deployed to:", await kevoh.getAddress());
}

main().catch((error) => {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
});

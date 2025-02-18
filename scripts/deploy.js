const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const initialSupply = ethers.parseUnits("1000000000", 18);
    
    try {
        // Check if the contract factory is created correctly
        const KEVOH = await ethers.getContractFactory("KEVOH");
        console.log("Contract factory created:", KEVOH);

        const kevoh = await KEVOH.deploy(initialSupply);
        console.log("Deployment initiated...");

        // Ensure that kevoh is defined and log the transaction hash
        console.log("Contract deployed:", kevoh);

        // Wait for the deployment transaction to be mined
        const receipt = await kevoh.deployTransaction.wait();
        console.log("Transaction receipt:", receipt);

        await kevoh.waitForDeployment();

        // Now log the contract address
        console.log("KEVOH deployed to:", kevoh.address);
    } catch (error) {
        console.error("Error deploying contract:", error);
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error("Error executing main function:", error);
    process.exitCode = 1;
});

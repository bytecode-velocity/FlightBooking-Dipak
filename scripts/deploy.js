const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractName = "FlightTicket";
  const totalSeats = 100;
  const price = ethers.parseEther("0.1"); // 0.1 Ether

  // Infura provider
  const infuraProjectId = process.env.INFURA_PROJECT_ID;
  const infuraNetwork = "goerli"; // Replace with the desired network (e.g., mainnet, rinkeby, etc.)
  const provider = new ethers.providers.InfuraProvider(
    infuraNetwork,
    infuraProjectId
  );

  // Get the signer (you can use a private key or a wallet)
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the contract factory
  const factory = await ethers.getContractFactory(contractName, wallet);

  // Deploy the contract
  const contract = await factory.deploy(totalSeats, price);

  console.log("Contract deployed to address:", contract.address);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exit(1);
});

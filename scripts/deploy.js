const { ethers } = require("hardhat");

async function main() {
  const contractName = "FlightTicket";
  const totalSeats = 100;
  const price = ethers.parseEther("0.1");

  const FlightTicket = await ethers.deployContract(contractName, [
    totalSeats,
    price,
  ]);
  await FlightTicket.waitForDeployment();

  console.log(`FlightTicket deployed at ${FlightTicket.target}`);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exit(1);
});

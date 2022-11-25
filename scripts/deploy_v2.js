// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

const PROXY_CONTRACT = "0xC2E3316aBF3E0fCC0d9DD9c03268c94Bb63C0852";

async function main() {
  const Alert4 = await ethers.getContractFactory("Alert4");
  await upgrades.upgradeProxy(PROXY_CONTRACT, Alert4);
  console.log("Contract Deployed at: V4");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

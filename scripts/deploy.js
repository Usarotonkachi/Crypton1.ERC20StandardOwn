const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const MyToken = await ethers.getContractFactory("ERC20");
  const myToken = await MyToken.deploy("MyToken", "MTK");

  await myToken.deployed();
  
  console.log("Token deployed to address: ", myToken.address);
  console.log("Token deployed to block: ", await hre.ethers.provider.getBlockNumber());
  console.log("Token owner is: ", await (myToken.provider.getSigner() ).getAddress() );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
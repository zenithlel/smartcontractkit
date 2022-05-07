//import (requires)

// main function

// invoke "main funtcion"

const hre = require("hardhat");

async function main(){
    const raffleFactory = await hre.ethers.getContractFactory(
        "Raffle"
        );
    
        const raffleContract = await raffleFactory.deploy()
        const personId = await (raffleContract.personId())
        console.log("the number is", personId.toString())

        const transaction = await raffleContract.setID("32542");
        await transaction.wait(1);
        const updatedId = await raffleContract.personId();
        console.log('the new id is: ', updatedId.toString());
        const trygetter = await raffleContract.getId()
        console.log("the getter output", trygetter.toString())

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

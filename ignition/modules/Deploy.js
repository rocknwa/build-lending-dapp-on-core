// Import the module builder from the Ignition library
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Define the module for your BTCfi system
module.exports = buildModule("BTCfi", (m) => {

	// Create a contract for the Bitcoin (BTC) token
	const BTC = m.contract("Bitcoin", ["Bitcoin", "BTC"]); // Name and symbol of the token
	
	// Create a contract for the US Dollar (USD) token
	const USD = m.contract("USD", ["US Dollar", "USD"]);  // Name and symbol of the token
	
	// Create the main lending platform contract, using BTC and USD as parameters
	const lending = m.contract("CoreLoanPlatform", [USD, BTC]);
	
	// Transfer ownership of the BTC contract to the lending platform
	m.call(BTC, "transferOwnership", [lending]);
	
	// Transfer ownership of the USD contract to the lending platform
	m.call(USD, "transferOwnership", [lending]);
	
	// Return the BTC, USD, and lending contracts for later use
	return { BTC, USD, lending };

});
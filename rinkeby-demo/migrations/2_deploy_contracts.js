const Dizz = artifacts.require("Dizz");

module.exports = function (deployer) {
  deployer.deploy(Dizz, 1000000);
};
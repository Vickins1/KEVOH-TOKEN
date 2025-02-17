const { buildModule } = require("@nomicfoundation/ignition-core");

module.exports = buildModule("TokenModule", (m) => {
    const token = m.contract("KEVOH"); 
    return { token };
});

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid narrow fortune stone strike rival noise hospital hover kitten slot gesture'; 
let testAccounts = [
"0x3d5e002b61cd525c08a8e118294b00b1f48c4a9ad0201a3bdefc9e2ace9b840e",
"0x3fc84046ee0c72e2cb69425581694f4864dfe38e7476599b945a7bbb1d7913bc",
"0x91788cf722ef42f5c496fed3e55d55f51f065ee3cb8dbad23605ba112f727290",
"0xddfef59289af72f86f3a68c4d3f844a4c6000fdaa3ef01a8455af30f4990d3b7",
"0x149461edce3a37af024a6cc2c6d8ee196b6d2fba183a21e628b4439a7d520899",
"0xd5956057be957220486d214639ed615679287e2895fc0a760ab246afe97e805d",
"0x012f9d94b8c2f778267f36fcfc7b7ecc4eda76575f1c446d9727448c2a4ceec3",
"0x8e18cc6cf3f6a97f40decece6d8f16d047239ad05e295f2cdd73b539d5a785b5",
"0xbd756920908f0c40107dd5e7664a78d9240f3d09d6239f57cc2ba2637fcd1c4f",
"0xe527e6f8d2deffa9627f0cd9bf9ee05ec40d26dce61b46ba7ba5e6d77d6bf8db"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



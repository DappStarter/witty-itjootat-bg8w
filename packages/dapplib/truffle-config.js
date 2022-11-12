require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture story riot predict unknown inner arm army gasp'; 
let testAccounts = [
"0x225b920ef993d0bf2aa53540f1c4e0035e5ea9353c971218d0f7dcc1d5508a50",
"0xbd211666679823f47bd5668ead682bf070013cf18257cfc8c24a5a719f29564d",
"0xa238010ed36bb8f14faefd8b29b415f7318732d0e2621bc9c6fa68d7d9a18be4",
"0xec8951cd17d291a437ba8801cbe0df67da8a3ff6ff8509b0774f403aa6a590e6",
"0x2a59c6283b5bda2abc9eea00cd7c39cda4e23cd3c991dc5d9440df7f324d325e",
"0xe39b39cfeb88cd1204c033d7116a0d9efdff907f01cb233f276d1aed0ee16ab3",
"0x7982c0741b3c260d656639fb6a57072e79f4725bb20b0c4217113e11bd810d77",
"0x8b51433f486929532d64142d6a371aeeb784cdcdd9eee2d6fb0cd1cffa3021a7",
"0xf14178c1ead256bf96160d2ffaa0e259eb80834f685deec5f8ca7692f2bfbf34",
"0xb02a452fb56145f447925594cdf5012ba1f4c6f161b2ac4cebfd62039dedf9fb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



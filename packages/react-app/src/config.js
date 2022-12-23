import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0xeb868ed872eE30b3Bab87E487820a858EDB8beDe';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/Nx_ySM4bv10MKd3l5C-fPjmETHP2XTmh',
  },
};

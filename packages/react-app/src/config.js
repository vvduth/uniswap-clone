import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "https://eth-goerli.g.alchemy.com/v2/fJng_rnHEHUjrIKrGttOqZ1oJq9ePQOi"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/fJng_rnHEHUjrIKrGttOqZ1oJq9ePQOi",
  },
};
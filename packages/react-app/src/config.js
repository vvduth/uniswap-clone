import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xD71066de44965554418f6332b19e458050f88a75"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/fJng_rnHEHUjrIKrGttOqZ1oJq9ePQOi",
  },
};
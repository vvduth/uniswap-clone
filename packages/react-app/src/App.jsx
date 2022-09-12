import React from "react";
import { useEthers } from "@usedapp/core";
import Loader from "./components/Loader";
import {usePool} from './hooks'
import Exchange from "./components/Exchange";
import WalletButton from "./components/WalletButton"
import style from "./styles";

import { uniswapLogo } from "./assets";
import styles from "./styles";
const App = () => {

  const {account} = useEthers() ; 
  const poolsLoading = false ; 


  return (
    <div className={styles.container}>
      <div className={style.innerContainer}>
        <header className={style.header}>
          <img
            src={uniswapLogo}
            alt="uni swap logo"
            className="w-16 h-16 object contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uni Swap 2.0</h1>
          <p className={style.subTitle}>Exchange token in seconds</p>
          <div className={style.exchangeBoxWrapper}>
              <div className={style.exchangeBox}>
                <div className="pink_gradient"/>
                  <div className={style.exchange}>
                    {account ? (
                      poolsLoading ? (
                        <Loader title = "Loading pools, please wait..." /> 
                      ): <Exchange/>
                    ) : <Loader title = "Please connect your wallet"/>}
                  </div>
                <div className="blue_gradient"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

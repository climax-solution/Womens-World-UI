import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Web3 from 'web3'
import { useAppContext } from '../../utils/context'

const ConnectWallet = ({ notHeader = true}) => {
    const { setWEB3, setAccount } = useAppContext();
    const [walletAddress, setWalletAddress] = useState('');
    const match = useRouteMatch('/mint');
    
    const connectWallet = async() => {
        try {
          if (window.ethereum) {
            try {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
              });
              const web3 = new Web3(window.ethereum);
              const network = await web3.eth.getChainId();
              if (network != 0x61) {
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0x5' }]
                });
              }
      
              setWalletAddress(accounts[0]);
              setWEB3(web3);
              setAccount(accounts[0]);
            } catch(err) {
              console.log(err);
            }
          }
        } catch(err) {
    
        }
    }

    const diconnect = () => {
      setWalletAddress('');
      setAccount('');
    }

    return(
        <li className={ (!match && notHeader) ? "lh-55px" : "d-flex align-items-center"} key={"xy"} onClick={!walletAddress ? connectWallet : diconnect}>
            <span className={`btn ml-50 flex-column justify-content-center ${ (match && notHeader) ? "d-flex h-100 m-0" : ""} login-btn `}>
                <span style={ walletAddress ? { maxHeight: "1rem"} : {}}>
                {
                    walletAddress ? "Disconnect Wallet" : "Connect Wallet"
                }
                </span>
                <span>
                  { walletAddress ? ("(" + walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4) + ")") : ""} 
                </span>
            </span>
        </li>
    )
}

export default ConnectWallet;
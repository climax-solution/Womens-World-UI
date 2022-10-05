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
    return(
        <li className={ (!match && notHeader) ? "lh-55px" : "d-flex align-items-center"} key={"xy"} onClick={!walletAddress ? connectWallet : null}>
            <span className={`btn ml-50 ${ (match && notHeader) ? "d-flex align-items-center h-100 m-0" : ""} login-btn `}>
                <span>
                {
                    walletAddress ? (walletAddress.slice(0, 8) + '...' + walletAddress.slice(-5) ) : "Connect Wallet"
                }
                </span>
            </span>
        </li>
    )
}

export default ConnectWallet;
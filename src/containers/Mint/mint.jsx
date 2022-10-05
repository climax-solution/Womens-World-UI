import { useEffect, useState } from 'react';
import { NotificationManager } from "react-notifications";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

import { useAppContext } from '../../utils/context';
import abi from "../../data/abi.json";
import contractAddress from "../../data/address.json";

import 'swiper/swiper.min.css';
import "swiper/modules/effect-cards/effect-cards.min.css";
import ArtSlider from '../../components/ArtSlider';
import ConnectWallet from '../../components/ConnectWallet';


const MintPanel = () => {

    const { WEB3, account, isLoading, setLoading } = useAppContext();
    const [count, setCount] = useState(1);
    const [maxLimit, setMaxLimit] = useState(5);
    const [showWalletButton, setShowWalletButton] = useState(false);


    useEffect(() => {
        async function getPublicState() {
            const contract = new WEB3.eth.Contract(abi, contractAddress.address);
            const isPublic = await contract.methods.isPublic().call();
            console.log(isPublic);
            if (isPublic) setMaxLimit(3);
        }
        if (WEB3) getPublicState();

        window.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                setShowWalletButton(true);
            } else setShowWalletButton(false);
        });
    }, [WEB3])

    const increaseCount = () => {
        if (count < maxLimit) setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 1) setCount(count - 1);
    }

    const mint = async() => {
        if (!account) {
            NotificationManager.warning("Please connect metamask");
            return;
        }
        setLoading(true);
        try {
            const contract = new WEB3.eth.Contract(abi, contractAddress.address);
            const isPublic = await contract.methods.isPublic().call();
            const price = isPublic ? 0.007 : 0.005;
            if (isPublic && count > 3) count = 3;
            const payFee = WEB3.utils.toWei(String(price * count), 'ether');
            
            const list = [
                "0x9E1c1d6dFa581c5169E81d81Be8987C07F47B61a"
            ];
            const leaves = list.map(x => keccak256(x.toLowerCase()));
            const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
            const leaf = keccak256(account);
            const proof = tree.getHexProof(leaf);

            await contract.methods.mint(count, proof).send({
                from: account,
                value: payFee
            });
            NotificationManager.success(`Minted ${count}NFTs successfully!`);
        } catch(err) {
            console.log(err);
            if (err?.code != 4001) {
                NotificationManager.error("Minting is failed");
            }
        }
        setCount(1);
        setLoading(false);
    }

    return (
        <div className='container mt-5 py-5'>
            {/* <div className='d-flex align-items-center flex-wrap'> */}
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <ArtSlider/>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='mint-group mx-auto'>
                        <h1>Womens World</h1>
                        <p>Please mint your NFT</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='count-btn' onClick={ !isLoading ? decreaseCount : null }>-</span>
                            <span className='mint-count'>{count}</span>
                            <span className='count-btn' onClick={ !isLoading ? increaseCount : null }>+</span>
                        </div>
                        <div className='buttons text-center mt-5 d-flex align-items-stretch justify-content-center gap-2'>
                            <button className='btn btn-lg btn-success mint-btn loading' onClick={ !isLoading ? mint : null}>
                                { isLoading ? "Minting ..." : "Mint"}
                            </button>
                            {
                                showWalletButton ? <ConnectWallet/> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintPanel;
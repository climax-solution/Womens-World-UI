import { useState } from 'react';
import { NotificationManager } from "react-notifications";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

import { useAppContext } from '../../utils/context';
import abi from "../../data/abi.json";
import contractAddress from "../../data/address.json";

import 'swiper/swiper.min.css';
import "swiper/modules/effect-cards/effect-cards.min.css";
import ArtSlider from '../../components/ArtSlider';


const MintPanel = () => {

    const { WEB3, account, isLoading, setLoading } = useAppContext();
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        if (count < 5) setCount(count + 1);
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
            const payFee = WEB3.utils.toWei(String(price * count), 'ether');
            
            const list = [
                "0xebc6B3c6F7724BB214b7CF5994078BB883208a98",
                "0xCdE2C94E148227c5b3832E0fA31207326D35ea0e",
                "0x22C50b221E09750967DFda6c7D02c8ba558cBfa1",
                "0x9dc207F7a59D881144B2cd7D5FC2471650009Ec7",
                "0x02625a6E76d8c143263948D827F378288D70025a"
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
            <div className='d-flex align-items-center flex-wrap'>
                <ArtSlider/>
                <div className='mint-group mx-auto'>
                    <h1>Womens World</h1>
                    <p>Please mint your NFT</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <span className='count-btn' onClick={ !isLoading ? decreaseCount : null }>-</span>
                        <span className='mint-count'>{count}</span>
                        <span className='count-btn' onClick={ !isLoading ? increaseCount : null }>+</span>
                    </div>
                    <div className='buttons text-center mt-5'>
                        <button className='btn btn-lg btn-success mint-btn loading' onClick={ !isLoading ? mint : null}>
                            { isLoading ? "Minting ..." : "Mint"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintPanel;
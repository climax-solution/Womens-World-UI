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
import { useRouteMatch } from 'react-router-dom'

const MintPanel = () => {

    const match = useRouteMatch('/mint');
    const { WEB3, account, isLoading, setLoading } = useAppContext();
    const [count, setCount] = useState(1);
    const [maxLimit, setMaxLimit] = useState(5);
    const [buttonText, setButtonText] = useState("MINT");

    const increaseCount = () => {
        if (!account) {
            NotificationManager.warning("Please connect metamask");
            return;
        }
        if (count < maxLimit) setCount(count + 1);
    }

    const decreaseCount = () => {
        if (!account) {
            NotificationManager.warning("Please connect metamask");
            return;
        }
        if (count > 1) setCount(count - 1);
    }

    useEffect(() => {
        async function test() {
            const contract = new WEB3.eth.Contract(abi, contractAddress.address);
            const isPublic = await contract.methods.isPublic().call();
            setButtonText(isPublic ? "Mint is Public" : "Mint is WL");
            setMaxLimit(isPublic ? 3 : 5);
        }
        if (WEB3) test();
    }, [WEB3, account]);

    const mint = async() => {
        if (!account) {
            NotificationManager.warning("Please connect metamask");
            return;
        }
        setLoading(true);
        try {
            const contract = new WEB3.eth.Contract(abi, contractAddress.address);
            let mintAmount = 0;
            mintAmount = count;
            const list = [
                "0x9E1c1d6dFa581c5169E81d81Be8987C07F47B61a",
                "0x29C711F4b557E4957F3b848c53807A1Fb9c0B29C",
                "0x1cb6f3F76b578c47B6c28f89769d0f93be6c9ceE",
                "0xD54da41cccA02E304F15a556444C879f425b96cE",
                "0x906C83480360586EDc96Ba762689b4d61cF38Bd7",
                "0xd7E8c8a2Ff185512318922BF7bf713F8E77038CC",
                "0xc5113779aF9aB3A2a2981630ace486b076c10a7a",
            ];

            const leaves = list.map(x => keccak256(x.toLowerCase()));
            const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
            const leaf = keccak256(account);
            const proof = tree.getHexProof(leaf);
            const root = tree.getRoot();
            const isWhite = tree.verify(proof, leaf, root);
            
            const isPublic = await contract.methods.isPublic().call();
            const whiteMint = await contract.methods.whiteMintedNumber(account).call();
            const exclude = await contract.methods.excludedAccount(account).call();
            const owner = await contract.methods.owner().call();            
            const whiteMintCount = await contract.methods.whiteMintCount().call();
            const publicMintCount = await contract.methods.publicMintCount().call();
            const whitePrice = await contract.methods.whitePrice().call();
            const blackPrice = await contract.methods.blackPrice().call();
            const balance = await contract.methods.balanceOf(account).call();

            if (isPublic && count > publicMintCount * 1 || !isPublic && count > whiteMintCount * 1) throw Error("Exceed maximum mint amount");
            if (balance * 1 + count > 5) throw Error('Exceed maximum balance');

            const price = isPublic ? WEB3.utils.fromWei(blackPrice) : WEB3.utils.fromWei(whitePrice);

            let payFee = '0';

            if (exclude || owner.toLowerCase() == account.toLowerCase()) payFee = '0';
            else {
                if (!isPublic && !isWhite) throw Error("Your account is not in whitelist");
                if (isPublic) {
                    if (mintAmount > 3) mintAmount = 3;
                    if (isWhite && whiteMint * 1 < 3) mintAmount -= 3 - whiteMint * 1;
                    else if ( !isWhite && whiteMint * 1 == 0) mintAmount --;
                } else {
                    if (isWhite && whiteMint * 1 < 2) mintAmount -= 2 - whiteMint * 1;
                }
    
                if (mintAmount < 0) mintAmount = 0;
                payFee = WEB3.utils.toWei(String(price * mintAmount), 'ether');
            }

            await contract.methods.mint(count, proof).send({
                from: account,
                value: payFee
            });

            NotificationManager.success(`Minted ${count} NFTs successfully!`);
        } catch(err) {
            console.log(err);
            if (err?.code != 4001) {
                NotificationManager.error(err?.message);
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
                    <div className='mint-group mx-auto text-center'>
                        <h1>Womans World</h1>
                        <p>Please mint your NFT</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='count-btn' onClick={ !isLoading ? decreaseCount : null }>-</span>
                            <span className='mint-count'>{count}</span>
                            <span className='count-btn' onClick={ !isLoading ? increaseCount : null }>+</span>
                        </div>
                        <div className='buttons text-center mt-5 d-flex align-items-stretch justify-content-center gap-2'>
                            <button className='btn btn-lg btn-success mint-btn loading' onClick={ !isLoading ? mint : null}>
                                { isLoading ? "Minting ..." : buttonText}
                            </button>
                            {
                                match?.isExact ? <ConnectWallet/> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintPanel;
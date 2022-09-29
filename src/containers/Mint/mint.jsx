import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { EffectCards } from "swiper";
import { useState } from 'react';
import { NotificationManager } from "react-notifications";
import { useAppContext } from '../../utils/context';
import abi from "../../data/abi.json";

import 'swiper/swiper.min.css';
import "swiper/modules/effect-cards/effect-cards.min.css";
const address = "0x39b730616b2Cf70953b88BAA1e67A70208e8a043";

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
        try {
            const contract = new WEB3.eth.Contract(abi, address);
            await contract.methods.mint(count, []).send({
                from: account
            });
            NotificationManager.success(`Minted ${count}NFTs successfully!`);
        } catch(err) {
            if (err?.code != 4001) {
                NotificationManager.error("Minting is failed");
            }
        }
    }

    return (
        <div className='container mt-5 py-5'>
            <div className='d-flex align-items-center mx-auto'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true} 
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {
                        [...Array(11)].map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={`/img/slide/${idx + 1}.jpg`}
                                        alt="slide"
                                        className=''
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
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
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { EffectCards, Autoplay  } from "swiper";
import { useState } from 'react';
import { NotificationManager } from "react-notifications";
import { useAppContext } from '../../utils/context';
import abi from "../../data/abi.json";
import contractAddress from "../../data/address.json";

import 'swiper/swiper.min.css';
import "swiper/modules/effect-cards/effect-cards.min.css";

SwiperCore.use([Autoplay]);

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
            await contract.methods.mint(count, []).send({
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
        setLoading(false);
    }

    return (
        <div className='container mt-5 py-5'>
            <div className='d-flex align-items-center mx- flex-wrap'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true} 
                    modules={[EffectCards]}
                    className="mySwiper"
                    autoplay={{
                        delay: 300,
                        disableOnInteraction: false
                    }}
                    loop={true}
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
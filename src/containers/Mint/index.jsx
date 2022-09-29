import Breadcumb from "../../components/Breadcumb";
import MintPanel from "./mint";

const MintContainer = () => {
    return (
        <>
            <Breadcumb title='Mint' addOtherTitle="Mint" text='Home' />
            <MintPanel/>
        </>
    )
}

export default MintContainer;
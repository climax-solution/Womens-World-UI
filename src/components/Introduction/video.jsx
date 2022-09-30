import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';
import 'video-react/dist/video-react.css';

const VideoIntroduction = ({ source }) => {
    return (
        <div className='video-player'>
            <Player
                poster={`/video/preview-${source}.png`}
                fluid={false}
            >
                <source src={`/video/${source}.mov`}/>
                <source src={`/video/${source}.mov`}/>

                <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                </ControlBar>
            </Player>
        </div>
    )
}

export default VideoIntroduction;
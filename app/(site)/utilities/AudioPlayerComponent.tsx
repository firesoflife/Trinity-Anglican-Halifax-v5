'use client';

// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

type Props = {
	sermon: Sermon;
};

const AudioPlayerComponent = ({ sermon }: Props) => {
	return (
		<div>
			<AudioPlayer
				src={sermon?.audioUrl}
				showFilledProgress={true}
				showJumpControls={false}
				layout={'horizontal'}
				loop={false}
				onPlay={(e) => console.log('onPlay')}
				customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
			/>
		</div>
	);
};

export default AudioPlayerComponent;

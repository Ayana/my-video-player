import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
	const renderdList = videos.map(video => {
		return <VideoItem onVideoSelect={onVideoSelect} video={video} />
	})

	return (
		<div className="ui items">
			I have {videos.length} videos.
			<div class="ui hidden divider"></div>
			{renderdList}
		</div>
	)
}

export default VideoList


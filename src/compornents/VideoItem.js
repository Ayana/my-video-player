import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {

	return (
		<div onClick={() => onVideoSelect(video)} className="item">
			<img 
				className="ui image"
				src={video.snippet.thumbnails.medium.url} 
			/>
			<div className="content">
				{video.snippet.title}
				<div className="description">
					{video.snippet.description}
				</div>
			</div>
		</div>
	)
}

export default VideoItem


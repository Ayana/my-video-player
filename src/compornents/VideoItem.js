import React from "react"

const VideoItem = ({ video }) => {
	const youtubeUrl = 'https://www.youtube.com/watch?v='

	return (
		<div className="item">
			<a className="ui image" href={youtubeUrl + video.id.videoId}>
				<img 
					src={video.snippet.thumbnails.medium.url} 
				/>
			</a>
			<div className="content">
				<a href={youtubeUrl + video.id.videoId}>{video.snippet.title}</a>
				<div className="description">
					{video.snippet.description}
				</div>
			</div>
		</div>
	)
}

export default VideoItem


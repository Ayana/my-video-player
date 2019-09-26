import React from "react"

const VideoDetail = ({ video }) => {

	if (!video) {
		return (
			<div>
				Search Video
			</div>
		)
	}

	const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId  //Old version
	// const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`  //Template Literal

	return(
		<div>
			<div className="ui segment">
				<div className="ui embed">
					<iframe src={videoSrc} />
				</div>
				<div class="ui hidden divider"></div>
				<a href={videoSrc}>
					<h4 className="ui header">{video.snippet.title}</h4>
				</a>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}


export default VideoDetail

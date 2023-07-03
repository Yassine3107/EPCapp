import React from 'react';
import styled, { css } from 'styled-components'

const marginX = (value) => css`
    margin-left: ${value};
    margin-right: ${value};
`;

const VideoContainer = styled.div`
  position: relative;
  width:${props => (props.width)}%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  ${marginX('auto')};
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTubeVideo = ({ videoId, width }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(width)
  return (
    <VideoContainer width={width}>
      <VideoIframe
        src={videoUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default YouTubeVideo;

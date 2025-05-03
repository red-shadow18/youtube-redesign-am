import React, { useState } from 'react';
import styled from 'styled-components';

const ShortCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 320px;
  margin: 16px;
  height: 400px;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

const ChannelTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
`;


const VideoEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

interface LiveVideoCardProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
}

const LiveVideoCard: React.FC<LiveVideoCardProps> = ({ videoId, title, thumbnailUrl, channelTitle }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
      setIsPlaying(!isPlaying);
    };
  return (
    <ShortCard onClick={handleClick}>
      
      {isPlaying ? (
        <VideoEmbed
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      ):<><Thumbnail src={thumbnailUrl} alt={title} />
      <Title>{title}</Title></>}
      <ChannelTitle>{channelTitle}</ChannelTitle>

    </ShortCard>
  );
};

export default LiveVideoCard;

// VideoGrid.tsx
import styled from 'styled-components';
import { useLiveVideos } from '../utils/useLiveVideos';
import { Skeleton } from '@mui/material';
import LiveVideoCard from './ShortCard';

const channelId = 'UCySG0qhGxcHWS66Vaq6-mvQ';
const apiKey = 'AIzaSyCd3kj8GW7LtehTq6ji8FcteORTT7CH-_Q';

const VideoGridContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
 // background-color: #f9f9f9;

`;





const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;




const ShortsGrid = () => {
  const { liveVideos, loading } = useLiveVideos(channelId, apiKey,"short");
  return (
    <VideoGridContainer>


      <Videos>
        {
          loading?Array.from({length:12}).map((_,id)=>  <Skeleton key={id} variant="rectangular" width={210} height={118} />):
liveVideos.map((video)=>    <LiveVideoCard
  key={video.videoId}
  videoId={video.videoId}
  title={video.title}
  thumbnailUrl={video.thumbnailUrl}
  channelTitle={video.channelTitle}
/>)

        }
   
      </Videos>
    </VideoGridContainer>
  );
};

export default ShortsGrid;

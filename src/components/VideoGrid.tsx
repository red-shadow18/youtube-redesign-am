// VideoGrid.tsx
import styled from 'styled-components';

const VideoGridContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
 // background-color: #f9f9f9;
  margin-top: 70px;
  margin-left: 90px;
`;

const Filters = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  overflow-x: auto;
`;

const FilterChip = styled.button<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? '#000' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border: none;
  border-radius: 6px;
  padding:  12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#000' : '#e0e0e0')};
  }
`;

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 140px;
  background: #ccc;
`;

const VideoInfo = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: #bbb;
  border-radius: 50%;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: 500;
    color: #0f0f0f;
  }
  span:last-child {
    font-size: 12px;
    color: #606060;
  }
`;

const VideoGrid = () => {
  const filters = ["All", "Music", "Gaming", "Live", "News", "Sports", "Education"];

  return (
    <VideoGridContainer>
      <Filters>
        {filters.map((filter, index) => (
          <FilterChip key={filter} selected={index === 0}>{filter}</FilterChip>
        ))}
      </Filters>

      <Videos>
        {Array.from({ length: 12 }).map((_, idx) => (
          <VideoCard key={idx}>
            <Thumbnail />
            <VideoInfo>
              <Avatar />
              <TextInfo>
                <span>Video Title</span>
                <span>Channel Name • 1M views • 2 days ago</span>
              </TextInfo>
            </VideoInfo>
          </VideoCard>
        ))}
      </Videos>
    </VideoGridContainer>
  );
};

export default VideoGrid;

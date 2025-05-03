import styled from 'styled-components';
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlinePerson,
} from 'react-icons/md';
import { PiYoutubeLogoLight } from 'react-icons/pi';

const SidebarContainer = styled.aside`
  width: 72px;
  background-color: #ffffff;
  height: 100vh;
  position: fixed;
  top: 56px;
  left: 0;
  //border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding-top: 12px;
  overflow-y: auto;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  width: 100%;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #f2f2f2;
  }

  svg {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem><MdHomeFilled />Home</SidebarItem>
      <SidebarItem><PiYoutubeLogoLight />Shorts</SidebarItem>
      <SidebarItem><MdOutlineSubscriptions />Subscriptions</SidebarItem>
      <SidebarItem><MdOutlinePerson />You</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;

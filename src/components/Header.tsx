import { useState } from 'react';
import styled from 'styled-components';
import {
  MdSearch,
  MdMic,
  MdNotifications,
  MdClear
} from 'react-icons/md';
import AccountSwitch from './AccountSwitch';

const HeaderContainer = styled.header`

.hover {
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0000001a;
    border-radius: 24px;
  }
}
  height: 56px;
  padding: 0 16px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  //border-bottom: 1px solid #d3d3d3;
  font-family: 'Roboto', sans-serif;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 24px;
    width: auto;
    margin-right: 4px;
  }

  .countryCode{
    color: #606060;
    margin: -15px 0 0 -2px;
    font-size: 10px;
  }



  sup {
    font-size: 10px;
    margin-left: 2px;
    color: #606060;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 640px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 16px;
  border: 1px solid #ccc;
  border-radius: 40px 0 0 40px;
  outline: none;
  font-size: 14px;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1a73e8;
    
  }
`;

const ClearIcon = styled.button`
  position: absolute;
  right: 65px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;

  svg {
    color: #606060;
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SearchButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 40px 40px 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const MicButton = styled.button`
border: none;
  border-radius: 100px;
    margin-left: 12px;
    background-color: #0000000d;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;


const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CreateButton = styled.button`
 border: none;
 display: flex;
 gap:5px;
 align-items: center;
  border-radius: 100px;
    margin-left: 12px;
    background-color: #0000000d;
  border: none;
  color: #0f0f0f;
  font-weight: 500;
  font-size: 14px;
  padding: 0px 16px;
  border-radius: 18px;
  line-height: 36px;
  height: 36px;
  cursor: pointer;
  .plus{
    font-size: 40px;
    font-weight:400;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

// const Avatar = styled.div`
//   height: 32px;
//   width: 32px;
//   border-radius: 50%;
//   background-color: #34a853;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: bold;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
//   }
// `;

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <HeaderContainer>
      <Left>
        <div className='hover'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: "100%", height: "100%"}}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
        </div>
        <LogoContainer>
     <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"/>
     <span id="country-code" className="countryCode">
  IN
</span>
        </LogoContainer>
      </Left>

      <Center>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <ClearIcon onClick={() => setSearch('')}>
              <MdClear />
            </ClearIcon>
          )}
          <SearchButton>
            <MdSearch size={20} />
          </SearchButton>
        </SearchContainer>
        <MicButton>
          <MdMic size={20} />
        </MicButton>
      </Center>

      <Right>
        <CreateButton>
        <div aria-hidden="true"><span><div style={{width: "100%" ,height: "100%", display: "block", fill: "currentcolor"}}><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: "100%", height: "100%"}}><path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path></svg></div></span></div>
           Create</CreateButton>
        <IconButton>
          <MdNotifications size={24} />
        </IconButton>
        <AccountSwitch/>
      </Right>
    </HeaderContainer>
  );
};

export default Header;
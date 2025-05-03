import { useState } from 'react';
import styled from 'styled-components';
import dummyAccounts from '../data/accounts';
// import AccountAccordion from './AccountAccordian';
// import dummyAccounts from '../data/accounts';

const AvatarButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #34a853;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: -5px;
  right: 35px;
  background: #fff;
  border: 1px solid #ccc;
  width: 320px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  border-radius: 12px;
  z-index: 999;
  max-height: 520px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const AccountHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const ActiveAccount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const AccountCircle = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 12px;
`;

const AccountName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const AccountEmail = styled.div`
  font-size: 13px;
  color: #606060;
`;

const ScrollableAccounts = styled.div`
  height: 360px !important;
  //overflow-y: auto;
  border-bottom: 1px solid #ddd;
`;

const AccountItem = styled.div<{ active?: boolean }>`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f0f0f0' : 'transparent')};

  &:hover {
    background-color: #eee;
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;

`;

const MenuItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const Divider = styled.hr`
  margin: 8px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const AccountSwitch = () => {
  const [activeEmail, setActiveEmail] = useState('ayushMishra@gmail.com');
  const [activeName, setActiveName] = useState('Ayush Mishra');
  const [showDropdown, setShowDropdown] = useState(false);



  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div style={{ position: 'relative' }}>
      <AvatarButton onClick={toggleDropdown}>A</AvatarButton>
      {showDropdown && (
        <Dropdown>
          {/* Header */}
          <AccountHeader>
            <ActiveAccount>
              <AccountCircle />
              <div>
                <AccountName>{activeName}</AccountName>
                <AccountEmail>{activeEmail}</AccountEmail>
              </div>
            </ActiveAccount>
            <MenuItem>Manage your Google Account</MenuItem>
          </AccountHeader>


        <p style={{    padding:" 10px 16px",
    fontSize: "14px"}}>Other accounts</p>
          <div style={{display:"flex", flexDirection:"column", overflowY:"auto"}}>

          {/* Scrollable Accounts */}
          <ScrollableAccounts>
            {dummyAccounts.map((account) => (
              <AccountItem
                key={account.id}
                active={account.email === activeEmail}
                onClick={() => {setActiveEmail(account.email)
setActiveName(account.name)
                }}
              >
                <AccountCircle />
                <div>{account.email}</div>
              </AccountItem>
            ))}
          </ScrollableAccounts>

          {/* <AccountAccordion accounts={dummyAccounts} activeAccountId={18} /> */}

          {/* Menu Items */}
          
          <MenuSection>
          <MenuItem>Add account</MenuItem>
            <Divider />
            <MenuItem>Appearance: Device theme</MenuItem>
            <MenuItem>Language: English</MenuItem>
            <MenuItem>Location: India</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Send feedback</MenuItem>
          </MenuSection></div>
        </Dropdown>
      )}
    </div>
  );
};

export default AccountSwitch;

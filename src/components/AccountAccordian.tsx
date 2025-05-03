import { useState } from 'react';
import styled from 'styled-components';

const Scrollable = styled.div`
  max-height: 160px;
  overflow-y: auto;
`;

const ExpandButton = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: #1a73e8;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Option = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 4px 0;
`;

interface SingleAccountInterface {
  id:number;
  name:string;
  email:string;
  avatarUrl:string
}

const AccountAccordion = ( {accounts}:{accounts:Array<SingleAccountInterface>} ) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      {isExpanded ? (
        <Scrollable>
          {accounts.map((acc:SingleAccountInterface) => (
            <Option key={acc.id}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#34a853', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                  {acc.name.charAt(0)}
                </div>
                <div>
                  <span>{acc.name}</span>
                  <span>{acc.email}</span>
                </div>
              </div>
            </Option>
          ))}
          <Divider />
          <Option>Add account</Option>
          <Option>Sign out</Option>
        </Scrollable>
      ) : (
        <ExpandButton onClick={toggleExpansion}>See all accounts</ExpandButton>
      )}
    </>
  );
};

export default AccountAccordion;

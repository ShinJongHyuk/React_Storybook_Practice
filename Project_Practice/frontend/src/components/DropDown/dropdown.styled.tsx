import styled from "styled-components";

const DropDownContainer = styled.div.attrs<any>((props) => ({}))`
  /* width: 150px; */
  /* height: 30px; */
  /* margin: 3px auto; */
  width: 187px;
  height: 44px;
  margin: 100px;
`;

const DropDownHeader = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  /* padding: 5px 0px;  */
  padding: 12px 24px;
  border: 1px solid ${(props) => (props.isopen === "true" ? "#A88CFF" : "rgba(01,01,01,0.3)")}; 
  border-radius: 8px;
  font-weight: 500;
  color: black;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
line-height: normal;
  cursor: pointer;
  &:hover{
    border: 1px solid #A88CFF;
  }
`;

// const DropDownListContainer = styled.div`
//   position: absolute;
//   z-index: 100;
//   width: 150px;
// `;

const DropDownList = styled.ul`
  z-index: 100;
  width: 187px;
  margin: 0;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  font-weight: 500;
  padding: 8px 24px;
  
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 143px;
  height: 56px;
  list-style: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(168, 140, 255, 0.1);
    /* background-color: #ebe2ed; */
    /* opacity: 0.3; */
  }
`;

const ListText = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`

const DropdownArrow = styled.h1.attrs<any>((props) => ({}))`

` 
export{ DropDownContainer, DropDownHeader, DropDownList, ListItem, DropdownArrow, ListText}
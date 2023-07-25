import React, { useEffect, useState } from "react";
import { DropDownContainer, DropDownHeader, DropDownList, ListItem, DropdownArrow, ListText} from "./Dropdown.styled";
import Image from "next/image";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value:any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (

      <DropDownContainer>
        <DropDownHeader isopen={isOpen.toString()} onClick={toggling} style={{position:"relative"}}>
          {selectedOption || (<div style={{width:"100%", display:"flex", alignItems:"center"}}><Image src='/radio.png' width={16} height={16} alt="long" style={{marginRight:"8px"}} ></Image><ListText>객관식 질문</ListText></div>)}
          <div style={{position:"absolute", right:"0px"}}>{isOpen ? "△" : "▽"}</div>
        </DropDownHeader>
        {isOpen && (
            <DropDownList>
              <ListItem onClick={onOptionClicked("✏단답형")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>✏</div>단답형</ListText></ListItem>
              <ListItem onClick={onOptionClicked("📄장문형")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>📄</div>장문형</ListText></ListItem>
              <ListItem onClick={onOptionClicked("🔘객관식 질문")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>🔘</div>객관식 질문</ListText></ListItem>
              <ListItem onClick={onOptionClicked("☑️체크박스")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>☑️</div>체크박스</ListText></ListItem>
              <ListItem onClick={onOptionClicked("📅날짜 선택")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>📅</div>날짜 선택</ListText></ListItem>
              <ListItem onClick={onOptionClicked("🕛시간 선택")}><ListText><div style={{width:"16px", height:"16px", marginRight:"8px"}}>🕛</div>시간 선택</ListText></ListItem>
              {/* <ListItem onClick={onOptionClicked("단답형")}><Image src='short_text.svg' width={16} height={16} alt="short" style={{marginRight:"8px"}} ></Image><ListText>단답형</ListText></ListItem>
              <ListItem onClick={onOptionClicked("장문형")}><Image src='long_text.svg' width={16} height={16} alt="long" style={{marginRight:"8px"}} ></Image><ListText>장문형</ListText></ListItem>
              <ListItem onClick={onOptionClicked("객관식 질문")}><Image src='/radio.png' width={16} height={16} alt="long" style={{marginRight:"8px"}} ></Image><ListText>객관식 질문</ListText></ListItem>
              <ListItem onClick={onOptionClicked("체크박스")}><Image src='check-square.svg' width={16} height={16} alt="check" style={{marginRight:"8px"}} ></Image><ListText>체크박스</ListText></ListItem>
              <ListItem onClick={onOptionClicked("날짜 선택")}><Image src='calendar_today.svg' width={16} height={16} alt="date" style={{marginRight:"8px"}} ></Image><ListText>날짜 선택</ListText></ListItem>
              <ListItem onClick={onOptionClicked("시간 선택")}><Image src='access_time.svg' width={16} height={16} alt="time" style={{marginRight:"8px"}} ></Image><ListText>시간 선택</ListText></ListItem> */}
            </DropDownList>
        )}
      </DropDownContainer>
  );
}
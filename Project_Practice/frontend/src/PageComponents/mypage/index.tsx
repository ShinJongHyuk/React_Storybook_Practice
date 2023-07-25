'use client'
import MyInformation from "./components/update";
import { useEffect, useState } from 'react';
import User from './components/user';
import { MainBar, MyAnswer, MyPageMain, SideBar, SideBarItem, MyAnswerList, MyAnswerTitle } from "./Mypage.layout";
import Answer from "./components/answer";
const Mypage = () => {
    const [pagestate, setpagestate] = useState('info')

    const ChangeComponent = (e:any) => {
        setpagestate(e.target.dataset.name)
    }

    return (
        <MyPageMain>

            <SideBar>
                {/* props로 넘겨주려먼 name을 써야되고 ChangeComponent에서 사용하려면 data-name을 사용해야됨 하나만 하는 방법은? */}
                <SideBarItem pagestate={pagestate} name="info" data-name="info" onClick={ChangeComponent}>회원 정보</SideBarItem>
                <SideBarItem pagestate={pagestate} name="answer" data-name="answer" onClick={ChangeComponent}>응답한 설문</SideBarItem>
                <SideBarItem pagestate={pagestate} name="makeSurvey" data-name="makeSurvey" onClick={ChangeComponent}>만든 설문</SideBarItem>
                <SideBarItem pagestate={pagestate} name="product" data-name="product" onClick={ChangeComponent}>당첨된 상품</SideBarItem>
            </SideBar>
            
            {pagestate === 'info' && <MyInformation />}

            {pagestate === 'answer' && (
                <MainBar>
                    <User/>
                    <MyAnswerList>
                    <MyAnswerTitle>응답한 설문</MyAnswerTitle> 
                        <MyAnswer> 
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                        </MyAnswer>
                            

                    </MyAnswerList>
                    
                </MainBar>
            )}

            {pagestate === 'makeSurvey' && (
                <MainBar>
                    <User/>
                    <MyAnswerList>
                    <MyAnswerTitle>만든 설문</MyAnswerTitle> 
                        <MyAnswer>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                        </MyAnswer>
                            

                    </MyAnswerList>
                </MainBar>
            )}

            {pagestate === 'product' && (
                <MainBar>
                    <User/>
                    <MyAnswerList>
                        <MyAnswerTitle>당첨된 설문</MyAnswerTitle> 
                        <MyAnswer>
                            <Answer/>
                        </MyAnswer>
                            

                    </MyAnswerList>
                </MainBar>
            )}
            
        </MyPageMain>
    )
}

export default Mypage
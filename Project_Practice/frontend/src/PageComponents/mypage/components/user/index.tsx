'use client'
import { MyInformation, Profile, MyName, MyAnswer } from "./user.styled"
import Image from "next/image"

const User = () => {
    return (
            <MyInformation>
                <Profile>
                    <Image src="/cow.jpg" priority={true} width={150} height={150} style={{margin:"20px"}} alt="Logo"></Image>
                </Profile>

                <MyName>
                    <h2 style={{marginBottom : '10px'}}>김설문조사</h2>
                    <h2 style={{marginBottom : '10px'}}>김설문/ 1998-02-10/ 남자</h2>
                </MyName>

                <MyAnswer>
                    <h2 style={{marginBottom : '10px'}}>응답한 설문 : 100</h2>
                    <h2 style={{marginBottom : '10px'}}>만든 설문 : 5</h2>
                    <h2 style={{marginBottom : '10px'}}>당첨된 상품 : 10</h2>
                </MyAnswer>
            </MyInformation>
    )
}

export default User
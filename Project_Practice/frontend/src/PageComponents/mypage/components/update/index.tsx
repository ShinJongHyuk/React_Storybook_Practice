'use client'
import Image from "next/image";
import Input from '@/components/Input'
import Button from '@/components/Button'
import useSignupStore from "@/store/useSignupStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MyInformationItem, ProfileLayout, MyInformationUpdate, MypageButtonLayout, MyPageContent } from "./Updata.styled";


const MyInformation = () => {
    const user = useSignupStore((state:any) => state.user)
    const setUpdateUser = useSignupStore((state:any) => state.setUpdateUser)
    const [me, setMe] = useState(user)
    const router = useRouter()

    const onChange = (e:any) => {
        const value = e.target.value
        const name = e.target.name
        setMe({
            ...me,
            [name]:value
        })
    }

    const Update = () => {
        setUpdateUser(me)
        router.push("/")
    }

    // useEffect(() => {
    //     console.log('me:',me)
    //     console.log('user:',user)
    // },[me,user])
    return (
        <MyInformationUpdate>
            <MyPageContent>
                <h1>내 정보 수정</h1>
                <br />
                <ProfileLayout>
                    <Image src="/cow.jpg" priority={true} width={150} height={150} style={{margin:"20px"}} alt="Logo"></Image>
                </ProfileLayout>
                <MyInformationItem>
                    <h3 style={{margin:"5px"}}>이메일</h3>
                    <Input type="email" use="myPage" name="email" bgcolor="white" value={me.email} onChange={onChange}></Input>
                </MyInformationItem>

                <MyInformationItem>
                    <h3 style={{margin:"5px"}}>닉네임</h3>
                    <Input type="text" use="myPage" name="name" bgcolor="white" value={me.name} onChange={onChange}></Input>
                </MyInformationItem>
                
                <MyInformationItem>
                    <h3 style={{margin:"5px"}}>생년월일</h3>
                        <Input type="date" use="myPage" name="birth" bgcolor="white" value={me.birth} onChange={onChange}></Input>
                </MyInformationItem>

                <MyInformationItem>
                    <h3 style={{margin:"5px"}}>성별</h3>
                    <Input type="text" use="myPage" name="gender" bgcolor="white" value={me.gender} onChange={onChange}></Input>
                </MyInformationItem>

                <MypageButtonLayout>
                    <Button label="수정" onClick={Update}></Button>
                    <Button label="탈퇴"></Button>
                </MypageButtonLayout>
            </MyPageContent>
        </MyInformationUpdate>
            
    )
}

export default MyInformation
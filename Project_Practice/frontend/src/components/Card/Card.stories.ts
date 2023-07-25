import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";

const meta = {
    title : "components/Card",
    component : Card,
    parameters: {
        layout: "centered"
    },
    tags : ["autodocs"],
    argTypes : {
        width : {
            control: {type:"text"},
            description: "카드 너비 설정",
        },
        height : {
            description: "카드 높이 설정",
        },
        color: {
            description: "글자색 설정"
        },
        bgcolor: {
            description: "배경색 설정"
        },
    },
    args: {
        width: "100px",
        height: "100px",
        color: "white"
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>

export const PrimaryButton: Story = {
    args: {}
}

import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
export default {
    title : 'Form/Button',
    component : Button,
    decorators : [story => <Center>{story()}</Center>]
    // args : {
    //     children :'Button'
    // }
}

export const Primary = () => <Button varient='primary'>primary</Button>
export const Secondary = () => <Button varient='secondary'>Secondary</Button>
export const Success = () => <Button varient='success'>Success</Button>
export const Danger = () => <Button varient='danger'>Danger</Button>

// const Template = args => <Button {...args} />

// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//     varient: 'primary',
//     // children: 'Primary Args'
// }

// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//     ...PrimaryA.args,
//     // children: 'Long Primary Args'
// }
// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//     varient: 'secondary',
//     children: 'Secondary Args'
// }
import React from "react";
import { AbModal, AbModalProps } from '../src/componentes/AbModal'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbCampoTexto } from "../src";

export default {
    title: 'Componentes/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args}/>

export const AbModalComponent = Template.bind({})

AbModalComponent.args = {
    aberta: true,
    titulo: 'Cadastro',
    aoFechar() {
        console.log('janela fechada')
    },
    children: <AbCampoTexto label={""} value={""} onChange={function (value: string): void {
        throw new Error("Function not implemented.");
    } }/>

} as AbModalProps


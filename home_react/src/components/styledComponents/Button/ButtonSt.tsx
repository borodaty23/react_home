import React from "react"
import styled, { css } from "styled-components";

interface IButtonSt{
    active?: boolean
    hover?: string
    act?:string
    display?: string
}

interface IButtonStyled{
    active?: boolean
    hover?: string
    act?:string
    children:string
    display?: string
    disabled:boolean
}

export const ButtonSt = styled.button<IButtonSt>`
    display: ${p => p.display || "block"};
    background-color: ${({theme}) => theme.colors.gold};
    width: 250px;
    height: 60px;
    opacity: ${p => p.disabled ? "0.33" : "1"};
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    color: ${p => p.color || "white"};
    cursor: pointer;
    border-radius: 10px;
    border: 0px solid ${({theme}) => theme.colors.white};
    ${({active}) => active && css`
    color: ${({theme}) => theme.colors.black};
    `}
    transition: all 1s linear;

    &:hover {
        background-color: ${p => p.hover || "green"};
    }

    &:active{
        background-color: ${p => p.act || "red"}
    }

`



export const ButtonStyle = React.memo( ({active, hover, children, act, disabled}:IButtonStyled) => {
    console.log("render button")

  return (
    <ButtonSt disabled={disabled} active= {active} hover = {hover} act={act}>{children}</ButtonSt>
  )
})


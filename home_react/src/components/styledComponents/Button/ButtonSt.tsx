import React from "react"
import styled, { css } from "styled-components";

interface IButtonStyled{
    active?: boolean
    hover?: string
}

export const ButtonSt = styled.button<IButtonStyled>`
    background-color: ${({theme}) => theme.colors.gold};
    width: 250px;
    height: 60px;
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
`

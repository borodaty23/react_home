import React from 'react'
import styled, { css } from "styled-components";

interface IImg {
    src:string;
    alt:string;
    width:number;
    height: number;
    circle: boolean;
    className: string;
}

interface IStyledImg {
    circle: boolean;
}

const StyledImg = styled.img<IStyledImg>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    src: ${p => p.src};
    className: ${p => p.className};
    ${p => p.circle && css`
    border-radius: 50%
    `
    }
`

export const Img = ({src,
alt,
width,
height,
circle,
className,
}:IImg) => {
  return (
    <StyledImg className={className} height={height} width={width} circle={circle} alt = {alt}  />
  )
}

Img.defaultProps = {
    src: "",
    alt: 'image',
    width :100,
    height: 100,
    circle: false,
    className: "",
}

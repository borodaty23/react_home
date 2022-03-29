import React from "react";

interface IIcon {
    name:string;
    className: string;
    size: number;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
}

export const Icon = (props:IIcon) => {
    let disableStyle = props.disabled ? 0.33 : 1

    const styles: React.CSSProperties = { fontSize: `${props.size}px`, opacity: disableStyle}

  return (
    <i className={`${props.className} fa fa-${props.name}`}
    style={styles}>
    </i>
  )
}

Icon.defaultProps ={
    name: "",
    className: "",
    size: 0,
    onClick: () => {},
    disabled:false
}

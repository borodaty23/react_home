import React from "react";
import "./Button.css"

type IButton = "submit" | "reset" | "button"| undefined;
type ILink = "link";

interface IButtonProps {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  active: boolean;
  className: string;
  type: IButton ;
  href?: string;
}

export const Button = ({
   onClick,
  disabled,
  children,
  active,
  className,
  type,
  href
}: IButtonProps) => {

  let classNameBtn = `${className} ${type} ${active && "active"}`

  return (
    <>
      {/* {type === "link"
        ? (<a onClick={onClick} className={classNameBtn} href="href" type={type}> {children}</a>) */}
         <button onClick={onClick} className={classNameBtn} type={type} disabled={disabled}>
          {children}
        </button>
       
    </>
  );
};

Button.defaultProps = {
  onClick: () => { },
  disabled: false,
  children: "Default value",
  active: false,
  className: "",
  type: "button",
  href: "#"
};

Button.displayName = "Button";

//========================================================

// interface IButtonState{
//   counter:number
// }

// export class ButtonClass extends React.Component<IButtonProps, IButtonState> {
  
//   render() {
//     const {onClick = ()=>{},
//       disabled = false,
//       children = "Default value",
//       active = false,
//       className = "",
//       type = "button",
//       href = "#"}=this.props
//     return (
//       <button className= {className}>{children}</button>
//     )
//   }
// }



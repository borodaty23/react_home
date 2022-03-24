import {Button} from "../Button/Button"
import React, { useState } from 'react';

interface IContext {
    isAuth: Boolean,
    toggle: () => void,
}

const MyContext = React.createContext<IContext>({
    isAuth: false,
    toggle: () => {}
})


const ContextButton:React.FC = ():React.ReactElement => (
<MyContext.Consumer>
    {({ isAuth }: IContext) => (
            <h1>{isAuth ? 'Please log in' : 'You are logged in'}</h1>
        )}
</MyContext.Consumer>
)


export const Context = () => {

    const context = {
        isAuth: false,
        toggle: () => {}
    }

    const [isAuth, setIsAuth] = useState(false)

    const foo = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setIsAuth(!isAuth)
    }

  return (
    <MyContext.Provider value={context}>
        <Button type = "button" onClick={foo}>${isAuth ? "la" : "d"}</Button>
        <ContextButton ></ContextButton>
    </MyContext.Provider>
  )
}

import React, {Component, createContext} from 'react';

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        login :false
    }
    changeLogin = () =>{
        this.setState ({Login : !this.state.Login})
    }
    render () {
        return (
            <LoginContext.Provider value={{...this.state,changeLogin:this.changeLogin}}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}
export default LoginContextProvider;
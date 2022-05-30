import React , {Component} from 'react';
import { ThemeContext } from '../contexts/themeContext';

class ChangeTheme extends Component {
    static contextType = ThemeContext;
    render(){
        const{changeTheme} = this.context;
        return (
            <button onClick={changeTheme}>
                ChangeTheme
            </button>
        );
    }
}
export default ChangeTheme;
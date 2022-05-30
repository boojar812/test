import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';
class  BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLight,dark,light} = this.context;
        const theme = isLight ? light : dark;
        return (
          <div className='book-list' style={{background: theme.bg, color:theme.text}}>
              <ul>
                  <li style={{background:theme.item}}>چشمهایش</li>
                  <li style={{background:theme.item}}>سووشون</li>
                  <li style={{background:theme.item}}>معلم</li>
              </ul>
          </div>
        )
    }
}
 
export default BookList;
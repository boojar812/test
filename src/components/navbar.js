import React, { Component } from 'react';
import { LoginContext } from '../contexts/loginContext';
import { ThemeContext } from '../contexts/themeContext';
class Navbar extends Component {
    // static contextType = ThemeContext;
    render() { 
        // console.log(this.context);
        // const {isLight,dark,light} = this.context;
        // const theme = isLight ? light : dark;
        return (
          <LoginContext.Consumer>
          {(LoginContext) =>(
            <ThemeContext.Consumer>
            {
                (context) => {
                  const {isLight,dark,light} = context;
                  const theme = isLight ? light : dark;
                  const {Login, changeLogin} = LoginContext;
                  return (
                    <nav style={{background: theme.item,color:theme.text}}>
                      <div onClick={changeLogin}>
                        {Login ? 'shoma vared shodid':'vared nashodid'}
                      </div>
                      <ul>
                        <li>خانه</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                      </ul>
                    </nav>
                  )

                }
            }
        </ThemeContext.Consumer>
          )}  
          </LoginContext.Consumer>
          
            






         
        //   <div>
        //     <nav style={{background: theme.item,color:theme.text}}>
        //         <ul>
        //             <li>خانه</li>
        //             <li>درباره ما</li>
        //             <li>تماس با ما</li>
        //         </ul>
        //     </nav>
        //   </div>
        
        
        );} }   
 
export default Navbar;

// نحوه استفاده از کانتکس به دو صورت 
// می تونیم ببینیم چه جوری از داخل کامپوننت به کانتکس دسترسی داشته باشیم 
// 1یک استتیک تعریف میکنیم و مساوی با پیجی که داخلش  استایل ها رو قراردادیم میکنیم
// 2 استفاده از کانسیومر هستشکه ساختار آن بدین صورت هستش که یک تابع رو برمیگردونه
// هم می تونیم از پرووایدر استفاده کنیم


// خط ۱۲ جای کانتکس هر اسمی میشه گذاشت 


// چطور مستقیم از داخل کانتکس میشه تغییر داد محتوا رو 
// 1-یک فنکشن تعریف میکنیم که مقدار رنگ رو تغییر بده 
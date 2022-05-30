import BookList from "./components/bookList";
import ChangeTheme from "./components/changeTheme";
import Navbar from "./components/navbar"
import LoginContextProvider from "./contexts/loginContext";
import ThemeContextProvider from "./contexts/themeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <LoginContextProvider>
        <Navbar/>
        <BookList/>
        <ChangeTheme/>
        </LoginContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

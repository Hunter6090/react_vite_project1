import { ThemeProvider } from './ThemeProvider'
import MainPage from './pages/MainPage/MainPage'
import './App.css'

function App() {

  return (
      <>
        <ThemeProvider>
          {/* <ThemeToggle></ThemeToggle> */}
          {/* Your application components */}
            <MainPage></MainPage>
        </ThemeProvider>
      </>
  )
}

export default App

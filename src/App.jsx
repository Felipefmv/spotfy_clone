import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Footer/>
      <GlobalStyle />
    </div>
  )
}

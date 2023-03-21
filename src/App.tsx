import './App.css'
import Game from './components/game_body/Game';
import NavigationMenu from './components/navigation_menu/NavigationMenu'

function App() {

  return (
    <section className="App">
      <NavigationMenu/>
      <Game/>
    </section>
  )
}

export default App;
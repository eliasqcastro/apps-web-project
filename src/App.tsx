import './App.css'
import Game from './components/game_body/Game';
import NavigationMenu from './components/navigation_menu/NavigationMenu'

function App() {

  return (
    <div className="App">
      <NavigationMenu/>
      <Game/>
    </div>
  )
}

export default App;
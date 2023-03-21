import './Game.css'
import WordButton from "./word_button/WordButton";

function Game() {

    const urlImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/250px-Soccerball.svg.png'

    return (

            <section className='section_root'>

                <img src={urlImage} alt="Image of the word." />

                <div className='div__word_buttons'>
                    <WordButton />
                    <WordButton />
                    <WordButton />
                    <WordButton />
                    <WordButton />
                </div>
            </section>
    )
}

export default Game;
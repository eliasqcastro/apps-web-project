import './Game.css'
import WordButton from "./word_button/WordButton";

function Game() {

    const imageURL = 'https://png.pngtree.com/png-clipart/20200701/big/pngtree-soccer-ball-with-transparent-background-png-image_5417199.png';/*'https:via.placeholder.com/500'*/

    return (
        <div className='div__root'>
            <div className='div__game__root'>
                <div className='div__counts'>
                    <p className='count'>ACERTOS:</p>
                    <p className='count'>ERROS:</p>
                    <p className='count'>TOTAL:</p>
                </div>

                <div className='div__word__image'>
                    <img className='word__image' src={imageURL} alt="Image of the word."/>
                </div>

                <div className='div_right'>
                    <div className='div__timer'>
                        <p>TEMPO RESTANTE:</p>
                        <p className='timer'>00:00</p>
                    </div>
                    <button className='but__restart'>REINICIAR</button>
                </div>
            </div>

            <div className='div__word_buttons'>
                <WordButton />
                <WordButton />
                <WordButton />
                <WordButton />
                <WordButton />
            </div>
        </div>
    )
}

export default Game;
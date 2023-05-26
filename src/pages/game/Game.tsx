import { useEffect, useRef, useState } from 'react';
import './Game.css'
import { getFirestore, getDocs, addDoc, collection } from "firebase/firestore"
import firebaseApp from '../../services/firebase';

function Game() { //ClassName prefix: 251 (pages/game/Game)

    const firestore = getFirestore(firebaseApp)

    const [imageLink, setImageLink] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/2/20/Point_d_interrogation.jpg") //'https:via.placeholder.com/500'

    const [allGameItens, setAllGameItens] = useState<any[]>([])

    const [selectedItems, setSelectedItems] = useState<{Id: string, Name: string, ImageLink: string}[]>([])

    const [countdownTimer, setCountdownTimer] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    const [hits, setHits] = useState(0)

    const [mistakes, setMistakes] = useState(0)

    const [correctItemIndex, setCorrectItemIndex] = useState(-1);

    const [wordButton1, setWordButton1] = useState("?")
    const [wordButton2, setWordButton2] = useState("?")
    const [wordButton3, setWordButton3] = useState("?")
    const [wordButton4, setWordButton4] = useState("?")
    const [wordButton5, setWordButton5] = useState("?")

    const checkContdownTimer = () => {

        if (countdownTimer === 0) {

            stopTimer()
        }
    }

    const getAllItensOfDB = () => {

        const getAllItens = async () => {

            const docs = await getDocs(collection(firestore, "Things"))

            const thingsAUX: any = []

            docs.forEach((doc: any) => {

                const imageLinkAux: string = String(doc.data().ImageLink);

                if (imageLinkAux.endsWith(".jpg")) {

                    thingsAUX.push({ id: doc.id, ...doc.data() })
                }
            })

            setAllGameItens([...thingsAUX])
        }

        getAllItens()
    }

    useEffect(() => {

        let interval: any

        if (isRunning) {

            interval = setInterval(() => {

                setCountdownTimer((prevSeconds) => prevSeconds - 1)

            }, 1000)
        }

        return () => {

            clearInterval(interval);
        }

    }, [isRunning])

    const stopTimer = () => {

        setIsRunning(false);
    };

    const butStartOnClick = () => {

        setCountdownTimer(5);
        setIsRunning(true);

        loadNewRound()
    }

    const loadNewSelectedItens = () => {

        if (selectedItems.length > 0) {

            const randomIndex = Math.floor(Math.random() * (allGameItens.length - 1));

            setImageLink(String(selectedItems[randomIndex].ImageLink))

            setCorrectItemIndex(randomIndex)

            setWordButton1(selectedItems[0].Name)
            setWordButton2(selectedItems[1].Name)
            setWordButton3(selectedItems[2].Name)
            setWordButton4(selectedItems[3].Name)
            setWordButton5(selectedItems[4].Name)
        }
    }

    const loadNewRound = () => {

        const count = 5;

        const selectedItemsAUX: any[] = [];

        while (selectedItemsAUX.length < count && selectedItemsAUX.length < allGameItens.length) {

            const randomIndex = Math.floor(Math.random() * allGameItens.length);
            const randomItem = allGameItens[randomIndex];

            if (!selectedItemsAUX.includes(randomItem)) {

                selectedItemsAUX.push(randomItem);
            }
        }

        setSelectedItems(selectedItemsAUX)
    }

    function wordSelected(index: number) {

        if (index == correctItemIndex) {

            setHits(hits + 1)

            const countdownAUX = countdownTimer + 5

            setCountdownTimer(countdownAUX <= 300 ? countdownAUX : 300)

        } else {

            const countdownAUX = countdownTimer - 5

            setCountdownTimer(countdownAUX >= 0 ? countdownAUX : 0)

            setMistakes(mistakes + 1)
        }

        loadNewRound()
    }

    useEffect(getAllItensOfDB, [])

    useEffect(loadNewSelectedItens, [selectedItems])

    useEffect(checkContdownTimer, [countdownTimer])

    return (
        <div className='rootNode_251'>
            <div className='div__game__root'>
                <div className='div__counts'>
                    <p className='count'>ACERTOS: {hits}</p>
                    <p className='count'>ERROS: {mistakes}</p>
                    <p className='count'>TOTAL:</p>
                </div>

                <div className='div__word__image'>
                    <img className='word__image' src={imageLink} alt="Image of the word." />
                </div>

                <div className='div_right'>
                    <div className='div__timer'>
                        <p>TEMPO RESTANTE:</p>
                        <p className='timer' onClick={stopTimer}>{countdownTimer}</p>
                    </div>
                    <button className='but__restart' onClick={butStartOnClick}>Start</button>
                </div>
            </div>

            <div className='div__word_buttons'>
                <button onClick={() => { isRunning ? wordSelected(0) : null }}>{wordButton1}</button>
                <button onClick={() => { isRunning ? wordSelected(1) : () => { } }}>{wordButton2}</button>

                <button onClick={() => { isRunning ? wordSelected(2) : () => { } }}>{wordButton3}</button>
                <button onClick={() => { isRunning ? wordSelected(3) : () => { } }}>{wordButton4}</button>
                <button onClick={() => { isRunning ? wordSelected(4) : () => { } }}>{wordButton5}</button>
            </div>
        </div>
    )
}

export default Game;
import { getFirestore, getDocs, addDoc, collection } from "firebase/firestore"
import firebaseApp from '../../services/firebase';
import "./Dev.css"
import { useEffect, useState } from "react";

function Dev() {

    const firestore = getFirestore(firebaseApp)

    const [imageLink, setImageLink] = useState<string>("")
    const [name, setname] = useState<string>("")

    const addItem = async () => {

        const item = {

            ImageLink: imageLink,
            Name: name
        }

        await addDoc(collection(firestore, "Things"), item)

        alert("Item enviado!")

        setImageLink("")
        setname("")
    }

    const handleNameChange = (event : any) => {

        setname(event.target.value)
    }

    
    const handleImageLinkChange = (event : any) => {

        setImageLink(event.target.value)
    }

    return (

        <div className="rootNode">

            <h3>Nome</h3>
            <input onChange={handleNameChange} type="text" />

            <h3>Link da imagem (.jpg)</h3>
            <input type="text" onChange={handleImageLinkChange}/>

            <button onClick={addItem}>Enviar</button>

            <img className='word__image' src={imageLink} alt="Imagem não suportada." />

        </div>
    )
}

export default Dev
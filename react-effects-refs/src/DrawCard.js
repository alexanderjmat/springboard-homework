import React, {useState, useEffect} from "react";
import axios from "axios";


function DrawCard() {
    const [deckId, setDeckId] = useState("")
    const [deck, setDeck] = useState([])
    useEffect(function makeRequest() {
        async function request() {
            const req = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            setDeckId(req.data.deck_id)        
        }
        request();
    }, [])

    async function pickCard() {
        const req = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        if (req.data.remaining != 0) {
            const img = req.data.cards[0].image
            setDeck([...deck, img])
            return img
        }
        else {
            alert("No cards remaining!")

        }
    }

    return (
        <div className="DrawCard">
            <div className="DrawCard__Request">
                <button onClick={pickCard}>GIMME A CARD!</button>
            </div>
            <div className="DrawCard__Deck">
                {deck.map(card => {
                    return <img src={card}/>
                })}
            </div>

        </div>
    )

}



export default DrawCard;
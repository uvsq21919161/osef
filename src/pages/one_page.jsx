import React, { useEffect, useState } from 'react';
import './one_page.css';
import { BackCard } from '../components/card';


function Page1() {
    const [currentUser, setCurrentUser] = useState("");
    const [users, setUsers] = useState([]);
    const [end,setEnd] = useState(false);
    const [ranking,setRanking] = useState([]);
    const [playersDeck, setPlayersDeck] = useState({});
    const [currentColor, setCurrentColor] = useState("");
    const [currentNumber, setCurrentNumber] = useState(0);
    const [draw, setDraw] = useState([]);
    const [turn, setTurn] = useState(0);
    const [fosse, setFosse] = useState([]);
    const [test,setTest] = useState("false");
    useEffect(() => {
        // Vérifier si playersDeck est vide
        if (Object.keys(playersDeck).length === 0) {
            // Effectuer les actions nécessaires seulement si playersDeck est vide
            setPlayersDeck({ 
                "thanu": [],
                "inconnu": []
            });
            setCurrentUser("thanu");
        }
    }, [test]);

    return (
        // represente le board, on lui applique un effet CSS.
        <div className="board">
            {/*On regarde si la partie est fini via un opérateur ternaire, si oui on affiche le classement, 
                sinon on execute le necessaire pour le fonctionnement de la partie*/}
            {end ? <div>
                {
                true && 
                    <>
                        <h1>La partie est fini voici le classement</h1>
                    </>
                } </div> : 
                <div className='hand'> {test === false && setTest(true)}
                    {Object.entries(playersDeck).map(([cle,main],i) => (
                        <div key={i} className={cle === currentUser ? `hand_${i}` : `handback_${i}`}>
                            {cle === currentUser ? (
                                <>
                                    <p className='name'>{currentUser}</p>
                                </>
                            ) : (
                                <>
                                    <BackCard key={i} />
                                    <BackCard key={i+1} />
                                    <BackCard key={i+2} />
                                    <BackCard key={i+3} />
                                    <BackCard key={i+4} />
                                    <BackCard key={i+5} />
                                    <BackCard key={i+6} />
                                    <p>test</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Page1;
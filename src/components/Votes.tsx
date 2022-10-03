import { useState } from "react";
import "./Votes.css"

function Votes() {
    const [voteChoc, setVoteChoc] = useState(0);
    const [voteVanilla, setVoteVanilla] = useState(0);
    const [voteStraw , setVoteStraw] = useState(0);

    const addChocolateVote = () => {
        setVoteChoc(voteChoc + 1);
    };

    const addVanillaVote = () => {
        setVoteVanilla(voteVanilla + 1);
    };

    const addStrawberryVote = () => {
        setVoteStraw(voteStraw + 1);
    };

    const totalVotes = voteChoc + voteVanilla + voteStraw;
    const chocPercent = (voteChoc / totalVotes) * 100;
    const vanillaPercent = ( voteVanilla / totalVotes) * 100;
    const strawPercent = (voteStraw / totalVotes) * 100;

    const chocBar = {
       width: chocPercent + "%",
       height: 20 + "px",
       backgroundColor: "brown"
    }
    const vanillaBar = {
        width: vanillaPercent + "px",
        height: 20 + "px",
        backgroundColor: "yellow"
    }
    const strawBar = {
        width: strawPercent + "%",
        height: 20 + "px",
        backgroundColor: "pink"

    }
 

    return(
        <div className="Votes">
            <h1>Vote Here</h1>
            <button onClick={addChocolateVote}>Chocolate</button> <button onClick={addVanillaVote}>Vanilla</button> <button onClick={addStrawberryVote}>Strawberry</button>
            {voteChoc > 0 && <h3>Chocolate: {voteChoc} {chocPercent}%</h3>}
            {voteChoc > 0 && <div className="choco-percent" style={chocBar}></div>}

            {voteVanilla > 0 && <h3>Vanilla: {voteVanilla} {vanillaPercent}%</h3>}
        {voteVanilla > 0 && <div className="vanilla-percent" style={vanillaBar}></div>}

        {voteStraw > 0 && <h3>Strawberry: {voteStraw} {strawPercent}%</h3>}
        {voteStraw > 0 && <div className="berry-percent" style={strawBar}></div>}
        </div>
    )
}


export default Votes
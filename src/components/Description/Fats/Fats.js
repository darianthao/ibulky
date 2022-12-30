import './Fats.css'

function Fats() {
    return (
        <>
            <div className="fats-context-container">
                <div className="fats-description">
                <h1>Fats are an important part of a healthy diet</h1>
                    <p>You may wonder isn't fat bad for you, but your body needs
                        some fat from food. <strong>It's a major source of energy.</strong> It helps
                        you absorb some vitamins and minerals. Fat is needed to build cell
                        membranes, the vital exterior of each cell, and the sheaths surrounding
                        nerves.</p>
                </div>
                <div className="fat-list">
                    <p>Examples of Fats:</p>
                    <ul>
                        <strong>
                            <li>Olives</li>
                            <li>Avocados</li>
                            <li>Nuts (Almonds, Pecans, Cashews)</li>
                            <li>Peanut Butter</li>
                        </strong>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Fats;
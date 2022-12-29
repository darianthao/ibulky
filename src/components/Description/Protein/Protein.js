import './Protein.css'
import legoLogo from '../../../images/blocks.png'

function Protein() {
    return (
        <>
        <div className="protein-context-container">
            <div className="protein-description">
                <h1>Proteins are like Lego's</h1>
                <p>Coming in at <strong>4 kcal per gram,</strong> They are one of the building blocks of body tissue
                    and can also serve as a fuel source</p>
                <p>Examples of Protein:
                    <ul>
                        <strong>
                            <li>Chicken</li>
                            <li>Fish</li>
                            <li>Eggs</li>
                            <li>Yogurt</li>
                            <li>Beef</li>
                        </strong>
                    </ul>
                </p>
            </div>
            <div className="protein-image">
                <img src={legoLogo} alt="Protein Logo" className="faceUp"></img>
                <img src={legoLogo} alt="Protein Logo" className="upsideDown"></img>
            </div>
        </div>
    </>
    );
}

export default Protein;
import './Carbohydrates.css'
import boltLogo from '../../../images/bolt.png'
import breadLogo from '../../../images/bread.png'

function Carbohydrates() {
    return (
        <>
            <div className="carbohydrates-context-container">
                <div className="carbohydrates-images">
                    <img src={boltLogo} alt="bolt logo" className="boltLogo"></img>
                    <img src={breadLogo} alt="bread logo" className="breadLogo"></img>
                </div>
                <div className="carbohydrates-description">
                    <h1>Carbohydrates are your body's fuel</h1>
                    <p>What are <strong>carbohydrates?</strong> Carbohydrates are found
                        in a wide array of both healthy and unhealthy <strong>foods—bread,
                        beans, milk, popcorn, potatoes, cookies, spaghetti, soft drinks,
                        corn, and cherry pie.</strong> They also come in a variety of forms. The
                        most common and abundant forms are sugars, fibers, and starches.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Carbohydrates;
import image1 from './assets/p-13-1.webp';
import './index.css';

function App() {

    const showPopup = () => {
        const modalbg = document.getElementById('modal-bg');
        const modalSwitch = document.getElementById('modal-switch');
        const modalBox = document.getElementById('modal-box');
        const modalClose = document.getElementById('modal-close');
        
        modalbg.addEventListener("click", function() {
            modalBox.classList.add('hidden')
            modalbg.classList.add('hidden')
        });

        modalSwitch.addEventListener("click", function() {
            modalBox.classList.remove('hidden')
            modalbg.classList.remove('hidden')
        });

        modalClose.addEventListener("click", function() {
            modalBox.classList.remove('hidden')
            modalbg.classList.remove('hidden')
        });
    }
    
    return (

        Array.apply(null, { length: 10 }).map((e, i) => (
            <div className="card w-80 bg-white shadow-xl" key={i}>
                <figure><img src={image1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-bold-700'>$1.99</p>
                    <h2 className="card-title">Vegetables</h2>
                    <div className="card-actions justify-end">
                    <label htmlFor="my-modal-4" onClick={showPopup} className="btn btn-actions modal-switch">Buy Now</label>
                    </div>
                </div>
            </div>
          ))

    );
}
  
// The button above controls the opening of the pop up

export default App;
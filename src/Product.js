import image1 from './assets/p-13-1.webp';
import './index.css';

function App() {
    return (

        Array.apply(null, { length: 10 }).map((e, i) => (
            <div className="card w-96 bg-white shadow-xl" key={i}>
                <figure><img src={image1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-bold-700'>$1.99</p>
                    <h2 className="card-title">Vegetables</h2>
                    <div className="card-actions justify-end">
                    <label htmlFor="my-modal-4" className="btn btn-actions modal-switch">Buy Now</label>
                    </div>
                </div>
            </div>
          ))

    );
}
  
// The button above controls the opening of the pop up

export default App;
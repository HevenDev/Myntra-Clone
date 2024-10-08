import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '100%', margin: '20vh auto' }}>

      <h3>Your cart is empty..!!</h3>
      <Link to={"/"}>
      <button type="button" class="btn btn-info">
        Shop now
      </button>
      </Link>
    </div>
    
  );
};

export default EmptyCart;

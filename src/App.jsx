import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { decrementCounter, getAllPhones, incrementCounter, resetCounter } from './services/actions/PhoneHnnterActions';
import PhoneCard from './Components/PhoneCard/PhoneCard';

const App = () => {
  const { counterReducer, phoneReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  const { isLoading, phoneData, error } = phoneReducer;
  const { counter } = counterReducer;

  useEffect(() => {
    let mount = true;
    if (mount) {
      dispatch(getAllPhones('https://openapi.programming-hero.com/api/phones?search=iphone'))
    }
    return () => mount = false;
  }, [dispatch])

  return (
    <>
      <h1>Vite + React + redux-thunk</h1>
      <h3>Count {counter}</h3>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      {/* phone data */}
      <h3>Total Phone {phoneData?.data && phoneData?.data.length}</h3>
      {
        isLoading && <h3>Loading....</h3>
      }
      {
        error && <h3>{error}</h3>
      }
      <div className='phone-container'>
        {
          phoneData?.data &&
          phoneData?.data.map((phone, idx) => <PhoneCard
            key={idx}
            phone={phone}
          />)
        }
      </div>
    </>
  )
}

export default App

import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/Card';
import { createSignal } from 'solid-js';

function App() {
  const data = [1, 2, 3]
  const [cart, setCart] = createSignal(0)
  return (
    <div className={styles.App}>
      <header>
        <h1>Ninja Merch</h1>
      </header>
      <img src={logo} alt="logo" class='w-5 h-5' />
      <button onClick={() => setCart(cart() + 1)}>Add to cart</button>
      {cart()}
      <div>
        {data.map((item) => (
          <Card></Card>
        ))}
      </div>
    </div>
  );
}

export default App;

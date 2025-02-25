import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/Card';

function App() {
  const data = [1, 2, 3]
  return (
    <div className={styles.App}>
      <header>
        <h1>Ninja Merch</h1>
      </header>
      <img src={logo} alt="logo" style={{ width: '100px', height: 'auto', margin: '20px auto' }} />
      <div>
        {data.map((item) => (
          <Card></Card>
        ))}
      </div>
    </div>
  );
}

export default App;

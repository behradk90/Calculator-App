import "./styles.css"

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">9876 +</div>
        <div className="current-operand">7685</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button className="span-two">0</button>
    </div>
  );
}

export default App;

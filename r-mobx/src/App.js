import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default App;

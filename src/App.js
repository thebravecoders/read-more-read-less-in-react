import './App.css';

import ReadMoreReadLess from './HOC/ReadMoreReadLess';

function App() {
  return (
    <div className="App">
        <ReadMoreReadLess>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </ReadMoreReadLess>
    </div>
  );
}

export default App;

import './App.css';
import SingleElement from './component/SingleElement';

const heading = 'Heading of some sort';
const lorem = 'Lorem ipsum text';
let mockParagraphs = [];
for (let i = 0; i < 10; i++) {
  mockParagraphs.push(lorem);
}

let mockStorage = [];

for (let i = 0; i < 4; i++) {
  mockStorage.push({ heading, items: mockParagraphs });
}

function App() {
  return (
    <div className="App">
      <SingleElement mockStorage={mockStorage} />
    </div>
  );
}

export default App;

import './App.css';
import SingleElement from './component/SingleElement';

const heading = 'Heading of some sort';
const lorem = 'Lorem ipsum text';
let mockParagraphs = [];
for (let i = 0; i < 15; i++) {
  mockParagraphs.push(lorem);
}

let mockStorage = [
  { heading, items: mockParagraphs, fixedWidth: 500 },
  { heading, items: mockParagraphs, fixedWidth: 250 },
  { heading, items: mockParagraphs, fixedWidth: 300 },
  { heading, items: mockParagraphs, fixedWidth: 300 },
];

// for (let i = 0; i < 4; i++) {
//   mockStorage.push({ heading, items: mockParagraphs });
// }

function App() {
  return (
    <div className='App'>
      <SingleElement mockStorage={mockStorage} />
    </div>
  );
}

export default App;

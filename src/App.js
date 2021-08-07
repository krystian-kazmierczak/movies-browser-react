import Pagination from "./common/Pagination";

function App() {
  return (
      <Pagination
        currentPageNumber={1}
        numberOfPages={100}
      />
  );
}

export default App;

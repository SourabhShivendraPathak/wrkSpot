import SearchPannel from "./components/searchPannel/searchPannel";
import CountryTable from "./components/countryTable/countryTable";

function App() {
  return (
    <>
      <div>
        <section>
          <h5>Countries info</h5>
        </section>
        <SearchPannel />
        <CountryTable />
      </div>
    </>
  );
}

export default App;

import "./style.css";

const Searchbox = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        placeholder="Country Name"
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbox;

export const Filter = ({ filterData, onChangeFilter }) => {
  return (
    <input
      type="text"
      value={filterData}
      onChange={evt => {
        onChangeFilter(evt.target.value);
      }}
    />
  );
};

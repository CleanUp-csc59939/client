const Divider = (props) => {
  const { height, color, width } = props;
  return (
    <div
      style={{
        height,
        backgroundColor: color,
        width,
      }}
    />
  );
};

export default Divider;
// remove default once we add more reuseable components

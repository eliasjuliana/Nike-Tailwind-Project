
const NextArrowSlider = (props) => {
    const { className, style, onClick } = props;
  return (
    <div><div
    className={className}
    style={{ ...style, display: "block", background: "black" }}
    onClick={onClick}
  /></div>
  )
}

export default NextArrowSlider
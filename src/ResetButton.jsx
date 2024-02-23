import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton(props) {
  const handleClick = (event) => {
    props.setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleClick} className="reset-btn-icon" />
    </button>
  );
}

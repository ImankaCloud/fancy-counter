import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    setCount((prevCount) => {
      if (type === "minus") {
        const nextCount = prevCount - 1;
        if (nextCount < 0) {
          return 0;
        }
        return prevCount - 1;
      } else {
        const maxCount = 5;
        if (prevCount === maxCount) {
          return maxCount;
        }
        return prevCount + 1;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

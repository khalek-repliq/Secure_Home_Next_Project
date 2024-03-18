import { useState } from "react";

const TruncatedParagraph = ({ text, maxWords, extraClasses }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull((prev) => !prev);
  };

  const truncatedText = showFull
    ? text
    : text.split(" ").slice(0, maxWords).join(" ") + "...";

  return (
    <>
      <p className={extraClasses}>{truncatedText}</p>
      {showFull ? (
        <button
          className="text-sm text-gray-800 font-medium"
          onClick={toggleShowFull}
        >
          See Less
        </button>
      ) : (
        <button
          className="text-sm text-gray-800 font-medium"
          onClick={toggleShowFull}
        >
          See More
        </button>
      )}
    </>
  );
};

export default TruncatedParagraph;

export default function CustomInput(props) {
  const { type, placeholder, value, addedClass } = props;
  console.log(type);

  return (
    <input
      className={`${addedClass} focus-visible:outline-[#27bfb3] p-2 bg-gray-200 rounded-md`}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

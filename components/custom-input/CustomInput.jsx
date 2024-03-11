export default function CustomInput(props) {
  const {
    type,
    placeholder,
    value,
    addedClass,
    autoComplete,
    name,
    id,
    handleChange,
    handleBlur,
  } = props;

  return (
    <input
      className={`${addedClass} focus-visible:outline-[#27bfb3] p-2 bg-gray-200 rounded-md`}
      type={type}
      placeholder={placeholder}
      value={value}
      autoComplete={autoComplete}
      name={name}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

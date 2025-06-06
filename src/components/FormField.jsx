export default function FormField({
  name,
  label,
  onChange,
  direction = "row",
  type = "text",
  placeholder = null,
  value = null,
  ...params
}) {
  return (
    <div className={`form-field ${direction}`}>
      <label htmlFor={name}>{label}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...params}
      />
    </div>
  );
}

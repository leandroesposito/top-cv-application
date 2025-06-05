export default function FormField({
  name,
  label,
  direction = "row",
  type = "text",
  placeholder = null,
  value = null,
}) {
  return (
    <div className={`form-field ${direction}`}>
      <label for={name}>{label}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

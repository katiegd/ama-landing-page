export default function Input({
  name,
  type,
  placeholder,
  value,
  label,
  onChange,
}) {
  return (
    <label htmlFor={name} className="text-slate-200">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className=" border border-slate-100 rounded-xl p-2 w-full text-slate-100"
        onChange={onChange}
        required
      />
    </label>
  );
}

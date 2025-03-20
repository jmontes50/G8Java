const Input = (
  { value, 
    nameProp, 
    handleInput, 
    label, 
    type = "text" 
  }
) => {
  return (
    <div className="mb-3 p-2">
      <label htmlFor={nameProp} className="block mb-1">{label}</label>
      <input 
        type={type} 
        placeholder={`Ingrese ${label}`}
        id={nameProp}
        name={nameProp}
        className="input"
        onChange={handleInput}
        value={value[nameProp]}
      />
    </div>
  );
};

export default Input;

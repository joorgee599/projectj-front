import { useState } from "react";

const useForm = (incialState = {}) => {
  const [value, setValue] = useState(incialState);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

 const setFormValues = (values) => {
  setValue(values);
    
  }

  const resetForm = () => {
    setValue(incialState);
  };

  return { value, handleChange,resetForm,setFormValues };
};

export default useForm;







// import React, { useState } from "react";
// const useForm = (incialValue = {}) => {
//   const [value, setValue] = useState(incialValue);
//   // asigna valores normales a atravez del onChange
//   const handleChange = (e) => {
//     setValue({
//       ...value,
//       [e.target.name]: e.target.value,
//     });
//   };
//   //restablece los valores
//   const resetForm = () => {
//     setValue(incialValue);
//   };
//   //restablece los valores especificados
//   const resetValoresEspecificos = (valoresReset) => {
//     setValue((prevValue) => ({
//       ...prevValue,
//       ...valoresReset,
//     }));
//   };
//   //Cuando en el value se necesita asignar valor a un select de esta manera dato:{id:'value'}
//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     handleChange({ target: { name, value: { id: value } } });
//   };

//   //Cuando el valor se necesite numérico se aplica esta función
//   const handleChangeNumber = (e) => {
//     setValue({
//       ...value,
//       [e.target.name]: Number(e.target.value),
//     });
//   };
//   return {
//     value,
//     handleChange,
//     resetForm,
//     handleSelectChange,
//     resetValoresEspecificos,
//     handleChangeNumber,
//   };
// };

// export default useForm;

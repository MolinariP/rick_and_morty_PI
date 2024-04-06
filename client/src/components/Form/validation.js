function validator(inputDataLogin) {
    const errors = {
      email: "",
      password: "",
    };
  
      if (!inputDataLogin.email) {
        errors.email = "Ingresa un email";
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputDataLogin.email)) {
        errors.email = "Ingrese un email válido";
      } 
      
      if (inputDataLogin.email.length >= 35) {
        errors.email = "El email debe tener menos de 35 caracteres";
      }
      if (!/\d/.test(inputDataLogin.password)) {
        errors.password = "La contaseña debe tener al menos un número";
      }
      
      if (!inputDataLogin.password) {
        errors.password = "Ingrese un password";
      } else if (inputDataLogin.password.length < 6 || inputDataLogin.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
      }
    
      return errors;
    }
  
    export default validator;
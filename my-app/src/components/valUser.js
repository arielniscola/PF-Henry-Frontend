const valUser = ({
    fullName,
    password,
    password2,
    email,
    phone
  },setError) =>{
    let validated = true
    let error = {
        fullName:true,
        password:true,
        email:true,
        phone:true
      }
    //name
      if(fullName.match(/[a-zÀ-ÿ]+\s?[a-zÀ-ÿ]+/i) && fullName.length > 3 && fullName.length <= 30 ){
        error = {...error, fullName: true}
      } else{
        error = {...error, fullName: false}
        validated = false
      }

    // password//////////////////////////

    //validar largo
    if ( password.length < 8) {
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }

    //validar letra
    if ( password.match(/[a-z]/) ){
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }

       //validar letra mayúscula
    if ( password.match(/[A-Z]/) ){
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }

    //validar numero
    if ( password.match(/\d/) ){
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }

    if(password.length && password2.length){

      //validar confirmación contraseña
      if (password.length === 0 || password2.length === 0){
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }

      //validar contraseñas cohincidan
      if (password === password2){
        error = {...error, password: true}
      } else{
        error = {...error, password: false}
        validated = false
      }}

      ///////////////////////////////////////////////////

    // gmail
    if(email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)){
        error = {...error, email: true}
      } else{
        error = {...error, email: false}
        validated = false
      }
      
    // phone
    if(phone.match(/^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/)){
        error = {...error, phone: true}
      } else{
        error = {...error, phone: false}
        validated = false
      }
    
    setError(error)
    setLargo(largo)
    return validated
}

export default valUser
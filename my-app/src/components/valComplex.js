const valComplex = ({
    name,
    cuit,
  },setError) =>{

    let validated = true
    let error = {
        name:true,
        cuit:true
      }
    //name
      if(name.match(/[a-zÀ-ÿ]+\s?[a-zÀ-ÿ]+/i) && name.length > 3 && name.length <= 30 ){
        error = {...error, name: true}
      } else{
        error = {...error, name: false}
        validated = false
      }

    // Cuit
    if(cuit.match(/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/)){
        error = {...error, cuit: true}
      } else{
        error = {...error, cuit: false}
        validated = false
      }
      
    setError(error)
    return validated
}

export default valComplex
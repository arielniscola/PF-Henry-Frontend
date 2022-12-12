const valComplex = ({
    complexName,
    complexAddress,
    cuit,
    city,
  },setError) =>{

    let validated = true
    let error = {
        complexName:true,
        complexAddress:true,
        cuit:true,
        city:true
      }
    //name
      if(complexName.match(/[a-zÀ-ÿ]+\s?[a-zÀ-ÿ]+/i) && complexName.length > 3 && complexName.length <= 30 ){
        error = {...error, complexName: true}
      } else{
        error = {...error, complexName: false}
        validated = false
      }

    // address
    if(complexAddress.match(/^[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+\s?[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+?$/i)){
      error = {...error, complexAddress: true}
    } else{
      error = {...error, complexAddress: false}
      validated = false
    }

    // Cuit
    if(cuit.match(/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/)){
        error = {...error, cuit: true}
      } else{
        error = {...error, cuit: false}
        validated = false
      }
    // City
    if(city.match(/^[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+\s?[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+?$/i)){
        error = {...error, city: true}
      } else{
        error = {...error, city: false}
        validated = false
      }
    setError(error)
    return validated
}

export default valComplex
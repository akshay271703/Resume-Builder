const profileValidator = (name, profession, about) =>{ 
  if(name.length<3 || !name.includes(" ")){  
    return [false, 'Invalid Name'];
  }
  if(profession.length === 0){ 
    return [false, 'Invalid Profession'];
  }
  if(about.length <10){
    return [false, 'Invalid About section'];
  }
  return [true, null];
}

const contactValidator = (address, phone, email) =>{
  if(address.length == 0){
    return [false, 'Address cannot be empty'];
  }
  if(phone.length < 11){
    return [false, 'Invalid Phone'];
  }
  if(!email.includes('@') || !email.includes('.')){
    return [false, 'Invalid Email'];
  }
  return [true, null];
}

export {
  profileValidator,
  contactValidator
}
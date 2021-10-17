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
  return [true];
}

export {
  profileValidator
}
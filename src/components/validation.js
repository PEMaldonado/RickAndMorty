


export default function validation(userdata, errors, setErrors) {
    
    
    if (!userdata.email) 
        setErrors({...errors,email: "Email vacío"});
    else if (userdata.email.length>35) 
        setErrors({...errors,email: "Máximo 35 caractéres"});
    else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userdata.email)
    ) {
      setErrors({...errors,email: "Email inválido"});
    } else {
      setErrors({...errors,email: ""});
    }
    


    if (userdata.password.length>10 || userdata.password.length <6){ 
        setErrors({...errors,password: "Debe tener entre 6 y 10 caractéres"});
    } else if (!/\d/.test(userdata.password)) {
        setErrors({...errors,password: "Debe contener al menos 1 número"});
    } else {
        setErrors({...errors,password: ""});
    }

}
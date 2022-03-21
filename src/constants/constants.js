const patterns = {
    //Regex patterns 
    //Min 6 Length
    password : new RegExp(/^.{6,}$/),
    mobile : new RegExp(/^[0-9]{10}$/),
    //Allows only alphabets
    name : new RegExp(/^[A-Za-z ]+$/),
    
    address : new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/)
}

module.exports = patterns; 
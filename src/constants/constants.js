const patterns = {
    //Regex patterns
    password : new RegExp('/^(?=.*\d).{8,}$/'),
    phone : new RegExp('/^[0-9]{10}$/'),
    //Allows only alphabets
    name : new RegExp('/^[A-Za-z ]+$/'),
    
    address : new RegExp('/^[ A-Za-z0-9_@./#&+-]*$/')
}

module.exports = patterns; 
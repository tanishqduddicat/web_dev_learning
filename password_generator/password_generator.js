// password generator

function genpass(length, lowercase, uppercase, number, special){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const specialchars = "!@#$%&-_*";

    let allowedchars = "";
    let password = "";

    allowedchars += lowercase ? lowercasechars : "";
    allowedchars += uppercase ? uppercasechars : "";
    allowedchars += number ? numberchars : "";
    allowedchars += special ? specialchars : ""; 

    if(length <= 0){
        return `pass length must be atleasr 1`;
    }
    if(allowedchars.length === 0){
        return `atleast one set of chars must be selected`;
    }

    for(let i = 0; i<length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;
}

const passlen = 12;
const inclower = true;
const incupper = true;
const incnum = true;
const incsym = true;

const generatedPassword = genpass(passlen, inclower, incupper, incnum, incsym);
console.log(`the generated password is ${generatedPassword}`)
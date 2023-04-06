const firstName = 'Yakov';
const lastName = 'Derkachenko';
const firstNameLength = firstName.length;
const lastNameLength = lastName.length;

if (firstNameLength > 4 && lastNameLength > 5) {
    console.log(firstNameLength + lastNameLength);
} else {
    console.log('ОЙ, неможливо виконати умову');
}
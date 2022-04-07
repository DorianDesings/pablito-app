const users = [
	'Caroline Lane',
	'Dana Lawrence',
	'Amber Sutton',
	'Jackie Schmidt',
	'Ethel Perkins',
	'Deanna Mckinney',
	'Annie Evans',
	'Hilda Simmmons',
	'Lillian Wood',
	'Naomi Campbell',
	'Gloria Woods',
	'Candice Patterson',
	'Wilma Robinson',
	'Kelly Lawson',
	'Renee Martinez',
	'Hailey Mcdonalid',
	'Chloe Herrera',
	'Amy Chapman',
	'Kristin Perkins',
	'Kelly Spencer',
	'Roberto Anderson',
	'Samuel Austin',
	'George Garza',
	'Ken Mccoy',
	'Judd Powell',
	'Rene Craig',
	'Fernando Rice',
	'Brad Knight',
	'Alexander Sanders',
	'Terry Nelson',
	'Warren Torres',
	'Clinton Gonzales',
	'Tristan Young',
	'Vernon Brown',
	'Terry Lowe',
	'Felix Rice',
	'Corey Watts',
	'Gene Day',
	'Gavin Willis',
	'Juan Palmer'
];

const randomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min) + min);

const getRole = n => {
	if (n === 0) {
		return 'Profesor';
	} else if (n === 1) {
		return 'Alumno';
	}
	return 'Otro';
};

const getActive = n => n === 0;

const generateUsers = () => {
	for (let i = 0; i < users.length; i++) {
		console.log(`{
        "id": ${i + 1},
        "name": "${users[i]}",
        "email": "${users[i].toLowerCase().replace(' ', '.')}@example.com",
        "username":"@${users[i].toLowerCase().replace(' ', '')}",
        "image": "/assets/users/${i + 1}.jpg",
        "role":"${getRole(randomNumber(0, 3))}",
        "active": ${getActive(randomNumber(0, 2))}
      }`);
	}
};

generateUsers();

let user = {
    name: 'Joe',
    email: 'joe@dreamjob.com',
    password: 'zebra',
    // this is a nested object
    contact: {
        office: 'M12',
        telephone: '123-456-7890',
    },
    roles: ['programmer', 'developer']
}

// add a new attribute for 'salary' as a number
user.salary = 64000;

// add "server admin" to 'roles' attribute
user.roles.push('server admin');

// add office location to the 'contact' nested object
user.contact.location = 'Minneapolis';

console.log(user);


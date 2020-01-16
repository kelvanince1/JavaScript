var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// john.__proto__ = person;

var jane = {
    address: '111 Main St',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function() {
        return firstName;
    }
}

function compose(keysFunc, undefinedOnly) {
    return function(obj) {
        if (obj.length < 2 || obj == null) {
            return obj;
        }
    
        for (let index = 1; index < obj.length; index++) {
            let source = obj[index];
            let keys = keysFunc(source);

            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (!undefinedOnly || obj[key] === void 0) {
                    obj[key] = source[key];
                }
            }
            return obj;
        }
    }
}


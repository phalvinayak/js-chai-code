const accountId = 144553;
let accountEmail = 'email@gmail.com';
var accountPassword = '21212121';
accountCity = 'Bengaluru';
let accountState;

// accountId = 1212 // Not allowed 
accountEmail = 'hp@hp.com';
accountPassword = '123456';
accountCity = 'Jaipur';

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope.
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
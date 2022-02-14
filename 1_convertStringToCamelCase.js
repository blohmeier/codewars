function toCamelCase(str) {
    // let str2 = str.split('_').join('');
    // return str2.toLowerCase().replace(/-(.)/g, function(match, group1) {
    //     return group1.toUpperCase();
    // });
    let str2 = str.split('_').join('');
    return str2.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}
console.log(toCamelCase(''));
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));
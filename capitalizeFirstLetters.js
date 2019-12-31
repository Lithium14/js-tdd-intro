function capitalizeFirstLetters(input) {
    return input.split(' ').map((letter) => {
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }).join(' ');
}



module.exports = capitalizeFirstLetters;
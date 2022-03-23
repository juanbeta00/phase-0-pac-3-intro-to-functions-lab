function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase()); 
}
logShout('hello')

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper('hello');


function sayHiToHeadphonedRoommate (string) {
    var lowerCase = `I can't hear you!`;
    var upperCase = `YES INDEED!`;
    var dinnerCall = `I would love to!`;
    if (string.toLowerCase() === string) {
        return lowerCase;
    }
    else if (string.toUpperCase() === string) {
        return upperCase;
    } 
    else if (`Let's have dinner together!` === string) {
        return dinnerCall;
    }  
}

const messages = [
    {name: "Heywood", pun: "Heywood you go on a date with me?"},
    {name: "Wire", pun: "Wire you so cute?"},
    {name: "Anita", pun: "Anita use your bathroom."},
    {name: "Arthur", pun: "Arthur any cookies left?"},
    {name: "Isabel", pun: "Isabel broken? I had to knock!"},
    {name: "Hatch", pun: "Bless you!"},
    {name: "Luke", pun: "Luke through the peephole and find out!"},
    {name: "Justin", pun: "Justin time for dinner!"},
    {name: "Art", pun: "R2D2."},
    {name: "Dewey", pun: "Do we have to keep telling knock-knock jokes?"}
];

// Gets a random number to choose the "joke"
function generateRandomNumber() {
    return Math.floor(Math.random() * messages.length);
}
  

function printMessage()
{
    // console.log("Knock, knock?\nWho's there");
    // for (let i = 0; i < messages.length; i++)
    // {
    //     console.log(
    //         `Knock, knock.\nWho's there?\n${messages[i].object}.\n${messages[i].object} who?\n${messages[i].phrase}\n * laughs in the background *`
    //     )
    //     // messages[i].object, messages[i].phrase);
    // }
    console.log(messages.length)
}

printMessage();


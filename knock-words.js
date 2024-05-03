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
    {name: "Dewey", pun: "Dewey have to keep telling knock-knock jokes?"}
];

// Gets a random number to choose the "joke"
function generateRandomNumber() {
    return Math.floor(Math.random() * messages.length);
}
  

function printMessage()
{
    let n = generateRandomNumber();
    console.log(
        `Knock, knock.\nWho's there?\n${messages[n].name}.\n${messages[n].name} who?\n${messages[n].pun}\n * laughs in the background *`
    )
};

printMessage();


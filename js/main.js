    var clicks = 0;
    var start = true;
    var tableNrArray = [];
    var x = 0;
    var nr = 0;
    var first = 0;
    var second = 0;
    var third = 0;

    function myFunction() {
        var userChoicePeople = prompt("Mitu inimest on?");
        var userChoiceTable = prompt("Mitu lauda on");
        var userChoiceSitNr = prompt("Mitu inimest saab istuda ühes lauas?");

        if (userChoicePeople != null) {
            document.getElementById("people").innerHTML =
                "Kohti: " + userChoiceTable * userChoiceSitNr;

            for (var a = 1; a <= userChoiceTable; a++) {
                for (var b = 1; b <= userChoiceSitNr; b++) {
                    tableNrArray.push(document.getElementById("number").innerHTML = b.toString());

                    console.log(tableNrArray);
                    console.log(`This is ${b}`);

                }
            }
        }
    }

    function onClick() {
        var seat = 0;
        console.log(`Massiivi pikkus ${tableNrArray.length}`);
        if (tableNrArray.length > 0) {
            clicks += 1;
            if (tableNrArray.length > 1) {
                rand = getRandom(0, (tableNrArray.length - 1));
                seat = tableNrArray[rand];
                tableNrArray.splice(rand, 1);
            } else {
                seat = tableNrArray[0];
                tableNrArray.splice(0, 1);
            }
            console.log(rand + " see on rand");


            document.getElementById("clicks").innerHTML = clicks;
            document.getElementById("rand").innerHTML =
                "Sinu koht on: " + seat;

            console.log(`Massivis olevad arvud ${tableNrArray}`);

        } else {
            console.log(`first ${first}, second ${second}, third ${third}`);
            return;
        }
    };

    function getRandom(min, max) {
        console.log(`random arv on ${Math.floor(Math.random() * (max - min + 1) + min)}`);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

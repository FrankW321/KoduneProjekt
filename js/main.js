    var clicks = 0;
    var start = true;
    var tableNrArray = [];
    var x = 0;
    var nr = 0;
    var first = 0;
    var second = 0;
    var third = 0;

    function myFunction() {
        var userChoiceTable = prompt("Mitu lauda on"); // 3
        var userChoiceSitNr = prompt("Mitu inimest saab istuda ühes lauas?"); //3


        document.getElementById("people").innerHTML =
            "Kohti: " + userChoiceTable * userChoiceSitNr;
        //console.log(userChoicePeople);
        //Push numbers into array
        //lisab 1 - x laudade arv massiivi
        for (var a = 1; a <= userChoiceTable; a++) {
            for (var b = 1; b <= userChoiceSitNr; b++) {
                tableNrArray.push(document.getElementById("number").innerHTML = b.toString());
                //tableNrArray.push(document.getElementById("number").innerHTML = a.toString());
                console.log(tableNrArray);
                console.log(`This is ${b}`);

            }
        }

        //console.log(tableNrArray);
    }
    /*
        function display_array() {
            var e = "<hr/>";

            for (var y = 0; y < tableNrArray.length; y++) {
                e += "Element " + y + " = " + tableNrArray[y] + "<br/>";
            }
            document.getElementById("Result").innerHTML = e;
        }

        */

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
            var randwrap = document.getElementById("rand").innerHTML = //kuhu sa tahad seda inffi
                "Sinu laud on: " + seat;

            //console.log(tableNrArray[rand]); // Log the item
            //tableNrArray.splice(rand, 1); // Remove the item from the array
            console.log(`Massivis olevad arvud ${tableNrArray}`);
            //break;
            //onClick();
            //console.log(`Massivis olevad arvud ${tableNrArray}`);

        } else {
            console.log(`first ${first}, second ${second}, third ${third}`);
            return;
        }


        var xhr = new XMLHttpRequest();
        xhr.open("GET", "xhr.php", false);
        xhr.send();
        document.getElementById("kell").innerHTML = xhr.responseText;


        document.getElementById("rand").style.opacity = "1"
        document.getElementById("rand").disabled = true;

        setTimeout(function() {
            document.getElementById("rand").style.opacity = "0"
        }, 5000);




        document.getElementById("votebutton").disabled = true;

        setTimeout(function() {

            document.getElementById("votebutton").disabled = false;
            document.getElementById("votebutton").src = "img/sec.png";
        }, 5000);

        document.getElementById("votebutton").src = "img/sectrans.png";
    };

    /**/



    function getRandom(min, max) {
        console.log(`random arv on ${Math.floor(Math.random() * (max - min + 1) + min)}`);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

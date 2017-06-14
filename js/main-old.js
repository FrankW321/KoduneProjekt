    var clicks = 0;
    var start = true;
    var tableNrArray = [];
    var x = 0;
    var nr = 0;

	function myFunction() {
		var userChoicePeople = prompt("Mitu inimest on?");
		var userChoiceTable = prompt("Mitu lauda on");
    	var userChoiceSitNr = prompt("Mitu inimest saab istuda ühes lauas?");

    	if (userChoicePeople != null) {
        document.getElementById("people").innerHTML =
        "Kohti: " + userChoiceTable * userChoiceSitNr;
        //console.log(userChoicePeople);
        //Push numbers into array
        //lisab 1 - x laudade arv massiivi
        for (var a = 1; a <= userChoiceTable; a++) {
        	for (var b = 1; b <= userChoiceSitNr; b++) {
        		tableNrArray.push(document.getElementById("number").innerHTML = b.toString());
        		//tableNrArray.push(document.getElementById("number").innerHTML = a.toString());
        		console.log(b);

        	}
        }
}
}
/*
    for (var counter = 1; counter <= userChoiceTable; counter++) {
    tableNrArray.push(document.getElementById("number").innerHTML = counter.toString());
//	console.log(counter);
     	    }
	        //lisab x korda ühte lauanumbrit massiivi
        for (var i = 0; i < userChoiceTable; i++){
        	//console.log(i);
        	tableNrArray.push(document.getElementById("number").innerHTML = userChoiceTable.toString());
        	        	//console.log(tableNrArray);


for( a = 1; a <= 5; a = a + 1) {
	   for( b = 1; b <= a; b = b + 1)
	      console.log("%d", a);
	   console.log("\n");
	}
        }
    }
}
/*
        //lisab x korda ühte lauanumbrit massiivi
        for (var i = 0; i < userChoiceTable; i++){
        	//console.log(i);
        	tableNrArray.push(document.getElementById("number").innerHTML = userChoiceTable.toString());
        	        	console.log(tableNrArray[i]);
        	        	alert(tableNrArray[i]);	


        	        			// Loosilipik = (palju saab istuda yhte lauda) = lauanumber
/*
        	        	if (x<userChoiceTable){
        	        		push x2
        	        		x++
        	        	}




/*var randHero = Math.floor(Math.random()*imageNumber);
    heroesChosen.push(heroes[heroesAvailable[randHero]]);


    // remove that hero from the available array
    heroesAvailable.splice(randHero, 1);*/

/*
function add_elements_to_array(){
tableNrArray[nr] = document.getElementById("userChoiceTable").value;  
 alert("Element: " + tableNrArray[nr] + " Added at index " + nr);  
 nr++;  
 document.getElementById(userChoiceTable).value = "";  

}
*/
function display_array()  
{  
   var e = "<hr/>";     
      
   for (var y=0; y<tableNrArray.length; y++)  
   {  
     e += "Element " + y + " = " + tableNrArray[y] + "<br/>";  
   }  
   document.getElementById("Result").innerHTML = e;  
}  



    function onClick() {

        var rand = tableNrArray[Math.floor(Math.random() * tableNrArray.length-1)];


                console.log(rand +  " see on rand");
        //remove that number

// while (rand === undefined){
 	   //     var rand = tableNrArray[Math.floor(Math.random() * tableNrArray.length)];
 //}
	while (rand>=0) {
		        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;

   document.getElementById("rand").innerHTML = //kuhu sa tahad seda inffi
        "Sinu koht on: " + tableNrArray[rand];
                console.log( tableNrArray[rand] ); // Log the item
    			tableNrArray.splice(rand,1); // Remove the item from the array
    			break;
    			onClick();
                }
            
    };
/*
V2!!!!!!!!!!!!!!!!!!!!
    function onClick() {

        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        var rand = tableNrArray[Math.floor(Math.random() * tableNrArray.length-1)];
        //remove that number


// while (rand === undefined){
 	   //     var rand = tableNrArray[Math.floor(Math.random() * tableNrArray.length)];
 //}

	while (rand<=tableNrArray.length) {
   document.getElementById("rand").innerHTML = //kuhu sa tahad seda inffi
        "Sinu koht on: " + tableNrArray[rand];
                console.log( tableNrArray[rand] ); // Log the item
    			tableNrArray.splice(rand,1); // Remove the item from the array
    			break;
                }

    };
    _____________________________________________________________________________
/*





var heroes = ["link1", "link2", "link3", "link4"];
var heroesAvailable = [];
for (var i=0; i<heroes.length; i++) {
    heroesAvailable.push(i);  // [0, 1, 2, 3]
}

var heroesChosen = [];
for (var i=0; i<3; i++) {  // choose 3 heroes
    // the amount of heroes not chosen yet
    var imageNumber = heroesAvailable.length;
    var randHero = Math.floor(Math.random()*imageNumber);
    heroesChosen.push(heroes[heroesAvailable[randHero]]);


    // remove that hero from the available array
    heroesAvailable.splice(randHero, 1);
}

//prompt alguses, mitu lauda / mitu inimest on / mitu inimest saab istuda lauda / nupule on vaja panna disable kui toimub 1 klõps 3s? siis on animatsioon numbri leidmiseks, et kasutaja saaks 100% aru, et ta sai numbri

	var start = true;
    var userChoiceTable = prompt("Mitu lauda on");
    var userChoicePeople = prompt("Mitu inimest on?");
    var userChoiceSitNr = prompt("Mitu inimest saab istuda ühes lauas?");
    var 


userChoicePeople - button times pressed = "Vabu kohti on alles _ "
print

if (userChoicePeople === button times pressed)
	print "Kõik inimesed on saanud numbri"
	start= false;

	function display(){
		var x = document.getElementById("userChoiceTable").value;
	}
 i=1; i<x;i++; // lisa niipalju numbreid massiivi kuni jõuad kasutajapoolse sisestatud numbrini

*/

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

       ------------------------------------------------------------------------------- */

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


function beer() {
    var numberOfBottles = 99
    while (numberOfBottles > 0) {
        console.log(numberOfBottles + "bottles of beer on the wall," + numberOfBottles + "bottles of beer.")
        numberOfBottles--
        if (numberOfBottles > 0)
            console.log("Take one down and pass it around" + "," + numberOfBottles + "bottles of beer on the wall.")
        else
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")

        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }

}
console.log("start")

function removeOddsData() {

    var buttonsToRemove = document.querySelectorAll('.Odds-sc-15sv6pa-12.bVVatc.odds');

    if (buttonsToRemove.length > 0) {
        buttonsToRemove.forEach(function (button) {
            button.remove()
        });

        var percentageToRemove = document.querySelectorAll('.Paragraph-sc-15sv6pa-5.ggwnnq.percentage')
        percentageToRemove.forEach(function (pc) {
            pc.remove()
        });

        var percentageLineToRemove = document.querySelectorAll('.PercentageLine-sc-11pc8bm-7')
        percentageLineToRemove.forEach(function (pc) {
            pc.remove()
        });

        console.log("end")

    } else {
        console.log("no data")
    }
}

setTimeout(removeOddsData, 10000)
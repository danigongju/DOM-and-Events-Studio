// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOff = document.getElementById("takeoff");
    const statusPrompt = document.getElementById("flightStatus");

    takeOff.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirmation) {
            statusPrompt.innerHTML = "Shuttle in flight.";
        }
    });
}

window.addEventListener("load", init);
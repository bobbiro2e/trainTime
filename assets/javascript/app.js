var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrainTime = moment($("#firstTrainTimeInput").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequencyInput").val().trim();

    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainTimeInput").val("");
    $("#frequencyInput").val("");

    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

    // Employee Info
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

});

//     // Calculate the months worked using hardcore math
//     // To calculate the months worked
//     var empMonths = moment().diff(moment(empStart, "X"), "months");
//     console.log(empMonths);

//     // Calculate the total billed rate
//     var empBilled = empMonths * empRate;
//     console.log(empBilled);

//     // Create the new row
//     var newRow = $("<tr>").append(
//         $("<td>").text(empName),
//         $("<td>").text(empRole),
//         $("<td>").text(empStartPretty),
//         $("<td>").text(empMonths),
//         $("<td>").text(empRate),
//         $("<td>").text(empBilled)
//     );

//     // Append the new row to the table
//     $("#employee-table > tbody").append(newRow);

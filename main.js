function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VwV1HN7dB/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}


var dog = 0;
var cat = 0;
var Background = 0;
var lion = 0;
var cow = 0;


function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_count").innerHTML = 'Accuracy - ' +
            (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("
            + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_count").style.color = "rgb("
            + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("animal_image");

        if (results[0].label == "dog") {
            img.src = "dog.gif";
            dog = dog + 1;


        } else if (results[0].label == "cat") {
            img.src = "cat.gif";
            cat = cat + 1;

        }
        else if (results[0].label == "cow") {
            img.src = "cow.gif";
            cow = cow + 1
        }
        else if (results[0].label == "lion") {
            img.src = "lion.gif";
            lion = lion + 1;
            }
        else {
            img.src = "https://media.tenor.com/kKmvIr30vQYAAAAi/stars-changing-colors.gif"
        }
    }

}  
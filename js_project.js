function startClassification(){
    navigator.mediaDevices({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l5NEyEXJE/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    console.log("Got Results!");
}
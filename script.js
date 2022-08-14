const hiringButton = document.getElementById("hiring");
const questionButton = document.getElementById("question");
const commentButton = document.getElementById("comment");
const hiringDiv = document.getElementById("hiringDiv");

hiringButton.addEventListener("change", function(e){
    hiringDiv.style.display = "block";
});

questionButton.addEventListener("change", function(e){
    hiringDiv.style.display = "none";
});

commentButton.addEventListener("change", function(e){
    hiringDiv.style.display = "none";
});
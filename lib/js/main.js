const submit_button = document.getElementById("submit_button");
const title_input = document.getElementById("title_input");
const noun_input = document.getElementById("noun");
const verb_input = document.getElementById("verb");
const adj_input = document.getElementById("adjective");

const storyResult = document.getElementById("story_result");
const formCont = document.querySelector(".form_container"); 



const input = document.querySelector("input");
const log = document.getElementById("main_title");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}



submit_button.onclick = function (event) {
    event.preventDefault();
    const Titleinput = title_input.value;
    const Nouninput = noun_input.value;
    const Verbinput = verb_input.value;
    const Adjinput = adj_input.value;

    if(Titleinput == "" || Nouninput == "" || Verbinput == "" || Adjinput == "") {
       alert("Please fill in all fields. Thank you!"); 
    }
    else { 

        const story = `Last night I ate a ${noun_input.value}, and today I just had to ${verb_input.value}. What a ${adj_input.value} day!`;
        
        formCont.style.display = "none"; 
        storyResult.style.display = "block";
        storyResult.textContent = story; 
    }
}

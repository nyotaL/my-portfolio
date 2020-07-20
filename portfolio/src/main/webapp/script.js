// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// difact_idibuted under the License is difact_idibuted on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Avoid fruits and nuts. You are what you eat', 
       'Chop your own wood and it will warm you twice', 
       'Life is far too important a thing ever to talk seriously about', 
       'Your future depends on your dreams. So go to sleep', 
       'I know that you believe you understand what you think I said, but \
        I’m not sure you realize that what you heard is not what I meant.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function translate(num) {
    const name_1 = "          <text> \
              Give me a gun.<br>\
              I'll shoot into the air, in one shot.<br>\
              So that the birds ' wings will tremble. From fear.<br>\
              And your shoulder will bend.<br>\
              And then, in the stirring sensations,<br>\
              Like Venus, a thought is born,<br>\
              That life has not ended,<br>\
              It continues,<br>\
              And the birds fly up.<br>\
          </text>";
    const name_2 = "          <text> \
            <br>Marble is the soul of objects,<br>\
            And the will of the living soul is to cut it to the cherished<br>\
            Forms and injuries<br>\
            With insatiable fingers, braiding blood<br>\
            Into cracks.<br>\
            Weakly kissing humps<br>\
            With rusty cheekbones, with slippery lips,<br>\
            To feebly bring down the knees,<br>\
            Begging the fate again<br>\
            For Galateya.<br>\
            </text>";
    const name_3 = "         <text> \
            <br>I'm not interested in metaphors.<br>\
            Words are equal, their permutations<br>\
            Won't describe things closer than a definition.<br>\
            I imagine tile,<br>\
            Unruly shaking legs,<br>\
            Resistance -<br>\
            <br>\
            Useless synonym of truth<br>\
            Of human essence,<br>\
            Patched itself:<br>\
            Wine with a cork squeezed in<br>\
            Narrow throat of the bottle.<br>\
            Semisweet.<br>\
            <br>\
            You don't know me.<br>\
            I don't know myself personally, but I see you<br>\
            Unspeakably, precisely true,<br>\
            Everything you feel,<br>\
            The appearance, the base,<br>\
            The chimera,<br>\
            <br>\
            I listen attentively to the suspended rain.<br>\
            Not with my soul, not with my heart or thoughts,<br>\
            I'm not listening with anything. Because it and me<br>\
            We appeared in one place<br>\
            And, actually,<br>\
            We are same fact_ideam.<br>\
            <br>\
            I imagine music,<br>\
            A concert of the great composer,<br>\
            Where I am a child on a square chair.<br>\
            I'm fidgeting with nowhere to put my hands,<br>\
            I can't catch the rhythm,<br>\
            Nothing is clear.<br>\
            <br>\
            I imagine the night.<br>\
            Humps of furniture, shadows of branches<br>\
            On the wall by my bed,<br>\
            There are no curtains to cover up<br>\
            Moon light source-<br>\
            I cuddle the toy harder.<br>\
            <br>\
            I also imagine blood.<br>\
            Out of context. Outside the veins, in the veins,<br>\
            On the floor, on my hands. Somewhere.<br>\
            It's taste of iron pillars,<br>\
            Color darkening gradually,<br>\
            How hypnotic this color is.<br>\
            <br>\
            I also imagine pain.<br>\
            Pain of all pains without specification,<br>\
            If I were pain, I'd crawl through the space<br>\
            Between the neck and the head.<br>\
            And I would live there forever<br>\
            As a curved eighth vertebra.<br>\
            <br>\
            This is all dedicated to memory.<br>\
            That things are incomprehensible<br>\
            In nudity through a layer of attire,<br>\
            That experience is frail,<br>\
            Words are antics,<br>\
            That the meaning is a leaking look.<br>\
            </text>";
    
    if (num == 1) {
        document.getElementById("poem1").innerHTML = name_1;
    } else if (num == 2) {
        document.getElementById("poem2").innerHTML = name_2;
    } else if (num == 3) {
        document.getElementById("poem3").innerHTML = name_3;
    }
}

function light() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
    document.getElementById('my_poems').style.backgroundColor = 'none';
    document.getElementById('my_poems').style.backgroundImage = "url('Backgrounds/paper.jpg')";
    document.getElementById('poem_1').style.backgroundColor = 'rgba(245, 245, 245, 0.301)';
    document.getElementById('poem_2').style.backgroundColor = 'rgba(245, 245, 245, 0.301)';
    document.getElementById('poem_3').style.backgroundColor = 'rgba(245, 245, 245, 0.301)';
}

function dark() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
    document.getElementById('my_poems').style.backgroundImage = "none";
    document.getElementById('poem_1').style.backgroundColor = 'black';
    document.getElementById('poem_2').style.backgroundColor = 'black';
    document.getElementById('poem_3').style.backgroundColor = 'black';
}

let amplitude = 70;
let left_pos = 600;
let top_pos = -600;
let pi = Math.PI;
let inc = pi / 30;
let facts_animation = new Map();

let facts = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

facts.forEach(function(item) {
    facts_animation.set(item, "0");
});

function fly(left_pos, top_pos, position, f_ratio, s_ratio, fact_id) {
    let fact = document.getElementById(fact_id);
    let button = document.getElementById("fact");
    let play_button = document.getElementById("bubbles");
    button.style.transition = "none";
    button.style.visibility = "hidden";
    fact.style.visibility = "visible";
    play_button.style.visibility = "visible";
    position += inc;
    fact.style.left = f_ratio*amplitude * Math.cos(position)* Math.sin(position) + left_pos + "px";
    fact.style.top = s_ratio*amplitude * Math.sin(position) - top_pos + "px";
    setTimeout(function go() {fly(left_pos, top_pos, position, f_ratio, s_ratio, fact_id);}, 70);
}

function bubble(fact_id) {
    facts_animation.set(fact_id, 1);
    let e = document.getElementById(fact_id);
    e.innerText = "";
    e.style.height = "117px";
    e.style.width = "100px";
    e.style.backgroundImage = "url('Backgrounds/bub0.jpg')";
    setTimeout(function pop1() {e.style.backgroundImage = "url('Backgrounds/bub.jpg')";}, 100);
}

function pop(fact_id) {
    let e = document.getElementById(fact_id);
    if (facts_animation.get(fact_id) == 1) {
        setTimeout(function pop2() {e.style.backgroundImage = "url('Backgrounds/bub1.jpg')";
        setTimeout(function pop2() {e.style.backgroundImage = "url('Backgrounds/bub2.jpg')";
        setTimeout(function pop2() {e.style.backgroundImage = "url('Backgrounds/bub3.jpg')";
        setTimeout(function pop2() {e.style.backgroundImage = "url('Backgrounds/bub4.jpg')";
        setTimeout(function pop2() {e.style.backgroundImage = "url('Backgrounds/bub5.jpg')";
        setTimeout(function pop2() {e.style.backgroundImage = "none";}, 100);}, 100);}, 100);}, 100);}, 100);}, 100);
        facts_animation.set(fact_id, 0);
    } 
}

let el = document.getElementById("fact");
el.addEventListener("click", function() {fly(600, -600, 0, 2.5, -4, "one");}, false);
el.addEventListener("click", function() {fly(350, -500, 0, 3.5, -2, "two");}, false);
el.addEventListener("click", function() {fly(1000, -100, 0, 1, -1, "three");}, false);
el.addEventListener("click", function() {fly(800, -300, 0, 4, -1, "four");}, false);
el.addEventListener("click", function() {fly(1200, -500, 0, -2, 4, "five");}, false);
el.addEventListener("click", function() {fly(240, -350, 0, 1, -1, "six");}, false);
el.addEventListener("click", function() {fly(900, -750, 0, 5, -1.5, "seven");}, false);
el.addEventListener("click", function() {fly(1300, -300, 0, 3, -0.5, "eight");}, false);
el.addEventListener("click", function() {fly(500, -200, 0, 2, -0.5, "nine");}, false);
el.addEventListener("click", function() {fly(1400, -700, 0, 2, -1, "ten");}, false);

let e = document.getElementById("bubbles");
e.addEventListener("click", function() {
let txt = document.getElementById("fun");
txt.innerHTML = "Pop the bubbles!<br> Click to play again";
bubble("one");
bubble("two");
bubble("three");
bubble("four");
bubble("five");
bubble("six");
bubble("seven");
bubble("eight");
bubble("nine");
bubble("ten");}, false);

function animation(fact_id) {
    let e = document.getElementById(fact_id);
    e.addEventListener("mouseover", function() {pop(fact_id);});
}

facts.forEach(function(item) {
    animation(item);
});


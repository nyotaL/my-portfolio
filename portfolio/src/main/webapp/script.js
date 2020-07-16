// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
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
            We are same stream.<br>\
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

var amplitude = 70;
var left_pos = 600;
var top_pos = -600;
var pi = Math.PI;
var inc = pi / 30;
var position_1=0;
var position_2=0;
var position_3=0;
var position_4=0;
var position_5=0;
var position_6=0;
var position_7=0;
var position_8=0;
var position_9=0;
var position_10=0;

function fly_1() {
    var left_pos = 600;
    var top_pos = -660;
    var obj = document.getElementById("one");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_1 += inc;
    obj.style.top = 2.5*amplitude * Math.cos(position_1)* Math.sin(position_1) + left_pos + "px";
    obj.style.left = (-4)*amplitude * Math.sin(position_1) - top_pos + "px";
    setTimeout("fly_1()", 70);
}

function fly_2() {
    var left_pos = 600;
    var top_pos = -500;
    var obj = document.getElementById("two");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_2 += inc;
    obj.style.left = amplitude * Math.cos(position_2)* Math.sin(position_2) + left_pos + "px";
    obj.style.top = (-2)*amplitude * Math.sin(position_2 + inc) - top_pos + "px";
    setTimeout("fly_2()", 70);
}
function fly_3() {
    var left_pos = 1000;
    var top_pos = -100;
    var obj = document.getElementById("three");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_3 += inc;
    obj.style.left = amplitude * Math.cos(position_3)* Math.sin(position_3) + left_pos + "px";
    obj.style.top = (-1)*amplitude * Math.sin(position_3) - top_pos + "px";
    setTimeout("fly_3()", 70);
}

function fly_4() {
    var left_pos = 800;
    var top_pos = -200;
    var obj = document.getElementById("four");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_4 += inc;
    obj.style.left = 4*amplitude * Math.cos(position_4)* Math.sin(position_4) + left_pos + "px";
    obj.style.top = (-1)*amplitude * Math.sin(position_4) - top_pos + "px";
    setTimeout("fly_4()", 70);
}

function fly_5() {
    var left_pos = 1200;
    var top_pos = -500;
    var obj = document.getElementById("five");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_5 += inc;
    obj.style.left = (-2)*amplitude * Math.cos(position_5)* Math.sin(position_5) + left_pos + "px";
    obj.style.top = 4*amplitude * Math.sin(position_5) - top_pos + "px";
    setTimeout("fly_5()", 70);
}

function fly_6() {
    var left_pos = 240;
    var top_pos = -350;
    var obj = document.getElementById("six");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_6 += inc;
    obj.style.left = amplitude * Math.cos(position_6)* Math.sin(position_6) + left_pos + "px";
    obj.style.top = (-1)*amplitude * Math.sin(position_6) - top_pos + "px";
    setTimeout("fly_6()", 70);
}

function fly_7() {
    var left_pos = 900;
    var top_pos = -800;
    var obj = document.getElementById("seven");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_7 += inc;
    obj.style.left = 5*amplitude * Math.cos(position_7)* Math.sin(position_7) + left_pos + "px";
    obj.style.top = (-1.5)*amplitude * Math.sin(position_7) - top_pos + "px";
    setTimeout("fly_7()", 70);
}

function fly_8() {
    var left_pos = 1300;
    var top_pos = -300;
    var obj = document.getElementById("eight");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_8 += inc;
    obj.style.left = 3*amplitude * Math.cos(position_8)* Math.sin(position_8) + left_pos + "px";
    obj.style.top = (-0.5)*amplitude * Math.sin(position_8) - top_pos + "px";
    setTimeout("fly_8()", 70);
}

function fly_9() {
    var left_pos = 500;
    var top_pos = -200;
    var obj = document.getElementById("nine");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_9 += inc;
    obj.style.left = 2*amplitude * Math.cos(position_9)* Math.sin(position_9) + left_pos + "px";
    obj.style.top = (-0.5)*amplitude * Math.sin(position_9) - top_pos + "px";
    setTimeout("fly_9()", 70);
}

function fly_10() {
    var left_pos = 1400;
    var top_pos = -700;
    var obj = document.getElementById("ten");
    var b = document.getElementById("fact");
    b.style.visibility = "hidden";
    obj.style.visibility = "visible";
    position_10 += inc;
    obj.style.left = 2*amplitude * Math.cos(position_10)* Math.sin(position_10) + left_pos + "px";
    obj.style.top = (-1)*amplitude * Math.sin(position_10) - top_pos + "px";
    setTimeout("fly_10()", 70);
}

var el = document.getElementById("fact");
el.addEventListener("click", fly_1);
el.addEventListener("click", fly_2);
el.addEventListener("click", fly_3);
el.addEventListener("click", fly_4);
el.addEventListener("click", fly_5);
el.addEventListener("click", fly_6);
el.addEventListener("click", fly_7);
el.addEventListener("click", fly_8);
el.addEventListener("click", fly_9);
el.addEventListener("click", fly_10);

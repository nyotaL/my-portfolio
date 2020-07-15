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
            Again trying to beg Galateya<br>\
            From fate.<br>\
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
            I'm fidgeting, with nowhere to put my hands,<br>\
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
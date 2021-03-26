
function populateCoreSkylanders () {
  const main = document.querySelector('#core_skylanders');
  let html = '';
  
  for (let i = 0; i < coreSkylanders.length; i++) {
    let character = coreSkylanders[i];
    html += `  
        <div class = "figure" id="${character.name}_div"}>
          <img src="${character.image}" alt="${character.name}">
          <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="addFigure(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have ${character.name}!</p>
        </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateInGameVariants () {
  const main = document.querySelector('#in-game_variants');
  let html = '';
  
  for (let i = 0; i < inGameVariants.length; i++) {
    let character = inGameVariants[i];
    html += `
      <div class='figure'>
      <img src="${character.image}" alt="${character.name}">
      <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="addFigure(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have<br> ${character.name}!</p>
      </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function populateMagicItems () {
  const main = document.querySelector('#magic_items');
  let html = '';
  
  for (let i = 0; i < magicItems.length; i++) {
    let character = magicItems[i];
    html += `
      <div class='figure'>
      <img src="${character.image}" alt="${character.name}">
      <form>
            <input type="checkbox" id="${character.name}" name="${character.name}" value="${character.name}" onclick="addFigure(${character.index})">
            <label for="${character.name}">${character.name}</label>
          </form>
          <p class="figure_text" style="display:none">You have ${character.name}!</p>
      </div>
    `;
  }
  
  main.insertAdjacentHTML('beforeend', html);
}

function addFigure(index) {
  const checkBox = document.querySelectorAll('input')[index];
  const text = document.querySelectorAll('.figure_text')[index];
  const figure = document.querySelectorAll('.figure')[index];

  if (checkBox.checked == true) {
    text.style.display = "block";
	  text.style.color = "#000000";
    figure.style.backgroundColor = "#c9b39c";
	  figure.style.opacity= "1";
    figure.style.fontWeight = "bold";
	  figure.style.boxShadow = "10px 10px 5px #000000";
	  figure.style.border = "1px solid #c9b39c";
  } else {
    text.style.display ="none";
    figure.style.opacity = "0.5";
    figure.style.fontWeight = "normal";
	  figure.style.boxShadow = "none";
  	figure.style.border = "none";
	  figure.style.backgroundColor = "#eeeeee";
  }
}

populateCoreSkylanders();
populateInGameVariants();
populateMagicItems();
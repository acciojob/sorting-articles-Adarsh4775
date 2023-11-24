const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let unDiv = document.createElement("div");
document.body.appendChild(unDiv);

let unOrder = document.createElement("ul");
unOrder.id = "bands";

const sortedBands = bands.slice().sort((a, b) => {
  const bandA = a.replace(/\b(?:a|an|the)\b/gi, '').trim();
  const bandB = b.replace(/\b(?:a|an|the)\b/gi, '').trim();

  // Move bands starting with "The" to the beginning
  if (bandA.startsWith("The") && !bandB.startsWith("The")) {
    return -1;
  } else if (!bandA.startsWith("The") && bandB.startsWith("The")) {
    return 1;
  }

  // Compare the rest of the bands alphabetically
  return bandA.localeCompare(bandB);
});

sortedBands.forEach((band) => {
  let unLii = document.createElement("li");
  unLii.innerText = band;
  unOrder.appendChild(unLii);
});

unDiv.appendChild(unOrder);

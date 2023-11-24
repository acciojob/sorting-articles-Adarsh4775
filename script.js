//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

 let unDiv = document.createElement("div");
  document.body.appendChild(unDiv);

 let unOrder = document.createElement("ul");
  unOrder.id = "band";

bands.forEach((band) =>{

	 let mBand = band.replace(/\b(?:a|an|the)\b/gi, '').trim();
	  let unLii = document.createElement("li");
	   unLii.innerText = mBand;
	   unOrder.appendChild(unLii);
	   unDiv.appendChild(unOrder);
	   
   });
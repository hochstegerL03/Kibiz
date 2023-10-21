function callbackFunc(entries)
{
    entries.map((entry) => {
      let arrEntries = Array.prototype.slice.call( welcomeText )
      let index = arrEntries.indexOf(entry.target);
    
      if (entry.intersectionRatio > 0) {
      if (entry.boundingClientRect.top < clientBoundingY[index] || clientBoundingY[index] === null) {
        entry.target.classList.add('appear')
      
      }
      clientBoundingY[index] = entry.boundingClientRect.top;
      
    } 
    else {
      if (entry.boundingClientRect.top > clientBoundingY[index] && clientBoundingY[index] !== null) {
        entry.target.classList.remove('appear')
      }
      clientBoundingY[index] = entry.boundingClientRect.top;
      }
  })
}

function callbackFuncTeam(entries)
{
    entries.map((entry) => {

      let index = welcomeText.length;
      if (entry.isIntersecting) {
      if (entry.boundingClientRect.top < clientBoundingY[index] || clientBoundingY[index] === null) {
        entry.target.classList.add('block-reveal')
        entry.target.classList.remove('invisible')
        clientBoundingY[index] = entry.boundingClientRect.top;
      }
      
    } 
    else {
      if (entry.boundingClientRect.top > clientBoundingY[index] && clientBoundingY[index] !== null) {
        entry.target.classList.remove('block-reveal')
        entry.target.classList.add('invisible')
      }
      clientBoundingY[index] = entry.boundingClientRect.top;
    }
      
   
  })
}



let appearObserver = new IntersectionObserver(callbackFunc);
let teamObserver = new IntersectionObserver(callbackFuncTeam);

let welcomeText = document.getElementById('welcomeText').getElementsByClassName('appearingText');

let teamMessage = document.getElementById('teamMessage')
for (const iterator of welcomeText) {
  appearObserver.observe(iterator);
}
let clientBoundingY = Array(welcomeText.length+1).fill(null)
teamObserver.observe(teamMessage);
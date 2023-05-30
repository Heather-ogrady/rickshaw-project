// EVENT LISTENER FOR DATE PICKER
if(document.getElementById('birthday')){
  document.getElementById('birthday').addEventListener('change', handleStep1);
}


// SELECT ALL RICKSHAW BUTTONS AND STORE THEM IN AN ARRAY
const selectButtons = document.getElementsByClassName('rickshaw-select');

if(selectButtons.length){
// FOR EACH RICKSHAW BUTTON ADD AN EVENT LISTENER THAT TRIGGERS THE ACCORDION STEP CLOSE
  for(const button of selectButtons){
    button.addEventListener('click', handleStep2);
  }
}

if(document.getElementById('booking-message')){
  // SET THE BOOKING MESSAGE TO HIDE BY DEFAULT UNTIL A DATE IS SELECTED
  document.getElementById('booking-message').style.display = 'none';
}

// PROCESS THE SELECTION OF THE DATE
function handleStep1(e){
  changeStep('flush-collapseOne', 'hide');
  changeStep('flush-collapseTwo', 'show');
  const date = new Date(e.target.value);
  document.getElementById('booking-date').innerText = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  document.getElementById('booking-message').style.display = 'inline';
}

// PROCESS THE CLICKING OF A RICKSHAW BUTTON
function handleStep2(){
  changeStep('flush-collapseTwo', 'hide');
  changeStep('flush-collapseThree', 'show');
}

// ANCILLARY FUNCTION FOR SWITCHING STEP OPEN / CLOSE STATUS
function changeStep(stepID, status){
  const step = document.getElementById(stepID);
  const instance = bootstrap.Collapse.getOrCreateInstance(step);
  instance[status]();
}


// SELECT ALL FOOTER LINKS AND STORE IN ARRAY

const selectFooterLinks = document.getElementsByClassName('footer-alert');

console.log(selectFooterLinks);

for(const footerLink of selectFooterLinks){
  footerLink.addEventListener('click', footerPopup);
}

function footerPopup(e){
  const linkName = e.target.innerText;
  alert(`You Have Clicked ${linkName}!`);
}

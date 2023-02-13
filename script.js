
if (location.pathname === '/personalinfo.html') {
    //   FIRST INFO INPUTS
const nameInput = document.querySelector('.name-inp')
const surnameInput = document.querySelector('.surname-inp')
const textAreaInput = document.querySelector('#text-place')
const emailInput = document.querySelector('#email-inp')
const numberInput = document.querySelector('#num-inp')



// ELSE
const aboutHeader = document.querySelector('.about-header')
const mailLogo = document.querySelector('.mail-logo')
const userImage = document.querySelector('.user-image')
const imgUpload = document.querySelector('.upload-inp')
const resMailLogo = document.querySelector('.res-mail-logo')
const resNumberLogo = document.querySelector('.res-number-logo')
const toStart = document.querySelector('.back-to-start')
// const nextPage = document.querySelector('.nextpage-info')
const nextPage = document.querySelector('.nextpage-info')



//   FIRST INFO OUTPUTS
const nameOutput = document.querySelector('.user-name')
const surnameOutput = document.querySelector('.surname')
const emailOutput = document.querySelector('.email-span')
const numberOutput = document.querySelector('.number-span')
const textAreaOutput = document.querySelector('.res-about-me')

//   SECOND INFO OUTPUTS



//  FIRST PAGE FUNCTIONAL

// let inputs = document.querySelectorAll('input');

// inputs.forEach(inp => {
//   if(inp.value.length == 0){
//     inp.style.border = ' 1px solid red'
//     nextPage.href = '#'
//   } else {
//     inp.border = '1px solid green'
//     nextPage.href = 'experiance.html'
//     }
// })


// nextPage.addEventListener('click', checkInputValues);



//    IMAGE
const storedImage = localStorage.getItem('userImage');
if (storedImage) {
  userImage.src = storedImage;
}


imgUpload.addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function(event) {
      userImage.src = event.target.result;
      localStorage.setItem('userImage', event.target.result);
    };
    reader.readAsDataURL(imgUpload.files[0]);

  });

//  NAME
nameInput.addEventListener('input', function(){
    localStorage.setItem("inputNameValue", nameInput.value);
    nameOutput.innerHTML = nameInput.value;
    
});

if (localStorage.getItem("inputNameValue")) {
    nameInput.value = localStorage.getItem("inputNameValue");
    nameOutput.innerHTML = nameInput.value;
  }
  


//  SURNAME
  surnameInput.addEventListener('input', function(){
    localStorage.setItem("inputSurameValue", surnameInput.value);
    surnameOutput.innerHTML = surnameInput.value;
});

if (localStorage.getItem("inputSurameValue")) {
    surnameInput.value = localStorage.getItem("inputSurameValue");
    surnameOutput.innerHTML = surnameInput.value;
  }  


  
 //  TEXTAREA 
  textAreaInput.addEventListener('input', function(){
    const letterNum = textAreaOutput.textContent.replace(/[^a-zA-Z,ა-ჰ,0-9]/g).length;
    if(letterNum - 1 !== 0){
    aboutHeader.innerHTML = 'ჩემ შესახებ'
    textAreaInput.style.border = '1px solid #98E37E'
    } else{
        aboutHeader.innerHTML = ''
        textAreaInput.style.border = '1px solid #BCBCBC'
        
    }

    localStorage.setItem("inputTextareaValue", textAreaInput.value);
    textAreaOutput.innerHTML = textAreaInput.value;
});


if (localStorage.getItem("inputTextareaValue")) {
    textAreaInput.value = localStorage.getItem("inputTextareaValue");
    textAreaOutput.innerHTML = textAreaInput.value;
    aboutHeader.innerHTML = 'ჩემ შესახებ'

  }  


//  EMAIL




function validateEmail(input) {
  let emailRegExp = /^[a-zA-Z0-9._%+-]+@redberry.ge$/;
  return emailRegExp.test(input.value);
}


  emailInput.addEventListener('input', function(){

    let parentDiv = emailInput.parentElement;
    let imgs = parentDiv.getElementsByTagName("img");
    let firstImage = imgs[0];
    let secondImage = imgs[1];
    let label = parentDiv.querySelector('label')
    resMailLogo.style.display = 'inline-block'




    if (!validateEmail(this)) {
      this.style.border = "1px solid #EF5050";
      label.style.color = '#EF5050'
      secondImage.style.display = 'block'
      firstImage.style.display = 'none'
      

    } else {
      this.style.border = "1px solid #98E37E";
      label.style.color = '#000000'
      secondImage.style.display = 'none'
      firstImage.style.display = 'block'
      
      
    
    }

    if(emailInput.value.length == 0){
      label.style.color = '#000000'
      secondImage.style.display = 'none'
      firstImage.style.display = 'none'
      this.style.border = "1px solid #BCBCBC";
      resMailLogo.style.display = 'none'

      
        
     
     

    }

    localStorage.setItem("inputEmailValue", emailInput.value);
    emailOutput.innerHTML =  emailInput.value;
});

if (localStorage.getItem("inputEmailValue")) {
    emailInput.value = localStorage.getItem("inputEmailValue");
    emailOutput.innerHTML = emailInput.value;
    resMailLogo.style.display = 'inline-block'
  }  



// NUMBER
  numberInput.addEventListener('input', function(){
    localStorage.setItem("inputNumberValue", numberInput.value);
    numberOutput.innerHTML =  numberInput.value;
    resNumberLogo.style.display = 'inline-block'




    let parentDiv = numberInput.parentElement;
    let imgs = parentDiv.getElementsByTagName("img");
    let firstImage = imgs[0];
    let secondImage = imgs[1];
    let label = parentDiv.querySelector('label')

    if (this.value.length !== 13 || !this.value.startsWith("+995")) {
      this.style.border = "1px solid #EF5050";
      firstImage.style.display = 'none'
      secondImage.style.display = 'block'
      label.style.color = '#EF5050'
      
      
    } else {
      this.style.border = "1px solid #98E37E";
      firstImage.style.display = 'block'
      secondImage.style.display = 'none'
      label.style.color = '#000000'
      
      
      
    }
    if(this.value.length == 0){
      this.style.border = "1px solid #BCBCBC";
      secondImage.style.display = 'none'
      firstImage.style.display = 'none'
      label.style.color = '#000000'
      resNumberLogo.style.display = 'none'
     
    }

    

    
});

if (localStorage.getItem("inputNumberValue")) {
    numberInput.value = localStorage.getItem("inputNumberValue");
    numberOutput.innerHTML = numberInput.value;
    resNumberLogo.style.display = 'inline-block'

  }  




//   FULLNAME VALIDATION  
let nameInputs = document.querySelectorAll(".namefull");

for (let i = 0; i < nameInputs.length; i++) {
  let parentDiv = nameInputs[i].parentElement;
  let imgs = parentDiv.getElementsByTagName("img");
  let firstImage = imgs[0];
  let secondImage = imgs[1];
  let label = parentDiv.querySelector('label')

  nameInputs[i].addEventListener("input", function() {
    let regExp = /^[\u10A0-\u10FF]+$/;
    if (this.value.length < 2 || !regExp.test(this.value)) {
      this.style.border = "1px solid #EF5050";
      secondImage.style.display = "block";
      firstImage.style.display = "none";
      label.style.color = '#EF5050'
      

    } else {
      this.style.border = "1px solid #98E37E";
      firstImage.style.display = "block";
      secondImage.style.display = "none";
      label.style.color = '#000000'
      trueOrNotFullName = true
    }
    if(this.value.length == 0){
      secondImage.style.display = "none";
      firstImage.style.display = "none";
      label.style.color = '#000000'
      this.style.border = "1px solid #BCBCBC";
      
    }
    
  });
}


function validateInputs() {
  const inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      return false;
    }
  }
  return true;
}

const linkToNext = document.querySelector('.link-to-next')

linkToNext.addEventListener("click", function() {
  if (validateInputs()) {
    linkToNext.href = 'experiance.html'
    
  } else {
    linkToNext.href = '#'
  }
});

toStart.addEventListener('click', function(){
  localStorage.clear();

})


















//experience pages
const expTitle2 = document.querySelector('.exp-head')
const oldJob = document.querySelector('.prev-job')
const employer = document.querySelector('.employer')
const startJobData = document.querySelector('.job-date-start')
const endJobData = document.querySelector('.job-date-end')
const jobDescription = document.querySelector('.job-deskription-user')
const dataCenter = document.querySelector('.data-center')









// getting all the values from localstorage if they exist
if(localStorage.getItem('previousjob')){
  oldJob.innerHTML = localStorage.getItem('previousjob')
  expTitle2.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('employerInp')){
  employer.innerHTML = localStorage.getItem('employerInp')
  expTitle2.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('startJobInput')){
  startJobData.innerHTML = localStorage.getItem('startJobInput')
  dataCenter.innerHTML = '-'
  expTitle2.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('endJobDataInput')){
  endJobData.innerHTML = localStorage.getItem('endJobDataInput')
  dataCenter.innerHTML = '-'
  expTitle2.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('jobDescriptionInput')){
  jobDescription.innerHTML = localStorage.getItem('jobDescriptionInput')
  expTitle2.innerHTML = 'გამოცდილება'
}









} else if (location.pathname === '/experiance.html') {


  



  //  GETTING PREVIOUS PAGE INFO

  const nameOutput = document.querySelector('.user-name')
  const surnameOutput = document.querySelector('.surname')
  const emailOutput = document.querySelector('.email-span')
  const numberOutput = document.querySelector('.number-span')
  const textAreaOutput = document.querySelector('.res-about-me')
  const aboutHeader = document.querySelector('.about-header')
  const resMailLogo = document.querySelector('.res-mail-logo')
  const resNumberLogo = document.querySelector('.res-number-logo')
  const userImage = document.querySelector('.user-image')





  if (localStorage.getItem("inputNameValue")) {
    var namevalue = localStorage.getItem("inputNameValue");
    nameOutput.innerHTML = namevalue;
  }

  if (localStorage.getItem("inputSurameValue")) {
    var surnamevalue = localStorage.getItem("inputSurameValue");
    surnameOutput.innerHTML = surnamevalue;
  }  

  if (localStorage.getItem("inputTextareaValue")) {
    aboutHeader.innerHTML = 'ჩემ შესახებ'
    textAreaValue = localStorage.getItem("inputTextareaValue");
    textAreaOutput.innerHTML = textAreaValue;
  }  

  if (localStorage.getItem("inputEmailValue")) {
    emailInputValue = localStorage.getItem("inputEmailValue");
    emailOutput.innerHTML = emailInputValue;
    resMailLogo.style.display = 'inline-block'
  }  


  if (localStorage.getItem("inputNumberValue")) {
    numberInputValue = localStorage.getItem("inputNumberValue");
    numberOutput.innerHTML = numberInputValue;
    resNumberLogo.style.display = 'inline-block'
  } 

  const storedImage = localStorage.getItem('userImage');
if (storedImage) {
  userImage.src = storedImage;
}

// PREVIOUS PAGE INFO ENDS HERE



// this pages outputs
const expTitle = document.querySelector('.exp-head')
const oldJob = document.querySelector('.prev-job')
const employer = document.querySelector('.employer')
const startJobData = document.querySelector('.job-date-start')
const endJobData = document.querySelector('.job-date-end')
const jobDescription = document.querySelector('.job-deskription-user')
const dataCenter = document.querySelector('.data-center')

const nextPage = document.querySelector('.nextpage-info')


//this pages inputs
const oldJobName = document.querySelector('.job-type')
const employerInp = document.querySelector('.employer-name')
const startJobInput = document.querySelector('.startedjob-data')
const endJobDataInput = document.querySelector('.endedjob-data')
const jobDescriptionInput = document.querySelector('.job-text-area')



// getting all the values from localstorage if they exist
if(localStorage.getItem('previousjob')){
  oldJobName.value = localStorage.getItem('previousjob')
  oldJob.innerHTML = oldJobName.value;
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('employerInp')){
  employerInp.value = localStorage.getItem('employerInp')
  employer.innerHTML = employerInp.value;
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('startJobInput')){
  startJobInput.value = localStorage.getItem('startJobInput')
  startJobData.innerHTML = startJobInput.value;
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('endJobDataInput')){
  endJobDataInput.value = localStorage.getItem('endJobDataInput')
  endJobData.innerHTML = endJobDataInput.value;
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('jobDescriptionInput')){
  jobDescriptionInput.value = localStorage.getItem('jobDescriptionInput')
  jobDescription.innerHTML = jobDescriptionInput.value;
  expTitle.innerHTML = 'გამოცდილება'

}



//  functional


//  previous job functional
oldJobName.addEventListener('input', function(){
  localStorage.setItem('previousjob', oldJobName.value)
  oldJob.innerHTML = oldJobName.value;


  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  let imgs = parentDiv.getElementsByTagName("img");
  let firstImage = imgs[0];
  let secondImage = imgs[1];
  expTitle.innerHTML = 'გამოცდილება'

  if(this.value.length < 2){
    label.style.color = '#EF5050'
    this.style.border = '1px solid #EF5050'
    firstImage.style.display = 'none'
    secondImage.style.display = 'block'
     
    

  }  else{
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'block'
    this.style.border = '1px solid #98E37E'
    

  }
  
   if(this.value.length == 0){
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'none'
    this.style.border = '1px solid #BCBCBC'
    
  }

})


//  employee functional
employerInp.addEventListener('input', function(){
  localStorage.setItem('employerInp', employerInp.value)
  employer.innerHTML = employerInp.value;


  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  let imgs = parentDiv.getElementsByTagName("img");
  let firstImage = imgs[0];
  let secondImage = imgs[1];
  expTitle.innerHTML = 'გამოცდილება'

  if(this.value.length < 2){
    label.style.color = '#EF5050'
    this.style.border = '1px solid #EF5050'
    firstImage.style.display = 'none'
    secondImage.style.display = 'block'
    
    

  }  else{
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'block'
    this.style.border = '1px solid #98E37E'
   

  }
  
   if(this.value.length == 0){
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'none'
    this.style.border = '1px solid #BCBCBC'
    
  } else{
    expTitle.innerHTML = 'გამოცდილება'
    
  }

})




// started job

startJobInput.addEventListener('input', function(){
  localStorage.setItem('startJobInput', startJobInput.value)
  startJobData.innerHTML = startJobInput.value;
  dataCenter.innerHTML = '-'

  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  
  expTitle.innerHTML = 'გამოცდილება'

  if(this.value.length < 2){
    label.style.color = '#EF5050'
    this.style.border = '1px solid #EF5050'
    
    
    

  }  else{
    label.style.color = '#000000'
    
    this.style.border = '1px solid #98E37E'
 

  }
  
   if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = '1px solid #BCBCBC'
    
    dataCenter.innerHTML = ''

  } else{
    expTitle.innerHTML = 'გამოცდილება'
    
  }

})

// end job
endJobDataInput.addEventListener('input', function(){
  localStorage.setItem('endJobDataInput', endJobDataInput.value)
  endJobData.innerHTML = endJobDataInput.value;
  dataCenter.innerHTML = '-'


  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  
  expTitle.innerHTML = 'გამოცდილება'

  if(this.value.length < 2){
    label.style.color = '#EF5050'
    this.style.border = '1px solid #EF5050'
    
    
    

  }  else{
    label.style.color = '#000000'
    
    this.style.border = '1px solid #98E37E'
   
  }
  
   if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = '1px solid #BCBCBC'
    
    dataCenter.innerHTML = ''
  } else{
    expTitle.innerHTML = 'გამოცდილება'
    
  }

})


// job description

jobDescriptionInput.addEventListener('input', function(){
  localStorage.setItem('jobDescriptionInput', jobDescriptionInput.value)
  jobDescription.innerHTML = jobDescriptionInput.value;
  

  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  
  expTitle.innerHTML = 'გამოცდილება'

  if(this.value.length < 2){
    label.style.color = '#EF5050'
    this.style.border = '1px solid #EF5050'
    
    
    

  }  else{
    label.style.color = '#000000'
    
    this.style.border = '1px solid #98E37E'
 

  }
  
   if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = '1px solid #BCBCBC'
   
    dataCenter.innerHTML = ''

  } else{
    expTitle.innerHTML = 'გამოცდილება'
    
  }

})



// add another form functional

const formWrapp = document.querySelector('.form-wrapp');
const moreExperience = document.querySelector('.more-experiance');

let count = 0

moreExperience.addEventListener('click', function(){

  
  
  count++
  const newForm = document.createElement('form')
  newForm.setAttribute('class', `form${count}`)
  newForm.innerHTML = `<div class="job">
  <label for="jobname">თანამდებობა</label>
  <input name="position" class="job-type${count}" type="text" placeholder="დეველოპერი, დიზაინერი, ა.შ."><span><img  class="green-name-job" src="./assets/done-right.png" alt=""></span><span><img  class="red-name-job" src="./assets/exclemation.png" alt=""></span>
  <p>მინიმუმ 2 სიმბოლო</p>
</div>

<div class="job">
  <label for="jobname">დამსაქმებელი</label>
  <input name="employer" class="employer-name${count}" type="text" placeholder="დამსაქმებელი"><span><img  class="green-name-employer" src="./assets/done-right.png" alt=""></span><span><img  class="red-name-employer" src="./assets/exclemation.png" alt=""></span>
  <p>მინიმუმ 2 სიმბოლო</p>
</div>

<div class="job-datas">

  <div class="start-job">
      <label for="startdata">დაწყების რიცხვი</label>
      <input class="startedjob-data${count}" type="date" name="start-date" id="">
      <span><img  class="green-name-mail" src="./assets/done-right.png" alt=""></span>
      <span><img  class="red-name-mail" src="./assets/exclemation.png" alt=""></span>
  </div>

  <div class="end-job">
      <label for="startdata">დამთავრების რიცხვი</label>
      <input class="endedjob-data${count}" type="date" name="due-date" id="">
      <span><img  class="green-name-mail" src="./assets/done-right.png" alt=""></span>
      <span><img  class="red-name-mail" src="./assets/exclemation.png" alt=""></span>
  </div>

</div>

<div class="textarea-div">
  <label for="jobdescription">აღწერა</label>
  <textarea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა" class="job-text-area${count}" name="description" id="" cols="30" rows="10"></textarea>
</div>

<hr class="second-hr" >`

  formWrapp.appendChild(newForm)

  const jobType = document.querySelector(`.job-type${count}`);
  const employerName = document.querySelector(`.employer-name${count}`);
  const startData = document.querySelector(`.startedjob-data${count}`);
  const endData = document.querySelector(`.endedjob-data${count}`);
  const jobDescription = document.querySelector(`.job-text-area${count}`);

 





  jobType.addEventListener('input', function(){
    
    const prevJob = document.querySelector(`.prev-job${count}`);
    prevJob.innerHTML = jobType.value;
  })

  employerName.addEventListener('input', function(){
    
    const employer = document.querySelector(`.employer${count}`);
    employer.innerHTML = this.value;
  })


  startData.addEventListener('input', function(){
    
    const started = document.querySelector(`.job-date-start${count}`);
    started.innerHTML = this.value;
    const midle = document.querySelector(`.data-center${count}`)
    midle.innerHTML = '-'
  })

  endData.addEventListener('input', function(){
    
    const ended = document.querySelector(`.job-date-end${count}`);
    ended.innerHTML = this.value;
  })



  jobDescription.addEventListener('input', function(){
    
    const descriptionNew = document.querySelector(`.job-deskription-user${count}`);
    descriptionNew.innerHTML = this.value;
  })

  

  const secondInfo = document.querySelector('.second-info')

  const newInfo = document.createElement('div')
  newInfo.innerHTML = `<div class="second-inner">
  <p class="prev-job${count}"> </p>
  <p class= "employer${count}"></p>
</div>

<div class="dates">
  <p class="job-date-start${count}"></p>
  <p class="data-center${count}"></p>
  <p class="job-date-end${count}"> </p>
</div>

<p class="job-deskription-user${count}"> </p>`

secondInfo.appendChild(newInfo)


})
  

const refresh = document.querySelector('.refresh-btn')

refresh.addEventListener('click',  function(){
  localStorage.clear();
})














} else if (location.pathname === '/education.html'){

  
  // previous pages outputs
  const aboutHeader = document.querySelector('.about-header')
  const resMailLogo = document.querySelector('.res-mail-logo')
  const resNumberLogo = document.querySelector('.res-number-logo')
  const userImage = document.querySelector('.user-image')
  const expTitle = document.querySelector('.exp-head')
  const oldJob = document.querySelector('.prev-job')
  const employer = document.querySelector('.employer')
  const startJobData = document.querySelector('.job-date-start')
  const endJobData = document.querySelector('.job-date-end')
  const jobDescription = document.querySelector('.job-deskription-user')
  const dataCenter = document.querySelector('.data-center')
  const nameOutput = document.querySelector('.user-name')
  const surnameOutput = document.querySelector('.surname')
  const emailOutput = document.querySelector('.email-span')
  const numberOutput = document.querySelector('.number-span')
  const textAreaOutput = document.querySelector('.res-about-me')



// placing previous pages info
if(localStorage.getItem('previousjob')){
  oldJob.innerHTML = localStorage.getItem('previousjob');
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('employerInp')){
  employer.innerHTML = localStorage.getItem('employerInp')
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('startJobInput')){
  startJobData.innerHTML = localStorage.getItem('startJobInput')
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('endJobDataInput')){
  endJobData.innerHTML = localStorage.getItem('endJobDataInput')
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('jobDescriptionInput')){
  jobDescription.innerHTML = localStorage.getItem('jobDescriptionInput')
  expTitle.innerHTML = 'გამოცდილება'
}

if (localStorage.getItem("inputNameValue")) {
  var namevalue = localStorage.getItem("inputNameValue");
  nameOutput.innerHTML = namevalue;
}

if (localStorage.getItem("inputSurameValue")) {
  var surnamevalue = localStorage.getItem("inputSurameValue");
  surnameOutput.innerHTML = surnamevalue;
}  

if (localStorage.getItem("inputTextareaValue")) {
  aboutHeader.innerHTML = 'ჩემ შესახებ'
  textAreaValue = localStorage.getItem("inputTextareaValue");
  textAreaOutput.innerHTML = textAreaValue;
}  

if (localStorage.getItem("inputEmailValue")) {
  emailOutput.innerHTML = localStorage.getItem("inputEmailValue");
  resMailLogo.style.display = 'inline-block'
}  


if (localStorage.getItem("inputNumberValue")) {
  numberInputValue = localStorage.getItem("inputNumberValue");
  numberOutput.innerHTML = numberInputValue;
  resNumberLogo.style.display = 'inline-block'
} 

const storedImage = localStorage.getItem('userImage');
if (storedImage) {
userImage.src = storedImage;
}

//  working onthis pages  functional

// inputs
const uniInput = document.querySelector('.universityInp')
const degreeInput = document.querySelector('.degreeInp')
const finishUniInput = document.querySelector('.endeduni-data')
const uniDescription = document.querySelector('.uni-text-area')
const addUniBtn = document.querySelector('.more-education')

// title

const eduTitle = document.querySelector('.edu-title')


//outputs
const uniOutput = document.querySelector('.university')
const degreeOutput = document.querySelector('.degree')
const finishUniOutput = document.querySelector('.uni-date')
const uniDescriptionOutput = document.querySelector('.education-description')

const finish = document.querySelector('.nextpage-info')

// getting this page data

if(localStorage.getItem('institute')){
  uniInput.value = localStorage.getItem('institute')
  uniOutput.innerHTML = uniInput.value
  eduTitle.innerHTML = 'განათლება'
}

 if(localStorage.getItem('degree')){
degreeInput.value = localStorage.getItem('degree')
degreeOutput.innerHTML = degreeInput.value
eduTitle.innerHTML = 'განათლება'  
 }

if(localStorage.getItem('due_data')){
finishUniInput.value = localStorage.getItem('due_data')
finishUniOutput.innerHTML = finishUniInput.value
eduTitle.innerHTML = 'განათლება'  
}

if(localStorage.getItem('description')){
  uniDescription.value = localStorage.getItem('description')
  uniDescriptionOutput.innerHTML = uniDescription.value
  eduTitle.innerHTML = 'განათლება'  
  }




//validations

uniInput.addEventListener('input', function(){

  let parentDiv = this.parentElement;
  let imgs = parentDiv.getElementsByTagName("img");
  let firstImage = imgs[0];
  let secondImage = imgs[1];
  let label = parentDiv.querySelector('label')
  eduTitle.innerHTML = 'განათლება';

  if (this.value.length  < 2) {
    this.style.border = "1px solid #EF5050";
    label.style.color = '#EF5050'
    secondImage.style.display = 'block'
    firstImage.style.display = 'none'
    

  } else {
    this.style.border = "1px solid #98E37E";
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'block'
  }

  if(this.value.length == 0){
    label.style.color = '#000000'
    secondImage.style.display = 'none'
    firstImage.style.display = 'none'
    this.style.border = "1px solid #BCBCBC";
  }

  localStorage.setItem(`institute`, this.value);
  uniOutput.innerHTML =  uniInput.value;
});



degreeInput.addEventListener('input', function(){

  var selectedOption = degreeInput.options[degreeInput.selectedIndex];
  var selectedOptionId = selectedOption.id;
  console.log(selectedOptionId)

  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  eduTitle.innerHTML = 'განათლება';
  

  if (this.value.length == 0) {
    this.style.border = "1px solid #EF5050";
    label.style.color = '#EF5050'
  } else {
    this.style.border = "1px solid #98E37E";
    label.style.color = '#000000'
  }
  if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = "1px solid #BCBCBC";
  }

  localStorage.setItem(`degree`, this.value);
  degreeOutput.innerHTML =  degreeInput.value;

  localStorage.setItem(`degreeId`, selectedOptionId);

  
});



finishUniInput.addEventListener('input', function(){

  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  eduTitle.innerHTML = 'განათლება';

  if (this.value.length == 0) {
    this.style.border = "1px solid #EF5050";
    label.style.color = '#EF5050'
  } else {
    this.style.border = "1px solid #98E37E";
    label.style.color = '#000000'
  }
  if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = "1px solid #BCBCBC";
  }

  localStorage.setItem(`due_data`, this.value);
  finishUniOutput.innerHTML =  finishUniInput.value;
});


uniDescription.addEventListener('input', function(){

  let parentDiv = this.parentElement;
  let label = parentDiv.querySelector('label')
  eduTitle.innerHTML = 'განათლება';

  if (this.value.length == 0) {
    this.style.border = "1px solid #EF5050";
    label.style.color = '#EF5050'
  } else {
    this.style.border = "1px solid #98E37E";
    label.style.color = '#000000'
  }
  if(this.value.length == 0){
    label.style.color = '#000000'
    this.style.border = "1px solid #BCBCBC";
  }

  localStorage.setItem(`description`, this.value);
  uniDescriptionOutput.innerHTML =  uniDescription.value;
});


const refresh = document.querySelector('.refresh-btn')

refresh.addEventListener('click',  function(){
  localStorage.clear();
})




// const allInputs = document.querySelectorAll('.all')

// allInputs.forEach(El => {
//   El.addEventListener('input', function(){
//     let parentDiv = this.parentElement;
//     let label = parentDiv.querySelector('label')
//     let imgs = parentDiv.getElementsByTagName("img");
//     let firstImage = imgs[0];
//     let secondImage = imgs[1];
//     if(El.value.length < 2 || !El.value){
//       El.style.border = "1px solid #EF5050";
//       secondImage.style.display = "block";
//       firstImage.style.display = "none";
//       label.style.color = '#EF5050'
//     }
//   })
// })




//  api work

 async function fetchAndDisplayDegrees() {
  const response = await fetch("https://resume.redberryinternship.ge/api/degrees");
  const values = await response.json();

  const degreeInput = document.querySelector('.degreeInp')

  values.forEach(value => {
    const option = document.createElement("option");
    option.setAttribute('id', value.id)
    option.innerText = value.title;
    degreeInput.appendChild(option);
  });

}

fetchAndDisplayDegrees();


/*       WAS TRYING TO WORK WITH API HATE IMAGE :)

finish.addEventListener('click', function(){
  let name = localStorage.getItem('inputNameValue');
  let surname = localStorage.getItem('inputSurameValue');
  let aboutMe = localStorage.getItem('inputTextareaValue');
  let email = localStorage.getItem('inputEmailValue');
  let phoneNumber = localStorage.getItem('inputNumberValue');
  let imageString = localStorage.getItem('userImage');
  const image = new Image();
  image.src = imageString;
  console.log(image)

const byteString = atob(image.src.split(',')[1]);
console.log(byteString)
const ab = new ArrayBuffer(byteString.length);
const ia = new Uint8Array(ab);
for (let i = 0; i < byteString.length; i++) {
  ia[i] = byteString.charCodeAt(i);
}
const blob = new Blob([ab], { type: 'image/jpeg' });
  console.log(blob)


  let position = localStorage.getItem('previousjob');
  let employer = localStorage.getItem('employerInp');
  let start_data = localStorage.getItem('startJobInput')
  let due_data = localStorage.getItem('endJobDataInput')
  let jobDescription = localStorage.getItem('jobDescriptionInput')

  let institute = localStorage.getItem('institute');
  let degree = localStorage.getItem('degree');
  let degreeId = localStorage.getItem('degreeId');
  let due_data_uni = localStorage.getItem('due_data')
  let description = localStorage.getItem('description')
const data = {
  name: name,
  surname: surname,
  email: email,
  phone_number: phoneNumber,
  experiences: [
    {
      position: position,
      employer: employer,
      start_date: start_data,
      due_date: due_data,
      description: jobDescription
    }
  ],
  educations: [
    {
      degree_id: degreeId,
      institute: institute,
      degree: degree,
      due_date: due_data_uni,
      description: description
    }
  ],
  image: blob,
  about_me: aboutMe
}


fetch('https://resume.redberryinternship.ge/api/cvs', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Store the response data in local storage
    localStorage.setItem('apiData', JSON.stringify(data));

    // Navigate to the fourth page
    window.location.href = '#';
  })
  .catch(error => {
    console.error(error);
  });

  console.log(localStorage.getItem('apiData'))
});
 
 */


  








} else if (location.pathname === '/result.html'){

  const aboutHeader = document.querySelector('.about-header')
  const resMailLogo = document.querySelector('.res-mail-logo')
  const resNumberLogo = document.querySelector('.res-number-logo')
  const userImage = document.querySelector('.user-image')
  const expTitle = document.querySelector('.exp-head')
  const oldJob = document.querySelector('.prev-job')
  const employer = document.querySelector('.employer')
  const startJobData = document.querySelector('.job-date-start')
  const endJobData = document.querySelector('.job-date-end')
  const jobDescription = document.querySelector('.job-deskription-user')
  const dataCenter = document.querySelector('.data-center')
  const nameOutput = document.querySelector('.user-name')
  const surnameOutput = document.querySelector('.surname')
  const emailOutput = document.querySelector('.email-span')
  const numberOutput = document.querySelector('.number-span')
  const textAreaOutput = document.querySelector('.res-about-me')
  const eduTitle = document.querySelector('.edu-title')

console.log('sadsas')

// placing previous pages info
if(localStorage.getItem('previousjob')){
  oldJob.innerHTML = localStorage.getItem('previousjob');
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('employerInp')){
  employer.innerHTML = localStorage.getItem('employerInp')
  expTitle.innerHTML = 'გამოცდილება'
}

if(localStorage.getItem('startJobInput')){
  startJobData.innerHTML = localStorage.getItem('startJobInput')
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('endJobDataInput')){
  endJobData.innerHTML = localStorage.getItem('endJobDataInput')
  expTitle.innerHTML = 'გამოცდილება'
  dataCenter.innerHTML = '-'

}

if(localStorage.getItem('jobDescriptionInput')){
  jobDescription.innerHTML = localStorage.getItem('jobDescriptionInput')
  expTitle.innerHTML = 'გამოცდილება'
}

if (localStorage.getItem("inputNameValue")) {
  var namevalue = localStorage.getItem("inputNameValue");
  nameOutput.innerHTML = namevalue;
}

if (localStorage.getItem("inputSurameValue")) {
  var surnamevalue = localStorage.getItem("inputSurameValue");
  surnameOutput.innerHTML = surnamevalue;
}  

if (localStorage.getItem("inputTextareaValue")) {
  aboutHeader.innerHTML = 'ჩემ შესახებ'
  textAreaValue = localStorage.getItem("inputTextareaValue");
  textAreaOutput.innerHTML = textAreaValue;
}  

if (localStorage.getItem("inputEmailValue")) {
  emailOutput.innerHTML = localStorage.getItem("inputEmailValue");
  resMailLogo.style.display = 'inline-block'
}  


if (localStorage.getItem("inputNumberValue")) {
  numberInputValue = localStorage.getItem("inputNumberValue");
  numberOutput.innerHTML = numberInputValue;
  resNumberLogo.style.display = 'inline-block'
} 

const storedImage = localStorage.getItem('userImage');
if (storedImage) {
userImage.src = storedImage;

}

const uniOutput = document.querySelector('.university')
const degreeOutput = document.querySelector('.degree')
const finishUniOutput = document.querySelector('.uni-date')
const uniDescriptionOutput = document.querySelector('.education-description')

const finish = document.querySelector('.nextpage-info')

// getting this page data

if(localStorage.getItem('institute')){
  uniOutput.innerHTML = localStorage.getItem('institute')
  
  eduTitle.innerHTML = 'განათლება'
}

 if(localStorage.getItem('degree')){
  degreeOutput.innerHTML = localStorage.getItem('degree')

eduTitle.innerHTML = 'განათლება'  
 }

if(localStorage.getItem('due_data')){
  finishUniOutput.innerHTML = localStorage.getItem('due_data')

eduTitle.innerHTML = 'განათლება'  
}

if(localStorage.getItem('description')){
  uniDescriptionOutput.innerHTML = localStorage.getItem('description')
  
  eduTitle.innerHTML = 'განათლება'  
  }

const back = document.querySelector('.back').addEventListener('click', function(){
  localStorage.clear()
})

const closeBox = document.querySelector('.close-box').addEventListener('click', function(){
    let box = document.querySelector('.congrats-box')
    box.style.display = 'none'
})


}

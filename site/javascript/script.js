buttonOne=document.getElementById('one');
buttonTwo=document.getElementById('two');
buttonThree=document.getElementById('three');
buttonFour=document.getElementById('four');
buttonFive=document.getElementById('five');
buttonSix=document.getElementById('six');

mblOne=document.getElementById('One');
mblTwo=document.getElementById('Two');
mblThree=document.getElementById('Three');
mblFour=document.getElementById('Four');
mblFive=document.getElementById('Five');
mblSix=document.getElementById('Six');

partOne=document.getElementById('partOne');
partTwo=document.getElementById('partTwo');
partThree=document.getElementById('partThree');
partFour=document.getElementById('partFour');
partFive=document.getElementById('partFive');
partSix=document.getElementById('partSix');

//for Desktop
buttonOne.addEventListener('click',(e)=>{
    partOne.style.display =partOne.style.display==''?'inline':'';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display =''
    partSix.style.display =''

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
buttonTwo.addEventListener('click',(e)=>{
    partTwo.style.display =partTwo.style.display==''?'inline':'';
    partOne.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonOne.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
buttonThree.addEventListener('click',(e)=>{
    partThree.style.display =partThree.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonOne.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
buttonFour.addEventListener('click',(e)=>{
    partFour.style.display =partFour.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display =';'
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonOne.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';


})
buttonFive.addEventListener('click',(e)=>{
    partFive.style.display =partFive.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonOne.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
buttonSix.addEventListener('click',(e)=>{
    partSix.style.display =partSix.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonOne.innerText='Learn More';

})

//for mbl
mblOne.addEventListener('click',(e)=>{
    partOne.style.display =partOne.style.display==''?'inline':'';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display =''
    partSix.style.display =''

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
mblTwo.addEventListener('click',(e)=>{
    partTwo.style.display =partTwo.style.display==''?'inline':'';
    partOne.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    buttonTwo.innerText='Learn More';
    buttonThree.innerText='Learn More';
    buttonFour.innerText='Learn More';
    buttonFive.innerText='Learn More';
    buttonSix.innerText='Learn More';

})
mblThree.addEventListener('click',(e)=>{
    partThree.style.display =partThree.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    mblTwo.innerText='Learn More';
    mblOne .innerText='Learn More';
    mblFour.innerText='Learn More';
    mblFive.innerText='Learn More';
    mblSix.innerText='Learn More';

})
mblFour.addEventListener('click',(e)=>{
    partFour.style.display =partFour.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display =';'
    partFive.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    mblTwo.innerText='Learn More';
    mblThree.innerText='Learn More';
    mblOne.innerText='Learn More';
    mblFive.innerText='Learn More';
    mblSix.innerText='Learn More';


})
mblFive.addEventListener('click',(e)=>{
    partFive.style.display =partFive.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partSix.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    mblTwo.innerText='Learn More';
    mblThree.innerText='Learn More';
    mblFour.innerText='Learn More';
    mblOne.innerText='Learn More';
    mblSix.innerText='Learn More';

})
mblSix.addEventListener('click',(e)=>{
    partSix.style.display =partSix.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';

    e.target.innerText=(e.target.innerText==='Learn More'?'Close':'Learn More');
    mblTwo.innerText='Learn More';
    mblThree.innerText='Learn More';
    mblFour.innerText='Learn More';
    mblFive.innerText='Learn More';
    mblOne.innerText='Learn More';

})
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




buttonOne.addEventListener('click',(e)=>{
    partOne.style.display =partOne.style.display==''?'inline':'';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display =''
    partSix.style.display =''

    // buttonOne.innerHtml=buttonOne.innerHtml=='Learn More'?'Close':'Learn More';
    // console.log(buttonOne.innerHtml);
})
buttonTwo.addEventListener('click',()=>{
    partTwo.style.display =partTwo.style.display==''?'inline':'';
    partOne.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';
})
buttonThree.addEventListener('click',()=>{
    partThree.style.display =partThree.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';
})
buttonFour.addEventListener('click',()=>{
    partFour.style.display =partFour.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display =';'
    partFive.style.display ='';
    partSix.style.display ='';

})
buttonFive.addEventListener('click',()=>{
    partFive.style.display =partFive.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partSix.style.display ='';
})
buttonSix.addEventListener('click',()=>{
    partSix.style.display =partSix.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
})
mblOne.addEventListener('click',(e)=>{
    partOne.style.display =partOne.style.display==''?'inline':'';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display =''
    partSix.style.display =''

    // buttonOne.innerHtml=buttonOne.innerHtml=='Learn More'?'Close':'Learn More';
    // console.log(buttonOne.innerHtml);
})
mblTwo.addEventListener('click',()=>{
    partTwo.style.display =partTwo.style.display==''?'inline':'';
    partOne.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';
})
mblThree.addEventListener('click',()=>{
    partThree.style.display =partThree.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
    partSix.style.display ='';
})
mblFour.addEventListener('click',()=>{
    partFour.style.display =partFour.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display =';'
    partFive.style.display ='';
    partSix.style.display ='';

})
mblFive.addEventListener('click',()=>{
    partFive.style.display =partFive.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partSix.style.display ='';
})
mblSix.addEventListener('click',()=>{
    partSix.style.display =partSix.style.display==''?'inline':'';
    partOne.style.display ='';
    partTwo.style.display ='';
    partThree.style.display ='';
    partFour.style.display ='';
    partFive.style.display ='';
})
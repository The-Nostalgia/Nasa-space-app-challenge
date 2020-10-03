buttonOne=document.getElementById('one');
buttonTwo=document.getElementById('two');
buttonThree=document.getElementById('three');
buttonFour=document.getElementById('four');
buttonFive=document.getElementById('five');
buttonSix=document.getElementById('six');

partOne=document.getElementById('partOne');
partTwo=document.getElementById('partTwo');
partThree=document.getElementById('partThree');
partFour=document.getElementById('partFour');
partFive=document.getElementById('partFive');
partSix=document.getElementById('partSix');




buttonOne.addEventListener('click',()=>{
    partOne.style.display =partOne.style.display==''?'inline':'';
})
buttonTwo.addEventListener('click',()=>{
    partTwo.style.display =partTwo.style.display==''?'inline':'';
})
buttonThree.addEventListener('click',()=>{
    partThree.style.display =partThree.style.display==''?'inline':'';
})
buttonFour.addEventListener('click',()=>{
    console.log("Button 4 clicked");
    partFour.style.display =partFour.style.display==''?'inline':'';

})
buttonFive.addEventListener('click',()=>{
    partFive.style.display =partFive.style.display==''?'inline':'';
})
buttonSix.addEventListener('click',()=>{
    partSix.style.display =partSix.style.display==''?'inline':'';
})
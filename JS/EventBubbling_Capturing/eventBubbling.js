// addEventListener('event', () => {}, unCaptureFlag);
// by default event bubble will happen. i.e child first and then parent and then superparent

// document.querySelector('#grandparent').addEventListener('click', () => {
//     console.log('Super Parent is clicked');
// }, false);

// document.querySelector('#parent').addEventListener('click', () => {
//     console.log('Parent Clicked');
// }, false);

// document.querySelector('#child').addEventListener('click', ()=> {
//     console.log('child Clicked');
// }, false);

//if true is passed then it is capturing that is parent will be called first and then child
//e.stopPropogation();

//Event Delegation example 1
//blur focus relising and scrolling does not bubbleup in the hirarchy

// document.querySelector('#catagories').addEventListener('click', (e) => {
//     if(e.target.nodeName == 'LI'){
//         window.location.href = e.target.id
//     }
// })

// document.querySelector('#idform').addEventListener('keyup', (e) => {
//     if(e.target.dataset.uppercase != undefined){
//         e.target.value = e.target.value.toUpperCase();
//     }
// })

document.querySelector('.Containers').addEventListener('click',(e) => {
    console.log(e.target.dataset);
    let restarentIdNumber = e.target.dataset.restaurentid;
    let operation = e.target.dataset.operation;
    alert(`you have pressed ${operation.toUpperCase()} from ${+restarentIdNumber}`);
})

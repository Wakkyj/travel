// let right = 0;

document.querySelector('#pin1').addEventListener('click',function(){
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '540px';
});

document.querySelector('#pin2').addEventListener('click',function(){
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '1400px';
});

document.querySelector('#pin3').addEventListener('click',function(){
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '2260px';
});

document.querySelector('#photo1').addEventListener('click',function(){
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '540px';
    return 0;
});

document.querySelector('#photo1-2').addEventListener('click',function(){
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '540px';
    return 0;
});

document.querySelector('#photo2').addEventListener('click',function(){
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '1400px';
});

document.querySelector('#photo3').addEventListener('click',function(){
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '2260px';
});

document.querySelector('#photo3-2').addEventListener('click',function(){
    document.getElementById('pin3').style.background = 'rgba(242, 120, 92, 1)';
    document.getElementById('pin1').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('pin2').style.background = 'rgba(242, 120, 92, 0.5)';
    document.getElementById('Slider').style.right = '2260px';
});

console.log('?????????????? ???????????????? +10 \n?????????????? ?????????????????????????? +20\n?????????????? ?????????????????????????? ???????????? +48\n???????????????????? ?? css + 12\n??????????????????????????????, ?????????????????????? ?????????? css +15');




// document.body.style.background = "red";
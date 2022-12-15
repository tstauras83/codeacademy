let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let ats1 = [];
let ats2 = 0;
let ats3 = 0;
let ats4 = 0;

document.getElementById('dats1').innerHTML +='<br> Adding together: ' + arr1 + ' and ' + arr2 + '<br> will result in: <br>';
document.getElementById('dats2').innerHTML +='<br> Subtracting: ' + arr1 + ' from ' + arr2 + '<br> will result in: <br>';
document.getElementById('dats3').innerHTML +='<br> Dividing: ' + arr1 + ' and ' + arr2 + '<br> will result in: <br>';
document.getElementById('dats4').innerHTML +='<br> Multiplying: ' + arr1 + ' and ' + arr2 + '<br> will result in: <br>';

function add(){
    for(let i1 = 0; i1 < arr1.length; i1++){
        for (let j1 = 0; j1 < arr2.length; j1++){
            ats1=arr1[i1]+arr2[j1];
            document.getElementById('dats1').innerHTML+='Adding: ' + arr1[i1]+' + '+arr2[j1] + ' = ' + ats1 + '<br>';
        }
    }
}
add();

function subtract(){
    for(let i2 = 0; i2 < arr1.length; i2++){
        for (let j2 = 0; j2 < arr2.length; j2++){
            ats2 = arr1[i2] - arr2[j2];
            document.getElementById('dats2').innerHTML += 'Subtracting: ' + arr1[i2] + ' - ' + arr2[j2] + ' = ' + ats2 + '<br>';
        }
    }
}
subtract();

function divide(){
    for(let i3 = 0; i3 < arr1.length; i3++){
        for (let j3 = 0; j3 < arr2.length; j3++){
            ats3 = arr1[i3] / arr2[j3];
            document.getElementById('dats3').innerHTML += 'Dividing: ' + arr1[i3] + ' / ' + arr2[j3] + ' = ' + ats3 + '<br>';
        }
    }
}
divide();

function multiply(){
    for(let i4 = 0; i4 < arr1.length; i4++){
        for (let j4 = 0; j4 < arr2.length; j4++){
            ats4 = arr1[i4] * arr2[j4];
            document.getElementById('dats4').innerHTML += 'Multiplying: ' + arr1[i4] + ' * ' + arr2[j4] + ' = ' + ats4 + '<br>';
        }
    }
}
multiply();





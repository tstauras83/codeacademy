let lightState = true;

function ToggleLight(){
    let img = document.getElementById('lights');
    img.src = '../resources/images/light_off.png';

    if(lightState){
        LightParameters(img, 'off')

        }else{
        LightParameters(img, 'on')
    }
    lightState = !lightState;

}


function LightParameters(img, param){
    img.src = '../resources/images/light_'+ param + '.png';

    let alt = "lights" + param;

    img.setAttribute("alt", alt);

}
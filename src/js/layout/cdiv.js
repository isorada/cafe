import {div1, div2, div3} from '../package/cPackage.js'
import {h1, h1_1} from '../package/cPackage.js'
import {button1, button2} from '../package/cPackage.js'

export default async function cdiv() {
div1.id="cdiv1"
    h1.id=""
    h1.innerHTML="LEFT"
    button1.id="button_x"
    button1.innerHTML="X"
div1.append(h1,button1)
    //
div2.id="cdiv2"
    h1_1.id=""
    h1_1.innerHTML="RIGHT"
    button2.id="button_y"
    button2.innerHTML="Y"
div2.append(h1_1,button2)
document.body.append(div1,div2);
}

button1.onclick=async function(){ document.location.href="" }
button2.onclick=async function(){ document.location.href="" }
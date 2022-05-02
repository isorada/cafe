import { div1, div2, div3, div4, div5,div6, div7, div8 } from "../package/hPackage.js"
import { h1, h1_1, h1_2, h1_3 } from "../package/hPackage.js"
import { img1, img2, img3 } from "../package/hPackage.js"

export default async function hdiv() {

    div1.id="hdiv1"
    img1.id="logo"
        img1.src="https://isorada.github.io/cafe/src/logo/logo.png"
            //
        div2.id="hdiv2"
            h1.id="divh1"
            h1.innerHTML="HELLO WORLD"
            img2.id="img1"
            img2.src="https://images4.alphacoders.com/863/thumbbig-863095.webp"
        div2.append(img2,h1)
            //
        div3.id="hdiv3"
            h1_1.id="divh1_2"
            h1_1.innerHTML="HELLO WORLD2"
            img3.id="img2"
            img3.src="https://images3.alphacoders.com/276/thumbbig-276785.webp"
        div3.append(img3,h1_1)
    div1.append(img1,div2, div3)
        //
    div4.id="hdiv4"
            //
        div5.id="hdiv5"
            h1_2.id="divh1_3"
            h1_2.innerHTML="HELLO WORLD3"
        div5.append(h1_2)
            //
        div6.id="hdiv6"

        div6.append()
            //
        div7.id="hdiv7"
            h1_3.id="divh1_4"
            h1_3.innerHTML="HELLO WORLD4"
        div7.append(h1_3)
            //
        div8.id="hdiv8"

        div8.append()
    div4.append(div5,div7,div6,div8)

        //    
document.body.append(div1,div4)
}
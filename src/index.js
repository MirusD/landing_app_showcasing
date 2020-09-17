import './main'
import {priceHolder} from "@/components/price-holder/price-holder"
import {accordion} from "@/components/accordion/accordion"
import 'slick-carousel'

priceHolder();
accordion();

$('.feedback').slick({
    infinite: false,
    nextArrow: `<button type = "button" class = "slick-next slick-arrow">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>`,
    prevArrow: `<button type = "button" class = "slick-prev slick-arrow">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>`
})

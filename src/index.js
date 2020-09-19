import './main'
import {priceHolder} from "@/components/price-holder/price-holder"
import {accordion} from "@/components/accordion/accordion"
import 'slick-carousel'
import 'magnific-popup'

priceHolder();
accordion();

$('.js-open-popup-video').magnificPopup({
    type: 'iframe'
})

$('.js-popup-subscribe__submit').click(function () {
    const gratitude = $('#gratitude').removeClass('mfp-hide')

    $('.popup__container').html('').append(gratitude)
    setTimeout($.magnificPopup.close, 1000)
})
$('.js-open-popup-subscribe').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
})

$('.feedback').slick({
    infinite: false,
    nextArrow: `<button type = "button" class = "slick-next slick-arrow">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>`,
    prevArrow: `<button type = "button" class = "slick-prev slick-arrow">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>`
})

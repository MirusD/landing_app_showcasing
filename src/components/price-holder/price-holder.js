const price = {
    month: {business: 0, 'pro master': 99},
    year: {business: 0, 'pro master': 150}
}
const $cards = $('.js-card');
const $toggle = $('.js-toggle');


function getHtmlPriceField (price, interval) {
    return `$${price}<span class="card__sub font-main">/${interval}</span>`
}

function updatePriceCards (obj, interval) {
    $cards.each((_, el) => {
        const priceField = $(el).find('.card__price')
        const html = getHtmlPriceField(obj[$(el).attr('data-card-type')], interval)
        priceField.html(html)
    })
}

export function priceHolder() {
    $toggle.click(function(el) {
        const type = $(el.target).attr('data-btn-type')

        if (type) {
            $toggle.children().removeClass('color_eighth')
            $(el.target).addClass('color_eighth')
            updatePriceCards(price[type], type);

            if (type === 'year') {
                $toggle.addClass('on')
            } else if(type === 'month') {
                $toggle.removeClass('on')
            }
        }
    });
}
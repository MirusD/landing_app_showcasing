export function accordion() {
    $('.accordion__item').each((_, el) => {
        if ($(el).hasClass('show')) {
            $(el).find('.accordion__title').next().slideDown(350)
        }
    })

    $('.accordion__title').click(function(e) {
        const $accordionTitle = $(this)
        const $accordion = $accordionTitle.parent().parent();
        const $accordionItem = $accordionTitle.parent();

        if ($accordionItem.hasClass('show')) {
            $accordionItem.removeClass('show')
            $accordionTitle.next().slideUp(350);
        } else {
            $accordion.find('.accordion__item').removeClass('show');
            $accordion.find('.accordion__text').slideUp(350)
            $accordionItem.toggleClass('show')
            $accordionTitle.next().slideToggle(350)
        }
    })
}
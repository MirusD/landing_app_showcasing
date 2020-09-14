export class Card {
    constructor(selector, options = {}) {
        this.$root = document.querySelector(selector);
        this.options = {
            type: options.type ? options.type : 'Prime',
            title: options.title ? options.title : 'Card title',
            subtitle: options.title ? options.subtitle : '',
            price: options.price ? options.price : '0',
            body: options.body ? options.body : ['Card body']
        }
        this.render();
    }
    toHTML() {
        return `
            <div class="card">
                <header class="card__header">
                    <h2 class="font-h2 card__price">$${this.options.price}<span class="card__sub font-main">/month</span></h2>
                    <h3 class="font-h4 card__category">${this.options.title}</h3>
                    <p class="card__subtext">${this.options.subtitle}</p>
                </header>
                    <div class="card__body">
                        ${wrapInTheTagP(this.options.body)}
                    </div>
                    <a href="link-for-start-free-trail" class="btn btn__primary card__btn">Start free trail</a>
            </div>
        `
    }

    render() {
        this.$root.innerHTML = this.toHTML();
    }
}

function wrapInTheTagP (text = []) {
    const arr = text.map(item => `<p>${item}</p>`);
    return arr.join('')
}
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    class Card {
        constructor (src, alt, title, descr, selector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(selector);
            this.classes = classes; 
        }

        checkClasses(card) {
            if(this.classes.length === 0)
            {
                card.classList.add('about_item');
            } else {
                this.classes.forEach(className => {
                    card.classList.add(className);
                });
            }
        }
    }

    class AboutCard extends Card {
        constructor(src, alt, title, descr, selector, ...classes) {
            super(src, alt, title, descr, selector, classes);
            this.render();
        }
        render() {
            const card = document.createElement('div');
            this.checkClasses(card);
            card.innerHTML = `
                <img src="${this.src}" alt="${this.alt}" class="about_img">
                <div class="about_disc">
                    <span>${this.title}</span>
                    <br><br>
                    ${this.descr}
                </div>
            `;
            console.log(card.innerHTML);
            this.parent.append(card);
        }
    }

    class Blogpost extends Card {
        constructor(src, alt, title, descr, likeCount, commentCount, data, selector, ...classes) {
            super(src, alt, title, descr,  selector, ...classes)
        }
    }


    new AboutCard(
        'icons/about_us/1.png',
        '1',
        'creative design and optimized code',
        'We try to use the latest technologies and make a quality and attractive product',
        '.about_items',
        'about_item'
        );

    new AboutCard(
        'icons/about_us/2.png',
        '2',
        'creative design and optimized code',
        'We try to use the latest technologies and make a quality and attractive product',
        '.about_items',
        'about_item'
        );

    new AboutCard(
        'icons/about_us/3.png',
        '3',
        'indefinite warranty',
        'We do not deceive our customers, because our reputation is most important to us.',
        '.about_items',
        'about_item'
        );



















});
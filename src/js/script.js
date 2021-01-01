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
            this.parent.append(card);
        }
    }




        //About Card

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

        //Blogpost Card

        class BlogpostCard extends Card {
            constructor(src, alt, title, descr, likeCount, commentCount, date, selector, ...classes) {
                super(src, alt, title, descr,  selector, ...classes);
                this.likeCount = likeCount;
                this.commentCount = commentCount;
                this.date = this.dateTransform(date);
                this.render();
            }
    
            dateTransform(date) {
                return date.toLocaleString('en-US', {       
                    year: 'numeric', 
                    month: 'long',
                    day: 'numeric'       
                  });           
            }
    
            render() {
                const card = document.createElement('div');
                this.checkClasses(card);
                card.innerHTML = `           
                <img src="${this.src}" alt="${this.alt}"></img>
                <div class="blog_post_text">
                    <span class="post_main">${this.title}</span>
                    <span class="post_info">${this.descr}</span>
                    <div class="the_end">
                        <div class="left">
                            <img src="img/blog/time.png"></img>
                            ${this.date}
                        </div>
                        <div class="right">
                            <img src="img/blog/like.png"></img>
                            ${this.likeCount}
                            <img src="img/blog/com.png" class="second"></img>
                            ${this.commentCount}
                        </div>                                 
                    </div>
                </div>
                `;            
                this.parent.append(card);
            }
        }

    new BlogpostCard(
        'img/blog13.png',
        '1',
        'Create Creative & Clean',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cupiditate est aut dolores neque, obcaecati expedita ullam vero maiores',
        25,
        11,
        new Date(),
        '.blog_field',
        'blog_post'
    );

    new BlogpostCard(
        'img/blog.png',
        '2',
        'Make A Sleek Break',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cupiditate est aut dolores neque, obcaecati expedita ullam vero maiores',
        25,
        11,
        new Date(),
        '.blog_field',
        'blog_post'
    );

    new BlogpostCard(
        'img/blog13.png',
        '1',
        'Creative Manipulations',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis cupiditate est aut dolores neque, obcaecati expedita ullam vero maiores',
        25,
        11,
        new Date(),
        '.blog_field',
        'blog_post'
    );

    // Services Card

    class ServiceCard extends Card {
        constructor(title, descr, price, selector, ...classes) {
            super();
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(selector);
            this.price = price;
            this.classes = classes;
            this.checkPrice();
            this.render();
        }
        checkPrice() {
            if(this.price == 0) {
                this.price = 'Free';
            } else {
                this.price = '$' + this.price;
            }
        }
        render() {
            const card = document.createElement('div');
            this.checkClasses(card);
            card.innerHTML = `
                <div class="top_info">
                    <span class="name_price">${this.title}</span>
                    <span class="price">${this.price}</span>
                </div>
                <div class="bot_info">
                    <div class="services">
                        ${this.descr}                  
                    </div>
                    <button class="purchase">Buy</button>
                </div>               
            `;
            this.parent.append(card);
        }
    }

    new ServiceCard(
        'basic',
        '20 Pages<br>2 GB Storage<br>150 Members<br>2 Contributios',
        0,
        '.inf_plan',
        'block_info'
    );   
      
    new ServiceCard(
        'standart',
        '25 Pages<br>10 GB Storage<br>300 Members<br>5 Contributios',
        24,
        '.inf_plan',
        'block_info'
    ); 
  
    new ServiceCard(
        'premium',
        '30 Pages<br>20 GB Storage<br>500 Members<br>10 Contributios',
        40,
        '.inf_plan',
        'block_info'
    ); 

    new ServiceCard(
        'PROFESSIONAL',
        '40 Pages<br>40 GB Storage<br>1000 Members<br>20 Contributios',
        75,
        '.inf_plan',
        'block_info'
    ); 

    // Оформлення сервісу, якщо навести то з'являється бордер

    const servicesCards = document.querySelectorAll('.block_info');

    servicesCards.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            card.classList.add('focus');
        });
        card.addEventListener('mouseout', (e) => {
            card.classList.remove('focus');
        });
    });

    // Обробка повідомлення
    const textBoxesName = document.querySelector('[data-name]'),
          textBoxesMail = document.querySelector('[data-mail]'),
          textBoxesMessage = document.querySelector('[data-message]'),
          sendMessage = document.querySelector('[data-send]');

    sendMessage.addEventListener('click', () => {

        if(textBoxesName.value != '' && textBoxesMail.value != '' && textBoxesMessage.value != '') {
            let validMail = false;
            for (let i = 0; i < textBoxesMail.value.length; i++) {
                if(textBoxesMail.value[i]  == '@') {
                    validMail = true;
                    break;
                }
            }
            if(validMail == true) {
                const message = `${textBoxesName.value}: ${textBoxesMessage.value}
                mail:${textBoxesMail.value}`;
                textBoxesName.value = '';
                textBoxesMail.value = '';
                textBoxesMessage.value = '';
                console.log(message);
            } else {
                alert('Емейл не валідний');
            }

        } else {
            alert('ВИ, каліка, як так можна, не ввести в текстові поля!');
        }

    }); 

     // Створення запису в галереї

     const menuItemDB = {
        'allElem': [],
        'parent': document.querySelector('.menu_content'),
        'photo': [],
        'webDesign': [],
        'brending': [],
        'mobileApp':[],
        'pushOnPage': function(elem) {
            menuItemDB.parent.append(elem);
        }   
     };

     class MenuItem {
        constructor (src, alt, selector, type, ...classes) {
            this.src = src;
            this.alt = alt;
            this.parent = document.querySelector(selector);
            this.classes = classes;
            this.type = type;
            this.render();
        }

        addElem(elem) {
            
            this.classes.forEach(className => {
                elem.classList.add(className);
            });

            elem.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
            `;
            
            return elem;
        }

        render() {
            const elem = document.createElement('div');
            switch(this.type) {
                case 1: {                  
                    menuItemDB.photo.push(this.addElem(elem)); 
                    menuItemDB.allElem.push(this.addElem(elem));                  
                    break;
                }
                case 2: {
                    menuItemDB.webDesign.push(this.addElem(elem));
                    menuItemDB.allElem.push(this.addElem(elem));   
                    break;
                }
                case 3: {                   
                    menuItemDB.brending.push(this.addElem(elem));
                    menuItemDB.allElem.push(this.addElem(elem));  
                    break;
                }
                case 4: {                   
                    menuItemDB.mobileApp.push(this.addElem(elem));
                    menuItemDB.allElem.push(this.addElem(elem));   
                    break;
                }
                default: {
                    console.log('Error: This type can not be find');
                }
            }
        }
    }
          
    const item1 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        1,
        'menu_item'
    );
    const item2 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        2,
        'menu_item'
    );
    const item3 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        3,
        'menu_item'
    );
    const item4 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        4,
        'menu_item'
    );
    const item5 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        1,
        'menu_item'
    );
    const item6 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        2,
        'menu_item'
    );
    const item7 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        2,
        'menu_item'
    );
    const item8 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        3,
        'menu_item'
    );

    const item9 = new MenuItem(
        'img/blog13.png',
        '2',
        '.menu_content',
        4,
        'menu_item'
    );
  
  
  
  


    // Обробка кліку на workItem

    const workItems = document.querySelectorAll('.work_item');
    const menu = document.querySelector('.menu_content');

    function pushAllOnPage() {
        menuItemDB.allElem.forEach((item) => {
            menuItemDB.pushOnPage(item);
        });
    }

    pushAllOnPage();

    workItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            switch(i) {
                case 0: {
                    menu.innerHTML = '';
                    pushAllOnPage();
                    break;
                }
                case 1: {
                    menu.innerHTML = '';
                    menuItemDB.photo.forEach((item) => {
                        menuItemDB.pushOnPage(item);
                    });
                    break;
                }
                case 2: {
                    menu.innerHTML = '';
                    menuItemDB.webDesign.forEach((item) => {
                        menuItemDB.pushOnPage(item);
                    });
                    break;
                }
                case 3: {
                    menu.innerHTML = '';
                    menuItemDB.brending.forEach((item) => {
                        menuItemDB.pushOnPage(item);
                    });
                    break;
                }
                case 4: {
                    menu.innerHTML = '';
                    menuItemDB.mobileApp.forEach((item) => {
                        menuItemDB.pushOnPage(item);
                    });
                    break;
                }
                default: {
                    console.log('Error: This type can not be find');
                }
            }

            workItems.forEach((itemForRemove) => {
                itemForRemove.classList.remove('changeMenu');
            });
            item.classList.add('changeMenu');


        });
    });


    //Динамічна секція скілл

    const profileProcessing = {
        'profile': [],
        'pushOnPage': function(elem, selector) {
            document.querySelector(selector).append(elem);
        },
        'circleEvent': function() {
            const circles = [document.querySelector('[data-circle1]'), document.querySelector('[data-circle2]')];
            let check = false;   

            function getNumImg(src) {
                for(let i = 0; i < src.length; i++) {
                    if(i == '1') {
                        return '1';
                    }
                    if(i == '2') {
                        return '2';
                    }
                }               
            }

            function checkNumOnClickedElement(num) {
                if(num == 1) {
                    return '1';
                }
                return '2';
            }
            function checkNumOnNotClickedElement(num) {
                if(num == 1) {
                    return '2';
                }
                return '1';
            }

            circles[0].addEventListener('click', () => {
                const num = getNumImg(circles[0].querySelector('img').src);
                circles[0].innerHTML = `
                <button data-circle1>
                    <img src="img/Skill/${checkNumOnClickedElement(num)}.png" class="cir"></img>
                </button>
                `;

                circles[1].innerHTML = `
                <button data-circle2>
                    <img src="img/Skill/${checkNumOnNotClickedElement(num)}.png" class="cir"></img>
                </button>
                `;
                
            });


            circles[1].addEventListener('click', () => {
                const num = getNumImg(circles[1].querySelector('img').src);

                circles[1].innerHTML = `
                <button data-circle1>
                    <img src="img/Skill/${checkNumOnClickedElement(num)}.png" class="cir"></img>
                </button>
                `;

                circles[0].innerHTML = `
                <button data-circle2>
                    <img src="img/Skill/${checkNumOnNotClickedElement(num)}.png" class="cir"></img>
                </button>
                `;
            });

        } 

    };

    function  checkProfileNumber(number, numProfile) {
        switch(numProfile) {
            case 1: {
                if (number == 1) {
                    return '1';
                } else {
                    return '2';
                }
                break;
            }
            case 2: {
                if (number == 2) {
                    return '1';
                } else {
                    return '2';
                }
                break;
            }
            default: {
                console.log('Error: Profile failed');
                break;
            }
        }
    }

    

    class Profile {
        constructor(nameSurname, avatarSrc, profession, descrSkill, skillCount, numProfile, ...classes) {
            this.nameSurname = nameSurname;
            this.avatar = avatarSrc;
            this.profession = profession;
            this.descrSkill = descrSkill;
            this.skillCounts = skillCount;
            this.classes = classes;
            this.numProfile = numProfile;
            this.render();
        }

        updateProgress() {
            const parents = document.querySelectorAll('.hr');
                  

            parents.forEach((parent, i) => {
                const skillBar = document.createElement('div');

                skillBar.classList.add('progress_bar');
                skillBar.style.width = `${this.skillCounts[i]}%`;
                parent.append(skillBar);
            });

            
        }


        render() {
            const elem = document.createElement('div');

            this.classes.forEach((className) => {
                elem.classList.add(className);
            });            

            elem.innerHTML = `
                <div class="name_skill">
                    <div class="name_skill_main">
                        <div class="avatar_skill">
                            <img src="${this.avatar}">
                        </div>
                        <div class="skill_name">
                            ${this.nameSurname}
                        </div>
                        <div class="work_skill">
                            ${this.profession}
                        </div>
                        <div class="img_social">
                            <button><img src="img/Social2/1.png"></img></button>
                            <button><img src="img/Social2/2.png"></img></button>
                            <button><img src="img/Social2/3.png"></img></button>
                        </div>
                        <div class="circle_skill">
                            <button data-circle1>
                                <img src="img/Skill/${checkProfileNumber(1, this.numProfile)}.png" class="cir"></img>
                            </button>
                            <button data-circle2>
                                <img src="img/Skill/${checkProfileNumber(2, this.numProfile)}.png" class="cir"></img>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="skill_info">
                    <div class="skill_text">
                        <div class="get_skill">
                            MY SKILLS
                        </div>
                        <div class="bottom-info">
                            ${this.descrSkill}
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill_line">
                            <div class="skill_name">PHOTOSHOP</div>
                            <div class="hr">
                                
                            </div> 
                            <div class="skill_count">${this.skillCounts[0]}%</div>
                        </div>
                        <div class="skill_line">
                            <div class="skill_name">ILLUSTRATOR</div>
                            <div class="hr">
                                
                            </div> 
                            <div class="skill_count">${this.skillCounts[1]}%</div>
                        </div>
                        <div class="skill_line">
                            <div class="skill_name">SKETCH</div>
                            <div class="hr">
                            
                            </div> 
                            <div class="skill_count">${this.skillCounts[2]}%</div>
                        </div>

                        <div class="skill_line">
                            <span class="skill_name">AFTER EFFECTS</span>
                            <div class="hr">

                            </div>                         
                            <div class="skill_count">${this.skillCounts[3]}%</div>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.skills .container').append(elem);
            this.updateProgress();

            profileProcessing.profile.push(document.querySelector('.skill_display'));
            profileProcessing.circleEvent('.circle_skill');
        }
    }

    const skillCounts = [88, 92, 90, 98];

    const profile1 = new Profile(
        'ROSTISLAV MIKHAYLOVSKIY',
        'img/Skill/circle.png',
        'DESIGNER AND PROGRAMER',
        'I have skills in Photoshop and some other design programs. I can machine sites in HTML and CSS. I have a level of junior JavaScript and a libraries React and Redux. ',
        skillCounts,
        1,
        'skill_display'
    );
    











});
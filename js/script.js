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
        `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Officiis cupiditate est aut dolores neque, obcaecati expedita ullam 
        vero maiores`,
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
        `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Officiis cupiditate est aut dolores neque, 
        obcaecati expedita ullam vero maiores`,
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
        `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Officiis cupiditate 
        est aut dolores neque, obcaecati expedita ullam vero maiores`,
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
     //Модальне вікно, відправлення замовлення на сервер

     const message = {
        loading: 'img/form/Rolling-1s-200px.svg',
        success: 'Thank you. We will reply as soon as possible',
        failure: 'Error...'
    };

    function showModal(modal) {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }
    function removeResultsModal() {
        const dialogs = document.querySelectorAll('.modal__dialog');
        dialogs.forEach(dialog => {
            if(!(dialog.classList.contains('hide'))) {
                dialog.remove();
            }
        });
    }

    function addEventCloseModal(modal) {       
        modal.addEventListener('click', (e) => {
            if(e.target == modal || e.target.getAttribute('data-close') == '' ) {    
                const dialogs = modal.querySelectorAll('.modal__dialog');
                if(dialogs.length > 1) {
                    removeResultsModal();                 
                }  
                closeModal(modal);         
                const prevModal = modal.querySelector('.modal__dialog');
                if(prevModal.classList.contains('hide')) {
                    prevModal.classList.remove('hide');
                }
                prevModal.querySelector('form').reset();                     
            }
        });        
    }

    function send(form, serviceTitle) {
        const prevModal = document.querySelector('.modal__dialog'); 

        prevModal.classList.add('hide');

        showResultModal(message.loading, prevModal);

        if(serviceTitle == undefined) {
            serviceTitle = null;
        }

        const formData = new FormData(form),
              object = getObject(serviceTitle);
             
        function getObject(serviceTitle ) {
           if(serviceTitle != null) {
            return {
                'serviceName': serviceTitle
            };
            } else {
                return {};
            } 
        }       
        
        formData.forEach((value, key) => {
            object[key] = value;
        });

        fetch('server.php',{
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(object)
        }).then(data => {
            console.log(data.text());
            showResultModal(message.success, prevModal);
        }).catch(() => {
            showResultModal(message.failure, prevModal);
        }).finally(() => form.reset());

    }

    function showResultModal(answer) {
        const resultModal = document.createElement('div'),
              modal = document.querySelector('.modal');

        removeResultsModal();
        
        resultModal.classList.add('modal__dialog');

        if(answer == message.loading) {
            const loading = document.createElement('img');

            loading.src = answer;
            loading.classList.add('img_loading');

            resultModal.innerHTML = `
            <div class="modal__content">
            </div> 
            `;

            modal.append(resultModal);
            resultModal.querySelector('.modal__content').append(loading);
        } else {
            resultModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>  
                <div class="modal__title">${answer}</div>
            </div> 
            `;

            modal.append(resultModal);

        }
        
    }

    const servicesCards = document.querySelectorAll('.block_info'),
          modal = document.querySelector('.modal');
    
    addEventCloseModal(modal);

    servicesCards.forEach(card => {
        card.addEventListener('click', () => {
            const modal = document.querySelector('.modal'),
                  title = modal.querySelector('.modal__title'),
                  serviceTitle = card.querySelector('.name_price'),
                  form = document.querySelector('.modal__content .form');

            title.innerHTML = `
            <div class="modal__title">
                Are you sure that you want to order <br><span>${serviceTitle.textContent}</span> service?
            </div>
            `;
            showModal(modal);
            form.addEventListener('submit', (e) =>{
                e.preventDefault();
                send(form, serviceTitle.textContent);
            });          
        });

    });
    

    // Обробка повідомлення

    const form = document.querySelector('.send_main .form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showModal(modal);
        send(form);
    });

     // Створення запису в галереї

     /*Згодом переробити для баз даних*/ 

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

    /* Додати анімацію*/ 


   


    const profileProcessing = {
        'parent' :document.querySelector('.skills .container'),
        'profiles': [],
        'addClass': function(elem) {
            elem.classList.add('circleActive');
        },
        'swapClass': function(classAdd, classRemove) {
            this.addClass(classAdd);
            classRemove.classList.remove('circleActive');
        },
        'pushOnPage':function(profileNum) {
            this.parent.innerHTML ='';
            this.parent.append(this.profiles[profileNum]);  
            this.circleUpdate(profileNum);
        },
        'circleUpdate': function(profileNum) {
            const buttons = document.querySelectorAll('.circle_skill button'),
                  circles = document.querySelectorAll('button .circle');
            
            if(profileNum == 0) {
                this.swapClass(circles[0],circles[1]);
            } else {
                this.swapClass(circles[1],circles[0]);
            }

            buttons.forEach((button, i) => {
                button.addEventListener('click', () =>{                    
                    if(!circles[i].classList.contains('circleActive')) {
                        this.pushOnPage(i);
                        this.swapClass(circles[i],circles[1],circles[(circles.length) - (i + 1)]);
                    }
                });
            });
        } 

    };  

    class Profile {
        constructor(nameSurname, avatarSrc, profession, descrSkill, skillCount, ...classes) {
            this.nameSurname = nameSurname;
            this.avatar = avatarSrc;
            this.profession = profession;
            this.descrSkill = descrSkill;
            this.skillCounts = skillCount;
            this.classes = classes;
            this.render();
        }

        updateProgress(skillCount) {                

            return `<div class="progress_bar" style="width:${skillCount}%"></div>`;
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
                            <button>
                               <div class="circle"></div> 
                            </button>
                            <button>
                                <div class="circle"></div>
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
                                ${this.updateProgress(this.skillCounts[0])}
                            </div> 
                            <div class="skill_count">${this.skillCounts[0]}%</div>
                        </div>
                        <div class="skill_line">
                            <div class="skill_name">ILLUSTRATOR</div>
                            <div class="hr">
                            ${this.updateProgress(this.skillCounts[1])}
                            </div> 
                            <div class="skill_count">${this.skillCounts[1]}%</div>
                        </div>
                        <div class="skill_line">
                            <div class="skill_name">SKETCH</div>
                            <div class="hr">
                                ${this.updateProgress(this.skillCounts[2])}
                            </div> 
                            <div class="skill_count">${this.skillCounts[2]}%</div>
                        </div>

                        <div class="skill_line">
                            <span class="skill_name">AFTER EFFECTS</span>
                            <div class="hr">
                                ${this.updateProgress(this.skillCounts[3])}
                            </div>                         
                            <div class="skill_count">${this.skillCounts[3]}%</div>
                        </div>
                    </div>
                </div>
            `;
            profileProcessing.profiles.push(elem);
        }
    }

    const skillCounts1 = [100, 70, 80, 88];

    const profile1 = new Profile(
        'ROSTISLAV MIKHAYLOVSKIY',
        'img/Skill/circle.png',
        'DESIGNER AND SOME PROGRAMER',
        `I have skills in Photoshop and some other design programs. 
        I can machine sites in HTML and CSS. I have a level of junior JavaScript.`,
        skillCounts1,
        'skill_display'
    );
    
    const skillCounts2 = [80, 95, 96, 88];

    const profile2 = new Profile(
        'Roman Gnilenky',
        'img/Skill/circle.png',
        'PROGRAMER AND SOME DESIGNER',
        'I can machine sites in HTML and CSS. I have a level of junior JavaScript and a libraries React and Redux. ',
        skillCounts2,
        'skill_display'
    );
    
    profileProcessing.pushOnPage(0);

   







});
const slides = document.querySelectorAll('.slider__item'),
      prev = document.querySelector('.slider__control_left'),
      next = document.querySelector('.slider__control_right'),
      slidesWrapper = document.querySelector('.slider'),
      slidesField = document.querySelector('.slider__wrapper'),
      width = window.getComputedStyle(slidesWrapper).width;

let slideIndex=1;
let offset = 0;
console.log(next);
slidesField.style.width= `${25 * slides.length}%`;
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == (+width.slice(0, width.length - 2)/3 )) {
        offset = 0;
    } else {
        offset += (+width.slice(0, width.length - 2))/3; 
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset += (+width.slice(0, width.length - 2))/3;
    } else {
        offset -= (+width.slice(0, width.length - 2))/3;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});



    let tabTitles = document.querySelectorAll('.tab-title');
    let tabContents = document.querySelectorAll('.tab-content');

    for (let i = 0; i < tabTitles.length; i++) {
        tabTitles[i].addEventListener('click', function(){
            for (let j = 0; j < tabTitles.length; j++) {
                tabTitles[j].classList.remove('tab-title--open');
                tabContents[j].classList.remove('z-10');
            }

            tabTitles[i].classList.add('tab-title--open');
            tabContents[i].classList.add('z-10');
        });
    }
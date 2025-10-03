const spidermanFights = [
    {
        title: "Людина-Павук проти Зеленого Гобліна",
        description: "Фінальна, надзвичайно жорстока битва з Норманом Озборном, особливо пам'ятна завдяки подіям у 'The Amazing Spider-Man' №122 та фіналу фільму 'Людина-Павук' (2002).",
        villain: "Зелений Гоблін",
        medium: "Комікси/Фільм",
        search_keywords: "Гоблін, Озборн, Норман, ASM 122, смерть Гвен Стейсі"
    },
    {
        title: "Людина-Павук проти Доктора Восьминога (Битва на потязі)",
        description: "Культова сцена з фільму 'Людина-Павук 2' (2004), де Пітер зупиняє некерований потяг після виснажливої битви з Доком Оком, демонструючи свою надлюдську силу та самопожертву.",
        villain: "Доктор Восьминіг",
        medium: "Фільм",
        search_keywords: "Док Ок, Октавіус, потяг, Spider-Man 2, залізнична битва"
    },
    {
        title: "Людина-Павук проти Джаггернаута",
        description: "Класична сюжетна арка 'Ніщо не зупинить Джаггернаута!' (ASM №229-230). Битва, де Павук перемагає завдяки незламній волі та хитрості, а не грубій силі.",
        villain: "Джаггернаут",
        medium: "Комікси",
        search_keywords: "Джаггернаут, Невпинний, ASM 229, сила, хитрість"
    },
    {
        title: "Людина-Павук проти Морлуна",
        description: "Перша зустріч із міжвимірним хижаком у 'Coming Home' (ASM #30-35, 1999), яка показала нового, смертельно небезпечного ворога, здатного довести Павука до межі.",
        villain: "Морлун",
        medium: "Комікси",
        search_keywords: "Морлун, хижак, Комінг Хоум, містичний"
    },
    {
        title: "Людина-Павук проти Кінгпіна (У чорному)",
        description: "Емоційно заряджена та жорстока розправа над Вілсоном Фіском після замаху на тітку Мей у сюжеті 'Back in Black'.",
        villain: "Кінгпін",
        medium: "Комікси",
        search_keywords: "Кінгпін, Фіск, Вілсон, Чорний Костюм, помста"
    },
    {
        title: "Троє Павуків проти Злочинців",
        description: "Фінальна битва у фільмі 'Людина-Павук: Додому шляху нема' (2021), де Пітер Паркер (Том Голланд) об'єднується з версіями Тобі Маґвайра та Ендрю Гарфілда, щоб перемогти злочинців із мультивсесвіту.",
        villain: "Мультивсесвітні Злочинці",
        medium: "Фільм",
        search_keywords: "Три Павуки, Мультивсесвіт, Ноу Вей Хоум, Додому шляху нема, Ендрю, Тобі"
    }
];

const main = document.querySelector('.search-results');


function displayFights(list) {
    list.forEach(fight => {
        console.log(`Title: ${fight.title}`);
        console.log(`Description: ${fight.description}`);

        const fightDiv = document.createElement('div');
        fightDiv.classList.add('p');
        fightDiv.appendChild(document.createTextNode(`Битва: ${fight.title}`));
        fightDiv.appendChild(document.createElement('br'));
        fightDiv.appendChild(document.createTextNode(`Опис: ${fight.description}`));
        main.appendChild(fightDiv);
    });
}

displayFights(spidermanFights);

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    main.innerHTML = '';    
    const results = spidermanFights.filter(function(fight) {
        return fight.search_keywords.includes(query) || fight.title.toLowerCase().includes(query) || fight.description.toLowerCase().includes(query);
    })
    
    if(results.length > 0) {
        displayFights(results);
    }else{
        const p_notfound = document.createElement('p');
        p_notfound.appendChild(document.createTextNode('Нічого не знайдено'));
        p_notfound.style.textAlign = 'center';
        p_notfound.style.fontSize = '24px';
        p_notfound.style.margin = '20px';
        main.appendChild(p_notfound);
    }

});

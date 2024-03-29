import './styles/App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Gallery from "./Gallery/Gallery";
import Author from "./Author/Author";
import Error404 from "./Error404";
import {BrowserRouter as Router, Route, Routes,  Link } from "react-router-dom";

const allData = {
    witcherDescription : 'Воістину, немає нічого більш огидного,\n ' +
        'аніж монстри оні, натурі противні, відьмаками іменовані,\n ' +
        'бо вони суть плоди мерзосвітнього чарівництва і диавольства.\n' +
        'Це є мерзотники без гідності, совісті й честі, справжні породження пекла,\n ' +
        'токмо до убієніям пристосовані.\n ' +
        'Нема таким, як вони, місця між людьми поважними.\n' +
        '― Монструм, або відьмака опис',
    
    witcherDescriptionTwo : 'Відьмаки (пол. Wiedźmin; англ. The Witcher) — стерильні\n ' +
        'мутанти з надприродними здібностями, які пройшли\n ' +
        'спеціальну підготовку, щоб стати професійними\n' +
        ' винищувачами чудовиськ за наймом.\n',
    
    witcherDescriptionThree : 'Відьмани, інакше відьмаки серед Нордлінгів таємнича і елітарна' +
        ' каста жерців-воїтелів, ймовірно відгалуження друїдів.\n' +
        'Наділені у народній уяві магічними чи надлюдськими здібностями, займались боротьбою ' +
        'проти злих духів, потвор і всіляких темних сил. Насправді, майстерно володіючи зброєю,' +
        ' використовувались володарями Півночі у міжплемінній боротьбі, яка між ними точились.' +
        ' У бою вони впадали у транс, викликаний, як вважається, самонавіюванням чи одурманюючими' +
        ' засобами, бились зі сліпою енергією, у цей час цілком невразливі до болю і навіть серйозних ран,' +
        ' що викликало чутки про їх надприродну силу. Теорія, згідно якої вони мали бути продуктами мутації' +
        ' чи генної інженерії, не знайшла підтвердження. Вони є героями численних переказів Нордлінгів' +
        ' (пор. Ф. Деланхой, «Міти і легенди народів Півночі»).\n' +
        '― Еффенберг і Тальбот\n' +
        'Encyclopaedia Maxima Mundi, том XV',
    
    authorPhoto : 'https://4pda.to/s/as6yz2tIxBSk4VaFJSTCavOBMknxR34td0q5R.jpg?v=1675419940',
    author : 'Анджей Сапковський народився 1948 році в місті Лодзь, де й закінчив університет, факультет зовнішньої торгівлі. З 1972 по 1994 рік працював у торгівлі.\n' +
        '\n' +
        '1986 року написав фентезійну новелу «Відьмак», у якій створив свого головного героя — відьмака Ґеральта з Рівії, майстра меча й магії, який за гроші вбиває монстрів і різноманітні міфічні створіння у фентезійному світі. Перші чотири оповідання про відьмака були видані в збірці «Відьмак».\n' +
        '\n' +
        '1990 року вийшла друга книга письменника, що складалася із семи оповідань (як нових, так і тих, що були видані раніше) під одним загальним заголовком «Останнє бажання», яка була перевидана 1993 року. 1992 року Сапковський видав нову книгу про відьмака — «Меч призначення», куди увійшли ще шість новел (перевидана у 1994 році).\n' +
        '\n' +
        'З 1994 по 1999 рік створив п\'ятитомну сагу про Відьмака та Відьмачку, яка принесла йому світове визнання: «Кров ельфів» (1994), «Час погорди» (1995), «Хрещення вогнем» (1996), «Вежа ластівки» (1997) і «Володарка озера» (1999).\n' +
        '\n' +
        'Пригоди Відьмака також були видані у вигляді шести коміксів (1993—1995) оформлених малюнками Богуслава Польха і з текстом Мацея Паровського. Крім того, у 2001 році польською телестудією Heritage Films був знятий 13-серійний телесеріал «Відьмак» за мотивами збірок про Ґеральта «Меч призначення» і «Останнє бажання» (режисер Марек Бродскі). На основі серіалу також був створений 130-хвилинний телефільм. У 2004 році компанія «CD Projekt» почала роботу над RPG під назвою «Відьмак», гра вийшла 24 жовтня 2007 року. 17 травня 2011 року виходить продовження гри про пригоди Геральта під назвою «Відьмак 2: Вбивці королів», а 18 травня 2015 року — третя частина гри під назвою «Відьмак 3: Дикий гін».\n' +
        '\n' +
        'Сапковский — автор сюжету книги-гри «Око Іррдеса», дуже популярної у Польщі.\n' +
        '\n' +
        'У 1995 році була видана книга «Світ короля Артура» — есе — в котрому автор намагався розібратися у причинах популярності легенд про короля Артура серед сучасних читачів і про вплив цих легенд на творчість деяких авторів XX століття. Книга включає також новелу «Maladie» — власну варіацію за мотивами легенди про Трістана та Ізольду.\n' +
        '\n' +
        'У 2001 році вийшла велика праця про міфологічні істоти — «Рукопис, знайдений у Драконячій печері» (бестіарій), в якій з притаманним автору почуттям гумору відкривається світ створінь, що населяють наш світ і світи письменників фентезі.\n' +
        '\n' +
        'Серед заслуг автора також велика кількість критичних статей про фентезі й для тих, хто ним захоплюється, таких як «Посібник для початкових письменників фентезі», «Вареник, або немає золота в сірих горах» (стаття про сучасні проблеми фентезі, як літератури), «Меч, магія, екран» (про екранізації) і багато інших.\n' +
        '\n' +
        'Він вже закінчив роботу над своєю другою сагою — «Трилогією про Рейневана» («Вежа блазнів», «Божі воїни», «Вічне світло»), в якій ідеться про середньовічну Європу і Гуситські війни.\n' +
        '\n' +
        '5 січня 2009 року була презентована нова книга письменника — «Змія», дії якої відбуваються під час війни в Афганістані.\n' +
        '\n' +
        '27 вересня 2010 року Анджей Сапковський розповів, що працює над новою книгою у світі «Відьмака», вихід нової книги у серії очікувався у 2013—2014 році. У 2013 році вийшов новий роман у серії «Відьмак» — «Сезон гроз».\n' +
        '\n' +
        'У 2016 році під час авторської зустрічі на «Полкон» письменник іронічно — негативно коментував вплив ігор «CD Projekt RED» на продаж та колекцію книг, оточення гравців реагувало на слова конкретним бойкотом Сапковського. Автор каже, що з його спостережень — його книги з обкладинкою комп’ютерної гри, тому деякі читачі думали що книга, заснована на грі, яка своєю чергою створює твору лодзького письменника вигляду другорядного, неоригінального.\n' +
        '\n' +
        '2 жовтня 2018 року офіційні представники Сапковського зажадали від студії «CD Projekt RED», що створила серію ігор про Відьмака, виплати 6 % авторських винагород, інакше справа буде передана до суду[4]. Спочатку письменник відмовився від відсотка з прибутку і у 2002 році продав студії права на свої твори за 35 тис. злотих (приблизно 9500 доларів США), тому що не вірив в успіх цього заходу і негативно ставився до ігор. У 2019 боку владнали претензії в досудовому порядку (сума компенсації автору не розголошується), а в грудні 2019 року CD Projekt RED уклала з Сапковським нову угоду, по якій студія отримала права на видання нових відеоігор, настільних ігор, графічних новел та іншої супутньої продукції по світу «Відьмака»[5].\n' +
        '\n' +
        'У червні 2018 року було оголошено, що з нагоди 70-го дня народження Анджея Сапковського, одна з площі Лодзі буде названа на честь відьмака, Ґеральта з Рівії — головного героя книжкової серії письменника[6].',

    
}

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Main data = {allData}/>} />
                    <Route path='/gallery' element={<Gallery data = {allData}/>} />
                    <Route exact path='/author' element={<Author data = {allData}/>} />
                    <Route path='*' element={<Error404/>} />
                    
                </Routes>
        </Router>
    </div>
  );
}

export default App;

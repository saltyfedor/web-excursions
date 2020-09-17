import React, {Component} from 'react';
import Title from './Title/Title.js';
import Description from './Description/Description.js';
import OrderSection from './OrderSection/OrderSection.js';
import './excursionStyle.css';

const excursionList = [
  {
    excTitle : "Музейный Дрезден",
    excDescription: `Дрезденская картинная галерея, как всегда, радует :)
  
    Почти 36 работ из постоянной экспозиции уехали по выставкам, но не надолго. На 7 декабря 2019 намечено открытие галереи после ремонта, во всей красе и объеме. К этому времени картины вернутся из путешествий, а кое-кто и после реставрации.
    
    Во всех художественных музеях Дрездена сейчас идет временная выставка " Искусство — обладание и утрата». Государственные Художественные Собрания (SKD) являются хранителями миллионо
    
    Не надо думать, что музей — это " тишь да гладь, да Божья благодать», особенно в городе с такими резкими переломами судьбы, как Дрезден — фашистская диктатура, Вторая мировая, советское присутствие. Советский Союз вернул Германии почти 1,5 млн. единиц музейного хранения. 600 тыс. из них — в Дрезден. Это не все — какие-то вещи потеряны безвозвратно, какие-то появились в музеях во время и после войны. Казалось бы, сколько времени прошло! Но спокойней не стало, так как теперь остро стоят другие вопросы — моральные, вопросы правомерности владения.
    
    Мы можем видеть иногда под информацией об экспонате — " подарок семьи такой-то». Под этой фразой скрываются трагедии целых поколений, как семьи Виктора фон Клемперера — листайте фото. Его отец был основателем и директором Дрезденер Банка и самым крупным коллекционером мейсенского фарфора. В ноябре 1938 г. еврейская семья Клемпереров бежала из Дрездена в Родезию. Удивительно, что еще никто не написал кровавый криминальный роман про все, что случилось с ними и с фарфором.
    
    Sonderauftrag Linz — спецзадание Линц, — личный проект Гитлера, — это тоже про Дрезден и про галерею. С наступлением времени ГДР пришла уже 3-я волна изъятий произведений искусства — 1155 саксонских дворцов и господских домов (Саксония до социализма была одной из богатейших земель Германии) были национализированы со всем движимым и недвижимым имуществом.
    
    В этом году — 10 лет проекту «Дафна» , это о провенансе — происхождении и законности попадания в музей предметов искусства. И SKD начинает выдавать информацию, которую долго и тщательно собирали.
    
    Для меня несколько знакомых экспонатов прямо приобрели свою судьбу и историю! По вашингтонским принципам, которые в 1989 подписали 40 стран (Россия не подписала) предметы искусства, незаконно изъятые любым режимом, подлежат реституции.
    
    Мы знаем фильм о картине Климта Женщина в золоте, по некоторым экспонатам Дрездене могло бы получиться тоже интересно!
    
    Так что в музеях много чего происходит! Особенно если ходить туда с гидом!`,
    excImageUrl: 'dresden4.jpg',
    excPrice: '2000 CZK'
  
  },
  
  {
    excTitle : "Lorem Ipsum",
    excDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    excImageUrl: 'dresden3.jpg',
    excPrice: '2000 CZK'
  
  },

  {
    excTitle : "sdfgfdgsdfgm",
    excDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollvwurighmoepgpgpgpgpgpggogggggggggggggsgggggggggggggggsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgsgg
    greaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazfffffxxxxxxxxxxxx
    sagrdfffffffffffffffffffffffffffffffffffxfbcvvvvvvvvc
    xfffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbb
    it anim id est laborum.`,
    excImageUrl: 'dresden4.jpg',
    excPrice: '2000 CZK'
  
  },

  {
    excTitle : "uyewrguyiwegrhgriouyheriu",    
    excDescription: `aaaaaaaaaaaaaaaaaaaaaaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    excImageUrl: 'dresden4.jpg',
    excPrice: '2000 CZK'
  },

  {
    excTitle : "hhiegboisergiiouserb",    
    excDescription: `aaaaaaaaaaaaaaaaaaaaaaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    excImageUrl: 'dresden4.jpg',
    excPrice: '2000 CZK'
  },

  {
    excTitle : "Музейный Дрезден2",
    excDescription: `Дрезденская картинная галерея, как всегда, радует :)
  
    Почти 36 работ из постоянной экспозиции уехали по выставкам, но не надолго. На 7 декабря 2019 намечено открытие галереи после ремонта, во всей красе и объеме. К этому времени картины вернутся из путешествий, а кое-кто и после реставрации.
    
    Во всех художественных музеях Дрездена сейчас идет временная выставка " Искусство — обладание и утрата». Государственные Художественные Собрания (SKD) являются хранителями миллионо
    
    Не надо думать, что музей — это " тишь да гладь, да Божья благодать», особенно в городе с такими резкими переломами судьбы, как Дрезден — фашистская диктатура, Вторая мировая, советское присутствие. Советский Союз вернул Германии почти 1,5 млн. единиц музейного хранения. 600 тыс. из них — в Дрезден. Это не все — какие-то вещи потеряны безвозвратно, какие-то появились в музеях во время и после войны. Казалось бы, сколько времени прошло! Но спокойней не стало, так как теперь остро стоят другие вопросы — моральные, вопросы правомерности владения.
    
    Мы можем видеть иногда под информацией об экспонате — " подарок семьи такой-то». Под этой фразой скрываются трагедии целых поколений, как семьи Виктора фон Клемперера — листайте фото. Его отец был основателем и директором Дрезденер Банка и самым крупным коллекционером мейсенского фарфора. В ноябре 1938 г. еврейская семья Клемпереров бежала из Дрездена в Родезию. Удивительно, что еще никто не написал кровавый криминальный роман про все, что случилось с ними и с фарфором.
    
    Sonderauftrag Linz — спецзадание Линц, — личный проект Гитлера, — это тоже про Дрезден и про галерею. С наступлением времени ГДР пришла уже 3-я волна изъятий произведений искусства — 1155 саксонских дворцов и господских домов (Саксония до социализма была одной из богатейших земель Германии) были национализированы со всем движимым и недвижимым имуществом.
    
    В этом году — 10 лет проекту «Дафна» , это о провенансе — происхождении и законности попадания в музей предметов искусства. И SKD начинает выдавать информацию, которую долго и тщательно собирали.
    
    Для меня несколько знакомых экспонатов прямо приобрели свою судьбу и историю! По вашингтонским принципам, которые в 1989 подписали 40 стран (Россия не подписала) предметы искусства, незаконно изъятые любым режимом, подлежат реституции.
    
    Мы знаем фильм о картине Климта Женщина в золоте, по некоторым экспонатам Дрездене могло бы получиться тоже интересно!
    
    Так что в музеях много чего происходит! Особенно если ходить туда с гидом!`,
    excImageUrl: 'dresden4.jpg',
    excPrice: '2000 CZK'
  
  },
  
  ]

class Excursion extends Component {
    constructor(){
        super();
        this.state = {
        };
      };

    getCurrentIndex = (name) => {
      return excursionList.find(exc =>
        exc.excTitle === name
      )
    }

  UNSAFE_componentWillMount() {
    const currentExcursion = this.getCurrentIndex(this.props.match.params.name);
    this.setState(currentExcursion);
  } 
  
    
  render() {    
      return (
          <div className="body">
            <div className="excursion">
            <Title eTitle={this.state.excTitle} eImage={this.state.excImageUrl}/>
            <Description eDescription = {this.state.excDescription}/>
            <OrderSection eTitle={this.state.excTitle} ePrice={this.state.excPrice}/>
          </div>
          </div>
            );
    }
        
}     


export default Excursion;



                      



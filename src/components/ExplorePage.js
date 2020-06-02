import React, { useEffect, useRef } from 'react';
import './ExplorePage.scss';

const ExplorePage = ({ location: { pathname } }) => {
  const map = useRef(null);
  const place = pathname.replace('/places/', '');
  const details = {
    jibowu: {
      phone: '0903677115960',
      address: '29, Ikorodu Road, Jibowu Bus Stop',
      state: 'Lagos State',
      intro: ` Lagos State is an administrative region of Nigeria, located in the southwestern part of the country. The smallest of Nigeria's states, Lagos State is the most populous state.
      Lagos State was created on May 27, 1967 by virtue of State (Creation and Transitional Provisions) Decree No. 14 of 1967,  which restructured Nigeria’s Federation into 12 states.
      While the State is essentially a Yoruba-speaking environment, it is a socio-cultural melting pot attracting both Nigerians and foreigners alike.
      Indigenous inhabitants include the Aworis and Eguns in Ikeja and Badagry Divisions respectively, with the Eguns being found mainly in Badagry.
      There is also an admixture of other pioneer settlers collectively known as the Ekos. 
      The indigenes of Ikorodu and Epe Divisions are mainly the Ijebus with pockets of Eko-Awori settlers along the coastland and riverine areas. `
    },
    ejigbo: {
      phone: '09036771166',
      address: '90, Ikotun Ejigbo Road',
      state: 'Lagos State',
      intro: ` Lagos State is an administrative region of Nigeria, located in the southwestern part of the country. The smallest of Nigeria's states, Lagos State is the most populous state.
      Lagos State was created on May 27, 1967 by virtue of State (Creation and Transitional Provisions) Decree No. 14 of 1967,  which restructured Nigeria’s Federation into 12 states.
      While the State is essentially a Yoruba-speaking environment, it is a socio-cultural melting pot attracting both Nigerians and foreigners alike.
      Indigenous inhabitants include the Aworis and Eguns in Ikeja and Badagry Divisions respectively, with the Eguns being found mainly in Badagry.
      There is also an admixture of other pioneer settlers collectively known as the Ekos.
      The indigenes of Ikorodu and Epe Divisions are mainly the Ijebus with pockets of Eko-Awori settlers along the coastland and riverine areas. `
    },
    'water line': {
      phone: '0903677116263',
      address: '188, Aba Roadm Water Line Bus Stop',
      state: 'Rivers State',
      intro: `Rivers State, also known simply as Rivers, is one of the 36 states of Nigeria. According to census data released in 2006, the state has a population of 5,198,716, making it the sixth-most populous state in the country. Its capital and largest city, Port Harcourt, is economically significant as the centre of Nigeria's oil industry. Rivers State is bounded on the South by the Atlantic Ocean, to the North by Imo and Abia, to the East by Akwa Ibom State, and to the West by Bayelsa and Delta states. It is home of many ethnic group,majorly :Ikwerre people, Ikwerre, a subgroup of the Igbo Ethnic Group, Ijaw Subgroups, Ogoni people and many other ethnic groups. The people from Rivers State are known as "Riverians". The inland part of the state consists of tropical rainforest; towards the coast, the typical Niger Delta environment features many mangrove swamps. `
    },
    'oil mill': {
      phone: '09036771164',
      address: '302, Aba Road, Oil Mill Bus Stop',
      state: 'Rivers State',
      intro: `Rivers State, also known simply as Rivers, is one of the 36 states of Nigeria. According to census data released in 2006, the state has a population of 5,198,716, making it the sixth-most populous state in the country. Its capital and largest city, Port Harcourt, is economically significant as the centre of Nigeria's oil industry. Rivers State is bounded on the South by the Atlantic Ocean, to the North by Imo and Abia, to the East by Akwa Ibom State, and to the West by Bayelsa and Delta states. It is home of many ethnic group,majorly :Ikwerre people, Ikwerre, a subgroup of the Igbo Ethnic Group, Ijaw Subgroups, Ogoni people and many other ethnic groups. The people from Rivers State are known as "Riverians". The inland part of the state consists of tropical rainforest; towards the coast, the typical Niger Delta environment features many mangrove swamps. `
    },
    'tunde idiagbon': {
      phone: '0903677116768',
      address: 'Plot 9, Tunde Idiagbon Way',
      state: 'Abuja FCT',
      intro: `Abuja is located in the centre of Nigeria, within the Federal Capital Territory (FCT). Abuja is a planned city, and was built mainly in the 1980s. It officially became Nigeria's capital on 12 December 1991, replacing Lagos, though the latter remains the country's most populous city. At the 2006 census, the city of Abuja had a population of 776,298, making it one of the ten most populous cities in Nigeria.
      Abuja has witnessed a huge influx of people into the city; the growth has led to the emergence of satellite towns such as Karu Urban Area, Suleja, Gwagwalada, Lugbe, Kuje and smaller settlements to which the planned city is sprawling. The unofficial metropolitan area of Abuja has a population of well over three million and comprises the fourth largest urban area in Nigeria, surpassed only by Lagos, Kano and Ibadan.`
    },
    owerri: {
      phone: '07036736670',
      address: 'Plot 38, Ebbu Road, Owerri',
      state: 'Imo State',
      intro: `Imo, state, southern Nigeria. Imo is bordered by the states of Anambra to the north, Abia (until 1991 part of Imo state) to the east, and Rivers to the south and west. The British first entered the territory in 1901, when they established a military post in the region. Imo consists of coastal lowlands to the east of the Niger River. Most of the state’s original tropical rain forest vegetation has been replaced by more open areas of oil-palm bush. Imo state is mainly inhabited by the Igbo people and is one of the most densely populated areas in Nigeria. The population is mostly engaged in agriculture; yams, taro, corn, rice, and cassava are the staple crops, and oil palm is the main cash crop. Imo is also one of the chief onshore petroleum-producing areas in the country; other mineral resources include coal and natural gas.`
    },
    yenogoa: {
      phone: '09036771165',
      address: '354, Melford Okilo Road, Yenogoa',
      state: 'Bayelsa State',
      intro: `Bayelsa State is a state in southern Nigeria in the core Niger Delta region, between Delta State and Rivers State. Its capital is Yenagoa. The language spoken here is Ijaw language as well as Igbo Language in some localities like Ogbia area etc. However, like the rest of Nigeria, English is the official language. The state was formed in 1996 from part of Rivers State and thus, it is one of the newest states of the Nigerian federation. `
    }
  };
  useEffect(() => {
    map.current.innerHTML = ` <iframe
    title='maps'
    scrolling='no'
    marginWidth='0'
    frameBorder='0'
    marginHeight='0'
    src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=${place}+${details[place].state}+nigeria&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed'
    >
    <a href='https://www.maps.ie/draw-radius-circle-map/'>
    Google Maps Radius
    </a>
    </iframe>`;
  }, [details, pathname, place]);
  return (
    <div className='explorepage'>
      <div className='intro'>{details[place].intro}</div>
      <div className='main'>
        <div className='map' ref={map}></div>
        <div className='info'>
          <div className='info__item'>
            <div className='info__item__title'>Our Services</div>
            <div className='info__item__img'></div>
            <div className='info__item__text'>
              {' '}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est eopksiolaborum. Sed ut
              perspiciat isunde omnis istpoe natus error sit voluptatem
              accusantium doloremque eopsloi laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunot explicabo. Nemo ernim ipsam. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est eopksiolaborum. Sed ut perspiciat
              isunde omnis istpoe natus error sit voluptatem accusantium
              doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunot explicabo. Nemo ernim ipsam.
            </div>
          </div>

          <div className='info__details'>
            <div className='detail'>
              <div className='detail__icon'>
                <img src='/images/map.svg' alt='map' />
              </div>
              <div className='detail__items'>
                <div>{details[place].address}</div>
                <div>{details[place].state}</div>
              </div>
            </div>
            <div className='detail'>
              <div className='detail__icon'>
                <img src='/images/phone.svg' alt='phone' />
              </div>
              <div className='detail__items'>
                <div>{details[place].phone}</div>
                <div>08023011552</div>
              </div>
            </div>
            <div className='detail'>
              <div className='detail__icon'>
                <img src='/images/mail.svg' alt='mail' />
              </div>
              <div className='detail__items'>
                <div>rahonytravels@yahoo.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExplorePage;

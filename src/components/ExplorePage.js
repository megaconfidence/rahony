import React, { useEffect, useRef } from 'react';
import './ExplorePage.scss';
import Head from './Head';

const ExplorePage = ({ location: { pathname } }) => {
  const map = useRef(null);
  const place = pathname.replace('/places/', '');
  const details = {
    jibowu: {
      phone1: '09010984778',
      phone2: '09010984779',
      address: '29, Ikorodu Road, Jibowu Bus Stop',
      state: 'Lagos State',
      intro: ` Lagos State is the economic capital of Nigeria, located in the southwestern part of the country. The smallest in size of Nigeria's states, Lagos State is the most populous state.
      Lagos State was created on May 27, 1967 by virtue of State (Creation and Transitional Provisions) Decree No. 14 of 1967,  which restructured Nigeria’s Federation into 12 states.
      While the State is essentially a Yoruba-speaking environment, it is a socio-cultural melting pot attracting both Nigerians and foreigners alike.
      Indigenous inhabitants include the Aworis and Eguns in Ikeja and Badagry Divisions respectively, with the Eguns being found mainly in Badagry.
      There is also an admixture of other pioneer settlers collectively known as the Ekos. 
      The indigenes of Ikorodu and Epe Divisions are mainly the Ijebus with pockets of Eko-Awori settlers along the coastland and riverine areas. `,
      body:
        'Situated at the ever busy transit hub of Jibowu, Yaba, travellers can board vehicles from our terminal to Port Harcourt, Yenogoa, Owerri and Abuja. There is also a lodge to accommodate travellers and members of the public',
    },
    ejigbo: {
      phone1: '08039164323',
      phone2: '09036771166',
      address: '90, Egbe Road, Powerline Bus Stop',
      state: 'Lagos State',
      intro: ` Lagos State is the economic capital of Nigeria, located in the southwestern part of the country. The smallest in size of Nigeria's states, Lagos State is the most populous state.
      Lagos State was created on May 27, 1967 by virtue of State (Creation and Transitional Provisions) Decree No. 14 of 1967,  which restructured Nigeria’s Federation into 12 states.
      While the State is essentially a Yoruba-speaking environment, it is a socio-cultural melting pot attracting both Nigerians and foreigners alike.
      Indigenous inhabitants include the Aworis and Eguns in Ikeja and Badagry Divisions respectively, with the Eguns being found mainly in Badagry.
      There is also an admixture of other pioneer settlers collectively known as the Ekos.
      The indigenes of Ikorodu and Epe Divisions are mainly the Ijebus with pockets of Eko-Awori settlers along the coastland and riverine areas. `,
      body:
        'Located at NEPA bus stop, opposite GUO transport, we convey passengers from here to Benin, Asaba, Onitsha, Owerri, Umuahia and Aba. You can also join us to Warri, Ughelli, Yenogoa and Port Harcourt. We deliver goods for our numerous customers from here to other places in the country',
    },
    'water line': {
      phone1: '09036771162',
      phone2: '09036771163',
      address: '188, Aba Road Water Line Bus Stop',
      state: 'Rivers State',
      intro: `Rivers State, also known simply as Rivers, is one of the 36 states of Nigeria. According to census data released in 2006, the state has a population of 5,198,716, making it the sixth-most populous state in the country. Its capital and largest city, Port Harcourt, is economically significant as the centre of Nigeria's oil industry. Rivers State is bounded on the South by the Atlantic Ocean, to the North by Imo and Abia, to the East by Akwa Ibom State, and to the West by Bayelsa and Delta states. It is home of many ethnic group,majorly :Ikwerre people, Ikwerre, a subgroup of the Igbo Ethnic Group, Ijaw Subgroups, Ogoni people and many other ethnic groups. The people from Rivers State are known as "Riverians". The inland part of the state consists of tropical rainforest; towards the coast, the typical Niger Delta environment features many mangrove swamps. `,
      body:
        'Our location is at the ever busy Aba road, Waterlines Bus Stop where we convey passengers to Benin, Ijebu Ode, Lagos and Abuja',
    },
    'oil mill': {
      phone1: '09036771164',
      phone2: '09010984785',
      address: '302, Aba Road, Oil Mill Bus Stop',
      state: 'Rivers State',
      intro: `Rivers State, also known simply as Rivers, is one of the 36 states of Nigeria. According to census data released in 2006, the state has a population of 5,198,716, making it the sixth-most populous state in the country. Its capital and largest city, Port Harcourt, is economically significant as the centre of Nigeria's oil industry. Rivers State is bounded on the South by the Atlantic Ocean, to the North by Imo and Abia, to the East by Akwa Ibom State, and to the West by Bayelsa and Delta states. It is home of many ethnic group,majorly :Ikwerre people, Ikwerre, a subgroup of the Igbo Ethnic Group, Ijaw Subgroups, Ogoni people and many other ethnic groups. The people from Rivers State are known as "Riverians". The inland part of the state consists of tropical rainforest; towards the coast, the typical Niger Delta environment features many mangrove swamps. `,
      body:
        'We convey customers from here going to Benin, Ijebu Ode, Lagos and Abuja',
    },
    'tunde idiagbon': {
      phone1: '09036771167',
      phone2: '09036771168',
      address: 'Plot 9, Tunde Idiagbon Way, Jabi Motor Park',
      state: 'Abuja FCT',
      intro: `Abuja is located in the centre of Nigeria, within the Federal Capital Territory (FCT). Abuja is a planned city, and was built mainly in the 1980s. It officially became Nigeria's capital on 12 December 1991, replacing Lagos, though the latter remains the country's most populous city. At the 2006 census, the city of Abuja had a population of 776,298, making it one of the ten most populous cities in Nigeria.
      Abuja has witnessed a huge influx of people into the city; the growth has led to the emergence of satellite towns such as Karu Urban Area, Suleja, Gwagwalada, Lugbe, Kuje and smaller settlements to which the planned city is sprawling. The unofficial metropolitan area of Abuja has a population of well over three million and comprises the fourth largest urban area in Nigeria, surpassed only by Lagos, Kano and Ibadan.`,
      body:
        'Located at plot 9, Tunde Idiagbon way, at Jabi Park Abuja, we convey passengers to Yenogoa, Warri, Benin, Ughelli, Port Harcourt, Owerri, Umuahia and Lagos state',
    },
    owerri: {
      phone1: '09010984788',
      phone2: '07036736670',
      address: 'Plot 38, Ebbu Road, Owerri',
      state: 'Imo State',
      intro: `Imo, state, southern Nigeria. Imo is bordered by the states of Anambra to the north, Abia (until 1991 part of Imo state) to the east, and Rivers to the south and west. The British first entered the territory in 1901, when they established a military post in the region. Imo consists of coastal lowlands to the east of the Niger River. Most of the state’s original tropical rain forest vegetation has been replaced by more open areas of oil-palm bush. Imo state is mainly inhabited by the Igbo people and is one of the most densely populated areas in Nigeria. The population is mostly engaged in agriculture; yams, taro, corn, rice, and cassava are the staple crops, and oil palm is the main cash crop. Imo is also one of the chief onshore petroleum-producing areas in the country; other mineral resources include coal and natural gas.`,
      body:
        'Our booking office is situated at Egbu road. We convey passengers to Lagos, Jibowu, Mile 2, Maza Maza and Ejigbo. We also run Abuja',
    },
    yenogoa: {
      phone1: '09036771165',
      address: '354, Melford Okilo Road, Yenogoa',
      state: 'Bayelsa State',
      intro: `Bayelsa State is a state in southern Nigeria in the core Niger Delta region, between Delta State and Rivers State. Its capital is Yenagoa. The language spoken here is Ijaw language as well as Igbo Language in some localities like Ogbia area etc. However, like the rest of Nigeria, English is the official language. The state was formed in 1996 from part of Rivers State and thus, it is one of the newest states of the Nigerian federation. `,
      body:
        'Our office is located at Okilo road, opposite Wema Bank, where we convey our customers to Abuja, Kaduna and Lagos',
    },
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
            <Head content='Our Services' />
            <div className='info__item__text --margin_top'>
              {details[place].body}
            </div>
            <div className='info__item__text --margin_top'>
              Hire services are available to individuals and orgainsations to
              different parts o the country even to places where we do not have
              terminals
            </div>
          </div>

          <div className='info__details'>
            <div className='detail'>
              <div className='detail__icon'>
                <div className='detail__icon__cover'>
                  <img src='/images/map.svg' alt='map' />
                </div>
              </div>
              <div className='detail__items'>
                <div>{details[place].address}</div>
                <div>{details[place].state}</div>
              </div>
            </div>
            <div className='detail'>
              <div className='detail__icon'>
                <div className='detail__icon__cover'>
                  <img src='/images/phone.svg' alt='phone' />
                </div>
              </div>
              <div className='detail__items'>
                <div>{details[place].phone1}</div>
                <div>{details[place].phone2 || '08039164323'}</div>
              </div>
            </div>
            <div className='detail'>
              <div className='detail__icon'>
                <div className='detail__icon__cover'>
                  <img src='/images/mail.svg' alt='mail' />
                </div>
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

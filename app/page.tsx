import { Box, Divider, Flex, Image } from '@mantine/core';
import { DressCodeSection, HeroSection, InfoSection, TimingSection, ContactSection } from '../components';
import { FinalSection } from '../components/finalSection';
import { LocationSection } from '../components/locationSection';

export default function Home() {
  return (
    <Flex
      direction='column'
      align='center'
    >
      <HeroSection
        names='Евгений & Татьяна'
        weddingDate='17/07/2026'
        imageSrc='/images/1.jpg'
      />
      <InfoSection
        title='Дорогие родные и близкие!'
        text='С радостью приглашаем Вас разделить с нами один из самых важных дней в нашей жизни - наш свадебный день!'
      />
      <TimingSection
        items={[
          {
            time: '10:45',
            title: 'Добро пожаловать',
            description: 'Сбор всех желающих разделить с нами этот особенный день у дверей ЗАГСа (пр. Ленина, 124)',
          },
          {
            time: '11:00',
            title: 'Торжественная регистрация',
            description: 'Самое главное событие в нашей жизни',
          },
          {
            time: '12:00',
            title: 'Фотосессия',
            description: 'Сохраним этот день навсегда в памятных фото',
          },
          {
            time: '13:00',
            title: 'Сбор гостей на месте торжества',
            description: 'Приветственный фуршет, новые знакомства и непринуждённое общение',
          },
          {
            time: '14:00',
            title: <>Праздничный банкет</>,
            description: 'Прибытие молодожёнов, начало торжества, тёплые поздравления, красивая музыка, вкусная еда',
          },
        ]}
      />
      <Divider
        color='dark.1'
        w='80vw'
      />
      <LocationSection
        address='Центральная улица, 3, д. Журавлево, Центральная улица, 3, база отдыха Журавель'
        mapSrc='/images/map4.jpeg'
        mapLink='https://2gis.ru/kemerovo/firm/70000001006360542?m=86.142178%2C55.341608%2F12.87'
      />
      <Divider
        color='dark.1'
        w='80vw'
      />
      <DressCodeSection text='Нам будет приятно, если Вы поддержите стилистику нашей свадьбы и выберите наряды в соответствии с цветовой палитрой' />
      <Divider
        color='dark.1'
        w='80vw'
      />
      <ContactSection text='Мы просим Вас подтвердить своё присутствие на нашем торжестве до 01/05/2026' />
      <FinalSection
        title='ЖДЕМ ВАС!'
        text={[
          'Ваше присутствие сделает наш день по-настоящему особенным и незабываемым',
          ' С любовью, Евгений и Татьяна!',
        ]}
        imageSrc='/images/4.jpeg'
      />
    </Flex>
  );
}

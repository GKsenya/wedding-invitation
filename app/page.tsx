import { Box, Divider, Flex } from '@mantine/core';
import { DressCodeSection, HeroSection, InfoSection, LocationSection, TimingSection } from '../components';
import { ContactSection } from '../components/contactSection';

export default function Home() {
  return (
    <Flex
      direction='column'
      align='center'
    >
      <HeroSection
        names='Евгений & Татьяна'
        weddingDate='26/06/2026'
        imageSrc='/images/1.jpg'
      />
      <InfoSection
        title='Дорогие родные и близкие!'
        text='С радостью приглашаем Вас разделить с нами один из самых важных дней в нашей жизни - наш свадебный день!'
      />
      <LocationSection
        text='Ждём Вас по адресу'
        address={'пр. Свадебных желаний д.26, "Корабль любви"'}
      />
      <Divider
        color='dark.1'
        w='80vw'
      />
      <TimingSection
        items={[
          {
            time: '11:00',
            title: 'Добро пожаловать',
            description: 'Сбор гостей, новые знакомства',
          },
          {
            time: '12:00',
            title: 'Торжественная регистрация',
            description: 'Самое главное событие в нашей жизни',
          },
          {
            time: '14:00',
            title: 'Фотосессия',
            description: 'Сохраним этот день навсегда в памятных фото',
          },
          {
            time: '16:00',
            title: 'Праздничный банкет',
            description: 'Время вкусной еды, танцев и веселья',
          },
          {
            time: '22:00',
            title: 'Свадебный торт',
            description: 'Время для красивого завершения вечера',
          },
        ]}
      />
      <Divider
        color='dark.1'
        w='80vw'
      />
      <DressCodeSection text='Нам будет приятно, если Вы поддержите стилистику нашей свадьбы и выберите наряды в соответствии с цветовой палитрой' />

      <ContactSection
        text={'Мы просим Вас подтвердить своё присутствие на нашем торжестве, связавшись с нами в мессенджере'}
        buttonProps={{ title: 'Написать в WhatsApp', href: '' }}
      />
      <InfoSection
        title='ЖДЕМ ВАС!'
        text={[
          'Ваше присутствие сделает наш день по-настоящему особенным и незабываемым',
          ' С любовью, Евгений и Татьяна!',
        ]}
      />
      <Box
        bg='#193318'
        h='20vh'
        w='100vw'
        mt='-5vh'
      />
    </Flex>
  );
}

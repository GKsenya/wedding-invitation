import { Stack } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';
import { TimingItem, TimingItemProps } from './timingItem';

type TimingSectionProps = {
  items: TimingItemProps[];
};

export const TimingSection = ({ items }: TimingSectionProps) => {
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Тайминг'
      id='location'
    >
      <Stack gap='xl'>
        {items.map((item) => (
          <TimingItem
            {...item}
            key={item.time}
          />
        ))}
      </Stack>
    </SectionWrapper>
  );
};

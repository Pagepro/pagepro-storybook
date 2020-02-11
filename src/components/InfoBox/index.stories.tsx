import React from 'react';
import { storiesOf } from '@storybook/react';

import InfoBox from '.';
import BulletList from '../BulletList';
import Container from '../Container';
import { Typo7 } from '../Typography';

import ReactNative from '../Icons/ReactNative';

storiesOf('InfoBox', module)
  .addDecorator(story => <div style={{ maxWidth: '15rem' }}>{story()}</div>)
  .add('default', () => (
    <InfoBox heading="Web &amp; Mobile Development" icon={<ReactNative />}>
      <Typo7>
        Gain access to our senior leaders and benefit from their insights into the technology and business domains.
      </Typo7>
    </InfoBox>
  ))
  .add('with list', () => (
    <InfoBox
      shouldDisplayAction={false}
      heading="Web &amp; Mobile Development"
      icon={<ReactNative />}
      title="In our portfolio you can find:"
    >
      <BulletList
        items={[
          'we organize internal training courses and workshops',
          'we take part in meetings of the frontend community as participants and speakers',
          'we build and share reusable frontend components, libraries, rules and style guides',
        ]}
      />
    </InfoBox>
  ))
  .add('with white bg and paddings', () => (
    <Container p="1.5rem" bg="white">
      <InfoBox heading="React Development" icon={<ReactNative />}>
        <Typo7>
          Gain access to our senior leaders and benefit from their insights into the technology and business domains.
        </Typo7>
      </InfoBox>
    </Container>
  ))
  .add('centered', () => (
    <InfoBox centered heading="Web &amp; Mobile Development" icon={<ReactNative />}>
      <Typo7>
        Gain access to our senior leaders and benefit from their insights into the technology and business domains.
      </Typo7>
    </InfoBox>
  ));

import React from 'react';
import { mount } from 'enzyme';

import Container from './index';

describe('<Container />', () => {
  it('should mount properly', async () => {
    const wrapper = mount(
      <Container>
        <p>
          Lightning doesn&apos;t struck twice, Chuck Norris does. When Chuck
          Norris sends in his taxes, he sends blank forms and includes only a
          picture of himself, crouched and ready to attack. Chuck Norris has not
          had to pay taxes, ever, The Great Wall of China was originally created
          to keep Chuck Norris out. It failed miserably, Chuck Norris
          doesn&apos;t read books. He stares them down until he gets the
          information he wants, When Chuck Norris sends in his taxes, he sends
          blank forms and includes only a picture of himself, crouched and ready
          to attack. Chuck Norris has not had to pay taxes, ever. Fool me once,
          shame on you. Fool Chuck Norris once and he will roundhouse you in the
          face. What was going through the minds of all of Chuck Norris&apos;
          victims before they died? His shoe. Chuck Norris can slam a revolving
          door, Chuck Norris is so fast, he can run around the world and punch
          himself in the back of the head Chuck Norris doesn&apos;t go
          hunting... CHUCK NORRIS GOES KILLING. Chuck Norris drives an ice cream
          truck covered in human skulls, There is no chin behind Chuck
          Norris&apos; beard. There is only another fist. Chuck Norris has two
          speeds. Walk, and Kill.
        </p>
      </Container>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

import { mount } from 'enzyme';

import React from 'react';
import ProComponentsEditor from '@ant-design/pro-components-editor';
import { waitForComponentToPaint } from './util';

describe('ProComponentsEditor', () => {
  it('🥩 base use', async () => {
    const html = mount(<ProComponentsEditor />);
    await waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });
});

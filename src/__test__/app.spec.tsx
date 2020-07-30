import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { App } from '../components/App';

let appRender: RenderResult;

describe('<App />', () => {
  beforeEach(() => {
    appRender = render(<App />);
  });

  it('shows welcome message', () => {
    expect(
      appRender.getByText('Welcome to our app template'),
    ).toBeInTheDocument();
  });
});

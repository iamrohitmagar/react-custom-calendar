import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Calendar from './components/Datepicker/Calendar'

test('render datepicker',()=>{
  render(<Calendar date={new Date('2020/03/23')}/>);
  expect(screen.getByText('March 2020')).toBeInTheDocument();
})

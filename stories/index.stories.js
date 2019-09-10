import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Button from './button.svelte';

import QuotesData from '../src/routes/quotes/_quotes.json'; 
import QuoteRow from '../src/components/QuoteRow.svelte';

console.log('HEEEEEELLLLLOOOOOOO !!!!');

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') },
  }))
  .add('with some emoji', () => ({
    Component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
    on: { click: action('clicked') },
  }));

// storiesOf('QuoteRow', module)
//   .add('normal', () => ({
//     Component: QuoteRow,
//     props: { QuotesData[0] }
//   }));

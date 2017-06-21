import html from 'choo/html';
import header from '../components/header';
import singleStyles from './single.css';
import {toArray, getValue} from '../utils';

export default function main(state, emit) {
  const genres = toArray(getValue(state, 'store', state.params.id, 'genres', 'genre'));
  const formats = toArray(getValue(state, 'store', state.params.id, 'formats', 'format'));
  const summaries = getValue(state, 'store', state.params.id, 'summaries', 'summary');
  const specifications = getValue(state, 'store', state.params.id, 'description', 'physical-description');
  const editions = getValue(state, 'store', state.params.id, 'publication', 'editions', 'edition');

  return html`
    <body class=${singleStyles.body}>
      ${header(state, emit)}
      <main>
        <a href="/">◀ terug</a>
        <section class=${singleStyles.header}>
          <h2>${state.store[state.params.id].titles['short-title']}</h2>
          <img class=${singleStyles.cover} src=${state.store[state.params.id].coverimages.coverimage[1]} />
        </section>
        <section class=${singleStyles.summary}>
          <h3>Korte beschrijving</h3>
          <p>${summaries}</p>
        </section>
        ${genres.length > 0 ? html`
          <h3>Genres</h3>
          <ul>${genres.map(genre => html`<li>${genre}</li>`)}</ul>
        ` : null}
        ${specifications.length > 0 ? html`
          <h3>Specificaties</h3>
          <p>${specifications}</p>
        ` : null}
        <h3>Beschikbare formaten</h3>
        <ul>
          ${formats.length > 0 ?
            formats.map(format => html`<li>${format}</li>`) :
            null
          }
        </ul>
        ${editions.length > 0 ? html`
          <h3>Editie</h3>
          <p>${editions}</p>
        ` : null
        }
      </main>
    </body>
  `;

}

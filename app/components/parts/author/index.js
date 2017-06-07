import html from 'choo/html';
import styles from '../parts.css';

export const modalSettings = {
  title: 'Kies auteur',
  children(id, emit) {
    return html`
      <div>
        <form>
          <input type="text">
        </form>
        <button onclick=${onButtonClick}>Click me!</button>
      </div>
    `;

    function onButtonClick() {
      emit('updateValue', {
        id,
        value: 'Test'
      });
    }
  },
  color: '#da008c'
};

export default () => html`
<svg class=${styles.svg} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="295" height="225" viewBox="0 0 295 225">
  <defs>
    <path id="machineauthor-a" d="M8.36440678,4.99582647 C8.36440678,2.2367077 10.611347,0 13.3612887,0 L84.223457,0 C86.9831587,0 89.220339,2.24473649 89.220339,4.99582647 L89.220339,54.6623377 L8.36440678,54.6623377 L8.36440678,4.99582647 Z"/>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(133 76)">
      <rect width="14.359" height="43.256" x="7.179" y="1.291" fill="#9B9B9B"/>
      <rect width="27.282" height="5.52" x=".718" y="40.48" fill="#4A4A4A"/>
      <rect width="7.179" height="43.256" x="7.179" y="1.291" fill="#4A4A4A"/>
      <rect width="27.282" height="5.52" fill="#4A4A4A"/>
    </g>
    <path stroke="#979797" stroke-linejoin="round" d="M139,20.6776646 L222.093512,20.6776646 C224.301053,20.6776646 226.090618,22.4587766 226.090618,24.6817125 L226.090618,49.1506373"/>
    <rect width="114" height="76" x="90" fill="#4A4A4A" rx="5"/>
    <g fill-rule="nonzero" transform="translate(101 9)">
      <circle cx="8.5" cy="8.5" r="8.5" fill="#FD8469"/>
      <path fill="#324A5E" d="M8.5,14.9519685 C4.93937008,14.9519685 2.0480315,12.0606299 2.0480315,8.5 C2.0480315,4.93937008 4.93937008,2.0480315 8.5,2.0480315 C12.0606299,2.0480315 14.9519685,4.93937008 14.9519685,8.5 C14.9519685,12.0606299 12.0606299,14.9519685 8.5,14.9519685 Z"/>
      <path fill="#E6E9EE" d="M13.6133858,8.79448819 C13.6133858,8.7007874 13.6267717,8.59370079 13.6267717,8.5 C13.6267717,5.67559055 11.3377953,3.37322835 8.5,3.37322835 C5.67559055,3.37322835 3.37322835,5.66220472 3.37322835,8.5 C3.37322835,8.59370079 3.37322835,8.7007874 3.38661417,8.79448819 L13.6133858,8.79448819 Z"/>
      <path fill="#FF7058" d="M6.85354331,5.56850394 C6.82677165,5.52834646 6.78661417,5.51496063 6.74645669,5.54173228 C6.70629921,5.55511811 6.67952756,5.60866142 6.70629921,5.6488189 L8.11181102,9.03543307 C8.12519685,9.0488189 8.12519685,9.07559055 8.13858268,9.08897638 C8.24566929,9.26299213 8.47322835,9.31653543 8.64724409,9.20944882 C8.82125984,9.1023622 8.87480315,8.87480315 8.76771654,8.7007874 L6.85354331,5.56850394 Z"/>
      <circle cx="8.5" cy="8.794" r="1" fill="#FFD05B"/>
      <g fill="#ACB3BA" transform="translate(4.183 3.815)">
        <path d="M4.39291339.736220472L4.39291339.736220472C4.258298.736220472 4.14291339.655905512 4.14291339.562204724L4.14291339.200787402C4.14291339.107086614 4.258298.0267716535 4.39291339.0267716535L4.39291339.0267716535C4.52752877.0267716535 4.64291339.107086614 4.64291339.200787402L4.64291339.562204724C4.64291339.655905512 4.52752877.736220472 4.39291339.736220472zM7.11456693 1.88740157L7.11456693 1.88740157C7.0476378 1.82047244 7.0476378 1.71338583 7.11456693 1.64645669L7.36889764 1.39212598C7.43582677 1.32519685 7.54291339 1.32519685 7.60984252 1.39212598L7.60984252 1.39212598C7.67677165 1.45905512 7.67677165 1.56614173 7.60984252 1.63307087L7.35551181 1.88740157C7.27519685 1.95433071 7.16811024 1.95433071 7.11456693 1.88740157zM1.03740157 1.40551181L1.03740157 1.40551181C1.10433071 1.33858268 1.21141732 1.33858268 1.27834646 1.40551181L1.53267717 1.65984252C1.5996063 1.72677165 1.5996063 1.83385827 1.53267717 1.9007874L1.53267717 1.9007874C1.46574803 1.96771654 1.35866142 1.96771654 1.29173228 1.9007874L1.03740157 1.64645669C.970472441 1.57952756.970472441 1.47244094 1.03740157 1.40551181zM2.82529031 1.03070866L2.82529031 1.03070866C2.74034482 1.07086614 2.62708417 1.03070866 2.59876901.937007874L2.4571932.602362205C2.41472046.522047244 2.4571932.41496063 2.55629627.388188976L2.55629627.388188976C2.64124176.348031496 2.75450241.388188976 2.78281757.481889764L2.92439338.816535433C2.96686612.896850394 2.92439338 1.00393701 2.82529031 1.03070866zM7.97125984 3.19340055L7.97125984 3.19340055C7.93110236 3.10845506 7.97125984 2.99519441 8.06496063 2.96687925L8.3996063 2.82530344C8.47992126 2.78283069 8.58700787 2.82530344 8.61377953 2.9244065L8.61377953 2.9244065C8.65393701 3.00935199 8.61377953 3.12261264 8.52007874 3.1509278L8.18543307 3.29250362C8.10511811 3.33497636 7.9980315 3.29250362 7.97125984 3.19340055zM5.83881653 1.03070866L5.83881653 1.03070866C5.75118458.990551181 5.70736861.896850394 5.73657926.816535433L5.88263251.481889764C5.92644848.401574803 6.02868575.361417323 6.1163177.388188976L6.1163177.388188976C6.20394965.428346457 6.24776563.522047244 6.21855498.602362205L6.07250173.937007874C6.04329108 1.03070866 5.92644848 1.07086614 5.83881653 1.03070866zM.0200787402 2.91401338L.0200787402 2.91401338C.0602362205 2.82638143.153937008 2.78256546.234251969 2.81177611L.568897638 2.95782936C.649212598 3.00164533.689370079 3.1038826.662598425 3.19151455L.662598425 3.19151455C.622440945 3.2791465.528740157 3.32296248.448425197 3.29375183L.113779528 3.14769858C.0334645669 3.11848793-.00669291339 3.01625066.0200787402 2.91401338z"/>
      </g>
      <g fill="#2B3B4E" transform="translate(2.41 2.41)">
        <circle cx="6.091" cy=".348" r="1"/>
        <circle cx="6.091" cy="11.833" r="1"/>
        <circle cx="11.833" cy="6.091" r="1"/>
        <circle cx=".348" cy="6.091" r="1"/>
      </g>
      <g transform="translate(25)">
        <circle cx="8.5" cy="8.5" r="8.5" fill="#B8E986"/>
        <path fill="#324A5E" d="M8.5,14.9519685 C4.93937008,14.9519685 2.0480315,12.0606299 2.0480315,8.5 C2.0480315,4.93937008 4.93937008,2.0480315 8.5,2.0480315 C12.0606299,2.0480315 14.9519685,4.93937008 14.9519685,8.5 C14.9519685,12.0606299 12.0606299,14.9519685 8.5,14.9519685 Z"/>
        <path fill="#E6E9EE" d="M13.6133858,8.79448819 C13.6133858,8.7007874 13.6267717,8.59370079 13.6267717,8.5 C13.6267717,5.67559055 11.3377953,3.37322835 8.5,3.37322835 C5.67559055,3.37322835 3.37322835,5.66220472 3.37322835,8.5 C3.37322835,8.59370079 3.37322835,8.7007874 3.38661417,8.79448819 L13.6133858,8.79448819 Z"/>
        <path fill="#FF7058" d="M7.85354331,5.56850394 C7.82677165,5.52834646 7.78661417,5.51496063 7.74645669,5.54173228 C7.70629921,5.55511811 7.67952756,5.60866142 7.70629921,5.6488189 L9.11181102,9.03543307 C9.12519685,9.0488189 9.12519685,9.07559055 9.13858268,9.08897638 C9.24566929,9.26299213 9.47322835,9.31653543 9.64724409,9.20944882 C9.82125984,9.1023622 9.87480315,8.87480315 9.76771654,8.7007874 L7.85354331,5.56850394 Z" transform="rotate(45 8.76 7.396)"/>
        <circle cx="8.5" cy="8.794" r="1" fill="#FFD05B"/>
        <g fill="#ACB3BA" transform="translate(4.183 3.815)">
          <path d="M4.39291339.736220472L4.39291339.736220472C4.258298.736220472 4.14291339.655905512 4.14291339.562204724L4.14291339.200787402C4.14291339.107086614 4.258298.0267716535 4.39291339.0267716535L4.39291339.0267716535C4.52752877.0267716535 4.64291339.107086614 4.64291339.200787402L4.64291339.562204724C4.64291339.655905512 4.52752877.736220472 4.39291339.736220472zM7.11456693 1.88740157L7.11456693 1.88740157C7.0476378 1.82047244 7.0476378 1.71338583 7.11456693 1.64645669L7.36889764 1.39212598C7.43582677 1.32519685 7.54291339 1.32519685 7.60984252 1.39212598L7.60984252 1.39212598C7.67677165 1.45905512 7.67677165 1.56614173 7.60984252 1.63307087L7.35551181 1.88740157C7.27519685 1.95433071 7.16811024 1.95433071 7.11456693 1.88740157zM1.03740157 1.40551181L1.03740157 1.40551181C1.10433071 1.33858268 1.21141732 1.33858268 1.27834646 1.40551181L1.53267717 1.65984252C1.5996063 1.72677165 1.5996063 1.83385827 1.53267717 1.9007874L1.53267717 1.9007874C1.46574803 1.96771654 1.35866142 1.96771654 1.29173228 1.9007874L1.03740157 1.64645669C.970472441 1.57952756.970472441 1.47244094 1.03740157 1.40551181zM2.82529031 1.03070866L2.82529031 1.03070866C2.74034482 1.07086614 2.62708417 1.03070866 2.59876901.937007874L2.4571932.602362205C2.41472046.522047244 2.4571932.41496063 2.55629627.388188976L2.55629627.388188976C2.64124176.348031496 2.75450241.388188976 2.78281757.481889764L2.92439338.816535433C2.96686612.896850394 2.92439338 1.00393701 2.82529031 1.03070866zM7.97125984 3.19340055L7.97125984 3.19340055C7.93110236 3.10845506 7.97125984 2.99519441 8.06496063 2.96687925L8.3996063 2.82530344C8.47992126 2.78283069 8.58700787 2.82530344 8.61377953 2.9244065L8.61377953 2.9244065C8.65393701 3.00935199 8.61377953 3.12261264 8.52007874 3.1509278L8.18543307 3.29250362C8.10511811 3.33497636 7.9980315 3.29250362 7.97125984 3.19340055zM5.83881653 1.03070866L5.83881653 1.03070866C5.75118458.990551181 5.70736861.896850394 5.73657926.816535433L5.88263251.481889764C5.92644848.401574803 6.02868575.361417323 6.1163177.388188976L6.1163177.388188976C6.20394965.428346457 6.24776563.522047244 6.21855498.602362205L6.07250173.937007874C6.04329108 1.03070866 5.92644848 1.07086614 5.83881653 1.03070866zM.0200787402 2.91401338L.0200787402 2.91401338C.0602362205 2.82638143.153937008 2.78256546.234251969 2.81177611L.568897638 2.95782936C.649212598 3.00164533.689370079 3.1038826.662598425 3.19151455L.662598425 3.19151455C.622440945 3.2791465.528740157 3.32296248.448425197 3.29375183L.113779528 3.14769858C.0334645669 3.11848793-.00669291339 3.01625066.0200787402 2.91401338z"/>
        </g>
        <g fill="#2B3B4E" transform="translate(2.41 2.41)">
          <circle cx="6.091" cy=".348" r="1"/>
          <circle cx="6.091" cy="11.833" r="1"/>
          <circle cx="11.833" cy="6.091" r="1"/>
          <circle cx=".348" cy="6.091" r="1"/>
        </g>
      </g>
      <g transform="translate(50)">
        <circle cx="8.5" cy="8.5" r="8.5" fill="#CC5F6C"/>
        <path fill="#324A5E" d="M8.5,14.9519685 C4.93937008,14.9519685 2.0480315,12.0606299 2.0480315,8.5 C2.0480315,4.93937008 4.93937008,2.0480315 8.5,2.0480315 C12.0606299,2.0480315 14.9519685,4.93937008 14.9519685,8.5 C14.9519685,12.0606299 12.0606299,14.9519685 8.5,14.9519685 Z"/>
        <path fill="#E6E9EE" d="M13.6133858,8.79448819 C13.6133858,8.7007874 13.6267717,8.59370079 13.6267717,8.5 C13.6267717,5.67559055 11.3377953,3.37322835 8.5,3.37322835 C5.67559055,3.37322835 3.37322835,5.66220472 3.37322835,8.5 C3.37322835,8.59370079 3.37322835,8.7007874 3.38661417,8.79448819 L13.6133858,8.79448819 Z"/>
        <path fill="#FF7058" d="M6.85354331,5.56850394 C6.82677165,5.52834646 6.78661417,5.51496063 6.74645669,5.54173228 C6.70629921,5.55511811 6.67952756,5.60866142 6.70629921,5.6488189 L8.11181102,9.03543307 C8.12519685,9.0488189 8.12519685,9.07559055 8.13858268,9.08897638 C8.24566929,9.26299213 8.47322835,9.31653543 8.64724409,9.20944882 C8.82125984,9.1023622 8.87480315,8.87480315 8.76771654,8.7007874 L6.85354331,5.56850394 Z"/>
        <circle cx="8.5" cy="8.794" r="1" fill="#FFD05B"/>
        <g fill="#ACB3BA" transform="translate(4.183 3.815)">
          <path d="M4.39291339.736220472L4.39291339.736220472C4.258298.736220472 4.14291339.655905512 4.14291339.562204724L4.14291339.200787402C4.14291339.107086614 4.258298.0267716535 4.39291339.0267716535L4.39291339.0267716535C4.52752877.0267716535 4.64291339.107086614 4.64291339.200787402L4.64291339.562204724C4.64291339.655905512 4.52752877.736220472 4.39291339.736220472zM7.11456693 1.88740157L7.11456693 1.88740157C7.0476378 1.82047244 7.0476378 1.71338583 7.11456693 1.64645669L7.36889764 1.39212598C7.43582677 1.32519685 7.54291339 1.32519685 7.60984252 1.39212598L7.60984252 1.39212598C7.67677165 1.45905512 7.67677165 1.56614173 7.60984252 1.63307087L7.35551181 1.88740157C7.27519685 1.95433071 7.16811024 1.95433071 7.11456693 1.88740157zM1.03740157 1.40551181L1.03740157 1.40551181C1.10433071 1.33858268 1.21141732 1.33858268 1.27834646 1.40551181L1.53267717 1.65984252C1.5996063 1.72677165 1.5996063 1.83385827 1.53267717 1.9007874L1.53267717 1.9007874C1.46574803 1.96771654 1.35866142 1.96771654 1.29173228 1.9007874L1.03740157 1.64645669C.970472441 1.57952756.970472441 1.47244094 1.03740157 1.40551181zM2.82529031 1.03070866L2.82529031 1.03070866C2.74034482 1.07086614 2.62708417 1.03070866 2.59876901.937007874L2.4571932.602362205C2.41472046.522047244 2.4571932.41496063 2.55629627.388188976L2.55629627.388188976C2.64124176.348031496 2.75450241.388188976 2.78281757.481889764L2.92439338.816535433C2.96686612.896850394 2.92439338 1.00393701 2.82529031 1.03070866zM7.97125984 3.19340055L7.97125984 3.19340055C7.93110236 3.10845506 7.97125984 2.99519441 8.06496063 2.96687925L8.3996063 2.82530344C8.47992126 2.78283069 8.58700787 2.82530344 8.61377953 2.9244065L8.61377953 2.9244065C8.65393701 3.00935199 8.61377953 3.12261264 8.52007874 3.1509278L8.18543307 3.29250362C8.10511811 3.33497636 7.9980315 3.29250362 7.97125984 3.19340055zM5.83881653 1.03070866L5.83881653 1.03070866C5.75118458.990551181 5.70736861.896850394 5.73657926.816535433L5.88263251.481889764C5.92644848.401574803 6.02868575.361417323 6.1163177.388188976L6.1163177.388188976C6.20394965.428346457 6.24776563.522047244 6.21855498.602362205L6.07250173.937007874C6.04329108 1.03070866 5.92644848 1.07086614 5.83881653 1.03070866zM.0200787402 2.91401338L.0200787402 2.91401338C.0602362205 2.82638143.153937008 2.78256546.234251969 2.81177611L.568897638 2.95782936C.649212598 3.00164533.689370079 3.1038826.662598425 3.19151455L.662598425 3.19151455C.622440945 3.2791465.528740157 3.32296248.448425197 3.29375183L.113779528 3.14769858C.0334645669 3.11848793-.00669291339 3.01625066.0200787402 2.91401338z"/>
        </g>
        <g fill="#2B3B4E" transform="translate(2.41 2.41)">
          <circle cx="6.091" cy=".348" r="1"/>
          <circle cx="6.091" cy="11.833" r="1"/>
          <circle cx="11.833" cy="6.091" r="1"/>
          <circle cx=".348" cy="6.091" r="1"/>
        </g>
      </g>
      <g transform="translate(75)">
        <circle cx="8.5" cy="8.5" r="8.5" fill="#FFF"/>
        <path fill="#324A5E" d="M8.5,14.9519685 C4.93937008,14.9519685 2.0480315,12.0606299 2.0480315,8.5 C2.0480315,4.93937008 4.93937008,2.0480315 8.5,2.0480315 C12.0606299,2.0480315 14.9519685,4.93937008 14.9519685,8.5 C14.9519685,12.0606299 12.0606299,14.9519685 8.5,14.9519685 Z"/>
        <path fill="#E6E9EE" d="M13.6133858,8.79448819 C13.6133858,8.7007874 13.6267717,8.59370079 13.6267717,8.5 C13.6267717,5.67559055 11.3377953,3.37322835 8.5,3.37322835 C5.67559055,3.37322835 3.37322835,5.66220472 3.37322835,8.5 C3.37322835,8.59370079 3.37322835,8.7007874 3.38661417,8.79448819 L13.6133858,8.79448819 Z"/>
        <path fill="#FF7058" d="M8.85354331,5.56850394 C8.82677165,5.52834646 8.78661417,5.51496063 8.74645669,5.54173228 C8.70629921,5.55511811 8.67952756,5.60866142 8.70629921,5.6488189 L10.111811,9.03543307 C10.1251969,9.0488189 10.1251969,9.07559055 10.1385827,9.08897638 C10.2456693,9.26299213 10.4732283,9.31653543 10.6472441,9.20944882 C10.8212598,9.1023622 10.8748031,8.87480315 10.7677165,8.7007874 L8.85354331,5.56850394 Z" transform="rotate(75 9.76 7.396)"/>
        <circle cx="8.5" cy="8.794" r="1" fill="#FFD05B"/>
        <g fill="#ACB3BA" transform="translate(4.183 3.815)">
          <path d="M4.39291339.736220472L4.39291339.736220472C4.258298.736220472 4.14291339.655905512 4.14291339.562204724L4.14291339.200787402C4.14291339.107086614 4.258298.0267716535 4.39291339.0267716535L4.39291339.0267716535C4.52752877.0267716535 4.64291339.107086614 4.64291339.200787402L4.64291339.562204724C4.64291339.655905512 4.52752877.736220472 4.39291339.736220472zM7.11456693 1.88740157L7.11456693 1.88740157C7.0476378 1.82047244 7.0476378 1.71338583 7.11456693 1.64645669L7.36889764 1.39212598C7.43582677 1.32519685 7.54291339 1.32519685 7.60984252 1.39212598L7.60984252 1.39212598C7.67677165 1.45905512 7.67677165 1.56614173 7.60984252 1.63307087L7.35551181 1.88740157C7.27519685 1.95433071 7.16811024 1.95433071 7.11456693 1.88740157zM1.03740157 1.40551181L1.03740157 1.40551181C1.10433071 1.33858268 1.21141732 1.33858268 1.27834646 1.40551181L1.53267717 1.65984252C1.5996063 1.72677165 1.5996063 1.83385827 1.53267717 1.9007874L1.53267717 1.9007874C1.46574803 1.96771654 1.35866142 1.96771654 1.29173228 1.9007874L1.03740157 1.64645669C.970472441 1.57952756.970472441 1.47244094 1.03740157 1.40551181zM2.82529031 1.03070866L2.82529031 1.03070866C2.74034482 1.07086614 2.62708417 1.03070866 2.59876901.937007874L2.4571932.602362205C2.41472046.522047244 2.4571932.41496063 2.55629627.388188976L2.55629627.388188976C2.64124176.348031496 2.75450241.388188976 2.78281757.481889764L2.92439338.816535433C2.96686612.896850394 2.92439338 1.00393701 2.82529031 1.03070866zM7.97125984 3.19340055L7.97125984 3.19340055C7.93110236 3.10845506 7.97125984 2.99519441 8.06496063 2.96687925L8.3996063 2.82530344C8.47992126 2.78283069 8.58700787 2.82530344 8.61377953 2.9244065L8.61377953 2.9244065C8.65393701 3.00935199 8.61377953 3.12261264 8.52007874 3.1509278L8.18543307 3.29250362C8.10511811 3.33497636 7.9980315 3.29250362 7.97125984 3.19340055zM5.83881653 1.03070866L5.83881653 1.03070866C5.75118458.990551181 5.70736861.896850394 5.73657926.816535433L5.88263251.481889764C5.92644848.401574803 6.02868575.361417323 6.1163177.388188976L6.1163177.388188976C6.20394965.428346457 6.24776563.522047244 6.21855498.602362205L6.07250173.937007874C6.04329108 1.03070866 5.92644848 1.07086614 5.83881653 1.03070866zM.0200787402 2.91401338L.0200787402 2.91401338C.0602362205 2.82638143.153937008 2.78256546.234251969 2.81177611L.568897638 2.95782936C.649212598 3.00164533.689370079 3.1038826.662598425 3.19151455L.662598425 3.19151455C.622440945 3.2791465.528740157 3.32296248.448425197 3.29375183L.113779528 3.14769858C.0334645669 3.11848793-.00669291339 3.01625066.0200787402 2.91401338z"/>
        </g>
        <g fill="#2B3B4E" transform="translate(2.41 2.41)">
          <circle cx="6.091" cy=".348" r="1"/>
          <circle cx="6.091" cy="11.833" r="1"/>
          <circle cx="11.833" cy="6.091" r="1"/>
          <circle cx=".348" cy="6.091" r="1"/>
        </g>
      </g>
    </g>
    <g transform="translate(97 34)">
      <rect width="99.01" height="34" x=".99" y="1" fill="#D8D8D8"/>
      <rect width="1" height="36" fill="#18A9E0"/>
    </g>
    <g fill="#4A4A4A" transform="translate(104 41)">
      <rect width="3" height="12" y="14"/>
      <rect width="3" height="12" x="54" y="14"/>
      <rect width="3" height="24" x="6" y="2"/>
      <rect width="3" height="24" x="60" y="2"/>
      <rect width="3" height="19" x="12" y="7"/>
      <rect width="3" height="19" x="66" y="7"/>
      <rect width="3" height="15" x="18" y="11"/>
      <rect width="3" height="15" x="72" y="11"/>
      <rect width="3" height="20" x="24" y="6"/>
      <rect width="3" height="20" x="78" y="6"/>
      <rect width="3" height="26" x="30"/>
      <rect width="3" height="26" x="84"/>
      <rect width="3" height="13" x="36" y="13"/>
      <rect width="3" height="8" x="42" y="18"/>
      <rect width="3" height="5" x="48" y="21"/>
    </g>
    <g transform="translate(8 118)">
      <g fill="#9B9B9B" transform="translate(7)">
        <rect width="7" height="14" rx="3.5"/>
        <rect width="7" height="14" x="84" rx="3.5"/>
        <rect width="7" height="14" x="168" rx="3.5"/>
        <rect width="7" height="14" x="28" rx="3.5"/>
        <rect width="7" height="14" x="112" rx="3.5"/>
        <rect width="7" height="14" x="196" rx="3.5"/>
        <rect width="7" height="14" x="56" rx="3.5"/>
        <rect width="7" height="14" x="140" rx="3.5"/>
        <rect width="7" height="14" x="224" rx="3.5"/>
        <rect width="7" height="14" x="7" rx="3.5"/>
        <rect width="7" height="14" x="91" rx="3.5"/>
        <rect width="7" height="14" x="175" rx="3.5"/>
        <rect width="7" height="14" x="35" rx="3.5"/>
        <rect width="7" height="14" x="119" rx="3.5"/>
        <rect width="7" height="14" x="203" rx="3.5"/>
        <rect width="7" height="14" x="63" rx="3.5"/>
        <rect width="7" height="14" x="147" rx="3.5"/>
        <rect width="7" height="14" x="231" rx="3.5"/>
        <rect width="7" height="14" x="14" rx="3.5"/>
        <rect width="7" height="14" x="98" rx="3.5"/>
        <rect width="7" height="14" x="182" rx="3.5"/>
        <rect width="7" height="14" x="42" rx="3.5"/>
        <rect width="7" height="14" x="126" rx="3.5"/>
        <rect width="7" height="14" x="210" rx="3.5"/>
        <rect width="7" height="14" x="70" rx="3.5"/>
        <rect width="7" height="14" x="154" rx="3.5"/>
        <rect width="7" height="14" x="238" rx="3.5"/>
        <rect width="7" height="14" x="252" rx="3.5"/>
        <rect width="7" height="14" x="21" rx="3.5"/>
        <rect width="7" height="14" x="105" rx="3.5"/>
        <rect width="7" height="14" x="189" rx="3.5"/>
        <rect width="7" height="14" x="49" rx="3.5"/>
        <rect width="7" height="14" x="133" rx="3.5"/>
        <rect width="7" height="14" x="217" rx="3.5"/>
        <rect width="7" height="14" x="77" rx="3.5"/>
        <rect width="7" height="14" x="161" rx="3.5"/>
        <rect width="7" height="14" x="245" rx="3.5"/>
        <rect width="7" height="14" x="259" rx="3.5"/>
      </g>
      <rect width="283" height="7" y="4" fill="#D8D8D8"/>
    </g>
    <g transform="translate(177 47)">
      <path fill="#C7C1AA" d="M2,59 L93,59 L93,97.9954787 C93,100.7594 90.7618615,103 87.9941072,103 L7.00589284,103 C4.24121457,103 2,100.757542 2,97.9954787 L2,59 Z"/>
      <use fill="#FFF" xlink:href="#machineauthor-a"/>
      <path stroke="#9B9B9B" stroke-width="5" d="M86.720339,52.1623377 L10.8644068,52.1623377 L10.8644068,4.99582647 C10.8644068,3.62165864 11.987816,2.5 13.3612887,2.5 L84.223457,2.5 C85.5991735,2.5 86.720339,3.62217301 86.720339,4.99582647 L86.720339,52.1623377 Z"/>
      <path fill="#4A4A4A" d="M0,57.4565818 C0,56.3508877 0.900207233,55.4545455 2.00681124,55.4545455 L91.9931888,55.4545455 C93.10152,55.4545455 94,56.3455187 94,57.4565818 L94,58.2272727 C94,59.7586077 92.7597488,61 91.2249811,61 L2.77501888,61 C1.24241827,61 0,59.7554918 0,58.2272727 L0,57.4565818 Z"/>
      <rect width="12" height="2" x="41" y="55" fill="#FFF" rx="1"/>
      <g transform="translate(32 14)">
        <rect width="30" height="24" fill="#DA008C" rx="5"/>
        <g fill="#FFF" fill-rule="nonzero" transform="translate(6 2)">
          <path d="M16.6435017 18.187772C16.6275156 18.1906114 16.5527336 18.2039793 16.4311972 18.2257202 11.63809 19.0833161 10.7563806 19.2305699 10.6574325 19.2420311 10.4213772 19.2693679 10.2450311 19.2555233 10.1181384 19.1997098 10.038872 19.1648497 9.99593772 19.1225285 9.98447751 19.1038964 9.99004152 19.0707979 10.0322076 18.9918756 10.0579516 18.9436891 10.0830104 18.8967876 10.111391 18.8436684 10.136263 18.7870466 10.3012111 18.4112953 10.1857993 18.0301347 9.8350173 17.7922487 9.57344637 17.6149016 9.22662976 17.5429223 8.80388927 17.5782591 8.55153633 17.5993782 4.12808304 18.3396684 1.69829066 18.7479378L.5056609 19.6842073C3.28700346 19.2155648 8.58579239 18.3280829 8.86459516 18.3010984 9.11364706 18.280228 9.30795156 18.3118135 9.42668512 18.3922902 9.49563322 18.4390674 9.48884429 18.4545285 9.47069896 18.4958549 9.45707958 18.5268808 9.43750173 18.5635026 9.41680277 18.6022798 9.33718339 18.7512746 9.22814533 18.9553161 9.26424913 19.2080622 9.30384083 19.4852435 9.50825606 19.7241451 9.82509343 19.8635233 10.0032249 19.9418653 10.2076609 19.9807047 10.4447336 19.9807047 10.5383253 19.9807047 10.6370035 19.9746528 10.7411211 19.9625907 10.9317716 19.9405181 12.889308 19.5963731 16.5593356 18.9397098 16.6801869 18.9180933 16.7545536 18.9047668 16.7704567 18.9019689 16.9680208 18.8669845 17.0997509 18.678715 17.0646851 18.4814715 17.0296194 18.284228 16.8411696 18.1527461 16.6435017 18.187772zM3.78145329 14.6632332L.695065744 17.886114C.355141869 18.2410777.115702422 18.679772.00124567474 19.1573679L4.38367474 15.7169326C5.75559862 16.3242487 6.85148097 16.5176995 7.6913564 16.5176995 9.16692042 16.5176995 9.85187543 15.9202694 9.85187543 15.9202694 8.47822837 15.2066943 8.28249135 13.8749637 8.28249135 13.8749637 9.33456747 14.3189845 11.5261246 14.8423834 11.5261246 14.8423834 14.4365606 12.9032539 15.9576125 8.70480829 15.9576125 8.70480829 15.656263 8.78750259 15.3680969 8.82194819 15.0965398 8.82194819 13.7305536 8.82194819 12.7920415 7.94878756 12.7920415 7.94878756L16.5943391 7.12215544C17.8585329 4.53284974 17.9794464 0 17.9794464 0L6.41887889 10.2644145C5.10967474 11.4268187 4.18912111 12.9621554 3.78145329 14.6632332z"/>
        </g>
      </g>
      <rect width="44" height="3" x="26" y="65" fill="#1C4A51" rx="1.5"/>
      <rect width="40" height="25" x="28" y="67" fill="#FFF"/>
      <path stroke="#979797" stroke-linecap="square" d="M31.5 70.5L48.5 70.5M31.5 72.5L38.5 72.5M31.5 74.5L45.5 74.5M31.5 76.5L42.5 76.5"/>
      <rect width="15" height="15" x="8" y="66" fill="#C9CFC8"/>
      <rect width="11" height="11" x="10" y="68" fill="#000"/>
    </g>
    <path fill="#4A4A4A" fill-rule="nonzero" d="M1.99381718 126.935708C2.15345548 127.481193 2.37499434 128.007197 2.65517585 128.500731L1.85698436 129.504034C1.5963504 129.831974 1.62567172 130.299533 1.91888492 130.595004L3.29372904 131.96521C3.59020016 132.260681 4.05934128 132.286624 4.38839165 132.026869L5.38857446 131.237864C5.90332652 131.533368 6.45065783 131.763868 7.02079461 131.926214L7.17065913 133.208754C7.219528 133.624361 7.57138384 133.936067 7.98839817 133.936067L9.93337906 133.936067C10.3503934 133.936067 10.7022492 133.624329 10.7511181 133.208754L10.8944668 131.971672C11.5069566 131.812572 12.093383 131.575546 12.6439722 131.267087L13.6115758 132.030116C13.9406261 132.289871 14.4097673 132.260649 14.7062384 131.968425L16.0810825 130.598218C16.3775536 130.302747 16.403617 129.835189 16.1429831 129.507248L15.3904025 128.555896C15.7031633 128.016873 15.9475076 127.442198 16.1104038 126.841515L17.2702249 126.70839C17.6872718 126.659686 18 126.309018 18 125.89341L18 123.95499C18 123.539382 17.6872393 123.188713 17.2702249 123.140009L16.1266934 123.006885C15.9702805 122.412696 15.7357425 121.844482 15.436046 121.311985L16.1397577 120.425572C16.4003917 120.097632 16.3710704 119.630073 16.0778572 119.334602L14.706271 117.967642C14.4097998 117.672171 13.9406587 117.646196 13.6116083 117.905951L12.7482584 118.587807C12.1878954 118.259867 11.5884047 118.009853 10.9596578 117.841012L10.8293409 116.727313C10.780472 116.311706 10.4286162 116 10.0116018 116L8.06662094 116C7.64960661 116 7.29775077 116.311706 7.2488819 116.727313L7.11856492 117.841012C6.47349588 118.013099 5.85774816 118.272854 5.28435346 118.613782L4.38842423 117.905951C4.05937386 117.646196 3.59023274 117.675418 3.29376162 117.967642L1.9189175 119.337849C1.62244638 119.63332 1.59638298 120.100878 1.85701694 120.428819L2.60633956 121.373677C2.30661051 121.912668 2.0785558 122.487375 1.92869127 123.084811L.729775077 123.221183C.312760747 123.269887 0 123.620556 0 124.036163L0 125.974583C0 126.390191.312760747 126.74086.729775077 126.789564L1.99381718 126.935708zM9.04070777 121.691909C10.8130187 121.691909 12.2562792 123.130301 12.2562792 124.896633 12.2562792 126.662966 10.8130187 128.101358 9.04070777 128.101358 7.26842945 128.101358 5.82513634 126.662966 5.82513634 124.896633 5.82513634 123.130301 7.26839687 121.691909 9.04070777 121.691909zM278.993817 126.935708C279.153455 127.481193 279.374994 128.007197 279.655176 128.500731L278.856984 129.504034C278.59635 129.831974 278.625672 130.299533 278.918885 130.595004L280.293729 131.96521C280.5902 132.260681 281.059341 132.286624 281.388392 132.026869L282.388574 131.237864C282.903327 131.533368 283.450658 131.763868 284.020795 131.926214L284.170659 133.208754C284.219528 133.624361 284.571384 133.936067 284.988398 133.936067L286.933379 133.936067C287.350393 133.936067 287.702249 133.624329 287.751118 133.208754L287.894467 131.971672C288.506957 131.812572 289.093383 131.575546 289.643972 131.267087L290.611576 132.030116C290.940626 132.289871 291.409767 132.260649 291.706238 131.968425L293.081082 130.598218C293.377554 130.302747 293.403617 129.835189 293.142983 129.507248L292.390403 128.555896C292.703163 128.016873 292.947508 127.442198 293.110404 126.841515L294.270225 126.70839C294.687272 126.659686 295 126.309018 295 125.89341L295 123.95499C295 123.539382 294.687239 123.188713 294.270225 123.140009L293.126693 123.006885C292.97028 122.412696 292.735743 121.844482 292.436046 121.311985L293.139758 120.425572C293.400392 120.097632 293.37107 119.630073 293.077857 119.334602L291.706271 117.967642C291.4098 117.672171 290.940659 117.646196 290.611608 117.905951L289.748258 118.587807C289.187895 118.259867 288.588405 118.009853 287.959658 117.841012L287.829341 116.727313C287.780472 116.311706 287.428616 116 287.011602 116L285.066621 116C284.649607 116 284.297751 116.311706 284.248882 116.727313L284.118565 117.841012C283.473496 118.013099 282.857748 118.272854 282.284353 118.613782L281.388424 117.905951C281.059374 117.646196 280.590233 117.675418 280.293762 117.967642L278.918918 119.337849C278.622446 119.63332 278.596383 120.100878 278.857017 120.428819L279.60634 121.373677C279.306611 121.912668 279.078556 122.487375 278.928691 123.084811L277.729775 123.221183C277.312761 123.269887 277 123.620556 277 124.036163L277 125.974583C277 126.390191 277.312761 126.74086 277.729775 126.789564L278.993817 126.935708zM286.040708 121.691909C287.813019 121.691909 289.256279 123.130301 289.256279 124.896633 289.256279 126.662966 287.813019 128.101358 286.040708 128.101358 284.268429 128.101358 282.825136 126.662966 282.825136 124.896633 282.825136 123.130301 284.268397 121.691909 286.040708 121.691909z"/>
    <g transform="translate(122 149)">
      <g transform="translate(80)">
        <rect width="24" height="43.373" x="11" y="1.557" fill="#9B9B9B"/>
        <rect width="11.795" height="45.443" x="10.795" y="1.557" fill="#4A4A4A"/>
        <rect width="44.821" height="9" fill="#4A4A4A"/>
      </g>
      <path fill="#9B9B9B" d="M53,-11 L69.0029381,-11 C72.3150239,-11 75,-8.31231905 75,-5.00693516 L75,89 L57.9921405,89 C55.2350574,89 53,86.7711504 53,84.0067709 L53,-11 Z" transform="rotate(-90 64 39)"/>
      <g transform="matrix(1 0 0 -1 0 76)">
        <path fill="#9B9B9B" d="M12,2.08695652 L35,2.08695652 L35,46.9565217 L17.997932,46.9565217 C14.6853656,46.9565217 12,44.2674596 12,40.9517707 L12,2.08695652 Z"/>
        <path fill="#4A4A4A" d="M11.7948718,0.196796339 L23.5897436,0.196796339 L23.5897436,48 L16.7969593,48 C14.0343827,48 11.7948718,45.7584691 11.7948718,42.9970558 L11.7948718,0.196796339 Z"/>
        <rect width="44.821" height="9.391" fill="#4A4A4A"/>
      </g>
      <path fill="#4A4A4A" d="M58.5512821,-6.55128205 L68.5512821,-6.55128205 L68.5512821,96.5512821 L63.5512821,96.5512821 C60.7898583,96.5512821 58.5512821,94.3140456 58.5512821,91.5435879 L58.5512821,-6.55128205 Z" transform="rotate(-90 63.551 45)"/>
    </g>
  </g>
</svg>
`;

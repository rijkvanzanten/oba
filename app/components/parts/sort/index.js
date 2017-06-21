import html from 'choo/html';
import styles from './style.css';

export const modalSettings = {
  title: 'Waarop wil je sorteren?',
  children(id, value, emit) {
    return html`
      <form id=${id} class=${styles.form} onsubmit=${preventSubmit} onclick=${saveValues}>

        <input id="relevance" type="radio" name="hardsort" />
        <label for="relevance">relevantie</label>

        <input id="author" type="radio" name="hardsort" value="Author(default)" />
        <label for="author">auteur</label>

        <input id="year" type="radio" name="hardsort" value="Year(default)" />
        <label for="year">jaar</label>

        <input id="title" type="radio" name="hardsort" value="Title(default)" />
        <label for="title">titel</label>

      </form>
    `;

    function saveValues(e) {
      const values = Array.from(e.target.parentNode.querySelectorAll('input:checked')).map(input => input.value);
      emit('updateValue', {
        id,
        value: values.join(','),
      });
    }

    function preventSubmit(e) {
      e.preventDefault();
      return false;
    }

  },
  color: '#18a9e0',
};

export default (state, emit, id) => {
  const {animating} = state.machineparts[id] || false;
  return html`
    <svg data-animating="${animating}" class=${styles.svg} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 225">
      <defs>
        <rect id="relevance-machine-a" width="57" height="58" x="12" y="9" rx="1"/>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(116)">
          <rect width="90" height="90" fill="#4A4A4A" rx="4"/>
          <use fill="#FFF" xlink:href="#relevance-machine-a"/>
          <rect width="56" height="57" x="12.5" y="9.5" stroke="#979797" rx="1"/>
          <path fill="#9B9B9B" d="M21.8693483 18.125L21.8693483 24 20.599817 24 20.599817 19.5703125 19.6427858 19.7734375 19.427942 19 20.756067 18.125 21.8693483 18.125zM22.9670045 22.6835938L24.2990358 22.6835938 24.2990358 24 22.9670045 24 22.9670045 22.6835938zM22.9494264 33.9453125L22.9494264 35 18.9884889 35 18.9884889 34.1523438C19.0666143 33.8164046 19.1942172 33.5195325 19.3713014 33.2617188 19.5483856 33.003905 19.7371858 32.7890634 19.9377076 32.6171875 20.1382295 32.4453116 20.3921332 32.2500011 20.6994264 32.03125 20.9285942 31.8697909 21.1063268 31.7376307 21.2326295 31.6347656 21.3589322 31.5319005 21.4630979 31.4173183 21.5451295 31.2910156 21.6271612 31.1647129 21.6681764 31.0286466 21.6681764 30.8828125 21.6681764 30.744791 21.6297653 30.6236984 21.552942 30.5195312 21.4761187 30.4153641 21.3713021 30.3359378 21.2384889 30.28125 21.1056757 30.2265622 20.9572397 30.1992188 20.7931764 30.1992188 20.584842 30.1992188 20.3862763 30.2571609 20.1974733 30.3730469 20.0086702 30.4889329 19.8504687 30.6497386 19.7228639 30.8554688L18.8908326 30.2148438C19.099167 29.8736962 19.3739039 29.6015635 19.7150514 29.3984375 20.0561989 29.1953115 20.4246848 29.09375 20.8205201 29.09375 21.195522 29.09375 21.5444769 29.1647128 21.8673951 29.3066406 22.1903134 29.4485684 22.4494254 29.6529935 22.6447389 29.9199219 22.8400524 30.1868503 22.9377076 30.4986961 22.9377076 30.8554688 22.9377076 31.1471369 22.8791145 31.4010406 22.7619264 31.6171875 22.6447383 31.8333344 22.5008595 32.0156243 22.3302858 32.1640625 22.159712 32.3125007 21.9272925 32.4895823 21.6330201 32.6953125 21.4168732 32.8463549 21.2384896 32.976562 21.0978639 33.0859375 20.9572382 33.195313 20.823776 33.3222649 20.6974733 33.4667969 20.5711706 33.6113288 20.468958 33.7708325 20.3908326 33.9453125L22.9494264 33.9453125zM23.7345826 33.6835938L25.0666139 33.6835938 25.0666139 35 23.7345826 35 23.7345826 33.6835938zM22.7736451 43.4003906C22.931198 43.6282563 23.0099733 43.8919256 23.0099733 44.1914062 23.0099733 44.5716165 22.9142711 44.9062486 22.7228639 45.1953125 22.5314567 45.4843764 22.2638812 45.7070305 21.9201295 45.8632812 21.5763778 46.019532 21.1818505 46.0976562 20.7365358 46.0976562 20.3459088 46.0976562 19.9774229 46.0169279 19.631067 45.8554688 19.2847111 45.6940096 18.986537 45.4726577 18.7365358 45.1914062L19.4474733 44.3164062C19.588099 44.4986988 19.7710399 44.6438797 19.9963014 44.7519531 20.2215629 44.8600266 20.4565866 44.9140625 20.7013795 44.9140625 20.9071097 44.9140625 21.0887485 44.8815107 21.2463014 44.8164062 21.4038543 44.7513018 21.5255978 44.6575527 21.6115358 44.5351562 21.6974737 44.4127598 21.740442 44.2708341 21.740442 44.109375 21.740442 43.9609368 21.6981247 43.8320318 21.6134889 43.7226562 21.5288531 43.6132807 21.4090626 43.5286461 21.2541139 43.46875 21.0991652 43.4088539 20.9188285 43.3789062 20.7130983 43.3789062L20.2365358 43.3789062 20.2365358 42.4765625 20.7130983 42.4765625C20.9657037 42.4765625 21.1675246 42.4205735 21.318567 42.3085938 21.4696094 42.196614 21.5451295 42.0494801 21.5451295 41.8671875 21.5451295 41.6796866 21.4591929 41.5312505 21.287317 41.421875 21.1154412 41.3124995 20.8849747 41.2578125 20.5959108 41.2578125 20.366743 41.2578125 20.1571096 41.304036 19.9670045 41.3964844 19.7768994 41.4889328 19.6271613 41.6145825 19.5177858 41.7734375L18.7755983 40.953125C18.9917452 40.677082 19.2606227 40.4622404 19.5822389 40.3085938 19.9038551 40.1549471 20.2573672 40.078125 20.6427858 40.078125 21.0672671 40.078125 21.4435654 40.1477858 21.771692 40.2871094 22.0998187 40.426433 22.3556755 40.6243477 22.5392701 40.8808594 22.7228648 41.1373711 22.8146608 41.4361962 22.8146608 41.7773438 22.8146608 42.0169283 22.7534635 42.2324209 22.631067 42.4238281 22.5086706 42.6152353 22.3394014 42.7669265 22.1232545 42.8789062 22.3992976 42.9986985 22.6160923 43.1725249 22.7736451 43.4003906zM23.7912233 44.6835938L25.1232545 44.6835938 25.1232545 46 23.7912233 46 23.7912233 44.6835938zM23.4377076 55.625L22.5822389 55.625 22.5822389 57 21.3127076 57 21.3127076 55.625 18.5041139 55.625 18.5041139 54.640625 21.4494264 51.125 22.5822389 51.125 22.5822389 54.5390625 23.4377076 54.5390625 23.4377076 55.625zM21.3127076 54.5390625L21.3127076 52.8789062 19.9611451 54.5390625 21.3127076 54.5390625zM24.1213014 55.6835938L25.4533326 55.6835938 25.4533326 57 24.1213014 57 24.1213014 55.6835938z"/>
          <g fill="#9B9B9B" transform="translate(27 20)">
            <rect width="18" height="3"/>
            <rect width="27" height="3" y="11"/>
            <rect width="22" height="3" y="22"/>
            <rect width="33" height="3" y="33"/>
          </g>
        </g>
        <g fill-rule="nonzero" transform="matrix(1 0 0 -1 92 205)">
          <g transform="translate(0 20)">
            <path fill="#ECF0F1" d="M93.5447586,15.6034483 L90.7539828,15.6034483 C89.6513276,15.6034483 88.7586207,14.7107414 88.7586207,13.6097931 L88.7586207,2.23503448 C88.7586207,1.13408621 87.8659138,0.24137931 86.7649655,0.24137931 L49.7867586,0.24137931 C48.6858103,0.24137931 47.7931034,1.13408621 47.7931034,2.23503448 L47.7931034,13.6097931 C47.7931034,14.7107414 46.9003966,15.6034483 45.7994483,15.6034483 L27.3103448,15.6034483 L27.3103448,10.4827586 L20.4827586,10.4827586 L20.4827586,15.6034483 L5.45524138,15.6034483 C4.32868966,15.6034483 3.4137931,16.5183448 3.4137931,17.6448966 L3.4137931,66.4740862 C3.4137931,67.6023448 4.32868966,68.5172414 5.45524138,68.5172414 L93.5430517,68.5172414 C94.6713103,68.5172414 95.5862069,67.6023448 95.5862069,66.4757931 L95.5862069,17.6448966 C95.5862069,16.5183448 94.6713103,15.6034483 93.5447586,15.6034483 Z"/>
            <path fill="#9B9B9B" d="M47.7931034,13.6097931 C47.7931034,14.7107414 46.9003966,15.6034483 45.7994483,15.6034483 L27.3103448,15.6034483 L27.3103448,10.4827586 L20.4827586,10.4827586 L20.4827586,15.6034483 L5.45524138,15.6034483 C4.32868966,15.6034483 3.4137931,16.5183448 3.4137931,17.6448966 L3.4137931,66.4740862 C3.4137931,67.6023448 4.32868966,68.5172414 5.45524138,68.5172414 L47.7931034,68.5172414 L47.7931034,13.6097931 Z"/>
            <rect width="99" height="13.655" y="75.345" fill="#4A4A4A" rx="3"/>
            <path fill="#ECF0F1" d="M32.4310345 83.8793103L8.53448276 83.8793103C7.59227586 83.8793103 6.82758621 83.1163276 6.82758621 82.1724138 6.82758621 81.2285 7.59227586 80.4655172 8.53448276 80.4655172L32.4310345 80.4655172C33.3732414 80.4655172 34.137931 81.2285 34.137931 82.1724138 34.137931 83.1163276 33.3732414 83.8793103 32.4310345 83.8793103zM92.1724138 83.8793103L90.4655172 83.8793103C89.5233103 83.8793103 88.7586207 83.1163276 88.7586207 82.1724138 88.7586207 81.2285 89.5233103 80.4655172 90.4655172 80.4655172L92.1724138 80.4655172C93.1146207 80.4655172 93.8793103 81.2285 93.8793103 82.1724138 93.8793103 83.1163276 93.1146207 83.8793103 92.1724138 83.8793103z"/>
            <path fill="#DA008C" d="M52.9137931,5.36206897 L83.637931,5.36206897 C83.637931,5.36206897 83.637931,12.0323815 83.637931,14.75 C83.637931,17.4676185 83.637931,24.137931 83.637931,24.137931 L52.9137931,24.137931 L52.9137931,5.36206897 Z"/>
            <rect width="85.345" height="6.828" x="6.828" y="68.517" fill="#000"/>
            <rect width="6.828" height="6.828" x="52.914" y="30.966" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="64.862" y="30.966" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="76.81" y="30.966" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="52.914" y="42.914" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="64.862" y="42.914" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="76.81" y="42.914" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="52.914" y="54.862" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="64.862" y="54.862" fill="#F29C1F"/>
            <rect width="6.828" height="6.828" x="76.81" y="54.862" fill="#71C285"/>
            <path fill="#6D6D6E" d="M40.9655172,58.2758621 L10.2413793,58.2758621 C9.29917241,58.2758621 8.53448276,57.5128793 8.53448276,56.5689655 C8.53448276,55.6250517 9.29917241,54.862069 10.2413793,54.862069 L40.9655172,54.862069 C41.9077241,54.862069 42.6724138,55.6250517 42.6724138,56.5689655 C42.6724138,57.5128793 41.9077241,58.2758621 40.9655172,58.2758621 Z"/>
            <rect width="23.897" height="30.724" x="13.655" y="25.845" fill="#F0EDE0"/>
            <path fill="#D4C3A5" d="M27.3103448 51.4482759L18.7758621 51.4482759C17.8336552 51.4482759 17.0689655 50.6852931 17.0689655 49.7413793 17.0689655 48.7974655 17.8336552 48.0344828 18.7758621 48.0344828L27.3103448 48.0344828C28.2525517 48.0344828 29.0172414 48.7974655 29.0172414 49.7413793 29.0172414 50.6852931 28.2525517 51.4482759 27.3103448 51.4482759zM32.4310345 51.4482759C31.9872414 51.4482759 31.5434483 51.2605172 31.2191379 50.9532759 30.9118966 50.6289655 30.7241379 50.1851724 30.7241379 49.7413793 30.7241379 49.2975862 30.9118966 48.8520862 31.2191379 48.5294828 31.8677586 47.897931 33.0113793 47.897931 33.642931 48.5294828 33.9501724 48.8520862 34.137931 49.2975862 34.137931 49.7413793 34.137931 50.1851724 33.9501724 50.6289655 33.642931 50.9532759 33.3186207 51.2605172 32.8748276 51.4482759 32.4310345 51.4482759zM32.4310345 34.3793103L23.8965517 34.3793103C22.9543448 34.3793103 22.1896552 33.6163276 22.1896552 32.6724138 22.1896552 31.7285 22.9543448 30.9655172 23.8965517 30.9655172L32.4310345 30.9655172C33.3732414 30.9655172 34.137931 31.7285 34.137931 32.6724138 34.137931 33.6163276 33.3732414 34.3793103 32.4310345 34.3793103z"/>
            <path fill="#FFF" d="M66.5689655 12.1896552L58.0344828 12.1896552C57.0922759 12.1896552 56.3275862 11.4266724 56.3275862 10.4827586 56.3275862 9.53884483 57.0922759 8.77586207 58.0344828 8.77586207L66.5689655 8.77586207C67.5111724 8.77586207 68.2758621 9.53884483 68.2758621 10.4827586 68.2758621 11.4266724 67.5111724 12.1896552 66.5689655 12.1896552zM66.5689655 19.0172414L58.0344828 19.0172414C57.0922759 19.0172414 56.3275862 18.2542586 56.3275862 17.3103448 56.3275862 16.366431 57.0922759 15.6034483 58.0344828 15.6034483L66.5689655 15.6034483C67.5111724 15.6034483 68.2758621 16.366431 68.2758621 17.3103448 68.2758621 18.2542586 67.5111724 19.0172414 66.5689655 19.0172414z"/>
            <path fill="#D4C3A5" d="M32.4310345 42.9137931L30.7241379 42.9137931C29.781931 42.9137931 29.0172414 42.1508103 29.0172414 41.2068966 29.0172414 40.2629828 29.781931 39.5 30.7241379 39.5L32.4310345 39.5C33.3732414 39.5 34.137931 40.2629828 34.137931 41.2068966 34.137931 42.1508103 33.3732414 42.9137931 32.4310345 42.9137931zM20.4827586 42.9137931L18.7758621 42.9137931C17.8336552 42.9137931 17.0689655 42.1508103 17.0689655 41.2068966 17.0689655 40.2629828 17.8336552 39.5 18.7758621 39.5L20.4827586 39.5C21.4249655 39.5 22.1896552 40.2629828 22.1896552 41.2068966 22.1896552 42.1508103 21.4249655 42.9137931 20.4827586 42.9137931zM18.7758621 34.3793103C18.332069 34.3793103 17.8882759 34.1915517 17.5639655 33.8843103 17.2567241 33.56 17.0689655 33.1332759 17.0689655 32.6724138 17.0689655 32.2286207 17.2567241 31.7831207 17.5639655 31.4605172 18.1955172 30.8289655 19.3391379 30.8289655 19.9877586 31.4605172 20.295 31.7831207 20.4827586 32.2286207 20.4827586 32.6724138 20.4827586 33.1332759 20.295 33.56 19.9877586 33.8843103 19.6634483 34.1915517 19.2196552 34.3793103 18.7758621 34.3793103zM25.6034483 42.9137931C25.1596552 42.9137931 24.7158621 42.7260345 24.3915517 42.4187931 24.0843103 42.0944828 23.8965517 41.6506897 23.8965517 41.2068966 23.8965517 40.7443276 24.0843103 40.3176034 24.3915517 39.995 25.0401724 39.3634483 26.1667241 39.3634483 26.8153448 39.995 27.1225862 40.3176034 27.3103448 40.7631034 27.3103448 41.2068966 27.3103448 41.6506897 27.1225862 42.0944828 26.8153448 42.4187931 26.4910345 42.7260345 26.0472414 42.9137931 25.6034483 42.9137931z"/>
          </g>
          <g transform="translate(11.5 .5)">
            <polygon fill="#565659" points="12.351 28 10.977 28 8 28 8 30.763 16.702 30.763 16.702 28 13.725 28"/>
            <path fill="#FFE98F" d="M10.6259542,18.6885263 C8.5138626,18.0854211 6.96183206,16.1301184 6.96183206,13.8157895 L9.70992366,13.8157895 C9.70992366,15.0854605 10.7372519,16.1184211 12,16.1184211 L12,0 C5.39157252,0 0.034351145,5.3865 0.034351145,12.03125 C0.034351145,16.4897895 2.44635115,20.3816974 6.0298626,22.4602368 L7.64885496,27.6315789 L10.6259542,27.6315789 L10.6259542,18.6885263 Z"/>
            <path fill="#FFDA44" d="M12,0 L12,16.1184211 C13.2627481,16.1184211 14.2900763,15.0854605 14.2900763,13.8157895 L17.0381679,13.8157895 C17.0381679,16.1301184 15.4861374,18.0854211 13.3740458,18.6885263 L13.3740458,27.6315789 L16.351145,27.6315789 L17.9701374,22.4602368 C21.5536489,20.3817895 23.9656489,16.4898816 23.9656489,12.03125 C23.9656489,5.3865 18.6084275,0 12,0 Z"/>
            <path fill="#FF9811" d="M9.70992366,13.8157895 L6.96183206,13.8157895 C6.96183206,16.1301184 8.5138626,18.0854211 10.6259542,18.6885263 L10.6259542,27.6315789 L13.3740458,27.6315789 L13.3740458,18.6885263 C15.4861374,18.0854211 17.0381679,16.1301184 17.0381679,13.8157895 L14.2900763,13.8157895 C14.2900763,15.0854605 13.2627481,16.1184211 12,16.1184211 C10.7372519,16.1184211 9.70992366,15.0854605 9.70992366,13.8157895 Z"/>
          </g>
        </g>
        <g transform="translate(137 184)">
          <rect width="23.59" height="34.347" x="11.795" y="4.346" fill="#9B9B9B"/>
          <rect width="11.795" height="34.347" x="11.795" y="4.346" fill="#4A4A4A"/>
          <rect width="44.821" height="8.766" x="1.179" y="32.234" fill="#4A4A4A"/>
          <rect width="44.821" height="8.766" fill="#4A4A4A"/>
        </g>
        <rect width="6" height="6" x="192" y="10" fill="#D8D8D8"/>
        <rect width="6" height="6" x="192" y="20" fill="#D8D8D8"/>
        <rect width="6" height="6" x="192" y="30" fill="#D8D8D8"/>
        <rect width="6" height="6" x="192" y="40" fill="#F6A623"/>
        <rect width="6" height="6" x="192" y="50" fill="#D8D8D8"/>
        <rect width="6" height="6" x="192" y="60" fill="#D8D8D8"/>
        <path stroke="#F10000" stroke-linecap="square" stroke-width="2" d="M138,90.5 L138,95.5"/>
        <path stroke="#F8E81C" stroke-linecap="square" stroke-width="2" d="M142,90.5 L142,95.5"/>
        <path stroke="#4990E2" stroke-linecap="square" stroke-width="2" d="M146,90.5 L146,95.5"/>
        <path stroke="#7ED321" stroke-linecap="square" stroke-width="2" d="M150,90.5 L150,95.5"/>
        <path stroke="#BD0FE1" stroke-linecap="square" stroke-width="2" d="M154,90.5 L154,95.5"/>
        <rect width="22" height="2" x="135" y="89" fill="#D8D8D8"/>
        <rect width="22" height="2" x="135" y="95" fill="#D8D8D8"/>
        <polygon fill="#FB0" points="153.541 66.041 159.907 66.041 159.907 96.094 251.34 96.094 251.34 84.459 257.041 84.459 257.041 101.459 153.541 101.459" transform="rotate(-90 205.291 83.75)"/>
        <g transform="rotate(28 -3.36 167.74)">
          <rect width="35.244" height="4.597" x="8.428" y="5.363" fill="#4A4A4A"/>
          <circle cx="6.896" cy="6.896" r="6.896" fill="#D0011B"/>
        </g>
        <rect width="6" height="22" x="110" y="36" fill="#9B9B9B"/>
      </g>
    </svg>`;
};

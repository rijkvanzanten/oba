import html from 'choo/html';
import styles from './styles.css';

export const modalSettings = {
  title: 'Met welke zoekterm wil je zoeken?',
  children(id, value, emit) {

    return html`
        <form class=${styles.form} onsubmit=${preventSubmit} id=${id}>
          <input autofocus type="text" name="keyword" oninput=${saveValues} value="${value || ''}"/>
        </form>
    `;

    function saveValues(e) {
      const values = e.target.value;

      emit('updateValue', {
        id,
        value: values,
      });
    }

    function preventSubmit(e) {
      e.preventDefault();
      return false;
    }

  },
  color: '#18A9E0',
};

export default (state, emit, id) => {
  const {animating} = state.machineparts[id] || false;
  return html`
    <svg data-animating="${animating}" class=${styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 225">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(137 184)">
          <rect width="23.59" height="34.347" x="11.795" y="4.346" fill="#9B9B9B"/>
          <rect width="11.795" height="34.347" x="11.795" y="4.346" fill="#4A4A4A"/>
          <rect width="44.821" height="8.766" x="1.179" y="32.234" fill="#4A4A4A"/>
          <rect width="44.821" height="8.766" fill="#4A4A4A"/>
        </g>
        <g transform="translate(114)">
          <path stroke="#E7ECED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21,55 L21,60.0076235"/>
          <path fill="#4A4A4A" fill-rule="nonzero" d="M52.9230769,27 L52.9230769,68.6666667 L7.72842308,68.6666667 C3.45984615,68.6666667 0,72.1533333 0,76.455 L0,84.2133333 C0,88.5133333 3.45984615,92 7.72842308,92 L62.8461538,92 L86,92 L86,68.6666667 L86,27 L52.9230769,27 Z"/>
          <polygon fill="#9B9B9B" fill-rule="nonzero" points="86 0 35.796 0 4 0 4 27.429 4 36 35.796 36 35.796 27.429 86 27.429"/>
          <rect width="10.015" height="20.03" x="86" y="17" fill="#556080" fill-rule="nonzero"/>
          <rect width="10.015" height="25.038" x="4" fill="#4A4A4A" fill-rule="nonzero"/>
          <rect id=${styles.needle} width="6.677" height="16.692" x="18" y="35" fill="#000" fill-rule="nonzero"/>
          <path id=${styles.needlepoint} fill-rule="nonzero" d="M27.1882665,56.0076235 L15.5038117,56.0076235 C14.1217077,56.0076235 13,54.8859158 13,53.5038117 L13,53.5038117 C13,52.1217077 14.1217077,51 15.5038117,51 L27.1882665,51 C28.5703706,51 29.6920782,52.1217077 29.6920782,53.5038117 L29.6920782,53.5038117 C29.6920782,54.8859158 28.5703706,56.0076235 27.1882665,56.0076235 Z"/>
          <g id={styles.circle} fill="#000" fill-rule="nonzero" transform="translate(58 32)">
            <circle cx="12.015" cy="12.015" r="10.015"/>
            <path d="M11.6844548,23.3689095 C5.24298177,23.3689095 0,18.1259277 0,11.6844548 C0,5.24298177 5.24298177,0 11.6844548,0 C18.1259277,0 23.3689095,5.24298177 23.3689095,11.6844548 C23.3689095,18.1259277 18.1259277,23.3689095 11.6844548,23.3689095 Z M11.6844548,3.33841565 C7.08244879,3.33841565 3.33841565,7.08244879 3.33841565,11.6844548 C3.33841565,16.2864607 7.08244879,20.0304939 11.6844548,20.0304939 C16.2864607,20.0304939 20.0304939,16.2864607 20.0304939,11.6844548 C20.0304939,7.08244879 16.2864607,3.33841565 11.6844548,3.33841565 Z"/>
          </g>
          <g fill="#9B9B9B" fill-rule="nonzero" transform="translate(58 32)">
            <path d="M11.6844548 0C10.7613828 0 10.0152469.746135897 10.0152469 1.66920782L10.0152469 5.00762347C10.0152469 5.93069539 10.7613828 6.67683129 11.6844548 6.67683129 12.6075267 6.67683129 13.3536626 5.93069539 13.3536626 5.00762347L13.3536626 1.66920782C13.3536626.746135897 12.6075267 0 11.6844548 0zM11.6844548 16.6920782C10.7613828 16.6920782 10.0152469 17.4382141 10.0152469 18.3612861L10.0152469 21.6997017C10.0152469 22.6227736 10.7613828 23.3689095 11.6844548 23.3689095 12.6075267 23.3689095 13.3536626 22.6227736 13.3536626 21.6997017L13.3536626 18.3612861C13.3536626 17.4382141 12.6075267 16.6920782 11.6844548 16.6920782zM21.6997017 10.0152469L18.3612861 10.0152469C17.4382141 10.0152469 16.6920782 10.7613828 16.6920782 11.6844548 16.6920782 12.6075267 17.4382141 13.3536626 18.3612861 13.3536626L21.6997017 13.3536626C22.6227736 13.3536626 23.3689095 12.6075267 23.3689095 11.6844548 23.3689095 10.7613828 22.6227736 10.0152469 21.6997017 10.0152469zM6.67683129 11.6844548C6.67683129 10.7613828 5.93069539 10.0152469 5.00762347 10.0152469L1.66920782 10.0152469C.746135897 10.0152469 0 10.7613828 0 11.6844548 0 12.6075267.746135897 13.3536626 1.66920782 13.3536626L5.00762347 13.3536626C5.93069539 13.3536626 6.67683129 12.6075267 6.67683129 11.6844548zM16.4049745 8.63314286C16.8322917 8.63314286 17.2596089 8.46956049 17.5851044 8.14406497L19.9453643 5.78380511C20.5980245 5.13114485 20.5980245 4.0762055 19.9453643 3.42354524 19.292704 2.77088499 18.2377647 2.77088499 17.5851044 3.42354524L15.2248446 5.78380511C14.5721843 6.43646537 14.5721843 7.49140471 15.2248446 8.14406497 15.5503401 8.46956049 15.9776573 8.63314286 16.4049745 8.63314286zM5.78380511 15.2248446L3.42354524 17.5851044C2.77088499 18.2377647 2.77088499 19.292704 3.42354524 19.9453643 3.74904077 20.2708598 4.17635797 20.4344422 4.60367518 20.4344422 5.03099238 20.4344422 5.45830958 20.2708598 5.78380511 19.9453643L8.14406497 17.5851044C8.79672523 16.9324442 8.79672523 15.8775048 8.14406497 15.2248446 7.49140471 14.5721843 6.43479616 14.5721843 5.78380511 15.2248446zM17.5851044 15.2248446C16.9324442 14.5721843 15.8775048 14.5721843 15.2248446 15.2248446 14.5721843 15.8775048 14.5721843 16.9324442 15.2248446 17.5851044L17.5851044 19.9453643C17.9105999 20.2708598 18.3379171 20.4344422 18.7652343 20.4344422 19.1925515 20.4344422 19.6198688 20.2708598 19.9453643 19.9453643 20.5980245 19.292704 20.5980245 18.2377647 19.9453643 17.5851044L17.5851044 15.2248446zM5.78380511 3.42354524C5.13114485 2.77088499 4.0762055 2.77088499 3.42354524 3.42354524 2.77088499 4.0762055 2.77088499 5.13114485 3.42354524 5.78380511L5.78380511 8.14406497C6.10930063 8.46956049 6.53661783 8.63314286 6.96393504 8.63314286 7.39125224 8.63314286 7.81856944 8.46956049 8.14406497 8.14406497 8.79672523 7.49140471 8.79672523 6.43646537 8.14406497 5.78380511L5.78380511 3.42354524z"/>
          </g>
          <path fill="#9B9B9B" fill-rule="nonzero" d="M63.0076235 63.3384156L59.6692078 63.3384156C58.7461359 63.3384156 58 62.5922797 58 61.6692078 58 60.7461359 58.7461359 60 59.6692078 60L63.0076235 60C63.9306954 60 64.6768313 60.7461359 64.6768313 61.6692078 64.6768313 62.5922797 63.9306954 63.3384156 63.0076235 63.3384156zM63.0076235 68.3384156L59.6692078 68.3384156C58.7461359 68.3384156 58 67.5922797 58 66.6692078 58 65.7461359 58.7461359 65 59.6692078 65L63.0076235 65C63.9306954 65 64.6768313 65.7461359 64.6768313 66.6692078 64.6768313 67.5922797 63.9306954 68.3384156 63.0076235 68.3384156zM80.0076235 63.3384156L76.6692078 63.3384156C75.7461359 63.3384156 75 62.5922797 75 61.6692078 75 60.7461359 75.7461359 60 76.6692078 60L80.0076235 60C80.9306954 60 81.6768313 60.7461359 81.6768313 61.6692078 81.6768313 62.5922797 80.9306954 63.3384156 80.0076235 63.3384156zM80.0076235 68.3384156L76.6692078 68.3384156C75.7461359 68.3384156 75 67.5922797 75 66.6692078 75 65.7461359 75.7461359 65 76.6692078 65L80.0076235 65C80.9306954 65 81.6768313 65.7461359 81.6768313 66.6692078 81.6768313 67.5922797 80.9306954 68.3384156 80.0076235 68.3384156zM71.0076235 63.3384156L67.6692078 63.3384156C66.7461359 63.3384156 66 62.5922797 66 61.6692078 66 60.7461359 66.7461359 60 67.6692078 60L71.0076235 60C71.9306954 60 72.6768313 60.7461359 72.6768313 61.6692078 72.6768313 62.5922797 71.9306954 63.3384156 71.0076235 63.3384156zM71.0076235 68.3384156L67.6692078 68.3384156C66.7461359 68.3384156 66 67.5922797 66 66.6692078 66 65.7461359 66.7461359 65 67.6692078 65L71.0076235 65C71.9306954 65 72.6768313 65.7461359 72.6768313 66.6692078 72.6768313 67.5922797 71.9306954 68.3384156 71.0076235 68.3384156z"/>
          <rect width="23.369" height="6.677" x="9" y="68" fill="#E7ECED" fill-rule="nonzero"/>
          <path fill="#38454F" fill-rule="nonzero" d="M96.6768313 20L91.6692078 20C90.7461359 20 90 20.7461359 90 21.6692078 90 22.5922797 90.7461359 23.3384156 91.6692078 23.3384156L96.6768313 23.3384156 96.6768313 20zM96.6768313 25L91.6692078 25C90.7461359 25 90 25.7461359 90 26.6692078 90 27.5922797 90.7461359 28.3384156 91.6692078 28.3384156L96.6768313 28.3384156 96.6768313 25zM96.6768313 30L91.6692078 30C90.7461359 30 90 30.7461359 90 31.6692078 90 32.5922797 90.7461359 33.3384156 91.6692078 33.3384156L96.6768313 33.3384156 96.6768313 30z"/>
        </g>
        <g id=${styles.r2d2} fill-rule="nonzero" transform="translate(43 102)">
          <path fill="#E4E7E7" d="M7.52386179,24.1214281 C4.7847561,24.1214281 2.54361789,26.3595719 2.54361789,29.095018 L2.54361789,73.8564748 C1.04943089,73.8564748 0.053495935,74.8510791 0.053495935,76.3432698 C0.053495935,77.8354604 1.04943089,78.8300647 2.54361789,78.8300647 L10.0139837,78.8300647 C11.5081707,78.8300647 12.5041057,77.8354604 12.5041057,76.3432698 C12.5041057,74.8510791 11.5081707,73.8564748 10.0139837,73.8564748 L12.5041057,24.1214281 C12.5041057,24.1214281 7.52386179,24.1214281 7.52386179,24.1214281 Z M67.285935,73.8564748 L67.285935,29.095018 C67.285935,26.3595719 65.0447967,24.1214281 62.3056911,24.1214281 L57.3254472,24.1214281 L59.8158537,73.8564748 C58.3216667,73.8564748 57.3257317,74.8510791 57.3257317,76.3432698 C57.3257317,77.8354604 58.3216667,78.8300647 59.8158537,78.8300647 L67.2862195,78.8300647 C68.7804065,78.8300647 69.7763415,77.8354604 69.7763415,76.3432698 C69.7763415,74.8510791 68.7798374,73.8564748 67.285935,73.8564748 Z"/>
          <path fill="#C8CBCB" d="M12.5038211,76.3432698 C12.5038211,74.8510791 11.5078862,73.8564748 10.0136992,73.8564748 L12.5038211,24.1214281 L7.52386179,24.1214281 L7.52386179,73.8564748 L10.0139837,78.8300647 C11.5078862,78.8300647 12.5038211,77.8354604 12.5038211,76.3432698 Z M62.3056911,24.1214281 L57.3254472,24.1214281 L59.8158537,73.8564748 C58.3216667,73.8564748 57.3257317,74.8510791 57.3257317,76.3432698 C57.3257317,77.8354604 58.3216667,78.8300647 59.8158537,78.8300647 L62.3059756,73.8564748 L62.3059756,24.1214281 L62.3056911,24.1214281 Z"/>
          <polygon fill="#324D5B" points="17.484 68.883 52.345 68.883 47.365 73.856 22.464 73.856"/>
          <path fill="#E4E7E7" d="M34.9149187,0 C48.6104472,0 59.5665854,10.9417842 59.5665854,24.6187302 L59.5665854,69.131536 L10.2629675,69.131536 L10.2629675,24.6187302 C10.2629675,10.9417842 21.2191057,0 34.9149187,0 Z"/>
          <path fill="#324D5B" d="M34.9149187,6.71414748 C37.6540244,6.71414748 39.8951626,8.95229137 39.8951626,11.6877374 C39.8951626,14.4231835 37.6540244,16.6613273 34.9149187,16.6613273 C32.175813,16.6613273 29.9346748,14.4231835 29.9346748,11.6877374 C29.9346748,8.95229137 32.1755285,6.71414748 34.9149187,6.71414748 Z"/>
          <path fill="#2494BC" d="M10.2629675,24.1214281 L10.2629675,29.095018 L59.5665854,29.095018 L59.5665854,24.1214281 L10.2629675,24.1214281 Z M22.4643089,41.5287086 L47.3652439,41.5287086 L47.3652439,36.5551187 L22.4643089,36.5551187 L22.4643089,41.5287086 Z M22.4643089,51.4758885 L47.3652439,51.4758885 L47.3652439,46.5022986 L22.4643089,46.5022986 L22.4643089,51.4758885 Z M22.4643089,61.4227842 L47.3652439,61.4227842 L47.3652439,56.4491942 L22.4643089,56.4491942 L22.4643089,61.4227842 Z"/>
        </g>
        <path stroke="#2494BC" stroke-linejoin="round" stroke-width="6" d="M53.4078428,129 L129.004244,129 C131.763324,129 134,126.76867 134,124.009832 L134,74.6641227"/>
        <rect width="119" height="39" x="118" y="146" fill="#4A4A4A" rx="10"/>
        <rect width="28" height="55.5" x="172" y="91" fill="#4A4A4A"/>
        <g fill-rule="nonzero" transform="rotate(-180 115 89)">
          <path fill="#EFC75E" d="M23.380516,19.4897687 C23.2349644,19.3558719 21.7992883,19.4484875 21.7992883,19.4484875 L21.7829181,17.9295374 L21.080694,17.1268683 L19.4161922,17.0996441 L19.4145907,17.097331 L19.4145907,17.097331 C19.4075623,17.1199288 19.41379,15.4266014 19.41379,15.4266014 L18.6368327,14.8637011 C18.6368327,14.8637011 17.1257117,14.819306 17.1132562,14.8076512 L16.9918149,13.2552491 L15.5927936,11.5992883 C16.0762456,10.5560498 16.3549822,9.39679715 16.3549822,8.1705516 C16.3549822,3.6588968 12.6942171,0.0012455516 8.17873665,0.0012455516 C3.66076512,0.000355871886 0,3.65800712 0,8.16966192 C0,12.6821174 3.66076512,16.3404804 8.17704626,16.3404804 C9.4297153,16.3404804 10.6123665,16.050089 11.6734875,15.5463523 L20.9732206,24.9021352 C20.9732206,24.9021352 24.9103203,24.9129893 24.9103203,24.9114769 L24.916548,20.9378114 C24.916548,20.9378114 24.2983986,20.3352313 23.380516,19.4897687 Z M6.61690391,8.57455516 C5.54644128,8.57455516 4.67909253,7.70177936 4.67909253,6.62508897 C4.67909253,5.54839858 5.54635231,4.67482206 6.61690391,4.67482206 C7.68745552,4.67482206 8.55551601,5.54830961 8.55551601,6.62508897 C8.55551601,7.70186833 7.68736655,8.57455516 6.61690391,8.57455516 Z"/>
          <path fill="#CA9F30" d="M6.61841637 3.89386121C5.11352313 3.89386121 3.89350534 5.113879 3.89350534 6.61877224 3.89350534 8.12366548 5.11352313 9.34368327 6.61841637 9.34368327 8.12411032 9.34368327 9.3433274 8.12366548 9.3433274 6.61877224 9.3433274 5.113879 8.12411032 3.89386121 6.61841637 3.89386121zM6.61841637 7.7866548C5.97375445 7.7866548 5.45062278 7.26343416 5.45062278 6.61886121 5.45062278 5.97348754 5.97384342 5.45106762 6.61841637 5.45106762 7.26307829 5.45106762 7.78620996 5.97348754 7.78620996 6.61886121 7.78620996 7.26343416 7.26307829 7.7866548 6.61841637 7.7866548zM13.544395 14.3248221C12.8008897 14.9725979 11.9405694 15.4840747 10.9977758 15.8321174L20.2429715 24.9153915 24.1356762 24.9153915 13.544395 14.3248221z"/>
        </g>
        <g fill-rule="nonzero" transform="rotate(-180 75 89)">
          <path fill="#EFC75E" d="M23.380516,19.4897687 C23.2349644,19.3558719 21.7992883,19.4484875 21.7992883,19.4484875 L21.7829181,17.9295374 L21.080694,17.1268683 L19.4161922,17.0996441 L19.4145907,17.097331 L19.4145907,17.097331 C19.4075623,17.1199288 19.41379,15.4266014 19.41379,15.4266014 L18.6368327,14.8637011 C18.6368327,14.8637011 17.1257117,14.819306 17.1132562,14.8076512 L16.9918149,13.2552491 L15.5927936,11.5992883 C16.0762456,10.5560498 16.3549822,9.39679715 16.3549822,8.1705516 C16.3549822,3.6588968 12.6942171,0.0012455516 8.17873665,0.0012455516 C3.66076512,0.000355871886 0,3.65800712 0,8.16966192 C0,12.6821174 3.66076512,16.3404804 8.17704626,16.3404804 C9.4297153,16.3404804 10.6123665,16.050089 11.6734875,15.5463523 L20.9732206,24.9021352 C20.9732206,24.9021352 24.9103203,24.9129893 24.9103203,24.9114769 L24.916548,20.9378114 C24.916548,20.9378114 24.2983986,20.3352313 23.380516,19.4897687 Z M6.61690391,8.57455516 C5.54644128,8.57455516 4.67909253,7.70177936 4.67909253,6.62508897 C4.67909253,5.54839858 5.54635231,4.67482206 6.61690391,4.67482206 C7.68745552,4.67482206 8.55551601,5.54830961 8.55551601,6.62508897 C8.55551601,7.70186833 7.68736655,8.57455516 6.61690391,8.57455516 Z"/>
          <path fill="#CA9F30" d="M6.61841637 3.89386121C5.11352313 3.89386121 3.89350534 5.113879 3.89350534 6.61877224 3.89350534 8.12366548 5.11352313 9.34368327 6.61841637 9.34368327 8.12411032 9.34368327 9.3433274 8.12366548 9.3433274 6.61877224 9.3433274 5.113879 8.12411032 3.89386121 6.61841637 3.89386121zM6.61841637 7.7866548C5.97375445 7.7866548 5.45062278 7.26343416 5.45062278 6.61886121 5.45062278 5.97348754 5.97384342 5.45106762 6.61841637 5.45106762 7.26307829 5.45106762 7.78620996 5.97348754 7.78620996 6.61886121 7.78620996 7.26343416 7.26307829 7.7866548 6.61841637 7.7866548zM13.544395 14.3248221C12.8008897 14.9725979 11.9405694 15.4840747 10.9977758 15.8321174L20.2429715 24.9153915 24.1356762 24.9153915 13.544395 14.3248221z"/>
        </g>
        <path fill="#9B9B9B" d="M200,0 L253.000064,0 C258.522876,0 263,4.47411771 263,9.99632157 L263,59.0036784 C263,64.5244944 258.5197,69 253.000064,69 L200,69 L200,0 Z"/>
        <g transform="translate(209 12)">
          <ellipse id=${styles.loop} cx="28.507" cy="15.154" fill="#90C5FF" fill-rule="nonzero" rx="12.925" ry="13.056"/>
          <rect width="5.744" height="16.787" x="6.158" y="26.435" fill="#59595A" fill-rule="nonzero" transform="rotate(-135 9.03 34.828)"/>
          <rect width="5.744" height="1.583" x="12.588" y="27.541" fill="#ABCB57" fill-rule="nonzero" transform="rotate(-135 15.46 28.333)"/>
          <rect width="5.744" height="1.583" x="-.273" y="40.532" fill="#ABCB57" fill-rule="nonzero" transform="rotate(-135 2.6 41.324)"/>
          <path fill="#59595A" fill-rule="nonzero" d="M38.6993471,4.85874946 C35.9770087,2.10879657 32.3573601,0.594423983 28.507321,0.594423983 C24.657282,0.594423983 21.0377267,2.10879657 18.315295,4.85874946 C15.5929566,7.60860814 14.0936464,11.264848 14.0936464,15.1538073 C14.0936464,18.532197 15.2256377,21.7345867 17.3075466,24.3201285 L14.9515011,26.6999914 L17.0767831,28.846758 L19.4328286,26.4668951 C21.9924946,28.5697559 25.1627419,29.7132848 28.507321,29.7132848 C32.3573601,29.7132848 35.9769154,28.1989122 38.6993471,25.4489593 C41.4217787,22.6990064 42.9209957,19.0427666 42.9209957,15.1538073 C42.9209957,11.264848 41.4217787,7.60860814 38.6993471,4.85874946 Z M36.5943059,23.3225439 C34.4342321,25.504454 31.5621866,26.7061156 28.507321,26.7062099 C25.4524555,26.7062099 22.58041,25.5045482 20.4203362,23.3225439 C18.2602625,21.1406338 17.0706269,18.2395546 17.0705336,15.1538073 C17.0705336,12.06806 18.2601692,9.16698073 20.4203362,6.98507066 C22.58041,4.8031606 25.4524555,3.60149893 28.507321,3.60140471 C31.5621866,3.60140471 34.4342321,4.80306638 36.5943059,6.98507066 C38.7543796,9.16707495 39.9440152,12.06806 39.9441085,15.1538073 C39.9441085,18.2395546 38.7544729,21.1406338 36.5943059,23.3225439 Z"/>
          <path fill="#5B5B5F" fill-rule="nonzero" d="M28.507321,29.7131906 C32.3573601,29.7131906 35.9769154,28.198818 38.6993471,25.4488651 C41.4217787,22.6989122 42.9209957,19.0427666 42.9209957,15.1538073 C42.9210889,11.264848 41.4217787,7.60860814 38.6993471,4.85874946 L36.5943059,6.98507066 C38.7543796,9.16698073 39.9440152,12.06806 39.9441085,15.1538073 C39.9440152,18.2395546 38.7544729,21.1406338 36.5943059,23.3225439 C34.4342321,25.504454 31.5621866,26.7061156 28.507321,26.7062099 C25.4524555,26.7062099 22.58041,25.5045482 20.4203362,23.3225439 L18.4687332,25.2938758 L18.315295,25.4488651 L16.0140954,27.7733276 L15.4598525,28.3331734 L2.04525163,41.8833833 L4.0762321,43.9348951 L5.18462473,42.8152976 L16.9366833,30.9444368 L18.0450759,29.8248394 L17.0766898,28.8466638 L19.4327354,26.4668009 C21.9924946,28.5696617 25.1627419,29.7131906 28.507321,29.7131906 Z" opacity=".3"/>
        </g>
      </g>
    </svg>`;
};

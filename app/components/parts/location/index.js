import html from 'choo/html';
import styles from '../parts.css';

export const modalSettings = {
  title: 'Bij welke locatie wil je zoeken?',
  children(id, value, emit) {
    return html`
      <form id=${id} onsubmit=${preventSubmit} onclick=${saveValues}>
        <select class=${styles.select} name="location">
          <option>Kies een locatie...</option>
          <option value="centrale OBA">centrale OBA</option>
          <option value="banne">banne</option>
          <option value="bijlmer" >bijlmer</option>
          <option value="bos en lommer" >bos en lommer</option>
          <option value="buitenveldert" >buitenveldert</option>
          <option value="cinétol" >cinétol</option>
          <option value="de hallen" >de hallen</option>
          <option value="diemen" >diemen</option>
          <option value="duivendrecht" >duivendrecht</option>
          <option value="gezenveld" >gezenveld</option>
          <option value="van der pek" >van der pek</option>
          <option value="javaplein" >javaplein</option>
          <option value="ijburg" >ijburg</option>
          <option value="linnaeus" >linnaeus</option>
          <option value="mercatorplein" >mercatorplein</option>
          <option value="molenwijk" >molenwijk</option>
          <option value="olympisch kwartier" >olympisch kwartier</option>
          <option value="reigersbos" >reigersbos</option>
          <option value="roelof hartplein" >roelof hartplein</option>
          <option value="slotermeer" >slotermeer</option>
          <option value="slotervaart" >slotervaart</option>
          <option value="spaarndammerbuurt" >spaarndammerbuurt</option>
          <option value="staatsliedenbuurt" >staatsliedenbuurt</option>
          <option value="waterlandplein" >waterlandplein</option>
          <option value="magazijn" >magazijn</option>
          <option value="kluis" >kluis</option>
          <option value="wisselcollecties" >wisselcollecties</option>
        </select>
      </form>
    `;

    function saveValues(e) {
      const value = e.target.parentNode.querySelector('select').value;
      console.log(value);
      emit('updateValue', {
        id,
        value: value,
      });
    }

    function preventSubmit(e) {
      e.preventDefault();
      return false;
    }

  },
  color: '#e42C9e',
};

export default () => html`
  <svg class=${styles.svg} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 302 225">
    <defs>
      <rect id="machinetype-a" width="114.7" height="131.184" rx="5"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(216 32)">
        <rect width="40" height="5" y="8" fill="#D8D8D8"/>
        <rect width="68" height="91" x="18" y="27" fill="#6A6A6A" rx="5"/>
        <g fill-rule="nonzero" transform="translate(49 80)">
          <path fill="#E7ECED" d="M24.0517241 13.8965517L6.94827586 13.8965517C3.12672414 13.8965517 0 10.7698276 0 6.94827586L0 6.94827586C0 3.12672414 3.12672414 0 6.94827586 0L24.0517241 0C27.8732759 0 31 3.12672414 31 6.94827586L31 6.94827586C31 10.7698276 27.8732759 13.8965517 24.0517241 13.8965517zM6.94827586 31L24.0517241 31C27.8732759 31 31 27.8732759 31 24.0517241L31 24.0517241C31 20.2301724 27.8732759 17.1034483 24.0517241 17.1034483L6.94827586 17.1034483C3.12672414 17.1034483 0 20.2301724 0 24.0517241L0 24.0517241C0 27.8732759 3.12672414 31 6.94827586 31z"/>
          <circle cx="24.052" cy="6.948" r="4.81" fill="#88C057" stroke="#659C35" stroke-linecap="round" stroke-width="2"/>
          <circle cx="6.948" cy="24.052" r="4.81" fill="#ED7161" stroke="#D75A4A" stroke-linecap="round" stroke-width="2"/>
        </g>
        <g transform="translate(25 36)">
          <rect width="31" height="34" fill="#D8D8D8" rx="2"/>
          <g fill-rule="nonzero" transform="translate(2 5)">
            <g fill="#C7CAC7" transform="translate(2.315)">
              <path d="M.462962963 0C.207407407 0 0 .206944444 0 .462962963L0 18.9814815C0 19.2375.207407407 19.4444444.462962963 19.4444444.718518519 19.4444444.925925926 19.2375.925925926 18.9814815L.925925926.462962963C.925925926.206944444.718518519 0 .462962963 0zM19.9074074 5.55555556C19.6518519 5.55555556 19.4444444 5.7625 19.4444444 6.01851852L19.4444444 24.537037C19.4444444 24.7930556 19.6518519 25 19.9074074 25 20.162963 25 20.3703704 24.7930556 20.3703704 24.537037L20.3703704 6.01851852C20.3703704 5.7625 20.162963 5.55555556 19.9074074 5.55555556zM10.1851852 0C9.92962963 0 9.72222222.206944444 9.72222222.462962963L9.72222222 9.25925926C9.72222222 9.51527778 9.92962963 9.72222222 10.1851852 9.72222222 10.4407407 9.72222222 10.6481481 9.51527778 10.6481481 9.25925926L10.6481481.462962963C10.6481481.206944444 10.4407407 0 10.1851852 0zM10.1851852 14.8148148C9.92962963 14.8148148 9.72222222 15.0217593 9.72222222 15.2777778L9.72222222 24.537037C9.72222222 24.7930556 9.92962963 25 10.1851852 25 10.4407407 25 10.6481481 24.7930556 10.6481481 24.537037L10.6481481 15.2777778C10.6481481 15.0217593 10.4407407 14.8148148 10.1851852 14.8148148z"/>
            </g>
            <circle cx="2.778" cy="21.759" r="2.778" fill="#7383BF"/>
            <circle cx="12.404" cy="12.404" r="2.874" fill="#26B99A"/>
            <circle cx="22.222" cy="3.241" r="2.778" fill="#7383BF"/>
          </g>
        </g>
        <g fill-rule="nonzero" transform="translate(39)">
          <rect width="15.27" height="8.803" x="5.704" y="22.062" fill="#E6E6E6"/>
          <path fill="#5FC9ED" d="M4.11303196,0.875273437 L22.5657534,0.875273437 C24.4068037,0.875273437 25.8993881,1.73576562 25.8993881,2.79715234 L25.8993881,22.2279766 C25.8993881,23.2893633 24.4068037,24.1498555 22.5657534,24.1498555 L4.11303196,24.1498555 C2.27198174,24.1498555 0.77939726,23.2893633 0.77939726,22.2279766 L0.77939726,2.79715234 C0.77939726,1.73564453 2.27198174,0.875273437 4.11303196,0.875273437 Z"/>
        </g>
      </g>
      <g transform="translate(86)">
        <rect width="130.497" height="149.728" y=".226" fill="#4A4A4A" rx="10"/>
        <g transform="translate(8.073 8.299)">
          <mask id="machinetype-b" fill="#fff">
            <use xlink:href="#machinetype-a"/>
          </mask>
          <use fill="#9D9D9D" xlink:href="#machinetype-a"/>
          <g fill="#4A4A4A" fill-rule="nonzero" mask="url(#machinetype-b)">
            <g transform="rotate(15 143.364 88.038)">
              <path d="M44.2664495 50.6701764C45.0061273 53.1976598 46.0326189 55.6348761 47.330829 57.9216468L43.63244 62.5704111C42.4248027 64.0899101 42.5606619 66.2563245 43.9192538 67.625378L50.2895401 73.9741758C51.6632275 75.3432294 53.8369745 75.4634353 55.3616165 74.2598717L59.9959243 70.6040474C62.3810078 71.9732514 64.917046 73.0412636 67.5587524 73.7934908L68.2531438 79.7360859C68.4795758 81.6617876 70.1098861 83.1060639 72.0421056 83.1060639L81.0540984 83.1060639C82.986318 83.1060639 84.6166282 81.6616372 84.8430602 79.7360859L85.5072607 74.0041145C88.3452082 73.2669318 91.0623919 72.16868 93.6135255 70.7394483L98.0968787 74.2749163C99.6215207 75.4784798 101.795268 75.3430789 103.168955 73.9890699L109.539241 67.6402721C110.912929 66.2712186 111.033692 64.1048042 109.826055 62.5853052L106.339003 58.1772536C107.788167 55.6797088 108.920327 53.0169749 109.675101 50.2337341L115.049086 49.6169078C116.981457 49.3912396 118.43047 47.7664288 118.43047 45.8407271L118.43047 36.8591341C118.43047 34.9334324 116.981306 33.3086216 115.049086 33.0829534L109.750578 32.4661271C109.025845 29.7129754 107.939122 27.0801801 106.55049 24.6128748L109.811111 20.5057142C111.018748 18.9862152 110.882889 16.8198008 109.524297 15.4507472L103.169106 9.11699398C101.795419 7.74794042 99.6216717 7.62758407 98.0970297 8.83114763L94.0967314 11.990502C91.5003114 10.471003 88.7225948 9.31257305 85.8093209 8.53025674L85.2055023 3.36997797C84.9790703 1.44427627 83.3487601 0 81.4165405 0L72.4045478 0C70.4723282 0 68.8420179 1.44427627 68.615586 3.36997797L68.0117674 8.53025674C65.0228652 9.3276176 62.1698223 10.5311812 59.5130204 12.1108583L55.3617674 8.83114763C53.8371254 7.62758407 51.6633784 7.76298497 50.2896911 9.11699398L43.9194047 15.4657918C42.5457174 16.8348453 42.4249537 19.0012597 43.6325909 20.5207587L47.1045479 24.8987212C45.7157651 27.3961156 44.6590825 30.0589999 43.9646911 32.8271961L38.4095599 33.459067C36.4773404 33.6847352 35.0281757 35.309546 35.0281757 37.2352477L35.0281757 46.2168407C35.0281757 48.1425424 36.4773404 49.7673533 38.4095599 49.9930214L44.2664495 50.6701764zM76.9179409 26.373237C85.129874 26.373237 91.8171652 33.0379702 91.8171652 41.2222024 91.8171652 49.4064346 85.129874 56.0711678 76.9179409 56.0711678 68.7061588 56.0711678 62.0187167 49.4064346 62.0187167 41.2222024 62.0187167 33.0379702 68.7060078 26.373237 76.9179409 26.373237zM6.69488074 106.089673C7.23091753 107.921314 7.97480532 109.687539 8.91560459 111.344738L6.23542063 114.713649C5.36025852 115.814814 5.45871426 117.384792 6.44327163 118.376931L11.0597518 122.977839C12.0552487 123.969977 13.6305404 124.057089 14.7354326 123.184879L18.0938672 120.535542C19.8223124 121.52779 21.6601528 122.301767 23.5745699 122.846898L24.0777881 127.153435C24.241881 128.548971 25.4233499 129.595623 26.8236092 129.595623L33.3545065 129.595623C34.7547658 129.595623 35.9362347 128.548862 36.1003276 127.153435L36.5816668 122.999535C38.6382977 122.465306 40.6074125 121.669415 42.4561924 120.633665L45.7052317 123.195782C46.8101239 124.067992 48.3854157 123.969868 49.3809126 122.988632L53.9973927 118.387725C54.9928896 117.395586 55.0804058 115.825608 54.2052437 114.724443L51.6782131 111.529974C52.7284077 109.720029 53.5488721 107.790374 54.0958485 105.773388L57.9903198 105.32638C59.3906886 105.162841 60.4407737 103.985358 60.4407737 102.589822L60.4407737 96.0809547C60.4407737 94.6854187 59.3905792 93.5079353 57.9903198 93.3443959L54.1505461 92.8973883C53.6253394 90.902208 52.8378029 88.9942487 51.8314759 87.2062183L54.1944136 84.2298017C55.0695757 83.1286367 54.97112 81.5586587 53.9865626 80.5665199L49.381022 75.9765149C48.3855251 74.9843761 46.8102333 74.8971551 45.7053411 75.769365L42.8063666 78.0589162C40.9247681 76.9577511 38.9117859 76.118249 36.8005667 75.5513126L36.3629856 71.8117123C36.1988927 70.4161764 35.0174239 69.3695244 33.6171645 69.3695244L27.0862673 69.3695244C25.6860079 69.3695244 24.504539 70.4161764 24.3404461 71.8117123L23.9028651 75.5513126C21.7368389 76.1291517 19.6692684 77.0013616 17.7439118 78.1461372L14.735542 75.769365C13.6306498 74.8971551 12.055358 74.9952787 11.0598611 75.9765149L6.44338103 80.5774225C5.44788413 81.5695613 5.36036792 83.1395393 6.23553002 84.2407044L8.75162109 87.4133681C7.74518466 89.2232038 6.97941782 91.1529684 6.4761996 93.1590513L2.4504539 93.6169615C1.05019453 93.7805009 0 94.9579843 0 96.3535203L0 102.862387C0 104.257923 1.05019453 105.435407 2.4504539 105.598946L6.69488074 106.089673zM30.3570763 88.4819344C36.3081786 88.4819344 41.1543888 93.3117971 41.1543888 99.2428248 41.1543888 105.173853 36.3081786 110.003715 30.3570763 110.003715 24.4060833 110.003715 19.5597637 105.173853 19.5597637 99.2428248 19.5597637 93.3117971 24.4059739 88.4819344 30.3570763 88.4819344z"/>
              <path d="M61.7877297,123.553918 C62.2605947,125.1697 62.9168155,126.727777 63.7467419,128.189675 L61.3824168,131.161561 C60.6103923,132.132954 60.6972451,133.517911 61.5657726,134.393126 L65.638202,138.451818 C66.5163799,139.327034 67.906024,139.40388 68.880705,138.634459 L71.8433491,136.297345 C73.3680975,137.172657 74.989349,137.855421 76.6781526,138.336309 L77.1220667,142.135322 C77.2668213,143.366394 78.3090544,144.289698 79.5442936,144.289698 L85.3055266,144.289698 C86.5407658,144.289698 87.5829989,143.366298 87.7277535,142.135322 L88.152367,138.470957 C89.9666246,137.999688 91.7036798,137.297592 93.3345816,136.383905 L96.2007226,138.644077 C97.1754036,139.413497 98.5650477,139.326938 99.4432256,138.46134 L103.515655,134.402648 C104.393833,133.527432 104.471035,132.142476 103.699011,131.171082 L101.46979,128.353081 C102.396219,126.756437 103.119992,125.054191 103.602508,123.274907 L107.038017,122.880579 C108.273353,122.736313 109.199685,121.697595 109.199685,120.466523 L109.199685,114.724724 C109.199685,113.493651 108.273256,112.454934 107.038017,112.310668 L103.650759,111.91634 C103.187448,110.156291 102.492722,108.473184 101.604991,106.895872 L103.689457,104.270226 C104.461481,103.298833 104.374629,101.913876 103.506101,101.03866 L99.4433221,96.9895862 C98.5651442,96.1143707 97.1755001,96.0374286 96.2008191,96.8068489 L93.6434879,98.8265772 C91.9836352,97.8551841 90.2078823,97.114617 88.3454697,96.6144938 L87.9594574,93.3156044 C87.8147028,92.0845319 86.7724697,91.1612276 85.5372305,91.1612276 L79.7759975,91.1612276 C78.5407583,91.1612276 77.4985252,92.0845319 77.3537706,93.3156044 L76.9677583,96.6144938 C75.0569976,97.1242348 73.2330897,97.8936551 71.5346357,98.9035192 L68.8808015,96.8068489 C67.9061205,96.0374286 66.5164764,96.1239884 65.6382985,96.9895862 L61.5658691,101.048278 C60.6876913,101.923494 60.6104888,103.30845 61.3825133,104.279843 L63.6020838,107.07861 C62.7142556,108.675157 62.0387342,110.377499 61.5948201,112.147166 L58.0435073,112.551112 C56.808268,112.695378 55.8818386,113.734095 55.8818386,114.965168 L55.8818386,120.706967 C55.8818386,121.938039 56.808268,122.976756 58.0435073,123.121023 L61.7877297,123.553918 Z M82.6613426,108.021246 C87.9111094,108.021246 92.1861951,112.281911 92.1861951,117.513969 C92.1861951,122.746027 87.9111094,127.006691 82.6613426,127.006691 C77.4116724,127.006691 73.1364901,122.746027 73.1364901,117.513969 C73.1364901,112.281911 77.4115759,108.021246 82.6613426,108.021246 Z" transform="rotate(15 82.54 117.725)"/>
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix(-1 0 0 1 86 32)">
        <rect width="40" height="5" y="8" fill="#D8D8D8"/>
        <rect width="68" height="91" x="18" y="27" fill="#6A6A6A" rx="5"/>
        <g fill-rule="nonzero" transform="translate(49 80)">
          <path fill="#E7ECED" d="M24.0517241 13.8965517L6.94827586 13.8965517C3.12672414 13.8965517 0 10.7698276 0 6.94827586L0 6.94827586C0 3.12672414 3.12672414 0 6.94827586 0L24.0517241 0C27.8732759 0 31 3.12672414 31 6.94827586L31 6.94827586C31 10.7698276 27.8732759 13.8965517 24.0517241 13.8965517zM6.94827586 31L24.0517241 31C27.8732759 31 31 27.8732759 31 24.0517241L31 24.0517241C31 20.2301724 27.8732759 17.1034483 24.0517241 17.1034483L6.94827586 17.1034483C3.12672414 17.1034483 0 20.2301724 0 24.0517241L0 24.0517241C0 27.8732759 3.12672414 31 6.94827586 31z"/>
          <circle cx="24.052" cy="6.948" r="4.81" fill="#88C057" stroke="#659C35" stroke-linecap="round" stroke-width="2"/>
          <circle cx="6.948" cy="24.052" r="4.81" fill="#ED7161" stroke="#D75A4A" stroke-linecap="round" stroke-width="2"/>
        </g>
        <g transform="translate(25 36)">
          <rect width="31" height="34" fill="#D8D8D8" rx="2"/>
          <g fill-rule="nonzero" transform="translate(2 5)">
            <g fill="#C7CAC7" transform="translate(2.315)">
              <path d="M.462962963 0C.207407407 0 0 .206944444 0 .462962963L0 18.9814815C0 19.2375.207407407 19.4444444.462962963 19.4444444.718518519 19.4444444.925925926 19.2375.925925926 18.9814815L.925925926.462962963C.925925926.206944444.718518519 0 .462962963 0zM19.9074074 5.55555556C19.6518519 5.55555556 19.4444444 5.7625 19.4444444 6.01851852L19.4444444 24.537037C19.4444444 24.7930556 19.6518519 25 19.9074074 25 20.162963 25 20.3703704 24.7930556 20.3703704 24.537037L20.3703704 6.01851852C20.3703704 5.7625 20.162963 5.55555556 19.9074074 5.55555556zM10.1851852 0C9.92962963 0 9.72222222.206944444 9.72222222.462962963L9.72222222 9.25925926C9.72222222 9.51527778 9.92962963 9.72222222 10.1851852 9.72222222 10.4407407 9.72222222 10.6481481 9.51527778 10.6481481 9.25925926L10.6481481.462962963C10.6481481.206944444 10.4407407 0 10.1851852 0zM10.1851852 14.8148148C9.92962963 14.8148148 9.72222222 15.0217593 9.72222222 15.2777778L9.72222222 24.537037C9.72222222 24.7930556 9.92962963 25 10.1851852 25 10.4407407 25 10.6481481 24.7930556 10.6481481 24.537037L10.6481481 15.2777778C10.6481481 15.0217593 10.4407407 14.8148148 10.1851852 14.8148148z"/>
            </g>
            <circle cx="2.778" cy="21.759" r="2.778" fill="#7383BF"/>
            <circle cx="12.404" cy="12.404" r="2.874" fill="#26B99A"/>
            <circle cx="22.222" cy="3.241" r="2.778" fill="#7383BF"/>
          </g>
        </g>
        <g fill-rule="nonzero" transform="translate(39)">
          <rect width="15.27" height="8.803" x="5.704" y="22.062" fill="#E6E6E6"/>
          <path fill="#5FC9ED" d="M4.11303196,0.875273437 L22.5657534,0.875273437 C24.4068037,0.875273437 25.8993881,1.73576562 25.8993881,2.79715234 L25.8993881,22.2279766 C25.8993881,23.2893633 24.4068037,24.1498555 22.5657534,24.1498555 L4.11303196,24.1498555 C2.27198174,24.1498555 0.77939726,23.2893633 0.77939726,22.2279766 L0.77939726,2.79715234 C0.77939726,1.73564453 2.27198174,0.875273437 4.11303196,0.875273437 Z"/>
        </g>
      </g>
      <g transform="translate(128 148)">
        <rect width="23.59" height="70.526" x="11.795" y="4.105" fill="#9B9B9B"/>
        <rect width="11.795" height="70.526" x="11.795" y="4.105" fill="#4A4A4A"/>
        <rect width="44.821" height="9" x="1.179" y="68" fill="#4A4A4A"/>
        <rect width="44.821" height="9" fill="#4A4A4A"/>
      </g>
    </g>
  </svg>
`;

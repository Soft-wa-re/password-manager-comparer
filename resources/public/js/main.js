// Copyright from the original work from which this is derived:
//
// Copyright (c) 2018-2019 Quantopian Inc.
//
// Quantopian grants you the right to reuse this code in any private or public
// context, in modified or unmodified form, as long as this copyright notice is
// left intact and the table generated by this code (or your modified version
// of it) is preceded or followed by a visible credit to "Jonathan Kamens of
// Quantopian Inc." which links to
// https://medium.com/@QuantopianCyber/head-to-head-evaluation-of-five-password-managers-8faa4851c767 .
//
// If you add any additional features and/or products to the comparison grid or
// correct any errors or omissions, you are encouraged to submit your
// improvements back to security@quantopian.com so we can incorporate them into
// the original, published version of the grid for the benefit of other readers.
//
// Copyright for this derivative work:
//
// Copyright (c) 2019 Jonathan Kamens
//
// You can do whatever you want with this code provided that you leave this
// entire copyright block intact, credit me, and link back to
// https://blog.kamens.us/?p=5729.

import { React, ReactDOM, html } from './deps.js';
import { rawData, notes } from './data.js';

const dataTags = rawData.reduce((p, c, arr) => {
  p = p || []
  if(c.includes('OR') || c.includes('Tags')) {
  } else {
    return [...new Set([...p, ...c[1]])]
  }
}, [])

window.onLoad = function () {
  window.changeTable();
};

window.changeTable = function () {
  ReactDOM.render(
    html`<div dangerouslySetInnerHTML=${{ __html: formatTable() }} />`,
    document.body,
  );
};

window.formatTable = function formatTable() {
  try {
    window.compare1 = document.getElementById('compare1').value;
    window.compare2 = document.getElementById('compare2').value;
  } catch {
    // First time page is loaded.
  }
  window.products = rawData[0][2];
  let comparing; 
  let index1; let index2; 
  let score1; let score2;

  if (window.compare1 && window.compare2) {
    comparing = true;
    score1 = score2 = 0;
    for (var i = 0; i < window.products.length; i++) {
      if (window.products[i] == window.compare1) index1 = i;
      if (window.products[i] == window.compare2) index2 = i;
    }
  }

  let featureList = ``;
  window.wantFeatures = [];
  let scores = '';
  let t = `
    <div class='table-wrapper'>
      <table class='table'>
        ${ makeHeader(comparing) }
        ${ window.makeForm(featureList) }
        ${ makeTable(comparing, index1, index2, score1, score2, scores) }
      </table>
    </div>
  `;

  t += makeNotes();
  return t;
}

window.makeForm = function makeForm(featureList) {
  let form = `<form>
    <h1>Password Manager Comparison</h1>
    <a href='./contributors.html'>contributors</a>
    <p class='features'>
    <b>Toggle features you care about:</b>`;
  for (var i = 0; i < dataTags.length; i++) {
    const feature = dataTags[i];
    const id = `feature${feature}`;
    if (getCheckedState(id)) window.wantFeatures.push(feature);
    featureList += `<span style='white-space: nowrap;'><input  class='form-check-input' type='checkbox' id='${id}'`;
    if (getCheckedState(id)) featureList += ' checked';
    featureList += ` onchange='changeTable()'><label class="form-check-label" for='${id}'>${feature}</label></span>`;
  }
  featureList += '</p>';
  form += featureList;
  form += "<p class='compare'><b>Add a comparison:</b> Compare ";
  form += window.makeDropdown(1, window.compare2, window.compare1);
  form += ' to ';
  form += window.makeDropdown(2, window.compare1, window.compare2);
  form += '</p>';
  form += '</form>';
  return form;
}

window.makeDropdown = function (id, c1, c2) {
  return `
      <select id='compare${id}' 
              onchange='changeTable()'
              class='d-inline-block w-auto form-select' 
              aria-label='Default select example'>
          <option value>(select)</option>
          ${  window.products.reduce((p, c, ar) => {
              return `${p}
                  <option value='${c}'
                          ${c == c1 ? ' hidden' : ''}
                          ${c == c2 ? ' selected' : ''}
                        > ${c} </option>}`})
        }
      </select>
      `;
};

window.makeTable = function makeTable(comparing, index1, index2, score1, score2, scores) {
  let table;
  let t = '';
  for (var i = 1; i < rawData.length; i++) {
    let tags = rawData[i][1];
    if (tags.length) {
      var found;
      if (tags[0] == 'OR') {
        tags = tags.slice(1);
        found = false;
        for (var j = 0; j < window.wantFeatures.length; j++) {
          if (tags.includes(window.wantFeatures[j])) {
            found = true;
            break;
          }
        }
      } else {
        found = true;
        for (var j = 0; j < tags.length; j++) {
          if (!window.wantFeatures.includes(tags[j])) {
            found = false;
            break;
          }
        }
      }
      if (!found)
        continue;
    }
    table += `<tr><td>${rawData[i][0]}</td>`;
    const values = rawData[i][2];
    for (var j = 0; j < values.length; j++) {
      table += `<td>
        ${formatValue(values[j])}
        ${formatNotes(values[j])}</td>`;
    }
    if (comparing) {
      var cmp;
      if (!(cmp = rawData[i][3])) { cmp = yesNoCompare; }
      const winner = cmp(
        window.compare1,
        getValue(values[index1]),
        window.compare2,
        getValue(values[index2])
      );
      if (winner == window.compare1)
        score1++;

      else if (winner == window.compare2)
        score2++;
      table += `<td>${winner}</td>`;
    }
    table += '</tr>';
  }

  if (comparing) {
    scores += `
        <tr><th align=left colspan='${1 + window.products.length}'>Score:</th>
        <th align=left>
            ${window.compare1} - ${score1}<br/>
            ${window.compare2} - ${score2}</th></tr>`;
  }

  t += scores;
  t += table;
  return t;
}

function yesNoCompare(n1, v1, n2, v2) {
  if (v1 == v2) return 'tie';
  if (v1 == 'yes') return n1;
  if (v2 == 'yes') return n2;
  if (v1 == 'no') return n2;
  if (v2 == 'no') return n1;
  return 'tie';
}

function formatValue(v) {
  v = getValue(v);
  return password_manager_comparison.core.formatValue(v)
}

function getValue(v) {
  if (Array.isArray(v)) { return v[0]; }
  return v;
}

window.formatNotes = function formatNotes(v) {
  if (Array.isArray(v)) { 
    return `<sup>${v[1]}</sup>`;
  } else {
    return ''; 
  }
}

window.makeHeader = function makeHeader(comparing) {
  return `
    <tr>
      <th>${rawData[0][0]}</th>
      ${window.products.reduce((p, c) => `${p}<th>${c}</th>`, '')}
      ${comparing ? `<th>${window.compare1} vs. ${window.compare2}</th>` : ''}
    </tr>`;
}

function getCheckedState(id) {
  let checked;
  try {
    checked = document.getElementById(id).checked;
  } catch {
    checked = true;
  }
  return checked;
}


function makeNotes() {
  let note = `<div class='notes'>
              <hr/>`;
  note += Object.keys(notes).reduce((prev, curr) => {
    return `${prev}<p><sup>${curr}</sup>${notes[curr]}</p>`;
  }, '')
  note += '</div>';
  return note;
}
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
window.rd = rawData;

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

window.changeTable = function changeTable() {
  ReactDOM.render(
    html`<div dangerouslySetInnerHTML=${{ __html: formatTable() }} />`,
    document.body,
  );
};

window.formatTable = function formatTable() {
  window.products = rawData[0][2];
  return `
    <div class='table-wrapper'>
      <table class='table'>
        ${ makeHeader(rawData[0][0], window.products) }
        ${ window.makeForm() }
        ${ makeTable() }
      </table>
    </div>
    ${makeNotes()}
  `;
}

window.makeForm = function makeForm() {
  window.wantFeatures = [];
  let featureList = ``;
  let form = `<form>
    <h1>Password Manager Comparison</h1>
    <a href='./contributors.html'>contributors</a>
    <p class='features'>
    <b>Toggle features you care about:</b>`;
  for (var i = 0; i < dataTags.length; i++) {
    const feature = dataTags[i];
    const id = `feature${feature}`;
    if ('OR' == feature) continue
    if (getCheckedState(id)) window.wantFeatures.push(feature);
    featureList += `<span style='white-space: nowrap;'><input  class='form-check-input' type='checkbox' id='${id}'`;
    if (getCheckedState(id)) featureList += ' checked';
    featureList += ` onchange='changeTable()'><label class="form-check-label" for='${id}'>${feature}</label></span>`;
  }
  featureList += '</p>';
  form += featureList;
  form += '</form>';
  return form;
}

window.makeTable = function makeTable() {
  let table = '';
  let scoresLen = rawData[0][2].length;
  let scoresAll = new Array(scoresLen)
  let scoresHtml;

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

    table += getCompareesRowById(i).reduce((prv, cur, idx, arr) => {
      return `${prv}<td>
        ${formatValue(cur)}
        ${formatNotes(cur)}</td>`;
    }, '')

    getCompareesRowById(i).forEach((val, idx, arr) => {
      if("yes" == val) {
        scoresAll[idx] = (scoresAll[idx] || 0) + 1;
      } else if ("no" == val) {
      }
    })
    scoresHtml = scoresAll.reduce((prev, currVal, currIdx, arr) => {
      return `${prev}<td>${currVal}</td>${ currIdx + 1 == arr.length ? '</tr>' : ''}`
    }, '<tr><td>Score:</td>')
    table += '</tr>';
  }

  return `
    ${scoresHtml}
    ${table}
  `;
}

function getCompareesRowById(i) {
  return rawData[i][2]
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

function getNote(v) {
  if (Array.isArray(v)) { return v[1]; }
  return ''
}

window.formatNotes = function formatNotes(v) {
  return password_manager_comparison.core.formatNotes(
    getNote(v)
  )
}

window.makeHeader = function makeHeader(firstHeading, compareesHeaders) {
  return password_manager_comparison.core.makeHeader(firstHeading, compareesHeaders);
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
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
  const featuresPossible = getFeaturesPossible()
  window.wantFeatures = window.getWantedFeatures(featuresPossible)
  return `
    <div class='table-wrapper'>
      <table class='table'>
        ${ password_manager_comparison.core.makeHeader(rawData[0][0], window.products) }
        ${ window.makeForm(featuresPossible)          }
        ${ makeTable(window.wantFeatures)                                }
      </table>
    </div>
    ${ password_manager_comparison.core.makeNotes(notes) }
  `;
}

window.getWantedFeatures = function getWantedFeatures(features) {
  return features.reduce((prv, cur) => {
    return prv.concat(getCheckedState(`feature${cur}`) ? [cur] : [])
  }, [])
}

window.makeForm = function makeForm(features) {
  return `
    <form>
      <h1>Password Manager Comparison</h1>
      <a href='./contributors.html'>contributors</a>
      <p class='features'>
        <b>Toggle features you care about:</b>
        ${ features.reduce((prv, cur, idx, arr) => {
          const id = `feature${cur}`;
          return `
            ${prv}
            <span style='white-space: nowrap;'>
              <input  class='form-check-input' 
                      type='checkbox'
                      id='${id}'
                      ${getCheckedState(id) ? ' checked' : ''} 
                      onchange='changeTable()'>
              <label class="form-check-label" for='${id}'>
                ${cur}
              </label>
            </span>`;
        }, '') }
      </p>
    </form>`;
}

window.makeTable = function makeTable(wantedFeatures) {
  let table = '';
  let scoresLen = rawData[0][2].length;
  let scoresAll = new Array(scoresLen)

  for (var i = 1; i < rawData.length; i++) {
    let tags = thisFeaturesKeywords(i);
    if (
      thesefeaturesAreOred(i) && (intersectionOf(wantedFeatures, tags).length <= 0) ||
      !thesefeaturesAreOred(i) && intersectionOf(wantedFeatures, tags).length !== tags.length
    ) {
    } else {
      table += `<tr>
        <td>${rawData[i][0]}</td>
        ${getCompareesRowById(i).reduce((prv, cur, idx, arr) => {
          if("yes" == cur) {
            scoresAll[idx] = (scoresAll[idx] || 0) + 1;
          } else if ("no" == cur) {
          }
          return `
            ${prv}
            <td>${password_manager_comparison.core.formatValue(getValue(cur))}
                ${password_manager_comparison.core.formatNotes(getNote(cur))}</td>`;
        }, '')}
        </tr>
      `;
    }

  }

  return `
    <tr>
      <td>Score:</td>
      ${ scoresAll.reduce((prev, currVal) => `${prev}<td>${currVal}</td>`, '') }
    </tr>
    ${table}
  `;
}

function getFeaturesPossible() {
  return rawData.reduce((p, c, arr) => {
    p = p || [];
    if (c.includes('Tags')) {
    } else {
      return [...new Set([...p, ...(c[1].filter(x => x !== 'OR'))])];
    }
  }, []);
}

window.thesefeaturesAreOred = function thesefeaturesAreOred(id) {
  return rawData[id][1][0] == 'OR'
}

window.thisFeaturesKeywords = function thisFeaturesKeywords(id) {
  return rawData[id][1].filter(x => 'OR' !== x)
}

window.intersectionOf = function intersectionOf(a, b) {
  return a.filter(x => b.includes(x))
}

function getCompareesRowById(i) {
  return rawData[i][2]
}

function getValue(v) {
  if (Array.isArray(v)) { return v[0]; }
  return v;
}

function getNote(v) {
  if (Array.isArray(v)) { return v[1]; }
  return ''
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

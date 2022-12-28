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

import { React, ReactDOM, html } from "./deps.js";
import { rawData } from "./data.js";

var notes = {
  a: "CLI allows individual attachments to be exported. The user would have to write a script to iterate through and export all of them.",
  b: "Attachments can be exported in Keepass format.",
  c: "Support for this directly within Bitwarden is on their product roadmap, but not yet implemented. However, you can do it today if you pay extra for Duo and use that for Bitwarden's 2fa.",
  d: "You can share individual items or \"vaults\" (folders with distinct access control) between accounts, but there is no way to share the entire contents of one account with another. Alternatively, if you're a paying customer, the apps will remember multiple Keeper accounts and let you switch between them, which is better than nothing but not nearly as useful as being able to see your personal and work credentials at the same time.",
  e: "In work profile apps Bitwarden might not pop up a dialog automatically inviting you to auto-fill, but it'll display a notification you can tap to do it.",
  f: "Only on Windows.",
  g: "Paid annually. Price goes down for more users and for multi-year subscriptions.",
  h: "Paid annually. Price goes down for multi-year subscriptions. There is a free version but it's not worth considering given that it doesn't sync into the cloud or between devices.",
  i: "Actually RoboForm doesn't support attachments or YubiKeys (see above), so if you care about those features, the price quoted here is irrelevant. :-/",
  j: "There's no built-in bulk export on Linux, but you can write a script to do it with the CLI.",
  k: "LastPass's YubiKey support uses YubiCo's proprietary OTP protocol rather than the more secure U2F (a.k.a., FIDO2, WebAuthn) that the other password managers use. It's probably good enough, but this is nevertheless an important distinction.",
  l: "You can use backup codes or your backup telephone number to recover from a lost 2fa device. If you didn't save backup codes and you didn't set up a recovery phone number or it has changed, then you may be out of luck, or you may be able to contact Dashlane support and ask them to disable your 2fa.",
  m: "This functionality is on Keeper's roadmap and expected to be delivered early in 2020.",
  n: "Bitwarden supports both the more secure U2F and the less secure Yubico OTP in the browser, but if you want to you want to use your YubiKey with Bitwarden on Android or iOS, you will have to use Yubico OTP there. Bitwarden does not yet support U2F on Android or iOS, but it is in development.",
  o: "Self-hosted enterprise customers can recover users from lost 2fa without losing data, but generally speaking I assume most customers will not self-host, so the answer in the grid here is for Bitwarden's cloud offering.",
  p: "The Bitwarden team says this is currently in development.",
  q: "The RoboForm manual says keyboard shortcuts are only supported in Internet Explorer.",
  r: "There is a \"This website\" tab in the browser menu, but it doesn't appear to work, at least not well. When I create a vault entry for a site and then browse to the login page for that site and select the \"This website\" tab, the vault entry I just created does not show up.",
};

var dataTags = [];
for (var i = 1; i < rawData.length; i++) {
  var tags = rawData[i][1];
  for (var j = 0; j < tags.length; j++)
    if (!dataTags.includes(tags[j])) dataTags.push(tags[j]);
  dataTags.sort();
}

function yesNoCompare(n1, v1, n2, v2) {
  if (v1 == v2) return "tie";
  if (v1 == "yes") return n1;
  if (v2 == "yes") return n2;
  if (v1 == "no") return n2;
  if (v2 == "no") return n1;
  return "tie";
}

function getValue(v) {
  if (Array.isArray(v))
    return v[0];
  return v;
}

function formatValue(v) {
  v = getValue(v);
  if (v + 0 == v) return v;
  if (v == "yes") return "<span style='color: #0D8050'>" + v + "</span>";
  if (v == "no") return "<span style='color: #C23030'>" + v + "</span>";
  return "<span style='color: #BF7326;'>" + v + "</span>";
}

function formatNotes(v, current, mappings) {
  if (!Array.isArray(v))
    return "";
  var foundNotes = [];
  for (var i = 1; i < v.length; i++) {
    if (!mappings[v[i]]) {
      mappings[v[i]] = current[0];
      current[0]++;
    }
    foundNotes.push("<sup>" + mappings[v[i]] + "</sup>");
  }
  return foundNotes.join(",");
}

function formatTable() {
  var compare1, compare2;
  var currentNote = [1];
  var noteMappings = {};

  try {
    window.compare1 = document.getElementById('compare1').value;
    window.compare2 = document.getElementById('compare2').value;
  }
  catch {
    // First time page is loaded.
  }
  window.products = rawData[0][2];
  var comparing, index1, index2, score1, score2;
  if (window.compare1 && window.compare2) {
    comparing = true;
    score1 = score2 = 0;
    for (var i = 0; i < window.products.length; i++) {
      if (window.products[i] == window.compare1) index1 = i;
      if (window.products[i] == window.compare2) index2 = i;
    }
  }

  var featureList = "<h1>Password Manager Comparison</h1> <a href='./contributors.html'>contributors</a> <p class='features'><b>Toggle features you care about:</b>";
  var wantFeatures = [];
  for (var i = 0; i < dataTags.length; i++) {
    var feature = dataTags[i];
    if (feature == "OR") continue;
    var id = "feature" + feature;
    var checked;
    try {
      checked = document.getElementById(id).checked;
    }
    catch {
      checked = true;
    }
    if (checked) wantFeatures.push(feature);
    featureList += " <span style='white-space: nowrap;'>" +
      "<input type='checkbox' id='" + id + "'";
    if (checked) featureList += " checked";
    featureList += " onchange='changeTable()'><label for='" + id + "'>" +
      feature + "</label></span>\n";
  }
  featureList += "</p>";

  var t = "<div class='table-wrapper'><table>\n";

  var header = "<tr><th>" + rawData[0][0] + "</th>";
  for (var i = 0; i < window.products.length; i++)
    header += "<th>" + window.products[i] + "</th>";
  if (comparing) header += "<th>" + window.compare1 + " vs. " + window.compare2 + "</th>\n";
  header += "</tr>\n";
  for (var i = 1; i < rawData.length; i++) {
    if (i % 20 == 1)
      t += header;
    var tags = rawData[i][1];
    if (tags.length) {
      var found;
      if (tags[0] == "OR") {
        tags = tags.slice(1);
        found = false;
        for (var j = 0; j < wantFeatures.length; j++)
          if (tags.includes(wantFeatures[j])) {
            found = true;
            break;
          }
      }
      else {
        found = true;
        for (var j = 0; j < tags.length; j++)
          if (!wantFeatures.includes(tags[j])) {
            found = false;
            break;
          }
      }
      if (!found) continue;
    }
    t += "<tr><td>" + rawData[i][0] + "</td>";
    var values = rawData[i][2];
    for (var j = 0; j < values.length; j++)
      t += "<td>" + formatValue(values[j]) +
        formatNotes(values[j], currentNote, noteMappings) + "</td>";
    if (comparing) {
      var cmp;
      if (!(cmp = rawData[i][3]))
        cmp = yesNoCompare
      let winner = cmp(window.compare1, getValue(values[index1]),
        window.compare2, getValue(values[index2]));
      if (winner == window.compare1) score1++;
      else if (winner == window.compare2) score2++;
      t += "<td>" + winner + "</td>";
    }
    t += "</tr>\n";
  }

  if (comparing) {
    t += "<tr><th align=left colspan='" + (window.products.length + 1) +
      "'>Score:</th>";
    t += "<th align=left>" + window.compare1 + " - " + score1 + "<br/>" +
      window.compare2 + " - " + score2 + "</th></tr>\n";
  }

  t += "</table></div>\n";
  t += "<form>\n";
  t += featureList;
  window.makeDropdown = function (id, c1, c2) {
    let dd = ''
    for (var i = 0; i < window.products.length; i++) {
      if (window.products[i] == c1) continue;
      dd += "<option value='" + window.products[i] + "'";
      if (window.products[i] == c2) dd += " selected";
      dd += ">" + window.products[i] + "</option>";
    }
    return `
        <select class='d-inline-block w-auto form-select' aria-label='Default select example'  id='compare${id}' onchange='changeTable()'>
          <option value>(select)</option>
          ${dd}
        </select>
        `
  }
  t += "<p class='compare'><b>Add a comparison:</b> Compare ";
  t += window.makeDropdown(1, window.compare2, window.compare1)
  t += " to ";
  t += window.makeDropdown(2, window.compare1, window.compare2)
  t += "</p>\n";
  t += "</form>\n";
  t += "<div class='notes'>\n";
  if (currentNote[0] > 1) {
    t += "<hr/>\n";
    let reverseMappings = [];
    for (var key = 'a'; noteMappings[key];
      key = String.fromCharCode(key.charCodeAt(0) + 1))
      reverseMappings[noteMappings[key]] = key;
    for (var i = 1; i < currentNote[0]; i++)
      t += "<p><sup>" + i + "</sup>" + notes[reverseMappings[i]] +
        "</p>\n";
  }
  t += "</div>\n";
  return t;
}

function changeTable() {
  const App = (props) => {
    return { __html: formatTable() };
  }

  ReactDOM.render(
    html`<body dangerouslySetInnerHTML=${App()} />`,
    document.body
  );
}

window.onLoad = function () {
  changeTable();
}

// Local variables:
// js-indent-level: 2
// End:

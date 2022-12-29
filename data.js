function outagesCompare(n1, v1, n2, v2) {
  if (v1 == v2) return "tie";
  if (v1 == "unknown") return n2;
  if (v2 == "unknown") return n1;
  return v1 < v2 ? n1 : n2;
}

function priceCompare(n1, v1, n2, v2) {
  if (v1 == v2) return "tie";
  return v1 < v2 ? n1 : n2;
}

export const notes = {
  a: 'CLI allows individual attachments to be exported. The user would have to write a script to iterate through and export all of them.',
  b: 'Attachments can be exported in Keepass format.',
  c: "Support for this directly within Bitwarden is on their product roadmap, but not yet implemented. However, you can do it today if you pay extra for Duo and use that for Bitwarden's 2fa.",
  d: "You can share individual items or \"vaults\" (folders with distinct access control) between accounts, but there is no way to share the entire contents of one account with another. Alternatively, if you're a paying customer, the apps will remember multiple Keeper accounts and let you switch between them, which is better than nothing but not nearly as useful as being able to see your personal and work credentials at the same time.",
  e: "In work profile apps Bitwarden might not pop up a dialog automatically inviting you to auto-fill, but it'll display a notification you can tap to do it.",
  f: 'Only on Windows.',
  g: 'Paid annually. Price goes down for more users and for multi-year subscriptions.',
  h: "Paid annually. Price goes down for multi-year subscriptions. There is a free version but it's not worth considering given that it doesn't sync into the cloud or between devices.",
  i: "Actually RoboForm doesn't support attachments or YubiKeys (see above), so if you care about those features, the price quoted here is irrelevant. :-/",
  j: "There's no built-in bulk export on Linux, but you can write a script to do it with the CLI.",
  k: "LastPass's YubiKey support uses YubiCo's proprietary OTP protocol rather than the more secure U2F (a.k.a., FIDO2, WebAuthn) that the other password managers use. It's probably good enough, but this is nevertheless an important distinction.",
  l: "You can use backup codes or your backup telephone number to recover from a lost 2fa device. If you didn't save backup codes and you didn't set up a recovery phone number or it has changed, then you may be out of luck, or you may be able to contact Dashlane support and ask them to disable your 2fa.",
  m: "This functionality is on Keeper's roadmap and expected to be delivered early in 2020.",
  n: 'Bitwarden supports both the more secure U2F and the less secure Yubico OTP in the browser, but if you want to you want to use your YubiKey with Bitwarden on Android or iOS, you will have to use Yubico OTP there. Bitwarden does not yet support U2F on Android or iOS, but it is in development.',
  o: "Self-hosted enterprise customers can recover users from lost 2fa without losing data, but generally speaking I assume most customers will not self-host, so the answer in the grid here is for Bitwarden's cloud offering.",
  p: 'The Bitwarden team says this is currently in development.',
  q: 'The RoboForm manual says keyboard shortcuts are only supported in Internet Explorer.',
  r: "There is a \"This website\" tab in the browser menu, but it doesn't appear to work, at least not well. When I create a vault entry for a site and then browse to the login page for that site and select the \"This website\" tab, the vault entry I just created does not show up.",
};


export const rawData = [
    ["Feature",                                                                                             "Tags",                                         ["1Password",       "Dashlane",     "Bitwarden",    "LastPass",     "Keeper",       "Zoho Vault", "RoboForm"     ], "CompareFunction"],
    ["Chrome support",                                                                                      ["Chrome"],                                     ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Firefox support",                                                                                     ["Firefox"],                                    ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Edge support",                                                                                        ["Edge", "Windows"],                            ["yes",             "yes",          "yes",          "yes",          "yes",          "no",         "yes"          ], null],
    ["Safari support",                                                                                      ["Safari", "macOS"],                            ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["macOS, Windows support",                                                                              ["OR", "macOS", "Windows"],                     ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Linux support",                                                                                       ["Linux"],                                      ["poor",            "poor",         "yes",          "yes",          "yes",          "yes",        "poor"         ], null],
    ["macOS command-line client",                                                                           ["macOS", "CLI"],                               ["yes",             "no",           "yes",          "poor",         "yes",          "no",         "no"           ], null],
    ["Windows command-line client",                                                                         ["Windows", "CLI"],                             ["yes",             "no",           "yes",          "poor",         "yes",          "no",         "no"           ], null],
    ["Linux command-line client",                                                                           ["Linux", "CLI"],                               ["yes",             "no",           "yes",          "poor",         "yes",          "no",         "no"           ], null],
    ["Android support, including auto-fill",                                                                ["Android"],                                    ["yes",             "yes",          "yes",          "yes",          "yes",          "poor",       "yes"          ], null],
    ["Android auto-fill in Chrome",                                                                         ["Android"],                                    ["yes",             "yes",          "yes",          "yes",          "yes",          "no",         "yes"          ], null],
    ["Auto-fill in Android work profile",                                                                   ["Android", "Enterprise"],                      ["yes",             "yes",          ["yes", "e"],   "yes",          "yes",          "yes",        "unknown"      ], null],
    ["Android auto-fill shows full usernames",                                                              ["Android"],                                    ["yes",             "yes",          "yes",          "yes",          "yes",          "no",         "yes"          ], null],
    ["iOS support, including auto-fill",                                                                    ["iOS"],                                        ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Free two-factor authentication",                                                                      [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Paid two-factor authentication",                                                                      [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["YubiKey support in browser (Enterprise)",                                                             ["Enterprise", "YubiKey"],                      ["no?yes",          "no",           "yes",          ["yes", "k"],   "yes",          "no",         "no"           ], null],
    ["YubiKey support in browser (Personal)",                                                               ["Personal", "YubiKey"],                        ["no?yes",          "no",           "yes",          ["yes", "k"],   "yes",          "no",         "no"           ], null],
    ["YubiKey support in Android",                                                                          ["Android", "YubiKey"],                         ["no",              "no",           ["yes", "n"],   ["yes", "k"],   "no",           "no",         "no"           ], null],
    ["YubiKey support in iOS (NFC)",                                                                        ["iOS", "YubiKey"],                             ["no",              "no",           ["yes", "n"],   ["yes", "k"],   "no",           "no",         "no"           ], null],
    ["YubiKey support in iOS (Lightning)",                                                                  ["iOS", "YubiKey"],                             ["yes",             "no",           ["yes", "n"],   ["yes", "k"],   "yes",          "no",         "no"           ], null],
    ["Saved password in Android, iOS",                                                                      ["OR", "Android", "iOS"],                       ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Fingerprint login in Android, iOS",                                                                   ["OR", "Android", "iOS"],                       ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Free synchronization across devices",                                                                 [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Paid synchronization across devices",                                                                 [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Import from LastPass",                                                                                ["LastPassMigration"],                          ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        ["poor", "f"]  ], null],
    ["LastPass import distinguishes work from personal items",                                              ["LastPassMigration", "Enterprise"],            ["no",              "no",           "no",           "yes",          "no",           "no",         "no"           ], null],
    ["Preserves LastPass folders in some way when importing",                                               ["LastPassMigration"],                          ["yes",             "doubtful",     "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Personal linked account support (or the equivalent)",                                                 ["Enterprise"],                                 ["yes",             "poor",         "yes",          "yes",          ["poor", "d"],  "no",         "no"           ], null],
    ["Create new items in web app",                                                                         [],                                             ["yes",             "unknown",      "yes",          "yes",          "yes",          "unknown",    "no"           ], null],
    ["Save location (personal vs. work) specified at creation time",                                        ["Enterprise"],                                 ["yes",             "no",           "yes",          "yes",          "no",           "no",         "no"           ], null],
    ["Save location (folder / collection / space) editable in web app",                                     [],                                             ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Sensible password quality checks for master password (personal)",                                     [],                                             ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Sensible password quality checks for master password (enterprise)",                                   ["Enterprise"],                                 ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Password history on Linux",                                                                           ["Linux"],                                      ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Password history on Windows, macOS",                                                                  ["OR", "Windows", "macOS"],                     ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Secure notes",                                                                                        [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "poor",       "yes"          ], null],
    ["Attachments on notes on Linux",                                                                       ["Linux"],                                      ["no",              "no",           "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Attachments on notes on Windows, macOS",                                                              ["OR", "Windows", "macOS"],                     ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Shared folders with access control on Linux",                                                         ["Linux", "Enterprise"],                        ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Shared folders with access control on Windows",                                                       ["Windows", "Enterprise"],                      ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Shared folders with access control on macOS",                                                         ["macOS", "Enterprise"],                        ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Items can exist in multiple groups with distinct access control",                                     ["Enterprise"],                                 ["no",              "no",           "yes",          "no",           "yes",          "yes",        "no"           ], null],
    ["Nested folders in web app",                                                                           [],                                             ["no",              "no",           "yes",          "yes",          "yes",          "poor",       "yes"          ], null],
    ["Nested folders in browser",                                                                           [],                                             ["no",              "no",           "yes",          "yes",          "yes",          "poor",       "yes"          ], null],
    ["Nested folders in desktop app",                                                                       [],                                             ["yes",             "no",           "yes",          "yes",          "yes",          "poor",       "yes"          ], null],
    ["Can copy stored items on Linux",                                                                      ["Linux"],                                      ["no",              "no",           "no",           "yes",          "yes",          "yes",        "yes"          ], null],
    ["Can copy stored items on Windows, macOS",                                                             ["OR", "Windows", "macOS"],                     ["yes",             "no",           "no",           "yes",          "yes",          "yes",        "yes"          ], null],
    ["Can 'unshare' shared item",                                                                           [],                                             ["yes",             "yes",          "no",           "yes",          "yes",          "yes",        "yes"          ], null],
    ["Keyboard shortcuts for auto-filling in browser",                                                      [],                                             ["yes",             "no",           "yes",          "yes",          "no",           "no",         ["partial","q"]], null],
    ["Password generator in browser can be accessed directly (not inside a vault entry or login form)",     [],                                             ["yes",             "yes",          "yes",          "yes",          "no",           "yes",        "yes"          ], null],
    ["Browser menu shows matching vault entries for current site",                                          [],                                             ["yes",             ["poor", "r"],  "yes",          "yes",          "no",           "yes",        "yes"          ], null],
    ["Resists auto-filling invisible forms",                                                                [],                                             ["yes",             "yes",          "yes",          "no",           "yes",          "unknown",    "unknown"      ], null],
    ["Browser plugin only fills selected form",                                                             [],                                             ["no",              "unknown",      "no",           "no",           "unknown",      "yes",        "unknown"      ], null],
    ["Browser plugin displays icon in form fields",                                                         [],                                             ["yes",             "yes",          "no",           "yes",          "yes",          "yes",        "no"           ], null],
    ["Browser plugin prompts to save new sites on Linux",                                                   ["Linux"],                                      ["no?yes",          "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Browser plugin prompts to save new sites on Windows, macOS",                                          ["OR", "Windows", "macOS"],                     ["unknown?yes",     "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["2FA integrated into login entries in vault (macOS, Windows, iOS, Android)",                           ["OR", "macOS", "Windows", "iOS", "Android"],   ["yes",             "no",           "yes",          "no",           "no",           "no",         "?unknown?"    ], null],
    ["2FA integrated into login entries in vault (Linux)",                                                  [],                                             ["no",              "no",           "yes",          "no",           "no",           "no",         "?unknown?"    ], null],
    ["Auto-fill in browser disabled by default",                                                            [],                                             ["yes",             "no",           "yes",          "no",           "no?yes",       "yes",        "yes"          ], null],
    ["Auto-fill in browser can be disabled by preference",                                                  [],                                             ["yes",             "no",           "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["Admins can reset passwords",                                                                          ["Enterprise"],                                 ["yes",             "yes",          ["no", "p"],    "yes",          ["no", "m"],    "no",         "no"           ], null],
    ["Lost master password recoverable without losing data in Enterprise",                                  ["Enterprise"],                                 ["yes",             ["yes", "l"],   ["no", "p"],    "yes",          "yes",          "no",         "no"           ], null],
    ["Lost 2fa recoverable without losing data in Enterprise",                                              ["Enterprise"],                                 ["yes",             ["yes", "l"],   ["no", "o"],    "yes",          "yes",          "yes",        "no"           ], null],
    ["Admins can access other people's unshared credentials",                                               ["Enterprise"],                                 ["yes",             "no",           ["no", "p"],    "yes",          "yes",          "no",         "no"           ], null],
    ["Admins can reset other people's 2fa",                                                                 ["Enterprise"],                                 ["yes",             "no",           ["no", "o"],    "yes",          ["no", "m"],    "yes",        "no"           ], null],
    ["2fa can be enforced at the organization level",                                                       ["Enterprise"],                                 ["no?yes",          "no",           ["no", "c"],    "yes",          "yes",          "yes",        "yes"          ], null],
    ["2fa can be audited at the organization level",                                                        ["Enterprise"],                                 ["yes",             "no",           "yes",          "yes",          "yes",          "no",         "no"           ], null],
    ["Enterprise SAML single sign-on (SSO)",                                                                ["Enterprise"],                                 ["no",              "no",           ["no", "p"],    "no",           "yes",          "no",         "no"           ], null],
    ["Exporting items on Linux",                                                                            ["Linux"],                                      [["no?poor", "j"],  "no",           "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Exporting items on Windows, macOS",                                                                   ["OR", "Windows", "macOS"],                     ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "yes"          ], null],
    ["App export includes attachments",                                                                     [],                                             ["unknown?no",      "unknown",      "no",           "no",           "no",           "no",         "yes"          ], null],
    ["CLI export includes attachments",                                                                     ["CLI"],                                        [["no?poor", "a"],  "no",           ["poor", "a"],  ["poor", "a"],  ["yes", "b"],   "no",         "no"           ], null],
    ["Responsive to bug reports and feature requests",                                                      [],                                             ["no",              "unknown",      "yes",          "no",           "no",           "unknown",    "unknown"      ], null],
    ["Open source",                                                                                         [],                                             ["no",              "no",           "yes",          "no",           "no",           "no",         "no"           ], null],
    ["Option to self-host",                                                                                 [],                                             ["poor",            "no",           "yes",          "no",           "no",           "no",         "no"           ], null],
    ["Users can delete own account (customer service not needed)",                                          ["Personal"],                                   ["yes",             "yes",          "yes",          "yes",          "no",           "yes",        "yes"          ], null],
    ["Admins can delete business account (customer service not needed)",                                    ["Enterprise"],                                 ["yes",             "yes",          "yes",          "no",           "no",           "yes",        "no"           ], null],
    ["Enterprise price per user per month",                                                                 ["Enterprise"],                                 [7.99,              4.00,           3.00,           6.00,           3.75,           3.60,         [3.33, "g"]    ], priceCompare],
    ["Personal price per user per month (no Attachments or YubiKey)",                                       ["Personal"],                                   [2.99,              4.99,           0.00,           2.00,           2.50,           0,            [1.99, "h"]    ], priceCompare],
    ["Personal price per user per month (w/Attachments & YubiKey)",                                         ["Personal"],                                   [2.99,              4.99,           0.84,           2.00,           2.50,           0,            [1.99, "i"]    ], priceCompare],
    ["Has a useful status page that can be subscribed to",                                                  [],                                             ["yes",             "yes",          "yes",          "yes",          "yes",          "yes",        "no"           ], null],
    ["Number of outages in the past six months",                                                            [],                                             [1,                 12,             0,              12,             0,              2,            "unknown"      ], outagesCompare],
  ]
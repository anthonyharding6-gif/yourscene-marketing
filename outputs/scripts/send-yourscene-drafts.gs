/**
 * YourScene — send the correct outreach drafts + clean up the 5 duplicates.
 *
 * HOW TO RUN:
 *  1. Go to script.google.com  →  New project
 *  2. Delete the sample code, paste ALL of this, click Save (disk icon)
 *  3. Click Run (▶) on the `run` function. Authorize Gmail access when prompted.
 *  4. With DRY_RUN = true (default), it only LOGS what it would do — open
 *     View → Execution log and confirm it lists the 8 sends + 5 trashes.
 *  5. Change DRY_RUN to false, Save, Run again → it actually sends + trashes.
 *
 * SAFETY: This ONLY touches drafts whose subject is in the lists below.
 * Your ~90 older Harbor-campaign drafts are NEVER sent or trashed.
 */

var DRY_RUN = true; // <-- set to false to actually send + trash

// The 8 correct YourScene drafts to SEND (exact subjects):
var SEND_SUBJECTS = ['world cup crowd', 'world cup collab', 'england fans', 'portugal fans'];

// The 5 OLD duplicate drafts to TRASH (exact subjects):
var TRASH_SUBJECTS = [
  'Collab for the World Cup — YourScene',
  'SportsGirlNYC x YourScene — World Cup collab',
  'A home base for England fans during the World Cup — YourScene',
  'Spotlighting the Ironbound for Portugal’s World Cup run — YourScene'
];

function run() {
  var drafts = GmailApp.getDrafts();
  var sent = 0, trashed = 0, untouched = 0;

  for (var i = 0; i < drafts.length; i++) {
    var d = drafts[i];
    var m = d.getMessage();
    var subj = m.getSubject();
    var to = m.getTo();

    if (SEND_SUBJECTS.indexOf(subj) !== -1) {
      Logger.log((DRY_RUN ? '[DRY] WOULD SEND  -> ' : 'SENT     -> ') + to + '  |  ' + subj);
      if (!DRY_RUN) d.send();
      sent++;
    } else if (TRASH_SUBJECTS.indexOf(subj) !== -1) {
      Logger.log((DRY_RUN ? '[DRY] WOULD TRASH -> ' : 'TRASHED  -> ') + to + '  |  ' + subj);
      if (!DRY_RUN) {
        try { GmailApp.getMessageById(m.getId()).moveToTrash(); }
        catch (e) { Logger.log('   (could not auto-trash, delete manually): ' + e); }
      }
      trashed++;
    } else {
      untouched++; // Harbor campaign + everything else: left alone
    }
  }

  Logger.log('================================================');
  Logger.log('SUMMARY  send=' + sent + '  trash=' + trashed + '  untouched=' + untouched + '   DRY_RUN=' + DRY_RUN);
  Logger.log('(Expected: send=8, trash=5. Untouched are your old Harbor drafts.)');
}

function run() {
  var DRY_RUN = true; // preview first. Change to false to actually send ALL.

  var trashContains = ['Collab for the World Cup', 'SportsGirlNYC x YourScene', 'A home base for England fans', 'Spotlighting the Ironbound'];

  var drafts = GmailApp.getDrafts();
  var sent = 0;
  var trashed = 0;

  for (var i = 0; i < drafts.length; i++) {
    var msg = drafts[i].getMessage();
    var subj = msg.getSubject();
    var to = msg.getTo();

    var isDup = false;
    for (var t = 0; t < trashContains.length; t++) {
      if (subj.indexOf(trashContains[t]) > -1) isDup = true;
    }

    if (isDup) {
      Logger.log('TRASH: ' + to + ' - ' + subj);
      if (!DRY_RUN) GmailApp.getMessageById(msg.getId()).moveToTrash();
      trashed++;
    } else {
      Logger.log('SEND: ' + to + ' - ' + subj);
      if (!DRY_RUN) drafts[i].send();
      sent++;
    }
  }
  Logger.log('SUMMARY send=' + sent + ' trash=' + trashed + ' DRY_RUN=' + DRY_RUN);
}

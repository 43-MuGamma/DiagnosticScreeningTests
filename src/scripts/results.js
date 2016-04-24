function getParameterByName(name, url) {
  "use strict";
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var points = parseInt(getParameterByName("points"), 10);
var from = getParameterByName("from");

switch (from) {
case "depression":
  if (points < 3) {
    document.getElementById("results").innerHTML = "\n\nNo Depression \n \n You are more lucky than most or have developed a positive attitude toward life and an effective means of warding off depressive symptomatology.\n\n";
  } else if (points >= 3 && points <= 12) {
    document.getElementById("results").innerHTML = "\n\nMild Depression\n\n Some of the items you responded to are symptoms of major depression, but you do not meet the diagnostic criteria for this disorder. However, these can be serious symptoms, especially if feelings of hopelessness or thoughts of suicide are predominant for you. If this is the case, you should seek out assistance, either through a licensed professional or through a close friend or family member whom you feel you can trust.  It is likely that you have a specific concern that you should look at.\n\n";
  } else if (points > 12) {
    document.getElementById("results").innerHTML = "\n\nMajor Depression (10-15)\n\nYou have endorsed many of the symptoms commonly seen in people who suffer from major depression.  You should be concerned about these symptoms and it is likely that close friends and family members are also concerned.  It is highly recommended that you consider seeing a psychiatrist or psychologist for an evaluation.  Depression is a serious disorder but is highly treatable.\n\n";
  }
  break;
case "anxiety":
  if (points === 0) {
    document.getElementById("results").innerHTML = "No Anxiety\n\nYou are more lucky than most and have been successful in warding off the symptoms of anxiety. Keep doing what you are doing and if you find anxiety or stress creeping up on you, recognize it and nip it in the bud.";
  } else if (points >= 1 && points <= 5) {
    document.getElementById("results").innerHTML = "Some of the items you responded to are potential symptoms of anxiety. While you did not score high enough to be reliably diagnosed with anxiety, be sure you pay attention to your habits to detect possible anxiety in the future. \n\n";
  } else if (points > 5 && points <= 20) {
    document.getElementById("results").innerHTML = "Moderate Anxiety (5-20)\n\nSome of the items you responded to are symptoms of generalized anxiety disorder and other disorders in this category. Your general symptoms may be mild, but it might be wise to look into those items which you endorsed to determine if they are resulting in difficulties in your life.\n\n";
  } else {
    document.getElementById("results").innerHTML = "Major Anxiety (20-30)\n\nYou have endorsed many of the symptoms commonly seen in people who suffer from generalized anxiety disorder and other disorders in this category. You worry excessively, feel out of control at times, and fear that things will go wrong even without information to support this. If anxiety is causing you distress or getting in the way of achieving your goals, recommendations would include looking into therapy, medication, or a group.";
  }
  break;
case "intro_extro":
  if (points > 0) {
    document.getElementById("results").innerHTML = "You are and Introvert\n\nIntroverts are people who are enerigized by spending time alone. They prefer to spend time with a small group of friends than with a large party of people.";
  } else if (points < 0) {
    document.getElementById("results").innerHTML = "You are an Extrovert\n\nExtroverts are outgoing and expressive, preferring the company of others to solitude. Extroverts are energized by spending time in public and with other people";
  } else if (points === 0) {
    document.getElementById("results").innerHTML = "You are an Ambivert\n\n";
  }
  break;
case "sleep":
  if (points === 0) {
    document.getElementById("results").innerHTML = "No Sleep Deprivation\n\n You do not exhibit any of the signs of Sleep Deprivation.\n\n";
  } else if (points >= 1 && points <= 9) {
    document.getElementById("results").innerHTML = "Mild Sleep Deprivation\n\nBased on your answers, it is possible that you are suffering from sleep deprivation. Remember, it's important to get at least 6 to 8 hours of sleep a night";
  } else if (points > 9 && points <= 18) {
    document.getElementById("results").innerHTML = "Moderate Sleep Deprivation. Based on your answers you are suffering from moderate Sleep Deprivation. If it continues long enough, sleep deprivation can lower your body's defenses, putting you at risk of developing chronic illness. Remember, its recommended that you get at least 6 to 8 hours of sleep a night";
  } else {
    document.getElementById("results").innerHTML = "Major Sleep Deprivation\n\nBased on your answers you are suffering from Major Sleep Deprivation. If it continues long enough, it can lower your body's defenses, putting you at risk of developing chronic illness. It is important that catch up of sleep and that you try to get at least 8 hours of sleep a night moving forward, and consider making an appointment with your local physician.";
  }
  break;
case "malnutrition":
  if (points <= 2) {
    document.getElementById("results").innerHTML = "Based on your score it is unlikely that you are suffering from Malnutrition.\n\n";
  } else if (points > 2 && points <= 3) {
    document.getElementById("results").innerHTML = "Based on this score it is possible that you are suffering from Malnourishment.\n\n";
  } else if (points > 3 && points <= 15) {
    document.getElementById("results").innerHTML = "It is likely that you are suffering from Malnutrition.\n Take a close look at what your symptoms specify you are deficient in.\n\n";
  } else if (points > 15 && points <= 25) {
    document.getElementById("results").innerHTML = "You are suffering from many of the symptoms of Malnourishment.\n Take a close look at what your symptoms specify you are deficient in and consider consulting a Physician.\n\n";
  } else {
    document.getElementById("results").innerHTML = "You are suffering from extreme Malnourishment.\n make a note of what your symptoms specify that you are deficient in and make an appointment to visit a physician for assistance as soon as possible.\n\n";
  }
  break;

}

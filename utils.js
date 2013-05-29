var backgroundPage = chrome.extension.getBackgroundPage();
var require = backgroundPage.require;

var Synchronizer = require("synchronizer").Synchronizer;
var Utils = require("utils").Utils;
var Prefs = require("prefs").Prefs;
var FilterStorage = require("filterStorage").FilterStorage;
var FilterNotifier = require("filterNotifier").FilterNotifier;

var subscriptionClasses = require("subscriptionClasses");
var Subscription = subscriptionClasses.Subscription;
var DownloadableSubscription = subscriptionClasses.DownloadableSubscription;
var Filter = require("filterClasses").Filter;

/**
 * Shortcut for document.getElementById(id)
 */
function E(id)
{
  return document.getElementById(id);
}

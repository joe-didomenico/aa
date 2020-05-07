(function(window, undefined) {
  var dictionary = {
    "1ac5360b-fddb-4b6b-a368-31fde276c46b": "Sales",
    "382d8e37-a22e-46f1-8aaf-af3729fe6b1b": "VendorAccount",
    "41d3914b-c741-44cf-ac2e-8234012fff5e": "Settings",
    "084d57df-0ff4-493f-8d36-f25fbf1b1baf": "Login Page",
    "ad071826-57d8-4a9c-b103-9964d3420b3b": "Upgrade Options",
    "99a8fe54-344b-472f-b4af-af04e0674297": "Account Creation",
    "790a6789-5322-4166-8067-2828728cc1f5": "Vendor Feed",
    "587c6da1-a905-47fe-b9d7-e0ee2a237f89": "Notifications",
    "188e911d-c70c-452d-b9c1-e8e01c092f9b": "Profile Settings",
    "661e5350-145e-4669-a925-e88e6be947ac": "demand",
    "92261fd1-45ed-4a07-8418-161bc6fe4c58": "Chat",
    "8a0bf39d-1481-48eb-8bef-2fb7fda16aa2": "Template 1_1",
    "12e3c31e-dc69-4101-bd26-c6518085d0c6": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "735b6cb1-8e83-44cd-9b91-ff0659fcfec3": "blank",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
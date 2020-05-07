(function(window, undefined) {
  var dictionary = {
    "33717aa9-8f50-4b3a-bbd9-9c18fb6806af": "Inventory_full_update",
    "03dd6ef1-08a1-4b89-93da-c9f3b1fd7aa3": "UserChat",
    "492d66d2-956b-4f70-88ee-fb87588efc02": "Sales",
    "718fa59d-b987-4bc9-aba3-e03b9df62e77": "Vendor Feed",
    "100ce9fb-953b-4c12-ae9e-50f0ba743b0a": "Account",
    "646505b1-c583-415e-8bdc-c16038274b1a": "Feed",
    "d7b243f5-6674-4457-a11e-edb8cd651e4a": "Account Creation",
    "bceb021c-0498-4810-9f26-01ebb0d82e61": "Notifications2",
    "12cfad90-011c-4b72-a20a-45199dfd4187": "Inventory",
    "affbbda1-0fe2-4e0a-9ce1-27a605f677d6": "VendorPage",
    "7e55b4dd-338d-4616-8feb-0ae9a83c1d1a": "Profile Settings",
    "a6664139-a803-49bc-b0a9-5ec9553bbfb8": "UserAccount",
    "f1596db9-331b-417d-899f-849fa4ba1f62": "Login Page",
    "8a029a5f-43fb-46b1-8acd-5529753227bd": "FeedWithPost",
    "7eff32c4-933a-4a58-99e4-b2182fa42d0f": "Notifications",
    "bc7d7601-9ca6-40a9-9368-44d1b5f33a35": "Chat",
    "58eff0e2-49fc-4eda-9894-6649124a1602": "Feed2",
    "08487bc0-584c-4a5f-be79-f368d8fcc44f": "Settings",
    "f662d93a-cc76-4235-8942-bbbb5490b437": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "3b4447fd-64b5-47ab-8b8a-35cb293bfe19": "blank",
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
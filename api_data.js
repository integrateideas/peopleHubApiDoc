define({ "api": [
  {
    "type": "POST",
    "url": "/api/reseller/vendors",
    "title": "Add Vendor",
    "description": "<p>Add new vendor.</p>",
    "version": "1.1.0",
    "name": "AddVendor",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Reseller Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's Organization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "defaultValue": "enabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>contains vendor's contact information.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_types",
            "description": "<p>contains vendor's alloted reward type(s) information.</p>"
          }
        ],
        "vendor_contacts": [
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "5..255",
            "optional": false,
            "field": "vendor_contacts.email",
            "description": "<p>contains vendor's email.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "10..15",
            "optional": true,
            "field": "vendor_contacts.phone",
            "description": "<p>contains vendor's phone number.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "defaultValue": "true",
            "description": "<p>is primary contact?</p>"
          }
        ],
        "vendor_reward_types": [
          {
            "group": "vendor_reward_types",
            "type": "Integer",
            "optional": false,
            "field": "vendor_reward_types.reward_method_id",
            "description": "<p>contains reward_method_id.</p>"
          },
          {
            "group": "vendor_reward_types",
            "type": "Boolean",
            "optional": true,
            "field": "vendor_reward_types.status",
            "defaultValue": "enabled",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"nitesh\",\n    \"status\": 1,\n    \"vendor_contacts\": {\n        \"email\": \"snwites3h@gmail.com\",\n        \"phone\": \"99610403239\",\n        \"is_primary\": 1\n    },\n    \"vendor_reward_types\": [{\n        \"reward_method_id\": \"1\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"2\",\n        \"status\": 1\n    },\n    {\n        \"reward_method_id\": \"3\",\n        \"status\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains vednor's id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 7,\n       \"name\": \"niteesh3112\",\n       \"created\": \"2016-11-09T06:20:09+00:00\",\n       \"modified\": \"2016-11-09T06:20:09+00:00\",\n       \"status\": true,\n       \"deleted\": null,\n       \"reseller_vendors\": [\n           {\n               \"id\": 7,\n               \"reseller_id\": 1,\n               \"vendor_id\": 7,\n               \"status\": true,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\",\n               \"reseller\": {\n                   \"id\": 1,\n                   \"uuid\": \"d6057bd3-a5b0-401c-b0ee-ad9b277d1d9d\",\n                   \"org_name\": \"twinspark123\",\n                   \"client_identifier\": \"123456789\",\n                   \"client_secret\": \"123456789\",\n                   \"security_deposit\": 1500,\n                   \"status\": true,\n                   \"created\": \"2016-11-09T06:13:03+00:00\",\n                   \"modified\": \"2016-11-09T06:13:03+00:00\",\n                   \"deleted\": null\n               }\n           }\n       ],\n       \"vendor_contacts\": [\n           {\n               \"id\": 7,\n               \"vendor_id\": 7,\n               \"email\": \"snwites3h@gmail.com\",\n               \"phone\": \"99610403239\",\n               \"is_primary\": true,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\"\n           }\n       ],\n       \"vendor_reward_types\": [\n           {\n               \"id\": 7,\n               \"vendor_id\": 7,\n               \"reward_method_id\": 1,\n               \"created\": \"2016-11-09T06:20:09+00:00\",\n               \"modified\": \"2016-11-09T06:20:09+00:00\",\n               \"status\": true\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/resellerApis/VendorController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "DELETE",
    "url": "/api/reseller/vendors/:id",
    "title": "Delete Vendor",
    "description": "<p>Delete a vendor.</p>",
    "version": "1.1.0",
    "name": "DeleteVendor",
    "group": "Reseller_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"message\": \"Vendor deleted successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/resellerApis/VendorController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "POST",
    "url": "/api/reseller/token/",
    "title": "Get Reseller Token",
    "description": "<p>This api is used to get reseller's token.</p>",
    "version": "1.1.0",
    "name": "GetResellerToken",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic (Base_64encode(client_id:client_secret))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Basic (Base_64encode(client_id:client_secret)\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token of reseller.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expires",
            "description": "<p>contains token expiry datetime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": true,\n      \"data\": {\n          \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6IjIwMTYtMTEtMDkgMDY6MjA6MjAifQ.IXicDh41IfkZJBSvnfrZMv9L9ARkdfInOHNb4NYSFDo\",\n          \"expires\": \"2016-11-09 06:20:20\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/reseller/token"
      }
    ],
    "filename": "bountee/resellerApis/ResellerController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/reseller/vendors",
    "title": "Get Vendor's List",
    "description": "<p>Get vendor's list of a reseller.</p>",
    "version": "1.1.0",
    "name": "GetVendors",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Reseller's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \t\"status\": true,\n\t\"data\": [{\n\t\t\"id\": 1,\n\t\t\"reseller_id\": 1,\n\t\t\"vendor_id\": 1,\n\t\t\"status\": true,\n\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\"vendor\": {\n\t\t\t\"id\": 1,\n\t\t\t\"name\": \"Vendor1\",\n\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\"status\": true,\n\t\t\t\"deleted\": null,\n\t\t\t\"vendor_reward_types\": [{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"vendor_id\": 1,\n\t\t\t\t\"reward_method_id\": 1,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"wallet_credit\",\n\t\t\t\t\t\"label\": \"Wallet Credit\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"vendor_id\": 1,\n\t\t\t\t\"reward_method_id\": 2,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"name\": \"store_credit\",\n\t\t\t\t\t\"label\": \"Store Credit\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\t\"id\": 3,\n\t\t\t\t\"vendor_id\": 1,\n\t\t\t\t\"reward_method_id\": 3,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"instant_redeem\",\n\t\t\t\t\t\"label\": \"Instant Redeemption\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}],\n\t\t\t\"vendor_contacts\": [{\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"vendor_id\": 1,\n\t\t\t\t\"email\": \"vendor1@gmail.com\",\n\t\t\t\t\"phone\": \"1234567890\",\n\t\t\t\t\"is_primary\": true,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\"\n\t\t\t}]\n\t\t}\n\t}, {\n\t\t\"id\": 2,\n\t\t\"reseller_id\": 1,\n\t\t\"vendor_id\": 2,\n\t\t\"status\": true,\n\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\"vendor\": {\n\t\t\t\"id\": 2,\n\t\t\t\"name\": \"Vendor2\",\n\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\"status\": true,\n\t\t\t\"deleted\": null,\n\t\t\t\"vendor_reward_types\": [{\n\t\t\t\t\"id\": 4,\n\t\t\t\t\"vendor_id\": 2,\n\t\t\t\t\"reward_method_id\": 1,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"wallet_credit\",\n\t\t\t\t\t\"label\": \"Wallet Credit\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\t\"id\": 5,\n\t\t\t\t\"vendor_id\": 2,\n\t\t\t\t\"reward_method_id\": 2,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"name\": \"store_credit\",\n\t\t\t\t\t\"label\": \"Store Credit\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\t\"id\": 6,\n\t\t\t\t\"vendor_id\": 2,\n\t\t\t\t\"reward_method_id\": 3,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"status\": true,\n\t\t\t\t\"reward_method\": {\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"instant_redeem\",\n\t\t\t\t\t\"label\": \"Instant Redeemption\",\n\t\t\t\t\t\"status\": true,\n\t\t\t\t\t\"created\": \"2016-12-30T13:55:45\",\n\t\t\t\t\t\"modified\": \"2016-12-30T13:55:45\"\n\t\t\t\t}\n\t\t\t}],\n\t\t\t\"vendor_contacts\": [{\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"vendor_id\": 2,\n\t\t\t\t\"email\": \"vendor2@gmail.com\",\n\t\t\t\t\"phone\": \"1234567890\",\n\t\t\t\t\"is_primary\": true,\n\t\t\t\t\"created\": \"2016-12-30T13:55:46\",\n\t\t\t\t\"modified\": \"2016-12-30T13:55:46\"\n\t\t\t}]\n\t\t}\n\t}\n]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/reseller/vendors"
      }
    ],
    "filename": "bountee/resellerApis/VendorController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "put",
    "url": "/api/reseller/vendors/:id",
    "title": "Update vendor detail",
    "version": "1.1.0",
    "name": "Update_vendor_detail",
    "group": "Reseller_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Reseller Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's Organization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "defaultValue": "enabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>contains vendor's contact information.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_types",
            "description": "<p>contains vendor's alloted reward type(s) information.</p>"
          }
        ],
        "vendor_contacts": [
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "5..255",
            "optional": false,
            "field": "vendor_contacts.email",
            "description": "<p>contains vendor's email.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "10..15",
            "optional": false,
            "field": "vendor_contacts.phone",
            "description": "<p>contains vendor's phone number.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "defaultValue": "true",
            "description": "<p>is primary contact?</p>"
          }
        ],
        "vendor_reward_types": [
          {
            "group": "vendor_reward_types",
            "type": "Integer",
            "optional": false,
            "field": "vendor_reward_types.reward_method_id",
            "description": "<p>contains reward_method_id.</p>"
          },
          {
            "group": "vendor_reward_types",
            "type": "Boolean",
            "optional": true,
            "field": "vendor_reward_types.status",
            "defaultValue": "enabled",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"nitesh3\",\n   \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 5,\n       \"name\": \"nitesh3\",\n       \"created\": \"2017-02-08T09:13:05+00:00\",\n       \"modified\": \"2017-02-08T09:58:41+00:00\",\n       \"status\": true,\n       \"deleted\": null,\n       \"reseller_vendors\": [\n           {\n               \"id\": 6,\n               \"reseller_id\": 1,\n               \"vendor_id\": 5,\n               \"status\": true,\n               \"created\": \"2017-02-08T09:13:05+00:00\",\n               \"modified\": \"2017-02-08T09:13:05+00:00\",\n               \"reseller\": {\n                   \"id\": 1,\n                   \"uuid\": \"0197351c-226a-42b5-bc02-0830440c9ec5\",\n                   \"org_name\": \"twinspark123\",\n                   \"client_identifier\": \"123456789\",\n                   \"client_secret\": \"123456789\",\n                   \"security_deposit\": 1500,\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\",\n                   \"deleted\": null\n               }\n           }\n       ],\n       \"vendor_contacts\": [\n           {\n               \"id\": 6,\n               \"vendor_id\": 5,\n               \"email\": \"snwites3h@gmail.com\",\n               \"phone\": \"99610403239\",\n               \"is_primary\": true,\n               \"created\": \"2017-02-08T09:13:05+00:00\",\n               \"modified\": \"2017-02-08T09:13:05+00:00\"\n           }\n       ],\n       \"vendor_reward_types\": [\n           {\n               \"id\": 22,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 1,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 1,\n                   \"name\": \"wallet_credit\",\n                   \"label\": \"Wallet Credit\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           },\n           {\n               \"id\": 23,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 2,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 2,\n                   \"name\": \"store_credit\",\n                   \"label\": \"Store Credit\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           },\n           {\n               \"id\": 24,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 3,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 3,\n                   \"name\": \"instant_redeem\",\n                   \"label\": \"Instant Redeemption\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/resellerApis/VendorController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/reseller/vendors/:id",
    "title": "View Vendor's Detail",
    "description": "<p>View Vendor's Detail.</p>",
    "version": "1.1.0",
    "name": "ViewVendorDetail",
    "group": "Reseller_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Reseller's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Reseller's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"response\":\n    {\n        \"status\": true,\n        \"data\":\n        {\n            \"id\": 1,\n            \"name\": \"Vendor1\",\n            \"created\": \"2016-10-20T11:15:26+00:00\",\n            \"modified\": \"2016-10-20T11:15:26+00:00\",\n            \"status\": true,\n            \"deleted\": null,\n            \"vendor_reward_types\":\n            [\n                {\n                    \"id\": 3,\n                    \"vendor_id\": 1,\n                    \"reward_method_id\": 6,\n                    \"created\": \"2016-11-01T02:03:43+00:00\",\n                    \"modified\": \"2016-11-01T02:03:43+00:00\",\n                    \"status\": true,\n                    \"reward_method\":\n                    {\n                        \"id\": 6,\n                        \"name\": \"instant_redeem\",\n                        \"label\": \"Instant Redeemption\",\n                        \"status\": true,\n                        \"created\": \"2016-11-04T08:06:10+00:00\",\n                        \"modified\": \"2016-11-04T08:06:10+00:00\"\n                    }\n                }\n            ],\n            \"vendor_contacts\":\n            [\n                {\n                    \"id\": 1,\n                    \"vendor_id\": 1,\n                    \"email\": \"vendor1@gmail.com\",\n                    \"phone\": \"1234567890\",\n                    \"is_primary\": true,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/reseller/vendors/:id"
      }
    ],
    "filename": "bountee/resellerApis/VendorController.js",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/user/me",
    "title": "Get My info",
    "description": "<p>Get loggedIn user's info.</p>",
    "version": "1.1.0",
    "name": "GetMyInfo",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Users's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains user's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fb_identifier",
            "description": "<p>cotains user's facebook id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>cotains user's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>cotains user's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>cotains user's phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role_id",
            "description": "<p>cotains role_id.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created",
            "description": "<p>cotains user's created date time.</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "modified",
            "description": "<p>cotains user's last modified date time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>cotains user's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_verified",
            "description": "<p>cotains true if email is verified.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "guardian_email",
            "description": "<p>cotains guardian's email: this will be present if user is not having email id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "relationship_id",
            "description": "<p>cotains relationship_id which is relation with guardian whose email is given, if user is not having email id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>cotains reason why user is not having email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "activities",
            "description": "<p>cotains user's activities.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user_cards",
            "description": "<p>cotains user's cards.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalWalletCredits",
            "description": "<p>cotains user's total wallet credit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalStoreCredits",
            "description": "<p>cotains user's total store credit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "walletCredits",
            "description": "<p>cotains user's active wallet credit details.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "storeCredits",
            "description": "<p>cotains user's active store credit details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 2,\n       \"fb_identifier\": null,\n       \"uuid\": \"a025727f-30b6-4feb-8b4f-6f66fd09abee\",\n       \"name\": \"nikhil\",\n       \"email\": null,\n       \"phone\": \"78945613221\",\n       \"role_id\": 2,\n       \"created\": \"2017-02-06T14:42:26+00:00\",\n       \"modified\": \"2017-02-06T14:42:26+00:00\",\n       \"status\": true,\n       \"username\": \"nikwhil21@gmail.com\",\n       \"is_email_verified\": false,\n       \"guardian_email\": \"nikhil11@gmail.com\",\n       \"relationship_id\": 1,\n       \"reason\": \"srry user do not have email\",\n       \"activities\": [],\n       \"user_cards\": [],\n       \"totalWalletCredits\": 0,\n       \"walletCredits\": [],\n       \"totalStoreCredits\": 0,\n       \"storeCredits\": [],\n       \"linkedAccount\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/user/me"
      }
    ],
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/user/register",
    "title": "Register new User",
    "description": "<p>Registrer new User.</p>",
    "version": "1.1.0",
    "name": "RegisterNewUser",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": "<p>contains User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "email",
            "description": "<p>contains User's email, if username is not present then email is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..255",
            "optional": false,
            "field": "password",
            "description": "<p>contains user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "username",
            "description": "<p>contains username, if email is not present then username is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "guardian_email",
            "description": "<p>contains guardian email, required if username is present else not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10..15",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "defaultValue": "enabled",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"name\" : \"nikhil\",\n\"email\" : \"nikhil11@gmail.com\",\n\"password\" : \"nikhil\",\n\"phone\" : \"78945613221\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n\"name\" : \"nikhil\",\n\"username\" : \"nikhil11\",\n\"guardian_email\":\"nitesh_11@gmail.com\"\n\"password\" : \"nikhil\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 4,\n       \"fb_identifier\": null,\n       \"uuid\": \"92945918-0e20-4233-a8d8-60c21b44e262\",\n       \"name\": \"Test User 3\",\n       \"email\": null,\n       \"phone\": null,\n       \"role_id\": 2,\n       \"created\": \"2017-01-02T11:50:38+00:00\",\n       \"modified\": \"2017-01-02T11:50:38+00:00\",\n       \"status\": true,\n       \"username\": \"testuser3\",\n       \"is_email_verified\": false,\n       \"guardian_email\": null,\n       \"relationship_id\": null,\n       \"reason\": null,\n       \"activities\": [],\n       \"user_cards\": [],\n       \"totalWalletCredits\": 0,\n       \"walletCredits\": [],\n       \"totalStoreCredits\": 0,\n       \"storeCredits\": []\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"name\": \"nikhis1l\",\n       \"username\": \"a1@go\",\n       \"phone\": \"78945613221\",\n       \"guardian_email\": \"aaa@asdsad.com\",\n       \"uuid\": \"384aacdd-ab37-4fa9-bc45-1b821fe72ffc\",\n       \"created\": \"2017-02-09T12:30:03+00:00\",\n       \"modified\": \"2017-02-09T12:30:03+00:00\",\n       \"id\": 8\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "GET",
    "url": "/api/user/activities",
    "title": "View user's activities",
    "description": "<p>View user's activities.</p>",
    "version": "1.1.0",
    "name": "UserActivities",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer User's Access Token\"",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/activities"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"Activities\": [\n            {\n                \"id\": 5,\n                \"vendor_id\": 6,\n                \"user_id\": 7,\n                \"reward_method_id\": 3,\n                \"service_id\": 3,\n                \"attribute\": null,\n                \"attribute_type\": null,\n                \"action\": \"instant_redeem\",\n                \"points\": \"100\",\n                \"status\": true,\n                \"created\": \"2016-11-11T08:39:09+00:00\",\n                \"modified\": \"2016-11-11T08:39:09+00:00\",\n                \"service\": {\n                    \"id\": 3,\n                    \"name\": \"in_house\",\n                    \"label\": \"In House\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"user\": {\n                    \"id\": 7,\n                    \"uuid\": \"6cf957c1-c0cf-46e2-9f45-863a550be2a9\",\n                    \"name\": \"nikhil\",\n                    \"email\": \"nikhil11@gmail.com\",\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-11-11T07:09:33+00:00\",\n                    \"modified\": \"2016-11-11T07:09:33+00:00\",\n                    \"status\": true,\n                    \"username\": \"ns\",\n                    \"isEmailVerified\": false\n                },\n                \"vendor\": {\n                    \"id\": 6,\n                    \"name\": \"niteesh3\",\n                    \"created\": \"2016-11-11T08:27:13+00:00\",\n                    \"modified\": \"2016-11-11T08:27:13+00:00\",\n                    \"status\": true,\n                    \"deleted\": null\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserActivitiesController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/api/user/user-cards",
    "title": "add user card",
    "version": "1.1.0",
    "name": "addUserCard",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer User's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_number",
            "description": "<p>user's card number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>User's card status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"card_number\" : \"110036\",\n  \"status\" : \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 2\n   }\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/user/user-cards/2"
      }
    ],
    "filename": "bountee/userApis/UserCards.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/user/forgot_password",
    "title": "forgot password method",
    "description": "<p>forgot password method</p>",
    "version": "1.1.0",
    "name": "forgotPassword",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ref",
            "description": "<p>contains referral url from where request is coming</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>contains username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"ref\":\"http://app.buzzydoc.com\",\n\"username\":\"nikhil11\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\",\n                        \"url\": \"http%3A%2F%2Fwww.google.comreset-password%3Freset-token%3D%242y%2410%24uR1x5Qe4j.ktPLVFPAvmj.OrzyIZTW4XGbbrA468LNjuTJuiIpnj2\"\n                       }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "get",
    "url": "/api/user/user-cards",
    "title": "View user's card list",
    "version": "1.1.0",
    "name": "listUserCards",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer User's Access Token\"",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/user/user-cards/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n    \"status\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"user_id\": 2,\n            \"card_number\": \"110096\",\n            \"status\": true,\n            \"created\": \"2017-01-11T13:12:15+00:00\",\n            \"modified\": \"2017-01-11T13:12:15+00:00\"\n        },\n        {\n            \"id\": 3,\n            \"user_id\": 2,\n            \"card_number\": \"110036\",\n            \"status\": true,\n            \"created\": \"2017-01-11T13:15:01+00:00\",\n            \"modified\": \"2017-01-11T13:15:01+00:00\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserCards.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "version": "1.1.0",
    "name": "login",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic (Base_64encode(username:password))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Basic (Base_64encode(username:password))\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Auth Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                        \"id\": 7,\n                        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\"\n                       }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/api/user/logout",
    "title": "Logout User",
    "version": "1.1.0",
    "name": "logout",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>users's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Users's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"response\": {\n\"status\": true,\n\"data\": {\n       \"message\": \"User Logged out Successfully\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/redeemedCredits/",
    "title": "redeem wallet credit of a user.",
    "description": "<p>This api is used to redeem wallet credit of a user.</p>",
    "version": "1.1.0",
    "name": "redeemUsersWalletCredit",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"token\" => \"Bearer User's Access Token",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ref",
            "description": "<p>contains referral url from where request is coming</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>service name amazon/tango to redeem reward.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "vendor_id",
            "description": "<p>contains vendor's if if we want to redeem only sepecific vendor's walletCredits</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ref\":\"http://apps.buzzydoc.com/\",\n  \"service\":\"amazon\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n  \"ref\":\"http://apps.buzzydoc.com/\",\n  \"vendor_id\":1,\n  \"service\":\"amazon\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>redemption Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 10,\n       \"message\": \"Gift coupon sent\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/RedeemedCreditsController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/user/reset_password",
    "title": "reset password method",
    "description": "<p>reset password method</p>",
    "version": "1.1.0",
    "name": "resetUserPassword",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reset-token",
            "description": "<p>contains token which is sent by forgot password api</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>contains new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cnf_password",
            "description": "<p>contains new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"reset-token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\",\n  \"new_password\":\"12345678\",\n  \"cnf_password\":\"12345678\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\",\n                        \"url\": \"http%3A%2F%2Fwww.google.comreset-password%3Freset-token%3D%242y%2410%24uR1x5Qe4j.ktPLVFPAvmj.OrzyIZTW4XGbbrA468LNjuTJuiIpnj2\"\n                       }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "PUT",
    "url": "/api/user/switch_account",
    "title": "switch user to linked account",
    "description": "<p>switch to linked account</p>",
    "version": "1.1.0",
    "name": "switchUserAccount",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_id",
            "description": "<p>contains account_id to which user wants to switch</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                        \"id\": 7,\n                        \"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjcsImV4cCI6MTQ3MDc0NDI5MX0.i1Jxt5__1oOlmltXoOVIC-17f4rM48nl4uzkahWmU1c\"\n                       }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Users's Access Token\"",
          "type": "php"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "PUT",
    "url": "/api/user/users/{:id}",
    "title": "update user's info",
    "description": "<p>update user's info</p>",
    "version": "1.1.0",
    "name": "updateUserInfo",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id user id of the users whose information weare going to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": true,
            "field": "name",
            "description": "<p>contains User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "email",
            "description": "<p>contains User's email, if username is not present then email is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "username",
            "description": "<p>contains User's username, required if email is not present else not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..255",
            "optional": true,
            "field": "password",
            "description": "<p>contains user's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..255",
            "optional": true,
            "field": "old_password",
            "description": "<p>contains user's old password, required if password is provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "guardian_email",
            "description": "<p>contains guardian email, required if email is not present else not.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 4,\n       \"fb_identifier\": null,\n       \"uuid\": \"92945918-0e20-4233-a8d8-60c21b44e262\",\n       \"name\": \"Test User 3\",\n       \"email\": null,\n       \"phone\": null,\n       \"role_id\": 2,\n       \"created\": \"2017-01-02T11:50:38+00:00\",\n       \"modified\": \"2017-01-02T11:50:38+00:00\",\n       \"status\": true,\n       \"username\": \"testuser3\",\n       \"is_email_verified\": false,\n       \"guardian_email\": null,\n       \"relationship_id\": null,\n       \"reason\": null,\n       \"activities\": [],\n       \"user_cards\": [],\n       \"totalWalletCredits\": 0,\n       \"walletCredits\": [],\n       \"totalStoreCredits\": 0,\n       \"storeCredits\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Users's Access Token\"",
          "type": "php"
        }
      ]
    },
    "filename": "bountee/userApis/UserController.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "get",
    "url": "/api/user/user-cards",
    "title": "View user's card info",
    "version": "1.1.0",
    "name": "viewUserCard",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer User's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 2,\n       \"user_id\": 2,\n       \"card_number\": \"110096\",\n       \"status\": true,\n       \"created\": \"2017-01-11T13:12:15+00:00\",\n       \"modified\": \"2017-01-11T13:12:15+00:00\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/user/user-cards/2"
      }
    ],
    "filename": "bountee/userApis/UserCards.js",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/token/",
    "title": "Get Vendor Token",
    "description": "<p>This api is used to get vendor's token.</p>",
    "version": "1.1.0",
    "name": "GetVenorToken",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic (Base_64encode(client_id:client_secret))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Basic (Base_64encode(client_id:client_secret)\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor's Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Access token of vendor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expires",
            "description": "<p>contains token expiry datetime.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": true,\n      \"data\": {\n          \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6IjIwMTYtMTEtMDkgMDY6MjA6MjAifQ.IXicDh41IfkZJBSvnfrZMv9L9ARkdfInOHNb4NYSFDo\",\n          \"expires\": \"2016-11-09 06:20:20\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://app.thebountee.com/api/vendor/token"
      }
    ],
    "filename": "bountee/vendorApis/VendorController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/activities",
    "title": "View vendor's activities",
    "description": "<p>View vendor's activities.</p>",
    "version": "1.1.0",
    "name": "MyActivities",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "from",
            "description": "<p>cantains date from which data is required in format Y-m-d</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "to",
            "description": "<p>cantains date upto which data is required in format Y-m-d</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/activities/?from=20-11-2016&to=22-11-2016"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        [\n                \"id\": 1,\n                \"vendor_id\": 6,\n                \"user_id\": 1,\n                \"reward_method_id\": 3,\n                \"service_id\": 3,\n                \"attribute\": null,\n                \"attribute_type\": null,\n                \"action\": \"instant_redeem\",\n                \"points\": \"100\",\n                \"status\": true,\n                \"created\": \"2016-11-11T08:28:13+00:00\",\n                \"modified\": \"2016-11-11T08:28:13+00:00\",\n                \"service\": {\n                    \"id\": 3,\n                    \"name\": \"in_house\",\n                    \"label\": \"In House\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"user\": {\n                    \"id\": 1,\n                    \"uuid\": \"1d0bb055-9432-49a1-938f-07c6d75cf86a\",\n                    \"name\": \"admin\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 1,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\",\n                    \"status\": true,\n                    \"username\": \"admin\",\n                    \"isEmailVerified\": false\n                },\n                \"vendor\": {\n                    \"id\": 6,\n                    \"name\": \"niteesh3\",\n                    \"created\": \"2016-11-11T08:27:13+00:00\",\n                    \"modified\": \"2016-11-11T08:27:13+00:00\",\n                    \"status\": true,\n                    \"deleted\": null\n                }\n            },\n            {\n                \"id\": 2,\n                \"vendor_id\": 6,\n                \"user_id\": 1,\n                \"reward_method_id\": 3,\n                \"service_id\": 3,\n                \"attribute\": null,\n                \"attribute_type\": null,\n                \"action\": \"instant_redeem\",\n                \"points\": \"100\",\n                \"status\": true,\n                \"created\": \"2016-11-11T08:28:16+00:00\",\n                \"modified\": \"2016-11-11T08:28:16+00:00\",\n                \"service\": {\n                    \"id\": 3,\n                    \"name\": \"in_house\",\n                    \"label\": \"In House\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"user\": {\n                    \"id\": 1,\n                    \"uuid\": \"1d0bb055-9432-49a1-938f-07c6d75cf86a\",\n                    \"name\": \"admin\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 1,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\",\n                    \"status\": true,\n                    \"username\": \"admin\",\n                    \"isEmailVerified\": false\n                },\n                \"vendor\": {\n                    \"id\": 6,\n                    \"name\": \"niteesh3\",\n                    \"created\": \"2016-11-11T08:27:13+00:00\",\n                    \"modified\": \"2016-11-11T08:27:13+00:00\",\n                    \"status\": true,\n                    \"deleted\": null\n                }\n            },\n            {\n                \"id\": 3,\n                \"vendor_id\": 6,\n                \"user_id\": 1,\n                \"reward_method_id\": 3,\n                \"service_id\": 3,\n                \"attribute\": null,\n                \"attribute_type\": null,\n                \"action\": \"instant_redeem\",\n                \"points\": \"100\",\n                \"status\": true,\n                \"created\": \"2016-11-11T08:28:16+00:00\",\n                \"modified\": \"2016-11-11T08:28:16+00:00\",\n                \"service\": {\n                    \"id\": 3,\n                    \"name\": \"in_house\",\n                    \"label\": \"In House\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"user\": {\n                    \"id\": 1,\n                    \"uuid\": \"1d0bb055-9432-49a1-938f-07c6d75cf86a\",\n                    \"name\": \"admin\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 1,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\",\n                    \"status\": true,\n                    \"username\": \"admin\",\n                    \"isEmailVerified\": false\n                },\n                \"vendor\": {\n                    \"id\": 6,\n                    \"name\": \"niteesh3\",\n                    \"created\": \"2016-11-11T08:27:13+00:00\",\n                    \"modified\": \"2016-11-11T08:27:13+00:00\",\n                    \"status\": true,\n                    \"deleted\": null\n               }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/ActivitiesController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/add-user",
    "title": "Registrer new User",
    "description": "<p>Registrer new User.</p>",
    "version": "1.1.0",
    "name": "RegisterNewUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>contains user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username if email is not present then reason is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guardian_email",
            "description": "<p>guardian_email if email is not present then guardian_email is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10..15",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>contains user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\" : \"nikhil\",\n  \"email\" : \"nikwhil21@gmail.com\",\n  \"password\":\"nikhil123\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n\"name\" : \"nikhil\",\n\"username\":\"nikhil111\",\n\"guardian_email\":\"nikhil112@gmail.com\",\n\"phone\" : \"78945613221\",\n\"password\":\"nikhil123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>cotains user's id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"name\": \"nikhil\",\n       \"email\": \"nikhil21@gmail.com\",\n       \"username\": \"nikhi21@gmail.com\",\n       \"vendor_users\": [\n           {\n               \"vendor_id\": 1,\n               \"user_id\": 15,\n               \"created\": \"2017-02-13T13:16:44+00:00\",\n               \"modified\": \"2017-02-13T13:16:44+00:00\",\n               \"id\": 4\n           }\n       ],\n       \"uuid\": \"0ac08ace-5b26-470a-98ac-4cfae315060e\",\n       \"created\": \"2017-02-13T13:16:44+00:00\",\n       \"modified\": \"2017-02-13T13:16:44+00:00\",\n       \"id\": 15\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"name\": \"nikhil\",\n       \"username\": \"nikhil111\",\n       \"guardian_email\": \"nikhil112@gmail.com\",\n       \"phone\": \"78945613221\",\n       \"vendor_users\": [\n           {\n               \"vendor_id\": 1,\n               \"user_id\": 14,\n               \"created\": \"2017-02-13T13:13:54+00:00\",\n               \"modified\": \"2017-02-13T13:13:54+00:00\",\n               \"id\": 3\n           }\n       ],\n       \"uuid\": \"e2d4b911-ee4e-49ef-8848-13bccc69efe6\",\n       \"created\": \"2017-02-13T13:13:54+00:00\",\n       \"modified\": \"2017-02-13T13:13:54+00:00\",\n       \"id\": 14\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/user-search",
    "title": "Search User",
    "description": "<p>Search User.</p>",
    "version": "1.1.0",
    "name": "SearchUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributeType",
            "description": "<p>can be name, email, username, phone, card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>contains search key.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/user-search?attributeType=username&value=test"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"users\": [\n                {\n                    \"id\": 2,\n                    \"uuid\": \"c5479454-ee9c-4761-81cf-ff09c09dd078\",\n                    \"name\": \"Test User 1\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser1\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 3,\n                    \"uuid\": \"89bc68e9-44d4-4702-84b3-9e574563db64\",\n                    \"name\": \"Test User 2\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser2\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 4,\n                    \"uuid\": \"5f815c0c-c4ca-4e89-82be-d889254b374e\",\n                    \"name\": \"Test User 3\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser3\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 5,\n                    \"uuid\": \"3e5b110a-3565-4338-815e-268b853984b3\",\n                    \"name\": \"Test User 4\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser4\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                }\n            ],\n            \"unassociatedUsers\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "put",
    "url": "/api/vendor/vendors/:id",
    "title": "Update vendor detail",
    "version": "1.1.0",
    "name": "Update_vendor_detail",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's Organization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "defaultValue": "enabled",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>contains vendor's contact information.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_types",
            "description": "<p>contains vendor's alloted reward type(s) information.</p>"
          }
        ],
        "vendor_contacts": [
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "5..255",
            "optional": false,
            "field": "vendor_contacts.email",
            "description": "<p>contains vendor's email.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "String",
            "size": "10..15",
            "optional": false,
            "field": "vendor_contacts.phone",
            "description": "<p>contains vendor's phone number.</p>"
          },
          {
            "group": "vendor_contacts",
            "type": "Boolean",
            "optional": true,
            "field": "vendor_contacts.is_primary",
            "defaultValue": "true",
            "description": "<p>is primary contact?</p>"
          }
        ],
        "vendor_reward_types": [
          {
            "group": "vendor_reward_types",
            "type": "Integer",
            "optional": false,
            "field": "vendor_reward_types.reward_method_id",
            "description": "<p>contains reward_method_id.</p>"
          },
          {
            "group": "vendor_reward_types",
            "type": "Boolean",
            "optional": true,
            "field": "vendor_reward_types.status",
            "defaultValue": "enabled",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"name\": \"nitesh3\",\n   \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 5,\n       \"name\": \"nitesh3\",\n       \"created\": \"2017-02-08T09:13:05+00:00\",\n       \"modified\": \"2017-02-08T09:58:41+00:00\",\n       \"status\": true,\n       \"deleted\": null,\n       \"reseller_vendors\": [\n           {\n               \"id\": 6,\n               \"reseller_id\": 1,\n               \"vendor_id\": 5,\n               \"status\": true,\n               \"created\": \"2017-02-08T09:13:05+00:00\",\n               \"modified\": \"2017-02-08T09:13:05+00:00\",\n               \"reseller\": {\n                   \"id\": 1,\n                   \"uuid\": \"0197351c-226a-42b5-bc02-0830440c9ec5\",\n                   \"org_name\": \"twinspark123\",\n                   \"client_identifier\": \"123456789\",\n                   \"client_secret\": \"123456789\",\n                   \"security_deposit\": 1500,\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\",\n                   \"deleted\": null\n               }\n           }\n       ],\n       \"vendor_contacts\": [\n           {\n               \"id\": 6,\n               \"vendor_id\": 5,\n               \"email\": \"snwites3h@gmail.com\",\n               \"phone\": \"99610403239\",\n               \"is_primary\": true,\n               \"created\": \"2017-02-08T09:13:05+00:00\",\n               \"modified\": \"2017-02-08T09:13:05+00:00\"\n           }\n       ],\n       \"vendor_reward_types\": [\n           {\n               \"id\": 22,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 1,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 1,\n                   \"name\": \"wallet_credit\",\n                   \"label\": \"Wallet Credit\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           },\n           {\n               \"id\": 23,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 2,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 2,\n                   \"name\": \"store_credit\",\n                   \"label\": \"Store Credit\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           },\n           {\n               \"id\": 24,\n               \"vendor_id\": 5,\n               \"reward_method_id\": 3,\n               \"created\": \"2017-02-08T09:56:05+00:00\",\n               \"modified\": \"2017-02-08T09:56:05+00:00\",\n               \"status\": true,\n               \"reward_method\": {\n                   \"id\": 3,\n                   \"name\": \"instant_redeem\",\n                   \"label\": \"Instant Redeemption\",\n                   \"status\": true,\n                   \"created\": \"2017-02-06T09:41:03+00:00\",\n                   \"modified\": \"2017-02-06T09:41:03+00:00\"\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/VendorController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/activities/?user_id=",
    "title": "View user's activities",
    "description": "<p>View user's activities.</p>",
    "version": "1.1.0",
    "name": "UserActivities",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>cantain peoplehub id of key user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "from",
            "description": "<p>cantains date from which data is required in format Y-m-d</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "to",
            "description": "<p>cantains date upto which data is required in format Y-m-d</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/activities/?user_id=7&from=20-11-2016&to=22-11-2016"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        [\n                \"id\": 5,\n                \"vendor_id\": 6,\n                \"user_id\": 7,\n                \"reward_method_id\": 3,\n                \"service_id\": 3,\n                \"attribute\": null,\n                \"attribute_type\": null,\n                \"action\": \"instant_redeem\",\n                \"points\": \"100\",\n                \"status\": true,\n                \"created\": \"2016-11-11T08:39:09+00:00\",\n                \"modified\": \"2016-11-11T08:39:09+00:00\",\n                \"service\": {\n                    \"id\": 3,\n                    \"name\": \"in_house\",\n                    \"label\": \"In House\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"reward_method\": {\n                    \"id\": 3,\n                    \"name\": \"instant_redeem\",\n                    \"label\": \"Instant Redeemption\",\n                    \"status\": true,\n                    \"created\": \"2016-11-09T18:16:40+00:00\",\n                    \"modified\": \"2016-11-09T18:16:40+00:00\"\n                },\n                \"user\": {\n                    \"id\": 7,\n                    \"uuid\": \"6cf957c1-c0cf-46e2-9f45-863a550be2a9\",\n                    \"name\": \"nikhil\",\n                    \"email\": \"nikhil11@gmail.com\",\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-11-11T07:09:33+00:00\",\n                    \"modified\": \"2016-11-11T07:09:33+00:00\",\n                    \"status\": true,\n                    \"username\": \"ns\",\n                    \"isEmailVerified\": false\n                },\n                \"vendor\": {\n                    \"id\": 6,\n                    \"name\": \"niteesh3\",\n                    \"created\": \"2016-11-11T08:27:13+00:00\",\n                    \"modified\": \"2016-11-11T08:27:13+00:00\",\n                    \"status\": true,\n                    \"deleted\": null\n                }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/ActivitiesController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/rewardCredits/:id",
    "title": "Get store and wallet credit of a user",
    "version": "1.1.0",
    "name": "UsersStoreAndWalletCreditInfo",
    "group": "Vendor_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>contains user's id.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/peoplehub/api/vendor/rewardCredits/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"data\": {\n      \"id\": \"9\",\n      \"wallet_credit\": 0,\n      \"store_credit\": 900\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/CreditRewardController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/users/:id",
    "title": "Fetch vendor specific user's detail",
    "description": "<p>Fetch vendor specific user's wallet and store credit detail</p>",
    "version": "1.1.0",
    "name": "getVendorSpecificUserDetail",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>user id of the users whose information we are going to fetch.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/users/15"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 15,\n       \"fb_identifier\": null,\n       \"uuid\": \"0ac08ace-5b26-470a-98ac-4cfae315060e\",\n       \"name\": \"nikhil\",\n       \"email\": \"nikhil1121@gmail.com\",\n       \"phone\": \"78945613221\",\n       \"role_id\": 2,\n       \"created\": \"2017-02-13T13:16:44+00:00\",\n       \"modified\": \"2017-02-13T13:16:44+00:00\",\n       \"status\": true,\n       \"username\": \"nikhil1121@gmail.com\",\n       \"is_email_verified\": false,\n       \"guardian_email\": null,\n       \"relationship_id\": null,\n       \"reason\": null,\n       \"user_cards\": [],\n       \"totalWalletCredits\": 0,\n       \"totalStoreCredits\": 0,\n       \"linkedAccount\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/rewardCredits/",
    "title": "Get all available rewards and detail",
    "version": "1.1.0",
    "name": "get_all_reward_credits",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/peoplehub/api/vendor/rewardCredits/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n     {\n   \"status\": true,\n   \"data\": {\n       \"id\": 1,\n       \"store_credits\": [\n           {\n               \"id\": 1,\n               \"vendor_id\": 1,\n               \"user_id\": 9,\n               \"points\": 300,\n               \"reward_method_id\": 2,\n               \"created\": \"2017-02-10T11:49:30+00:00\",\n               \"modified\": \"2017-02-14T10:21:03+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 9,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"4e79e0ab-e2f1-4730-8003-ad06b44d55dd\",\n                   \"name\": \"anonymous\",\n                   \"email\": null,\n                   \"phone\": \"9911002549\",\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-10T11:49:30+00:00\",\n                   \"modified\": \"2017-02-10T11:49:30+00:00\",\n                   \"status\": true,\n                   \"username\": \"anonymous1\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": null,\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           },\n           {\n               \"id\": 3,\n               \"vendor_id\": 1,\n               \"user_id\": 11,\n               \"points\": 100,\n               \"reward_method_id\": 2,\n               \"created\": \"2017-02-10T11:52:37+00:00\",\n               \"modified\": \"2017-02-10T11:52:37+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 11,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"9fda49c0-25ca-4e90-a8a9-15a70e62fbc5\",\n                   \"name\": \"anonymous\",\n                   \"email\": null,\n                   \"phone\": null,\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-10T11:52:37+00:00\",\n                   \"modified\": \"2017-02-10T11:52:37+00:00\",\n                   \"status\": true,\n                   \"username\": \"anonymous3\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": null,\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           },\n           {\n               \"id\": 2,\n               \"vendor_id\": 1,\n               \"user_id\": 10,\n               \"points\": 100,\n               \"reward_method_id\": 2,\n               \"created\": \"2017-02-10T11:50:40+00:00\",\n               \"modified\": \"2017-02-10T11:50:40+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 10,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"019b8508-2ba6-4a2f-bc8a-098bf28c6f3d\",\n                   \"name\": \"anonymous\",\n                   \"email\": null,\n                   \"phone\": null,\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-10T11:50:40+00:00\",\n                   \"modified\": \"2017-02-10T11:50:40+00:00\",\n                   \"status\": true,\n                   \"username\": \"anonymous2\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": null,\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           }\n       ],\n       \"wallet_credits\": [\n           {\n               \"id\": 5,\n               \"vendor_id\": 1,\n               \"user_id\": 9,\n               \"points\": 500,\n               \"reward_method_id\": 1,\n               \"created\": \"2017-02-10T11:59:49+00:00\",\n               \"modified\": \"2017-02-14T10:30:42+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 9,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"4e79e0ab-e2f1-4730-8003-ad06b44d55dd\",\n                   \"name\": \"anonymous\",\n                   \"email\": null,\n                   \"phone\": \"9911002549\",\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-10T11:49:30+00:00\",\n                   \"modified\": \"2017-02-10T11:49:30+00:00\",\n                   \"status\": true,\n                   \"username\": \"anonymous1\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": null,\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           },\n           {\n               \"id\": 6,\n               \"vendor_id\": 1,\n               \"user_id\": 5,\n               \"points\": 100,\n               \"reward_method_id\": 1,\n               \"created\": \"2017-02-10T12:03:57+00:00\",\n               \"modified\": \"2017-02-10T12:03:57+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 5,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"b3cde1fa-d40b-4f27-89b2-c2ce7e7d57bd\",\n                   \"name\": \"nikhil\",\n                   \"email\": null,\n                   \"phone\": null,\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-09T11:46:24+00:00\",\n                   \"modified\": \"2017-02-09T11:46:24+00:00\",\n                   \"status\": true,\n                   \"username\": \"nikhil12\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": \"nitesh_11@gmail.com\",\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           },\n           {\n               \"id\": 4,\n               \"vendor_id\": 1,\n               \"user_id\": 12,\n               \"points\": 100,\n               \"reward_method_id\": 1,\n               \"created\": \"2017-02-10T11:57:15+00:00\",\n               \"modified\": \"2017-02-10T11:57:15+00:00\",\n               \"deleted\": null,\n               \"status\": true,\n               \"user\": {\n                   \"id\": 12,\n                   \"fb_identifier\": null,\n                   \"uuid\": \"f0df6f24-5d27-4491-8614-c73ca0b4c305\",\n                   \"name\": \"anonymous\",\n                   \"email\": null,\n                   \"phone\": null,\n                   \"role_id\": 2,\n                   \"created\": \"2017-02-10T11:57:15+00:00\",\n                   \"modified\": \"2017-02-10T11:57:15+00:00\",\n                   \"status\": true,\n                   \"username\": \"anonymous4\",\n                   \"is_email_verified\": false,\n                   \"guardian_email\": null,\n                   \"relationship_id\": null,\n                   \"reason\": null\n               }\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/CreditRewardController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/UserInstantRedemptions/",
    "title": "instant redemption",
    "description": "<p>This api is used to redeem instantly.</p>",
    "version": "1.1.0",
    "name": "provideInstantRedemptions",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "amount",
            "optional": false,
            "field": "amount",
            "description": "<p>instant redeem amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>service name can be amazon/tango/in_house to redeem reward</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of redemtion, required if service is in_house else not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"amount\":\"100\",\n  \"user_id\":1,\n  \"description\":\"t-shirt\",\n  \"service\":\"in_house\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>redemption Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 10,\n       \"message\": \"Reward offered successfully\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserInstantRedemptionsController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "post",
    "url": "/api/vendor/rewardCredits/",
    "title": "Reward Credit to user",
    "version": "1.1.0",
    "name": "rewardCreditToUser",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute_type",
            "description": "<p>attribute type: can be email or phone or card or username.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute",
            "description": "<p>value of attribute type.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "points",
            "description": "<p>reward to credit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reward_type",
            "description": "<p>: can be wallet_credit or reward_credit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"attribute\": \"9911002549\",\n   \"attribute_type\": \"phone\",\n    \"points\": 100,\n   \"reward_type\": \"store_credit\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n   \"attribute\": \"9\",\n   \"attribute_type\": \"id\",\n    \"points\": 100,\n   \"reward_type\": \"wallet_credit\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n   \"status\": true,\n   \"data\": {\n       \"id\": 9,\n       \"message\": \"Reward offered successfully\"\n   }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n   \"status\": true,\n   \"data\": {\n       \"id\": 8,\n       \"message\": \"Reward offered successfully\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/CreditRewardController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/suggest_username/",
    "title": "suggest username",
    "description": "<p>suggest username</p>",
    "version": "1.1.0",
    "name": "suggestUsername",
    "group": "Vendor_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "first_name",
            "description": "<p>contains User's first Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": false,
            "field": "last_name",
            "description": "<p>contains User's last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"first_name\" : \"nitesh\",\n  \"last_name\" : \"srivastava\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"username\": \"niteshsrivastava\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "PUT",
    "url": "/api/vendor/users/{:id}",
    "title": "Update user's info",
    "description": "<p>Update user's info</p>",
    "version": "1.1.0",
    "name": "updateUserInfo",
    "group": "Vendor_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>user id of the users whose information we are going to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..255",
            "optional": true,
            "field": "name",
            "description": "<p>contains User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "email",
            "description": "<p>contains User's email, if username is not present then email is required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "username",
            "description": "<p>contains User's username, required if email is not present else not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..255",
            "optional": true,
            "field": "password",
            "description": "<p>contains user's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..255",
            "optional": true,
            "field": "old_password",
            "description": "<p>contains user's old password, required if password is provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..255",
            "optional": true,
            "field": "guardian_email",
            "description": "<p>contains guardian email, required if email is not present else not.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 4,\n       \"fb_identifier\": null,\n       \"uuid\": \"92945918-0e20-4233-a8d8-60c21b44e262\",\n       \"name\": \"Test User 3\",\n       \"email\": null,\n       \"phone\": null,\n       \"role_id\": 2,\n       \"created\": \"2017-01-02T11:50:38+00:00\",\n       \"modified\": \"2017-01-02T11:50:38+00:00\",\n       \"status\": true,\n       \"username\": \"testuser3\",\n       \"is_email_verified\": false,\n       \"guardian_email\": null,\n       \"relationship_id\": null,\n       \"reason\": null,\n       \"activities\": [],\n       \"user_cards\": [],\n       \"totalWalletCredits\": 0,\n       \"walletCredits\": [],\n       \"totalStoreCredits\": 0,\n       \"storeCredits\": []\n   }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\"=> \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "GET",
    "url": "/api/vendor/UserInstantRedemptions/",
    "title": "view all instant redemptions",
    "description": "<p>This api is used to view all instant redemptions.</p>",
    "version": "1.1.0",
    "name": "viewInstantRedemptions",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token",
          "type": "php"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://peoplehub.twinspark.co/api/vendor/UserInstantRedemptions/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n\"response\": {\n    \"status\": true,\n    \"data\": [\n        {\n            \"id\": 1,\n            \"service_id\": 2,\n            \"description\": \"asadd\",\n            \"vendor_id\": 1,\n            \"user_id\": 1,\n            \"amount\": 100,\n            \"created\": \"2016-11-04T08:31:43+00:00\",\n            \"modified\": \"2016-11-04T08:31:43+00:00\",\n            \"deleted\": null,\n            \"status\": true,\n            \"service\": {\n                \"id\": 2,\n                \"name\": \"tango\",\n                \"label\": \"Tango Card\",\n                \"status\": true,\n                \"created\": \"2016-10-20T11:15:26+00:00\",\n                \"modified\": \"2016-10-20T11:15:26+00:00\"\n            },\n            \"user\": {\n                \"id\": 1,\n                \"uuid\": \"88e4bc36-a680-4a25-9b99-d125a82e3f22\",\n                \"name\": \"admin\",\n                \"email\": \"nitesh.srivastava@twinspark.co\",\n                \"phone\": null,\n                \"role_id\": 1,\n                \"created\": \"2016-10-20T11:15:25+00:00\",\n                \"modified\": \"2016-10-20T11:15:25+00:00\",\n                \"status\": true,\n                \"username\": \"admin\",\n                \"isEmailVerified\": false\n            }\n        }\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/UserInstantRedemptionsController.js",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "get",
    "url": "/api/vendor/me",
    "title": "View Loggedin Vendor's Info",
    "version": "1.1.0",
    "name": "viewVendorDetail",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Vendor's Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "\"Authorization\" => \"Bearer Vendor's Access Token\"",
          "type": "php"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>cotains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n\"response\": {\n           \"status\": true,\n           \"data\": {\n               \"id\": 10,\n               \"name\": \"nitesh\",\n               \"created\": \"2016-08-10T09:58:29+0000\",\n               \"modified\": \"2016-08-10T09:58:29+0000\",\n               \"status\": true,\n               \"vendor_reward_types\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"reward_method_id\": 1,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\",\n                       \"status\": true,\n                       \"reward_method\": {\n                           \"id\": 1,\n                           \"name\": \"wallet_credit\",\n                           \"label\": \"Wallet Credit\",\n                           \"status\": true,\n                           \"created\": \"2016-08-10T06:11:13+0000\",\n                           \"modified\": \"2016-08-10T06:11:13+0000\"\n                       }\n                   }\n               ],\n               \"vendor_contacts\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"email\": \"nitesh@gmail.com\",\n                       \"phone\": \"991110032449\",\n                       \"is_primary\": true,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "bountee/vendorApis/VendorController.js",
    "groupTitle": "Vendor_Apis"
  }
] });

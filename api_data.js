define({ "api": [
  {
    "type": "post",
    "url": "/api/activities/",
    "title": "Get User's activities",
    "version": "1.0.0",
    "name": "index",
    "group": "Activities",
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
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n\n{\n     \"response\": {\n         \"status\": true,\n         \"data\": {\n             \"Activities\": [\n                 {\n                         \"id\": 3,\n                         \"vendor_id\": null,\n                         \"user_id\": 2,\n                         \"reward_method_id\": 1,\n                         \"service_id\": 1,\n                         \"attribute\": null,\n                         \"attribute_type\": null,\n                         \"action\": \"redeem\",\n                         \"points\": \"30\",\n                         \"status\": true,\n                         \"created\": \"2016-03-29T19:23:13+0000\",\n                         \"modified\": \"2016-03-29T19:23:13+0000\",\n                         \"service\": {\n                             \"id\": 1,\n                             \"name\": \"amazon\",\n                             \"label\": \"Amazon\",\n                             \"status\": true,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                             \"modified\": \"2016-09-12T09:07:40+0000\"\n                         },\n                         \"reward_method\": {\n                             \"id\": 1,\n                             \"name\": \"wallet_credit\",\n                             \"label\": \"Wallet Credit\",\n                            \"status\": true,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                            \"modified\": \"2016-09-12T09:07:40+0000\"\n                        },\n                         \"user\": {\n                             \"id\": 2,\n                             \"name\": \"Test User 1\",\n                             \"email\": \"testuser1@gmail.com\",\n                             \"role_id\": 2,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                             \"modified\": \"2016-09-12T09:07:40+0000\",\n                             \"status\": true,\n                             \"uuid\": \"8bb60894-d389-48e0-b072-d7cce819dcae\",\n                             \"phone\": \"9878943352\"\n                        },\n                         \"vendor\": null\n                     },\n                     {\n                         \"id\": 5,\n                         \"vendor_id\": null,\n                         \"user_id\": 2,\n                         \"reward_method_id\": 1,\n                         \"service_id\": 1,\n                         \"attribute\": null,\n                         \"attribute_type\": null,\n                         \"action\": \"redeem\",\n                         \"points\": \"100\",\n                         \"status\": true,\n                         \"created\": \"2016-03-30T14:02:24+0000\",\n                         \"modified\": \"2016-03-30T14:02:24+0000\",\n                         \"service\": {\n                            \"id\": 1,\n                            \"name\": \"amazon\",\n                             \"label\": \"Amazon\",\n                             \"status\": true,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                             \"modified\": \"2016-09-12T09:07:40+0000\"\n                         },\n                         \"reward_method\": {\n                             \"id\": 1,\n                             \"name\": \"wallet_credit\",\n                             \"label\": \"Wallet Credit\",\n                             \"status\": true,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                             \"modified\": \"2016-09-12T09:07:40+0000\"\n                         },\n                         \"user\": {\n                             \"id\": 2,\n                             \"name\": \"Test User 1\",\n                             \"email\": \"testuser1@gmail.com\",\n                             \"role_id\": 2,\n                             \"created\": \"2016-09-12T09:07:40+0000\",\n                             \"modified\": \"2016-09-12T09:07:40+0000\",\n                             \"status\": true,\n                             \"uuid\": \"8bb60894-d389-48e0-b072-d7cce819dcae\",\n                             \"phone\": \"9878943352\"\n                        },\n                         \"vendor\": null\n                    }\n             ]\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/ActivitiesController.php",
    "groupTitle": "Activities"
  },
  {
    "type": "post",
    "url": "/api/activities/:id",
    "title": "Get Vendor activities",
    "version": "1.0.0",
    "name": "view",
    "group": "Activities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>vendor's id</p>"
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
            "description": "<p>contains response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n\n{\n     \"response\": {\n         \"status\": true,\n         \"data\": {\n             \"Activities\": [\n                 {\n                     \"id\": 1,\n                     \"vendor_id\": 4,\n                     \"user_id\": null,\n                     \"reward_method_id\": 1,\n                     \"service_id\": null,\n                     \"attribute\": null,\n                     \"attribute_type\": null,\n                     \"action\": \"reward\",\n                     \"points\": \"100\",\n                     \"status\": true,\n                     \"created\": \"2016-09-11T12:52:01+0000\",\n                     \"modified\": \"2016-09-11T12:52:01+0000\",\n                     \"service\": null,\n                     \"reward_method\": {\n                         \"id\": 1,\n                         \"name\": \"wallet_credit\",\n                         \"label\": \"Wallet Credit\",\n                         \"status\": true,\n                         \"created\": \"2016-09-10T06:55:07+0000\",\n                         \"modified\": \"2016-09-10T06:55:07+0000\"\n                     },\n                     \"user\": null,\n                     \"vendor\": {\n                         \"id\": 4,\n                         \"name\": \"niteeshs\",\n                         \"created\": \"2016-09-11T12:30:52+0000\",\n                         \"modified\": \"2016-09-11T12:30:52+0000\",\n                         \"status\": true,\n                         \"deleted\": null\n                     }\n                 }\n             ]\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/ActivitiesController.php",
    "groupTitle": "Activities"
  },
  {
    "type": "post",
    "url": "/api/redeemedCredits/",
    "title": "Redeem Store credit (By Vendor)",
    "version": "1.0.0",
    "name": "addStore",
    "group": "RedeemedCredits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>: vendor's id who is redeeming the store credit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute_type",
            "description": "<p>attribute type: can be email or phone or card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute",
            "description": "<p>value of attribute type.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"response\": {\n     \"status\": true,\n     \"message\": \"points redeemed\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RedeemedCreditsController.php",
    "groupTitle": "RedeemedCredits"
  },
  {
    "type": "post",
    "url": "/api/redeemedCredits/",
    "title": "Redeem Store credit (By Vendor)",
    "version": "1.0.0",
    "name": "addStore",
    "group": "RedeemedCredits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>: vendor's id who is redeeming the store credit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute_type",
            "description": "<p>attribute type: can be email or phone or card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute",
            "description": "<p>value of attribute type.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"response\": {\n     \"status\": true,\n     \"message\": \"points redeemed\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/RedeemedCreditsController.php",
    "groupTitle": "RedeemedCredits"
  },
  {
    "type": "post",
    "url": "/api/redeemedCredits/",
    "title": "Redeem wallet credit (By user)",
    "version": "1.0.0",
    "name": "addWallet",
    "group": "RedeemedCredits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service",
            "description": "<p>: can be amazon or tango</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"response\": {\n     \"status\": true,\n     \"message\": \"Gift coupon requested\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/RedeemedCreditsController.php",
    "groupTitle": "RedeemedCredits"
  },
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
            "field": "token",
            "description": "<p>Reseller Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's Organization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's Status: Enabled or Disabled, By Default Enabled.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>contains vendor's contact info.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>contains vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>contains vendor's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>True or False, By Default false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_type",
            "description": "<p>contains vendor's allowed reward type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "reward_method_id",
            "description": "<p>contains reward_method_id.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"id\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
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
            "type": "Number",
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
            "field": "token",
            "description": "<p>Reseller's Access Token</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"response\":\n    {\n        \"status\": true,\n        \"data\":\n        {\n            \"message\": \"Vendor deleted successfully\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "POST",
    "url": "/api/reseller/token/",
    "title": "Reseller Token",
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
            "field": "token",
            "description": "<p>Basic (Base_64encode(client_secret:client_id))</p>"
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
          "content": "HTTP/1.1 200 OK\n  {\n    \"response\": {\n                  \"status\": true,\n                  \"data\": {\n                      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTQ3MTQyNjE2Mn0.VN1h-2Hl8eLdbxzH743KOS0uVu65en7kvuY4HuCnx0w\",\n                      \"expires\": 2016-11-04 09:32:16\n                  }\n                }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/ResellersController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "GET",
    "url": "/api/reseller/vendors",
    "title": "Vendor's List",
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
            "field": "token",
            "description": "<p>Reseller's Access Token</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n\"response\":\n{\n    \"status\": true,\n    \"data\":\n    [\n        {\n            \"id\": 1,\n            \"reseller_id\": 1,\n            \"vendor_id\": 1,\n            \"status\": true,\n            \"created\": \"2016-10-20T11:15:26+00:00\",\n            \"modified\": \"2016-10-20T11:15:26+00:00\",\n            \"vendor\":\n            {\n                \"id\": 1,\n                \"name\": \"Vendor1\",\n                \"created\": \"2016-10-20T11:15:26+00:00\",\n                \"modified\": \"2016-10-20T11:15:26+00:00\",\n                \"status\": true,\n                \"deleted\": null,\n                \"vendor_reward_types\":\n                [\n                    {\n                        \"id\": 3,\n                        \"vendor_id\": 1,\n                        \"reward_method_id\": 6,\n                        \"created\": \"2016-11-01T02:03:43+00:00\",\n                        \"modified\": \"2016-11-01T02:03:43+00:00\",\n                        \"status\": true,\n                        \"reward_method\":\n                        {\n                            \"id\": 6,\n                            \"name\": \"instant_redeem\",\n                            \"label\": \"Instant Redeemption\",\n                            \"status\": true,\n                            \"created\": \"2016-11-04T08:06:10+00:00\",\n                            \"modified\": \"2016-11-04T08:06:10+00:00\"\n                        }\n                    }\n                ],\n                \"vendor_contacts\":\n                [\n                    {\n                        \"id\": 1,\n                        \"vendor_id\": 1,\n                        \"email\": \"vendor1@gmail.com\",\n                        \"phone\": \"1234567890\",\n                        \"is_primary\": true,\n                        \"created\": \"2016-10-20T11:15:26+00:00\",\n                        \"modified\": \"2016-10-20T11:15:26+00:00\"\n                    }\n                 ]\n             }\n         }\n       ]\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
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
            "type": "Number",
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
            "field": "token",
            "description": "<p>Reseller's Access Token</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"response\":\n    {\n        \"status\": true,\n        \"data\":\n        {\n            \"id\": 1,\n            \"name\": \"Vendor1\",\n            \"created\": \"2016-10-20T11:15:26+00:00\",\n            \"modified\": \"2016-10-20T11:15:26+00:00\",\n            \"status\": true,\n            \"deleted\": null,\n            \"vendor_reward_types\":\n            [\n                {\n                    \"id\": 3,\n                    \"vendor_id\": 1,\n                    \"reward_method_id\": 6,\n                    \"created\": \"2016-11-01T02:03:43+00:00\",\n                    \"modified\": \"2016-11-01T02:03:43+00:00\",\n                    \"status\": true,\n                    \"reward_method\":\n                    {\n                        \"id\": 6,\n                        \"name\": \"instant_redeem\",\n                        \"label\": \"Instant Redeemption\",\n                        \"status\": true,\n                        \"created\": \"2016-11-04T08:06:10+00:00\",\n                        \"modified\": \"2016-11-04T08:06:10+00:00\"\n                    }\n                }\n            ],\n            \"vendor_contacts\":\n            [\n                {\n                    \"id\": 1,\n                    \"vendor_id\": 1,\n                    \"email\": \"vendor1@gmail.com\",\n                    \"phone\": \"1234567890\",\n                    \"is_primary\": true,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Reseller_Apis"
  },
  {
    "type": "POST",
    "url": "/api/resellerBillings/",
    "title": "Generate Reseller's Bill",
    "version": "1.0.0",
    "name": "add",
    "group": "Reseller_Billings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "month",
            "description": "<p>month of which bill has to be generated.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"response\": {\n        \"status\": true,\n        \"reseller_id\": 1,\n        \"data\": {\n            \"points\": \"850\",\n            \"billable_amount\": \"$17\",\n            \"total_transactions\": 8,\n            \"vendor_bills\": [\n                {\n                    \"vendor_id\": 1,\n                    \"points_redeemed\": \"400\",\n                    \"billable_amount\": \"$8\",\n                    \"total_transactions\": 4\n                },\n                {\n                    \"vendor_id\": 2,\n                    \"points_redeemed\": \"450\",\n                    \"billable_amount\": \"$9\",\n                    \"total_transactions\": 4\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/ResellerBillingsController.php",
    "groupTitle": "Reseller_Billings"
  },
  {
    "type": "get",
    "url": "/api/resellerBillings/:month/:year",
    "title": "view Reseller's Bill of all months",
    "version": "1.0.0",
    "name": "all",
    "group": "Reseller_Billings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"response\": {\n        \"status\": true,\n        \"reseller_id\": 1,\n        \"data\": [\n            {\n                \"points\": \"1408\",\n                \"billable_amount\": \"$28.16\",\n                \"total_transactions\": 14,\n                \"from_date\": \"2016-06-02 00:00:00\",\n                \"to_date\": \"2016-07-02 00:00:00\"\n            },\n            {\n                \"points\": \"564\",\n                \"billable_amount\": \"$11.28\",\n                \"total_transactions\": 8,\n                \"from_date\": \"2016-05-02 00:00:00\",\n                \"to_date\": \"2016-06-02 00:00:00\"\n            },\n            {\n                \"points\": \"1310\",\n                \"billable_amount\": \"$26.2\",\n                \"total_transactions\": 9,\n                \"from_date\": \"2016-04-02 00:00:00\",\n                \"to_date\": \"2016-05-02 00:00:00\"\n            },\n            {\n                \"points\": \"850\",\n                \"billable_amount\": \"$17\",\n                \"total_transactions\": 8,\n                \"from_date\": \"2016-03-02 00:00:00\",\n                \"to_date\": \"2016-04-02 00:00:00\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/ResellerBillingsController.php",
    "groupTitle": "Reseller_Billings"
  },
  {
    "type": "get",
    "url": "/api/resellerBillings/:month/:year",
    "title": "view Reseller's Bill of specific month",
    "version": "1.0.0",
    "name": "view",
    "group": "Reseller_Billings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"response\": {\n        \"status\": true,\n        \"reseller_id\": 1,\n        \"data\": {\n            \"points\": \"850\",\n            \"billable_amount\": \"$17\",\n            \"total_transactions\": 8,\n            \"vendor_bills\": [\n                {\n                    \"vendor_id\": 1,\n                    \"points_redeemed\": \"400\",\n                    \"billable_amount\": \"$8\",\n                    \"total_transactions\": 4\n                },\n                {\n                    \"vendor_id\": 2,\n                    \"points_redeemed\": \"450\",\n                    \"billable_amount\": \"$9\",\n                    \"total_transactions\": 4\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/ResellerBillingsController.php",
    "groupTitle": "Reseller_Billings"
  },
  {
    "type": "post",
    "url": "/api/rewardCredits/",
    "title": "Reward Credit to user",
    "version": "1.0.0",
    "name": "add",
    "group": "RewardCredits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attribute_type",
            "description": "<p>attribute type: can be email or phone or card.</p>"
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
      }
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
          "content": "   HTTP/1.1 200 OK\n {\n     \"response\": {\n         \"status\": true,\n         \"message\": \"Reward offered successfully\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RewardCreditsController.php",
    "groupTitle": "RewardCredits"
  },
  {
    "type": "GET",
    "url": "/api/rewardCredits/",
    "title": "Get all available rewards and detail",
    "version": "1.0.0",
    "name": "index",
    "group": "RewardCredits",
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
          "content": "HTTP/1.1 200 OK\n   {\n  \"response\": {\n      \"status\": true,\n     \"data\": {\n          \"id\": 2,\n          \"total_credits\": [\n              {\n                  \"name\": \"wallet_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Wallet Credit\"\n              },\n              {\n                  \"name\": \"store_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Store Credit\"\n              }\n          ],\n          \"user_credits\": [\n              {\n                  \"id\": 1,\n                  \"vendor_id\": 1,\n                  \"user_id\": 2,\n                  \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 500,\n                  \"vendor_reward_type_id\": 1,\n                  \"created\": \"2016-08-11T11:11:41+0000\",\n                  \"modified\": \"2016-08-11T11:11:45+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 1,\n                      \"vendor_id\": 1,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 1,\n                      \"name\": \"nitesh121\",\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n              },\n              {\n                  \"id\": 2,\n                  \"vendor_id\": 2,\n                  \"user_id\": 2,\n                \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 1100,\n                  \"vendor_reward_type_id\": 2,\n                  \"created\": \"2016-08-11T11:12:16+0000\",\n                  \"modified\": \"2016-08-11T11:12:20+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 2,\n                      \"vendor_id\": 2,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                     \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 2,\n                      \"name\": \"nitesh\",\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n            }\n         }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RewardCreditsController.php",
    "groupTitle": "RewardCredits"
  },
  {
    "type": "GET",
    "url": "/api/rewardCredits/:id",
    "title": "Get available rewards of a user",
    "version": "1.0.0",
    "name": "view",
    "group": "RewardCredits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Users's Id.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"response\": {\n               \"status\": true,\n               \"data\": {\n                           \"id\": \"2\",\n                           \"wallet_credit\": 1100,\n                           \"store_credit\": 1100\n                       }\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/RewardCreditsController.php",
    "groupTitle": "RewardCredits"
  },
  {
    "type": "POST",
    "url": "/api/user/register",
    "title": "Registrer new User",
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
            "optional": false,
            "field": "name",
            "description": "<p>User's Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
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
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>contains user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"id\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "version": "1.1.0",
    "name": "login",
    "group": "User_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password.</p>"
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
            "type": "Number",
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
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout User",
    "version": "1.0.0",
    "name": "logout",
    "group": "User_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>users's Access Token</p>"
          }
        ]
      }
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
    "filename": "src/Controller/Api/User/UsersController.php",
    "groupTitle": "User_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/token/",
    "title": "Vendor's Token",
    "description": "<p>This api is used to get vendor's token.</p>",
    "version": "1.1.0",
    "name": "GetVendorToken",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Basic (Base_64encode(client_secret:client_id))</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor's id to login</p>"
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
          "content": "HTTP/1.1 200 OK\n  {\n    \"response\": {\n                  \"status\": true,\n                  \"data\": {\n                      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTQ3MTQyNjE2Mn0.VN1h-2Hl8eLdbxzH743KOS0uVu65en7kvuY4HuCnx0w\",\n                      \"expires\": 2016-11-04 09:32:16\n                  }\n                }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
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
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      }
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
            "optional": false,
            "field": "username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>contains user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>contains user's phone number.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"id\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
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
            "optional": true,
            "field": "attributeType",
            "description": "<p>can be email, username,phone,card</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": {\n            \"users\": [\n                {\n                    \"id\": 2,\n                    \"uuid\": \"c5479454-ee9c-4761-81cf-ff09c09dd078\",\n                    \"name\": \"Test User 1\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser1\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 3,\n                    \"uuid\": \"89bc68e9-44d4-4702-84b3-9e574563db64\",\n                    \"name\": \"Test User 2\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser2\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 4,\n                    \"uuid\": \"5f815c0c-c4ca-4e89-82be-d889254b374e\",\n                    \"name\": \"Test User 3\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser3\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                },\n                {\n                    \"id\": 5,\n                    \"uuid\": \"3e5b110a-3565-4338-815e-268b853984b3\",\n                    \"name\": \"Test User 4\",\n                    \"email\": null,\n                    \"phone\": null,\n                    \"role_id\": 2,\n                    \"created\": \"2016-10-20T11:15:26+00:00\",\n                    \"modified\": \"2016-10-20T11:15:26+00:00\",\n                    \"status\": true,\n                    \"username\": \"testuser4\",\n                    \"isEmailVerified\": false,\n                    \"user_cards\": []\n                }\n            ],\n            \"unassociatedUsers\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "put",
    "url": "/api/vendor/vendors/",
    "title": "Update vendor's Info",
    "version": "1.0.0",
    "name": "Update_Vendor_s_detail",
    "group": "Vendor_Apis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_contacts",
            "description": "<p>Contain vendor contact relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Vendor's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>is primary contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_reward_types",
            "description": "<p>Contain vendor reward type relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reward_method_id",
            "description": "<p>reward method's id: 1-wallet credit, 2-store credit.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n              \"status\": true,\n               \"message\": \"Vendor's data updated successfully\"\n              }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendor/instant-redeem/",
    "title": "instant redeem api",
    "description": "<p>This api is used to redeem points instantly.</p>",
    "version": "1.1.0",
    "name": "instant_redeem",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>contains user's id for which point has to be redeemed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>price to redeem</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>cotains service can be amazon or tango.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>cotains description.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"response\": {\n        \"status\": true,\n        \"message\": \"Reward offered successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/UserInstantRedemptionsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "get",
    "url": "/api/vendor/me",
    "title": "View Loggedin Vendor's Info",
    "version": "1.0.0",
    "name": "viewVendorDetail",
    "group": "Vendor_Apis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Vendor's Access Token</p>"
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
    "filename": "src/Controller/Api/Vendor/VendorsController.php",
    "groupTitle": "Vendor_Apis"
  },
  {
    "type": "POST",
    "url": "/api/vendorBillings/",
    "title": "Generate Vendor's Bill",
    "version": "1.0.0",
    "name": "add",
    "group": "Vendor_Billings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "vendor_id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "month",
            "description": "<p>month of which bill has to be generated.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\": {\n          \"status\": true,\n           \"data\": {\n             \"vendor_id\": 1,\n              \"points\": \"200\",\n              \"billable_amount\": \"$4\",\n              \"total_transactions\": 1\n           }\n      }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorBillingsController.php",
    "groupTitle": "Vendor_Billings"
  },
  {
    "type": "GET",
    "url": "/api/vebdorBillings/:id/all",
    "title": "View  Vendor's Bill of all months",
    "version": "1.0.0",
    "name": "all",
    "group": "Vendor_Billings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n     \"response\": {\n        \"status\": true,\n        \"vendor_id\": \"1\",\n        \"data\": [\n            {\n                \"points\": \"200\",\n                \"billable_amount\": \"$4\",\n               \"total_transactions\": 1,\n                \"from_date\": \"2016-07-01 00:00:00\",\n                \"to_date\": \"2016-08-02 00:00:00\"\n            },\n            {\n                \"points\": \"400\",\n                \"billable_amount\": \"8\",\n                \"total_transactions\": 1,\n                \"from_date\": \"2016-06-01 00:00:00\",\n                \"to_date\": \"2016-07-02 00:00:00\"\n            }\n        ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorBillingsController.php",
    "groupTitle": "Vendor_Billings"
  },
  {
    "type": "GET",
    "url": "/api/vebdorBillings/:id",
    "title": "View Vendor's Bill",
    "version": "1.0.0",
    "name": "view",
    "group": "Vendor_Billings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\": {\n          \"status\": true,\n           \"data\": {\n             \"vendor_id\": 1,\n              \"points\": \"200\",\n              \"billable_amount\": \"$4\",\n              \"total_transactions\": 1\n           }\n      }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Vendor/VendorBillingsController.php",
    "groupTitle": "Vendor_Billings"
  },
  {
    "type": "put",
    "url": "/api/vendors/:id",
    "title": "Update vendor's Info",
    "version": "1.0.0",
    "name": "Update",
    "group": "Vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Vendor's Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Vendor's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_contacts",
            "description": "<p>Contain vendor contact relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Vendor's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_primary",
            "description": "<p>is primary contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "vendor_reward_types",
            "description": "<p>Contain vendor reward type relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reward_method_id",
            "description": "<p>reward method's id: 1-wallet credit, 2-store credit.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n              \"status\": true,\n               \"message\": \"Vendor's data updated successfully\"\n              }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/Reseller/VendorsController.php",
    "groupTitle": "Vendors"
  },
  {
    "type": "POST",
    "url": "/api/userCards/",
    "title": "Add User's Card",
    "version": "1.0.0",
    "name": "add",
    "group": "userCards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "card_number",
            "description": "<p>Card Number.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                         \"id\": 4\n                         }\n             }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UserCardsController.php",
    "groupTitle": "userCards"
  },
  {
    "type": "put",
    "url": "/userCards/:id",
    "title": "Update existing card",
    "version": "1.0.0",
    "name": "edit",
    "group": "userCards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "card_number",
            "description": "<p>Card Number.</p>"
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
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n              \"status\": true,\n               \"message\": \"cards data updated successfully\"\n              }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UserCardsController.php",
    "groupTitle": "userCards"
  },
  {
    "type": "GET",
    "url": "/api/userCards/",
    "title": "List User's Cards",
    "version": "1.0.0",
    "name": "index",
    "group": "userCards",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n             {\n               \"status\": true,\n               \"data\":\n                       [\n                        {\n                          \"id\": 3,\n                          \"user_id\": 2,\n                          \"card_number\": \"110093\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T08:04:05+0000\",\n                          \"modified\": \"2016-08-11T08:04:05+0000\"\n                        },\n                        {\n                          \"id\": 4,\n                          \"user_id\": 2,\n                          \"card_number\": \"110094\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T08:04:13+0000\",\n                          \"modified\": \"2016-08-11T08:04:13+0000\"\n                        }\n                       ]\n             }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UserCardsController.php",
    "groupTitle": "userCards"
  },
  {
    "type": "GET",
    "url": "/api/userCards/:id",
    "title": "Detail of partiular user card",
    "version": "1.0.0",
    "name": "view",
    "group": "userCards",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n            {\n              \"status\": true,\n              \"data\":\n                    [\n                      {\n                        \"id\": 3,\n                        \"card_number\": \"110096\"\n                      },\n                    ]\n            }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Controller/Api/User/UserCardsController.php",
    "groupTitle": "userCards"
  }
] });

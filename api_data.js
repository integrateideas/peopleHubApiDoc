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
    "filename": "peoplehub/src/Controller/Api/ActivitiesController.php",
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
    "filename": "peoplehub/src/Controller/Api/ActivitiesController.php",
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
    "filename": "peoplehub/src/Controller/Api/RedeemedCreditsController.php",
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
    "filename": "peoplehub/src/Controller/Api/RedeemedCreditsController.php",
    "groupTitle": "RedeemedCredits"
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
    "filename": "peoplehub/src/Controller/Api/ResellerBillingsController.php",
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
    "filename": "peoplehub/src/Controller/Api/ResellerBillingsController.php",
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
    "filename": "peoplehub/src/Controller/Api/ResellerBillingsController.php",
    "groupTitle": "Reseller_Billings"
  },
  {
    "type": "GET",
    "url": "/api/resellers/token/",
    "title": "Get reseller's access token",
    "version": "1.0.0",
    "name": "token",
    "group": "Reseller",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Base_64encode(client_secret:client_id).</p>"
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
          "content": "  HTTP/1.1 200 OK\n{\n  \"response\": {\n                \"status\": true,\n                \"data\": {\n                    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTQ3MTQyNjE2Mn0.VN1h-2Hl8eLdbxzH743KOS0uVu65en7kvuY4HuCnx0w\",\n                    \"expires\": 1471426162\n                }\n              }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/ResellersController.php",
    "groupTitle": "Reseller"
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
    "filename": "peoplehub/src/Controller/Api/RewardCreditsController.php",
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
          "content": "HTTP/1.1 200 OK\n   {\n  \"response\": {\n      \"status\": true,\n     \"data\": {\n          \"id\": 2,\n          \"total_credits\": [\n              {\n                  \"name\": \"wallet_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Wallet Credit\"\n              },\n              {\n                  \"name\": \"store_credit\",\n                  \"value\": 1100,\n                  \"label\": \"Store Credit\"\n              }\n          ],\n          \"user_credits\": [\n              {\n                  \"id\": 1,\n                  \"vendor_id\": 1,\n                  \"user_id\": 2,\n                  \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 500,\n                  \"vendor_reward_type_id\": 1,\n                  \"created\": \"2016-08-11T11:11:41+0000\",\n                  \"modified\": \"2016-08-11T11:11:45+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 1,\n                      \"vendor_id\": 1,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 1,\n                      \"name\": \"nitesh121\",\n                      \"created\": \"2016-08-11T11:04:43+0000\",\n                      \"modified\": \"2016-08-11T11:04:43+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n              },\n              {\n                  \"id\": 2,\n                  \"vendor_id\": 2,\n                  \"user_id\": 2,\n                \"attribute\": \"78945613\",\n                  \"attribute_type\": \"phone\",\n                  \"points\": 1100,\n                  \"vendor_reward_type_id\": 2,\n                  \"created\": \"2016-08-11T11:12:16+0000\",\n                  \"modified\": \"2016-08-11T11:12:20+0000\",\n                  \"vendor_reward_type\": {\n                      \"id\": 2,\n                      \"vendor_id\": 2,\n                      \"reward_method_id\": 1,\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                     \"reward_method\": {\n                          \"id\": 1,\n                          \"name\": \"wallet_credit\",\n                          \"label\": \"Wallet Credit\",\n                          \"status\": true,\n                          \"created\": \"2016-08-11T11:04:05+0000\",\n                          \"modified\": \"2016-08-11T11:04:05+0000\"\n                      }\n                  },\n                  \"vendor\": {\n                      \"id\": 2,\n                      \"name\": \"nitesh\",\n                      \"created\": \"2016-08-11T11:12:07+0000\",\n                      \"modified\": \"2016-08-11T11:12:07+0000\",\n                      \"status\": true,\n                      \"deleted\": null\n                  }\n            }\n         }\n      }  \n  }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/RewardCreditsController.php",
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
    "filename": "peoplehub/src/Controller/Api/RewardCreditsController.php",
    "groupTitle": "RewardCredits"
  },
  {
    "type": "GET",
    "url": "/api/storeCredits/:vendor_id/:user_id",
    "title": "View store credit of a user",
    "version": "1.0.0",
    "name": "viewStoreCredit",
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
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's Id.</p>"
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
          "content": "  HTTP/1.1 200 OK\n{\n    \"response\": {\n                    \"status\": true,\n                    \"data\": {\n                        \"user_id\": \"2\",\n                        \"vendor_id\": \"2\",\n                        \"total_store_credit\": 1100\n                    }\n                }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/RewardCreditsController.php",
    "groupTitle": "RewardCredits"
  },
  {
    "type": "post",
    "url": "/api/users/",
    "title": "Register New User",
    "version": "1.0.0",
    "name": "add",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password.</p>"
          },
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
            "field": "phone",
            "description": "<p>User's Phone number.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                         \"id\": 8\n                         }\n             }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UsersController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login User",
    "version": "1.0.0",
    "name": "login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email ID.</p>"
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
    "filename": "peoplehub/src/Controller/Api/UsersController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout User",
    "version": "1.0.0",
    "name": "logout",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"response\": {\n\"status\": true,\n\"data\": {\n       \"message\": \"User Logged out Successfully\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UsersController.php",
    "groupTitle": "Users"
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
    "filename": "peoplehub/src/Controller/Api/VendorBillingsController.php",
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
    "filename": "peoplehub/src/Controller/Api/VendorBillingsController.php",
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
    "filename": "peoplehub/src/Controller/Api/VendorBillingsController.php",
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
    "filename": "peoplehub/src/Controller/Api/VendorsController.php",
    "groupTitle": "Vendors"
  },
  {
    "type": "post",
    "url": "/api/vendors/",
    "title": "Register new vendor",
    "version": "1.0.0",
    "name": "add",
    "group": "Vendors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Vendor's status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_contacts",
            "description": "<p>Contain vendor contact relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Vendor's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Vendor's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_primary",
            "description": "<p>is primary contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "vendor_reward_types",
            "description": "<p>Contain vendor reward type relacted data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
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
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n               \"status\": true,\n               \"data\": {\n                         \"id\": 8\n                         }\n             }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/VendorsController.php",
    "groupTitle": "Vendors"
  },
  {
    "type": "get",
    "url": "/api/vendors/",
    "title": "get vendor's list of a reseller",
    "version": "1.0.0",
    "name": "index",
    "group": "Vendors",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"response\": {\n        \"status\": true,\n        \"data\": [\n            {\n                \"id\": 1,\n                \"reseller_id\": 1,\n                \"vendor_id\": 1,\n                \"status\": true,\n                \"created\": \"2016-09-10T06:55:08+0000\",\n                \"modified\": \"2016-09-10T06:55:08+0000\",\n                \"vendor\": {\n                    \"id\": 1,\n                    \"name\": \"Vendor1\",\n                    \"created\": \"2016-09-10T06:55:08+0000\",\n                    \"modified\": \"2016-09-10T06:55:08+0000\",\n                    \"status\": true,\n                    \"deleted\": null,\n                    \"vendor_reward_types\": [\n                        {\n                            \"id\": 1,\n                            \"vendor_id\": 1,\n                            \"reward_method_id\": 1,\n                            \"created\": \"2016-09-10T06:55:08+0000\",\n                            \"modified\": \"2016-09-10T06:55:08+0000\",\n                            \"status\": true,\n                            \"reward_method\": {\n                                \"id\": 1,\n                                \"name\": \"wallet_credit\",\n                                \"label\": \"Wallet Credit\",\n                                \"status\": true,\n                                \"created\": \"2016-09-10T06:55:07+0000\",\n                                \"modified\": \"2016-09-10T06:55:07+0000\"\n                            }\n                        }\n                    ],\n                    \"vendor_contacts\": [\n                        {\n                            \"id\": 1,\n                            \"vendor_id\": 1,\n                            \"email\": \"vendor1@gmail.com\",\n                            \"phone\": \"1234567890\",\n                            \"is_primary\": true,\n                            \"created\": \"2016-09-10T06:55:08+0000\",\n                            \"modified\": \"2016-09-10T06:55:08+0000\"\n                        }\n                    ]\n                }\n            },\n            {\n                \"id\": 2,\n                \"reseller_id\": 1,\n                \"vendor_id\": 2,\n                \"status\": true,\n                \"created\": \"2016-09-10T06:55:08+0000\",\n                \"modified\": \"2016-09-10T06:55:08+0000\",\n                \"vendor\": {\n                    \"id\": 2,\n                    \"name\": \"Vendor2\",\n                    \"created\": \"2016-09-10T06:55:08+0000\",\n                    \"modified\": \"2016-09-10T06:55:08+0000\",\n                    \"status\": true,\n                    \"deleted\": null,\n                    \"vendor_reward_types\": [\n                        {\n                            \"id\": 2,\n                            \"vendor_id\": 2,\n                            \"reward_method_id\": 1,\n                            \"created\": \"2016-09-10T06:55:08+0000\",\n                            \"modified\": \"2016-09-10T06:55:08+0000\",\n                            \"status\": true,\n                            \"reward_method\": {\n                               \"id\": 1,\n                                \"name\": \"wallet_credit\",\n                                \"label\": \"Wallet Credit\",\n                                \"status\": true,\n                                \"created\": \"2016-09-10T06:55:07+0000\",\n                                \"modified\": \"2016-09-10T06:55:07+0000\"\n                            }\n                        }\n                    ],\n                    \"vendor_contacts\": [\n                        {\n                            \"id\": 2,\n                            \"vendor_id\": 2,\n                            \"email\": \"vendor2@gmail.com\",\n                            \"phone\": \"1234567890\",\n                            \"is_primary\": true,\n                            \"created\": \"2016-09-10T06:55:08+0000\",\n                            \"modified\": \"2016-09-10T06:55:08+0000\"\n                        }\n                    ]\n                }\n            }\n          ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/VendorsController.php",
    "groupTitle": "Vendors"
  },
  {
    "type": "get",
    "url": "/api/vendors/:id",
    "title": "View Vendor's Info",
    "version": "1.0.0",
    "name": "view",
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
          "content": "   HTTP/1.1 200 OK\n   {\n\"response\": {\n           \"status\": true,\n           \"data\": {\n               \"id\": 10,\n               \"name\": \"nitesh\",\n               \"created\": \"2016-08-10T09:58:29+0000\",\n               \"modified\": \"2016-08-10T09:58:29+0000\",\n               \"status\": true,\n               \"vendor_reward_types\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"reward_method_id\": 1,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\",\n                       \"status\": true,\n                       \"reward_method\": {\n                           \"id\": 1,\n                           \"name\": \"wallet_credit\",\n                           \"label\": \"Wallet Credit\",\n                           \"status\": true,\n                           \"created\": \"2016-08-10T06:11:13+0000\",\n                           \"modified\": \"2016-08-10T06:11:13+0000\"\n                       }\n                   }\n               ],\n               \"vendor_contacts\": [\n                   {\n                       \"id\": 4,\n                       \"vendor_id\": 10,\n                       \"email\": \"nitesh@gmail.com\",\n                       \"phone\": \"991110032449\",\n                       \"is_primary\": true,\n                       \"created\": \"2016-08-10T09:58:29+0000\",\n                       \"modified\": \"2016-08-10T09:58:29+0000\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/VendorsController.php",
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
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
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
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
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
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
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
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
    "groupTitle": "userCards"
  }
] });

define({ "api": [
  {
    "type": "post",
    "url": "/users/add",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorInRequest",
            "description": "<p>Invalid request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"success\":false,\n \"message\":\"Invalid Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/VendorsController.php",
    "groupTitle": "Vendors"
  },
  {
    "type": "post",
    "url": "/userCards/",
    "title": "Add New Card",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorInRequest",
            "description": "<p>Invalid request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"success\":false,\n \"message\":\"Invalid Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
    "groupTitle": "userCards"
  },
  {
    "type": "put",
    "url": "/userCards/id",
    "title": "update existing card",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorInRequest",
            "description": "<p>Invalid request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"success\":false,\n \"message\":\"Invalid Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
    "groupTitle": "userCards"
  },
  {
    "type": "GET",
    "url": "/userCards/",
    "title": "List User's Cards",
    "version": "1.0.0",
    "name": "index",
    "group": "usercards",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n  \"status\": true,\n  \"data\":\n  [\n  {\n  \"id\": 3,\n  \"user_id\": 2,\n  \"card_number\": \"110093\",\n  \"status\": true,\n  \"created\": \"2016-08-11T08:04:05+0000\",\n  \"modified\": \"2016-08-11T08:04:05+0000\"\n  },\n  {\n  \"id\": 4,\n  \"user_id\": 2,\n  \"card_number\": \"110094\",\n  \"status\": true,\n  \"created\": \"2016-08-11T08:04:13+0000\",\n  \"modified\": \"2016-08-11T08:04:13+0000\"\n  }\n  ]\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorInRequest",
            "description": "<p>Invalid request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"success\":false,\n \"message\":\"Invalid Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
    "groupTitle": "usercards"
  },
  {
    "type": "GET",
    "url": "/userCards/id",
    "title": "List User's Cards",
    "version": "1.0.0",
    "name": "view",
    "group": "usercards",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"response\":\n  {\n  \"status\": true,\n  \"data\":\n  [\n  {\n  \"id\": 3,\n  \"card_number\": \"110096\"\n  },\n  ]\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorInRequest",
            "description": "<p>Invalid request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"success\":false,\n \"message\":\"Invalid Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "peoplehub/src/Controller/Api/UserCardsController.php",
    "groupTitle": "usercards"
  }
] });

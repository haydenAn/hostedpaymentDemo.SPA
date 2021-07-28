var token = "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7ImNvbW1vbkp3dFBheWxvYWQiOnsiaWQiOiIxMjY3Nzc1MDMxMDIzMzA1NTI3MTMzMTciLCJkYXRlQ3JlYXRlZCI6MTYyNzQzNjEwNDk1NX0sIm1lcmNoYW50SWQiOjkxMzIwOSwic2VudHJ5Ijp7Im1lcmNoYW50IjpmYWxzZSwiYXBwcyI6W119fX0.JkIG37v6C2jslSluux7tQV5gRadw3_dTGaGGOCTAqlE._"

export const bsObj = {
  token: "@_token"
  , onFieldEventHandler: {
  /*OPTIONAL*/ setupComplete: function () {
      console.warn("setupComplete");
    },
  /*OPTIONAL*/ threeDsChallengeExecuted: function () {
      console.warn("threeDsChallengeExecuted");
    },
    // tagId returns: "ccn", "cvv", "exp"
    onFocus: function (tagId : any) { }, // Handle focus
    onBlur: function (tagId : any) { }, // Handle blur
    onError: function (tagId: any, errorCode:any /*, errorDescription*/) { }, // Handle a change in validation
    /*errorCode returns:
        "10" --> invalidCcNumber, invalidExpDate, invalidCvv Dependent on the tagId;
        "22013" --> "CC type is not supported by the merchant";
        "14040" --> " Token is expired";
        "14041" --> " Could not find token";
        "14042" --> " Token is not associated with a payment method, please verify your client integration or contact BlueSnap support";
        "400" --> "Session expired please refresh page to continue";
        "403", "404", "500" --> "Internal server error please try again later";
      */

    /* errorDescription is optional. Returns BlueSnap's standard error description */

    onType: function (tagId : any, cardType: any, cardData:any) {
      /* cardType will give card type, and only applies to ccn: AMEX, VISA, MASTERCARD, AMEX, DISCOVER, DINERS, JCB */
      if (null != cardData) {
        /* cardData is an optional parameter which will provide ccType, last4Digits, issuingCountry, isRegulatedCard, cardSubType, binCategory and ccBin details (only applies to ccn) in a JsonObject */
        console.log(cardData);
      }
    },
    onEnter: function (tagId : any) { }, // Will trigger when shopper presses enter while inside one of the inputs

    onValid: function (tagId :any) { } // Handle a change in validation
  },
  /* example:
      style: {
      "Selector": {
      "Property": "Value",
      "Property2": "Value2"
      },
      "Selector2": {
      "Property": "Value"
      }
    }, */
  style: {
    ":focus": {
      //style for all input elements on focus event
      color: "orange"
    },
    input: {
      //style for all input elements
      color: "blue"
    },
    ".invalid": {
      //style for all input elements when invalid
      color: "red"
    }
  },
  ccnPlaceHolder: "1234 5678 9012 3456", //for example
  cvvPlaceHolder: "123", //for example
  expPlaceHolder: "MM/YY", //for example
  };
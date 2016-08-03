var accountSid = '';
var authToken = '';
var LookupsClient = require('twilio').LookupsClient;
var client = new LookupsClient(accountSid, authToken);

var carriers = {
        "Accessyou": "mgw.mmsc1.hkcsl.com",
        "Accessyou-mms": "messaging.accessyou.com",
        "Alaska Communications": "msg.acsalaska.com",
        "Alltel": "sms.alltelwireless.com",
        "Alltel-mms": "mms.alltelwireless.com",
        "Ameritech": "paging.acswireless.com",
        "AT&T": "txt.att.net",
        "AT&T-mms": "mms.att.net",
        "BellSouth": "bellsouth.cl",
        "Bluegrass Cellular": "sms.bluecell.com",
        "Bluegrass Cellular-mms": "mms.myblueworks.com",
        "Boost Mobile": "myboostmobile.com",
        "Box": "sms.boxis.net",
        "Box-mms": "mms.boxis.net",
        "C Spire Wireless": "cspire1.com",
        "Cellcom": "cellcom.quiktxt.com",
        "Cellular One": "mobile.celloneusa.com",
        "Cellular South": "csouth1.com",
        "Chariton Valley Wireless": "sms.cvalley.net",
        "Cincinnati Bell": "gocbw.com",
        "Cincinnati Bell-mms": "mms.gocbw.com",
        "Cingular (GoPhone prepaid)": "cingulartext.com",
        "Cingular": "cingular.com",
        "Cleartalk": "sms.cleartalk.us",
        "Cricket": "sms.mycricket.com",
        "Cricket-mms": "mms.mycricket.com",
        "Edge Wireless": "sms.edgewireless.com",
        "Element Mobile": "SMS.elementmobile.net",
        "Esendex": "echoemail.net",
        "Google Voice": "txt.voice.google.com",
        "Kajeet": "mobile.kajeet.net",
        "LongLines": "text.longlines.com",
        "MetroPCS": "mymetropcs.com",
        "Nextel": "messaging.nextel.com",
        "O2": "mobile.celloneusa.com",
        "Orange": "mobile.celloneusa.com",
        "Pioneer Cellular": "zsend.com",
        "Qwest Wireless": "qwestmp.com",
        "Red Pocket Mobile": "txt.att.net",
        "Simple Mobile": "smtext.com",
        "South Central Communications": "rinasms.com",
        "Sprint": "messaging.sprintpcs.com",
        "Sprint-mms": "pm.sprint.com",
        "Straight Talk": "vtext.com",
        "Syringa Wireless": "rinasms.com",
        "T-Mobile": "tmomail.net",
        "Teleflip": "teleflip.com",
        "Telus": "msg.telus.com",
        "Telus-mms": "mms.telusmobility.com",
        "Unicel": "utext.com",
        "US Cellular": "email.uscc.net",
        "US Cellular-mms": "mms.uscc.net",
        "USA Mobility": "usamobility.net",
        "Verizon": "vtext.com",
        "Verizon-mms": "vzwpix.com",
        "Viaero": "viaerosms.com",
        "Viaero": "mmsviaero.com",
        "Virgin Mobile": "vmobl.com",
        "Virgin Mobile-mms": "vmpix.com",
        "Telus Communications Inc.": "msg.telus.ca",
        "Bell": "txt.bell.ca",
        "Bell Mobility": "txt.bellmobility.ca",
        "Koodo Mobile": "msg.koodomobile.ca",
        "Fido": "fido.ca",
        "Manitoba Telecom Systems": "text.mtsmobility.com",
        "NBTel": "wirefree.infome.ca",
        "PageNet": "pagegate.pagenet.ca",
        "Rogers": "pcs.rogers.com",
        "Sasktel": "sms.sasktel.com",
        "Virgin Mobile Canada": "vmobile.ca"
    }
    
// client.phoneNumbers('+15108675309').get({
// client.phoneNumbers('+12816065106').get({
client.phoneNumbers('+14157234000').get({
// client.phoneNumbers('+19176788106').get({

    type: 'carrier'

}, function (error, number) {

    if(number.carrier.type == 'mobile' || number.carrier.type == 'voip') {

        if (carriers[number.carrier.name]) {
    
            number.matchedCarrier = number.carrier.name;
            number.matchedDomain = carriers[number.carrier.name];
    
        }
        else {
    
            var pre = number.carrier.name.match(/^([a-z0-9.-]+)/i);
    
            for (var key in carriers) {
    
                if (key.match(pre[1])) {
    
                    number.matchedCarrier = key;
                    number.matchedDomain = carriers[key];
    
                    break;
    
                }
    
            }
    
        }
    
        // console.log(number);
        // console.log(number.carrier.type);
        // console.log(number.carrier.name);
        
        if(number.matchedCarrier) {
            
            console.log('Matched ' + number.phone_number + ' to carrier "' + number.matchedCarrier + '"');
            console.log('SMS Email: ' + number.phone_number + '@' + number.matchedDomain);
            
        } else {
            
            console.log(number.phone_number + ' is a mobile number but unable to match carrier..');
            console.log('Carrier Name: ' + number.carrier.name);
            console.log('Carrier Type: ' + number.carrier.type);
        }
        
    } else {
        
        console.log(number.phone_number + ' is not a mobile or voip number!');
        console.log('Carrier Name: ' + number.carrier.name);
        console.log('Carrier Type: ' + number.carrier.type);
        
    }

});
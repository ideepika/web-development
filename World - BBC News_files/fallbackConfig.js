define(["idcta/apiUtils"],function(a){return{register_url:"https://www"+a.getEnvFromUrl()+".bbc.co.uk/session?action=register&ptrt="+window.location.href,signin_url:"https://www"+a.getEnvFromUrl()+".bbc.co.uk/session?ptrt="+window.location.href,signout_url:"https://www"+a.getEnvFromUrl()+".bbc.com/signout?ptrt="+window.location.href,status_url:"https://www"+a.getEnvFromUrl()+".bbc.com/account?ptrt="+window.location.href,settings_url:"https://www"+a.getEnvFromUrl()+".bbc.com/account/settings?ptrt="+window.location.href,tokenRefresh_url:"https://www"+a.getEnvFromUrl()+".bbc.co.uk/session?ptrt=https%3A%2F%2Fwww"+a.getEnvFromUrl()+".bbc.co.uk%2Fsession%2Fannounce",tokenRefresh_signout_url:"https://www"+a.getEnvFromUrl()+".bbc.co.uk/session/signout?switchTld=true&ptrt=https%3A%2F%2Fwww"+a.getEnvFromUrl()+".bbc.co.uk%2Fsession%2Fannounce",announce_url:"https://www"+a.getEnvFromUrl()+".bbc.co.uk/session/announce",child_parent_linking_url:"https://www"+a.getEnvFromUrl()+".bbc.com/account/settings/linked-accounts",privacy_settings_url:"https://www"+a.getEnvFromUrl()+".bbc.com/account/settings/privacy","bbcid-idp-userinfo":"","bbcid-idp-thirdparty":"","bbcid-idp-nma":"","bbcid-v5":"GREEN",idapp:{version:null},idtranslations:{version:null},idpurl:"",identity:{cookieAgeDays:730,accessTokenCookieName:"ckns_atkn",idSignedInCookieName:"ckns_id",baseUrl:""},tokenRefresh:true,tokenImprovement:null,fallback:true}});
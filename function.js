window.function = function (linkedin, twitter, facebook, website, instagram, youtube, email, whatsapp, pinterest, tiktok, telegram, yelp, gbusiness, phone, message) {

  // Extract values or set default to empty string
  linkedin = linkedin.value ?? "";
  twitter = twitter.value ?? "";
  facebook = facebook.value ?? "";
  website = website.value ?? "";
  instagram = instagram.value ?? "";
  youtube = youtube.value ?? "";
  email = email.value ?? "";
  whatsapp = whatsapp.value ?? "";
  pinterest = pinterest.value ?? "";
  tiktok = tiktok.value ?? "";
  telegram = telegram.value ?? "";
  yelp = yelp.value ?? "";
  phone = phone.value ?? "";
  message = message.value ?? "";
  gbusiness = gbusiness.value ?? "";

  // Check if all values are empty
  if (phone == "" && message == "" && yelp == "" && telegram == "" && linkedin == "" && twitter == "" && facebook == "" && website == "" && instagram == "" && youtube == "" && email == "" && whatsapp == "" && pinterest == "" && tiktok == "" && gbusiness == "") {
    return "";
  }

  // Define base HTML structure with inline styles
  const createSocialLink = (type, value, imgSrc) => {
    let url;
    if (type === "email") {
      url = `mailto:${value}`;
    } else if (type === "phone") {
      url = `tel:${value}`;
    } else {
      url = value;
    }
    return `<div style="position: relative; display: inline-block; float: right; padding: 10px;"> 
              <a href="${url}" target="blank">
                <img src="${imgSrc}" style="width: 30px; height: 30px;">
              </a>
            </div>`;
  };

  // Image links for each social media
  const imgSources = {
    linkedin: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/YPtpsMvhgMpWz75UGhmO.png",
    twitter: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/HFE2Ht14I6Th9gP2u3Yo/pub/qTZG1onIiLuNL5NjQPpU.jpg",
    facebook: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/wLTNVGtLqXIpxp6071pC.png",
    website: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/AwbRCNrb6hjAR0t21DaF.png",
    instagram: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/4Tv9Xcfhk9RG45LagySl.png",
    youtube: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/cLvEnvaG13inhm1E5PFX.png",
    email: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/pbOlDrCcoqJUQSStog3U.png",
    whatsapp: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/ACcKtnFmkOOV7lsTHcV9/pub/tKpquLCJ9SpOEPWLuNV6.png",
    pinterest: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/aERzn549fzlrRK6IuaKk.png",
    tiktok: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/kADuVCdD7LsazzPaOiQv.png",
    telegram: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/UBQEtHCGAaUCK6SmkKKI.png",
    yelp: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/FEz2yDNF2weU0PhBn3wh.png",
    phone: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/HFE2Ht14I6Th9gP2u3Yo/pub/QJUjOz7xqY21VJqGyuCc.png",
    message: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/r21OIORoDpKuA16rTxqR.png",
    gbusiness: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/anr8AmdGaIFBByQWmF0N/pub/VIZNBTwLnx57xZiICwWS.png"
  };

  // Generate HTML for each social media link
  let socialHTML = "";
  for (const [key, value] of Object.entries({ linkedin, twitter, facebook, website, instagram, youtube, email, whatsapp, pinterest, tiktok, telegram, yelp, phone, message, gbusiness })) {
    if (value) {
      socialHTML += createSocialLink(key, value, imgSources[key]);
    }
  }

  // Final HTML structure
  return `<div style="display: flex; align-items: center; justify-content: center;">
            ${socialHTML}
          </div>`;
};

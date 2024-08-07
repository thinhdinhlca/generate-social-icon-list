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

  // Function to add https:// prefix if not present
  const addHttps = (url) => {
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      return 'https://' + url;
    }
    return url;
  };

  // Apply addHttps to relevant fields
  linkedin = addHttps(linkedin);
  twitter = addHttps(twitter);
  facebook = addHttps(facebook);
  website = addHttps(website);
  instagram = addHttps(instagram);
  youtube = addHttps(youtube);
  whatsapp = addHttps(whatsapp);
  pinterest = addHttps(pinterest);
  tiktok = addHttps(tiktok);
  telegram = addHttps(telegram);
  yelp = addHttps(yelp);
  gbusiness = addHttps(gbusiness);

  // Check if all values are empty
  if (phone == "" && message == "" && yelp == "" && telegram == "" && linkedin == "" && twitter == "" && facebook == "" && website == "" && instagram == "" && youtube == "" && email == "" && whatsapp == "" && pinterest == "" && tiktok == "" && gbusiness == "") {
    return "";
  }

  // Define base HTML structure with inline styles
  const createSocialLink = (type, value, imgSrc) => {
    let url;
    switch (type) {
      case "email":
        url = `mailto:${value}`;
        break;
      case "phone":
        url = `tel:${value}`;
        break;
      case "text":
        url = `sms:${value}`; // SMS link for texting
        break;
      default:
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
    email: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/HFE2Ht14I6Th9gP2u3Yo/pub/4upChBkMG7MEH7Hvihnt.png",
    whatsapp: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/ACcKtnFmkOOV7lsTHcV9/pub/tKpquLCJ9SpOEPWLuNV6.png",
    pinterest: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/aERzn549fzlrRK6IuaKk.png",
    tiktok: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/kADuVCdD7LsazzPaOiQv.png",
    telegram: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/UBQEtHCGAaUCK6SmkKKI.png",
    yelp: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/FEz2yDNF2weU0PhBn3wh.png",
    phone: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/HFE2Ht14I6Th9gP2u3Yo/pub/UvFxfpEjrGVErHZz4hZr.png",
    message: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/r21OIORoDpKuA16rTxqR.png",
    gbusiness: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/anr8AmdGaIFBByQWmF0N/pub/VIZNBTwLnx57xZiICwWS.png",
    text: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/HFE2Ht14I6Th9gP2u3Yo/pub/85GKPtiVc5MDFkTI7OGm.png"
  };

  // Generate HTML for each social media link
  let socialHTML = "";
  for (const [key, value] of Object.entries({ linkedin, twitter, facebook, website, instagram, youtube, email, whatsapp, pinterest, tiktok, telegram, yelp, phone, message, gbusiness })) {
    if (value) {
      socialHTML += createSocialLink(key, value, imgSources[key]);
    }
  }

  // Add the texting link if there is a phone number
  if (phone) {
    socialHTML += createSocialLink("text", phone, imgSources["text"]);
  }

  // Final HTML structure
  return `<div style="display: flex; align-items: center; justify-content: center;">
            ${socialHTML}
          </div>`;
};

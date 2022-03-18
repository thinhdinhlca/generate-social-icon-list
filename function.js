window.function = function (linkedin, twitter, facebook, website, instagram, youtube, email) {

  linkedin = linkedin.value ?? "";
  twitter = twitter.value ?? "";
  facebook = facebook.value ?? "";
  website = website.value ?? "";
  instagram = instagram.value ?? "";
  youtube = youtube.value ?? "";
  email = email.value ?? "";

  if (linkedin == "" && twitter == "" && facebook == "" && website == "" && instagram == "" && youtube == "" && email == "") {
    return "";
  }

  else {

  let li_HTML = "";
  let tw_HTML = "";
  let fb_HTML = "";
  let wb_HTML = "";
  let in_HTML = "";
  let yt_HTML = "";
  let em_HTML = "";

  let li_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/YPtpsMvhgMpWz75UGhmO.png";
  let tw_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/mAWXwE6VcIS5Qf7eiV88.png";
  let fb_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/wLTNVGtLqXIpxp6071pC.png";
  let wb_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Mr755ISwcRYn8zBd2L3z/pub/AwbRCNrb6hjAR0t21DaF.png";
  let in_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/4Tv9Xcfhk9RG45LagySl.png";
  let yt_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/cLvEnvaG13inhm1E5PFX.png";
  let em_img = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/kGe07Qg5m2NzxUKiptUf/pub/pbOlDrCcoqJUQSStog3U.png";
  
if (linkedin != "") {
    li_HTML = `<div class = "social-column"> \n \n <a href="${linkedin}" target="blank"><img src="${li_img}" width= "30" height = "30" ></a></div>`;
  }

  if (twitter != "") {
    tw_HTML = `<div class = "social-column"> \n \n <a href="${twitter}" target="blank"><img src="${tw_img}" width= "30" height = "30" ></a></div>`;
  }

  if (facebook != "") {
    fb_HTML = `<div class = "social-column"> \n \n <a href="${facebook}" target="blank"><img src="${fb_img}" width= "30" height = "30" ></a></div>`;
  }

   if (website != "") {
    wb_HTML = `<div class = "social-column"> \n \n <a href="${website}" target="blank"><img src="${wb_img}" width= "30" height = "30" ></a></div>`;
  } 

  if (instagram != "") {
    in_HTML = `<div class = "social-column"> \n \n <a href="${instagram}" target="blank"><img src="${in_img}" width= "30" height = "30" ></a></div>`;
  }
    
  if (youtube != "") {
    yt_HTML = `<div class = "social-column"> \n \n <a href="${youtube}" target="blank"><img src="${yt_img}" width= "30" height = "30" ></a></div>`;
  }


  if (email != "") {
    em_HTML = `<div class = "social-column"> \n \n <a href="mailto:${email}" target="blank"><img src="${em_img}" width= "30" height = "30" ></a></div>`;
  }
  
  let social_joined = [li_HTML, tw_HTML, fb_HTML, wb_HTML, in_HTML, yt_HTML, em_HTML].filter(Boolean).join("\n \n ");

  let final = `<div class="social-row">
  \n \n ${social_joined}
  \n \n <pre><span><style>
  \n \n .social-column {
  \n   position: relative;
  \n display: inline-block;
  \n float: right;
  \n padding: 10px;
\n }

\n \n .social-column img {
  \n width: 30px !important;
  \n height: 30px !important;
\n }

\n \n .social-row {
\n display: flex;
\n align-items: center;
\n justify-content: center;
\n }`;

  return final;
}
}

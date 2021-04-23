// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  let followers = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
  ).innerText;

  let following = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-1dbjc4n.r-vrmyzg > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
  ).innerText;

  if (followers && following) {
    followers = followers.replace(/,/g, "");
    following = following.replace(/,/g, "");

    arr.push(followers);
    arr.push(following);
    console.log(arr);

    // let diff = (a, b) => {
    //   return Math.abs(a - b);
    // };
    // console.log(`the difference is ${diff(followers, following)}`);

    if (following / followers < 3) {
      const percentage = ((following * 100) / followers).toFixed(2);
      console.log(percentage);
      alert(
        `Hey! This Person is only following ${percentage}% of the people that follow them. Be aware before reading their tweets`
      );
    } else {
      alert(`This Person is cool to follow`);
    }
  }
}

let arr = [];
window.onload = () => {
  console.log("This Script is running");

  setTimeout(function () {
    let followers = document.querySelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
    ).innerText;

    let following = document.querySelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-1dbjc4n.r-vrmyzg > a > span.css-901oao.css-16my406.r-1fmj7o5.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span"
    ).innerText;

    if (followers && following) {
      followers = followers.replace(/,/g, ""); // 1,234 becomes 1234
      following = following.replace(/,/g, "");

      arr.push(followers);
      arr.push(following);
      console.log(arr);

      // let diff = (a, b) => {
      //   return Math.abs(a - b);
      // };
      // console.log(`the difference is ${diff(followers, following)}`);

      if (following / followers < 3) {
        const percentage = ((following * 100) / followers).toFixed(2);
        console.log(percentage);
        // alert(
        //   `Hey! This Person is only following ${percentage}% of the people that follow them. Be aware before reading their tweets`
        // );
        var x = document.getElementsByTagName("BODY")[0];
        let modal = document.createElement("div");
        let text = document.createElement("h4");
        text.innerHTML = `Hey! This Person is only following ${percentage}% of the people that follow them. Be aware before reading their tweets`;
        modal.appendChild(text);
        console.log(modal);
        modal.style.background = "white";
        modal.style.position = "fixed";
        modal.style.bottom = "0";
        modal.style.left = "0";
        modal.style.color = "red";
        modal.style.width = "100%";
        modal.style.padding = "1rem";
        modal.style.fontFamily = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;
        x.appendChild(modal);
      } else {
        // alert(`This Person is cool to follow`);
        var x = document.getElementsByTagName("BODY")[0];
        let modal = document.createElement("div");
        let text = document.createElement("h4");
        text.innerHTML = `This Person is cool to follow`;
        modal.appendChild(text);
        console.log(modal);
        modal.style.background = "white";
        modal.style.position = "fixed";
        modal.style.bottom = "0";
        modal.style.left = "0";
        modal.style.color = "blue";
        modal.style.width = "100%";
        modal.style.padding = "1rem";
        modal.style.fontFamily = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;
        x.appendChild(modal);
      }
    }
  }, 3000);
};

// setTimeout(function () {
//   const follower = document.querySelector(
//     "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2)"
//   );

//   console.log(follower);
//   if (follower != null) {
//     follower.style.display = "none";
//   }
// }, 3000);

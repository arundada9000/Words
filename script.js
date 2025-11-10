/*
 💖 Propose Your Crush 💖
 Created by: Arun Neupane
 GitHub: https://github.com/arundada9000
 YouTube: https://youtube.com/@arundada9000
 Instagram: https://instagram.com/arundada9000
 Instagram: https://facebook.com/arundada9000
 Project Date: 2025 November 10

 Description:
 A fun and romantic webpage that lets you propose your crush in a creative, animated way.
 Click the words to form a throbbing heart with music and animation.

 ⚠️ Copyright Notice:
 This project is made for educational and personal use only.
 You are free to use or modify the code, but do not reuse my images, music, or personal assets without permission.

 Made with ❤️ and a bit of courage 😅
*/

function check() {
  if (
    document.forms[0].elements[0].checked == true &&
    document.forms[0].elements[1].checked == true &&
    document.forms[0].elements[2].checked == true
  ) {
    if (!document.querySelector(".wrapper").classList.contains("throb")) {
      document.querySelector(".wrapper").classList.add("throb");
      document.querySelector("audio").play();
      document.getElementById("instruction").style.display = "none";
      document.body.style.background =
        " linear-gradient(to right, #f9a8d4, #f3c6c1, #c4d9e6)";
    }
  } else {
    if (document.querySelector(".wrapper").classList.contains("throb")) {
      document.querySelector(".wrapper").classList.remove("throb");
      document.querySelector("audio").pause();
    }
  }
}

/*
 💖 Propose Your Crush 💖
 Created by: Arun Neupane
 GitHub: https://github.com/arundada9000
 YouTube: https://youtube.com/@arundada9000
 Instagram: https://instagram.com/arundada9000
 Instagram: https://facebook.com/arundada9000
 Project Date: 2025 November 10

 Description:
 A fun and romantic webpage that lets you propose your crush in a creative, animated way.
 Click the words to form a throbbing heart with music and animation.

 ⚠️ Copyright Notice:
 This project is made for educational and personal use only.
 You are free to use or modify the code, but do not reuse my images, music, or personal assets without permission.

 Made with ❤️ and a bit of courage 😅
*/

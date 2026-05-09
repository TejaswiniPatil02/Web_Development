
// Username Generator
function createUsername() {

    let name = document.getElementById("name").value;

    // trim()
    name = name.trim();

    // toLowerCase()
    name = name.toLowerCase();

    // replace()
    name = name.replaceAll(" ", "");

    let username = "@" + name;

    document.getElementById("username").innerHTML =
        username;
}






// Hashtag Generator
function createHashtag() {

    let post = document.getElementById("post").value;

    post = post.trim();

    let hashtag = "#" + post.replaceAll(" ", "");

    document.getElementById("hashtag").innerHTML =
        hashtag;
}







// Banking Mask
function maskAccount() {

    let acc = document.getElementById("account").value;

    acc = acc.trim();

    // slice()
    let last4 = acc.slice(-4);

    let masked = "XXXXXX" + last4;

    document.getElementById("masked").innerHTML =
        masked;
}
`
nav
Αναζήτηση Εορτολογίου ανά Μήνα
footer
Περισσότερες Επιλογές Αναζήτησης
col-sm-4 about-us-text wow fadeInRight animated

https://www.greeknamedays.gr/eortologio_by_month.php?action=search&cmonth=12

`

// window.location.replace(
//     "https://www.greeknamedays.gr/eortologio_by_month.php?action=search&cmonth=1"
// );
setTimeout(deleteThings, 5000);

// my functions 

function doNothing() {
    //
}

function deleteThings() {
    console.log("beginning of deletion");
    document.body.style.opacity = 0.5;

    // delete Περισσότερες Επιλογές Αναζήτησης
    let baseElmnt = document.getElementsByClassName("col-sm-8 contact-form wow fadeInLeft animated")[0];
    for (let child = 33; child >= 21; child--) {
        baseElmnt.childNodes[child].remove();
    }

    // delete footer
    document.getElementsByTagName("footer")[0].remove();

    // delete right aside
    // YOU MUST BE AT THE TOP OF THE DOCUMENT
    let rightAside = document.getElementsByClassName("col-sm-4 about-us-text wow fadeInRight animated")[0];
    rightAside.remove();

    // delete nav and Αναζήτηση Εορτολογίου ανά Μήνα κλπ
    // reverse order CAUTION
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].nextElementSibling.remove();
    document.getElementsByTagName("nav")[0].nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[0].remove();

    document.getElementsByTagName("nav")[0].nextElementSibling.remove();

    document.getElementsByTagName("nav")[0].remove();

    document.body.style.opacity = 1;
    console.log("deletion finished");
    window.print();
    //setTimeout(doNothing, 1000);

    let nextMonth = 1;
    if(nextMonth === 1 || nextMonth === 2){
        if(+ window.location.href.charAt(window.location.href.length-2) === 1) {
            nextMonth = + (window.location.href.charAt(window.location.href.length-2) + window.location.href.charAt(window.location.href.length-1)) + 1;
        } else {
            nextMonth = + window.location.href.charAt(window.location.href.length-1) + 1;
        }
    }
    let tempUrl = `https://www.greeknamedays.gr/eortologio_by_month.php?action=search&cmonth=${nextMonth}`;
    window.location.replace(
        tempUrl
    );

    //setTimeout(deleteThings, 5000);
}

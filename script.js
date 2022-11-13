function say() {
    let abox = [];
    let bbox = [];
    let cbox = [];
    let dbox = [];
    let nb = document.getElementById("namebox").value;
    let mb = document.getElementById("mailbox").value;
    let numb = document.getElementById("numbox").value;
    let fb = document.getElementById("feedbox").value;
    if (nb == "" || mb == "" || numb == "" || fb == "") {
        alert("Please enter your Details completely to submit");
    }
    else {
        abox.push(nb);
        bbox.push(mb);
        cbox.push(numb);
        dbox.push(fb);
        alert(` Your Feedback :\n Name: ${abox},\n Email: ${bbox},\n Mobile: ${cbox},\n Feedback: ${dbox}.\n is Submitted`);
        document.getElementById("feed").innerHTML = ` Your Feedback :   Name: ${abox}\t,   Email: ${bbox}\t,   Mobile: ${cbox}\t,   Feedback: ${dbox}\t. is Submitted` ;
    }
}


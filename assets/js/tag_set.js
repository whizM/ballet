//https://www.101computing.net/creating-tabs-in-html-css-js/

function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById('tab1Content').style.display = "none";
    document.getElementById('tab2Content').style.display = "none";
    document.getElementById('tab3Content').style.display = "none";

    //Show the Selected Tab
    document.getElementById('tab' + tabIndex + 'Content').style.display = "block";
}
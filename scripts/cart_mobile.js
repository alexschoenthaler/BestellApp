/** Open the Dialog*/
function opendialog(ID) {
    const refdialog = document.getElementById(ID);
    refdialog.showModal();     
}

/**Close the Dialog*/
function closedialog(ID) {
    const refdialog = document.getElementById(ID);
    setTimeout(()=>{                    
    refdialog.close();
    },200)     
}
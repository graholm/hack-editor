var buutton = $("#btn btn-primary")


buutton.click(function() {
  
  console.log ("go")
  var editor = $(parent.document.body)
  editor.find("#project-files-header").css({color: "pink"})
  var topbar = $(parent.parent.document.body).find("#topbar")
  topbar.css({background: "pink"})
  editor.find("div").css({border:"1px solid pink"});
  
})

// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked
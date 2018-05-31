function addClickLinkEvent() {
  $("#tgamLinkButton").click(function(){
    var url = "http://archives.theglobeandmail.com/servlet/HTMLTemplate?tf=QAD/search.html";
    window.open(url, '_blank');
  });
  $("#tgamstyleLinkButton").click(function(){
    var url = "http://stylebook.colo.theglobeandmail.com";
    window.open(url, '_blank');
  });
}

$(document).ready(function(){
  addClickLinkEvent();
});

function sticky(){
  var tracker = document.querySelector('.sticky-tracker');
  var stickyContent = document.querySelector('.sticky-content');
  document.addEventListener('scroll', function(){
    var bottom = tracker.getBoundingClientRect().bottom;
    console.log(bottom);
    if(bottom <= 0) {
      stickyContent.classList.add('sticky-video')
    }else {
      stickyContent.classList.remove('sticky-video')
    }
  });
}

function timeStamps(){
  var timeStamp = document.querySelectorAll('.time-stamp');
  for(var i = 0; i < timeStamp.length; i++) {
    console.log(timeStamp[i].innerHTML);
    var rawDate = timeStamp[i].innerHTML;
    var format = moment().format(rawDate);
    var now = moment();
    var diff = moment().diff(format, 'days');
    timeStamp[i].innerHTML = diff + ' days ago';
    console.log(diff);
  }
}

function init(){
  sticky();
  timeStamps();
}
init();

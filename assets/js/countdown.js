function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock(){
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
  }

  var deadline = 'September 5 2021 00:00:00 UTC';
  initializeClock('countdown', deadline);


  // --------------------------- //

  function getTimeRemaining2(endtime2){
    var t2 = Date.parse(endtime2) - Date.parse(new Date());
    var seconds2 = Math.floor( (t2/1000) % 60 );
    var minutes2 = Math.floor( (t2/1000/60) % 60 );
    var hours2 = Math.floor( (t2/(1000*60*60)) % 24 );
    var days2 = Math.floor( t2/(1000*60*60*24) );
    return {
      'total2': t2,
      'days2': days2,
      'hours2': hours2,
      'minutes2': minutes2,
      'seconds2': seconds2
    };
  }
  
  function initializeClock2(id2, endtime2){
    var clock2 = document.getElementById(id2);
    var daysSpan2 = clock2.querySelector('.days2');
    var hoursSpan2 = clock2.querySelector('.hours2');
    var minutesSpan2 = clock2.querySelector('.minutes2');
    var secondsSpan2 = clock2.querySelector('.seconds2');
  
    function updateClock2(){
      var t2 = getTimeRemaining2(endtime2);
      daysSpan2.innerHTML = t2.days2;
      hoursSpan2.innerHTML = ('0' + t2.hours2).slice(-2);
      minutesSpan2.innerHTML = ('0' + t2.minutes2).slice(-2);
      secondsSpan2.innerHTML = ('0' + t2.seconds2).slice(-2);
  
      if(t2.total<=0){
        clearInterval(timeinterval2);
      }
    }
  
    updateClock2();
    var timeinterval2 = setInterval(updateClock2,1000);
  }

  var deadline2 = 'September 5 2021 00:00:00 UTC';
  initializeClock2('countdown2', deadline2);

  // -------------------------- //

  function getTimeRemaining3(endtime3){
    var t3 = Date.parse(endtime3) - Date.parse(new Date());
    var seconds3 = Math.floor( (t3/1000) % 60 );
    var minutes3 = Math.floor( (t3/1000/60) % 60 );
    var hours3 = Math.floor( (t3/(1000*60*60)) % 24 );
    var days3 = Math.floor( t3/(1000*60*60*24) );
    return {
      'total3': t3,
      'days3': days3,
      'hours3': hours3,
      'minutes3': minutes3,
      'seconds3': seconds3
    };
  }
  
  function initializeClock3(id3, endtime3){
    var clock3 = document.getElementById(id3);
    var daysSpan3 = clock3.querySelector('.days3');
    var hoursSpan3 = clock3.querySelector('.hours3');
    var minutesSpan3 = clock3.querySelector('.minutes3');
    var secondsSpan3 = clock3.querySelector('.seconds3');
  
    function updateClock3(){
      var t3 = getTimeRemaining3(endtime3);
      daysSpan3.innerHTML = t3.days3;
      hoursSpan3.innerHTML = ('0' + t3.hours3).slice(-2);
      minutesSpan3.innerHTML = ('0' + t3.minutes3).slice(-2);
      secondsSpan3.innerHTML = ('0' + t3.seconds3).slice(-2);
  
      if(t3.total<=0){
        clearInterval(timeinterval3);
      }
    }
  
    updateClock3();
    var timeinterval3 = setInterval(updateClock3,1000);
  }

  var deadline3 = 'May 10 2021 00:00:00 UTC';
  initializeClock3('countdown3', deadline3);
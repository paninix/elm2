export default {
    scrollAnimation: function({leader, target, speed, step}) {
        var timer = setInterval(()=>{
          leader = leader + (target - leader) / step;
          window.scrollTo(0, leader);
          if(Math.abs(target-leader) < 1) {
            window.scrollTo(0, target);
            clearInterval(timer)
          }
        },speed);
    }
}
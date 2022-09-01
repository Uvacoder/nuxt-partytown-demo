export default ({ app: { head } }) => {
  head.script.push({
    // type: 'text/partytown',
    innerHTML: `
        (function(){
          var counter = 0;
          var done = Date.now() + 500;
          console.log('%c[Custom][ ' + new Date().toUTCString() + ' ] Start loading big file...',"color: #11b556; font-size: 20px" )
          while (Date.now() < done) {
              // Busy wait....
          }
          ++counter;
          console.log('%c[Custom][ ' + new Date().toUTCString() + ' ] File loaded!',"color: #11b556; font-size: 20px" )
        })();
      `,
  })
}

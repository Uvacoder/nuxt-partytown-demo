export default ({ app: { head } }) => {
  head.script.push({
    // type: 'text/partytown',
    innerHTML: `
        (function(){
          for (let index = 0; index < 30000; index++) {
            console.log('Loading slow script....');
          }
          console.log('Script loaded!');
        })();
      `,
  })
}

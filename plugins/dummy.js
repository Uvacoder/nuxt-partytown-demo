export default ({ app: { head } }) => {
  head.script.push({
    innerHTML: `
        (function(){
          setTimeout(() => {
            console.log('I am very sloww functin')
          }, 4000);
        })();
      `,
  })
}

// const setInterval20 = setInterval(()=> {
// console.log(i++)
// if(i > 20) {
//   clearInterval(setInterval20)
// }
// },100);

// function countTimeout() {
//   let i = 0;
//   function callback() {
//     console.log(i++);
//     if (i < 20) {
//       console.log(i++);
//       setTimeout(callback, 5000);
//     }
//   }
//  setTimeout(callback, 1000);
// }
fetch('https://jsonplaceholder.typicode.com/comments')
  .then((responce) => responce.json())
  .then((comments) => comments.filter((phone) => phone.id <= 50)).then((comments) => console.table(comments))
  .catch((err) => console.log(err));

const nums = [1,2,3,6,5,4,7,8,9];

const numg4 = nums.filter( (n) => (n > 4));
// console.log(numg4);

//it can return values

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let user = books.filter( (bk) => (bk.edition > 2000));
//   console.log(user);

  const newNum = nums.map( (n) => (n*10) ).map( (n) => (n+1)).filter( (n) => (n >= 31));
//   console.log(newNum);


  // REDUCE

  const totalSum = nums.reduce( (acc, currVal) => (acc + currVal), 0)

  console.log(totalSum);
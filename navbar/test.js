const getUser = (id) => {
  const nama = id === 1 ? 'Aroyan' : 'Bakti';
  return { id, nama };
};
const userSatu = getUser(1);
console.log(userSatu);

const userDua = getUser(2);
console.log(userDua);

console.log('Hiii');

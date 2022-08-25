/** 

There is an array, each item has such format:
(firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: 'xxx')
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have 'student', 'freelancer', 'productowner',
'engineer' or 'systemAnalytics'.
*/
function sortUserName(user) {
  let type = String(arguments[1]).toLowerCase() ===  'desc'  ?  'desc'  :  'asc';
  if (Array.isArray(user)) {
    user.sort(function(a, b) {
          let firstLength = Math.max(a.firstName.length, b.firstName.length),
              lastLength = Math.max((a.lastName ||  '').length, (b.lastName ||  '').length),
              idLength =  Math.max(a.customerID.length, b.customerID.length),
              aStr,
              bStr
          aStr = a.firstName.padEnd(firstLength, ' ') + (a.lastName ||  '').padEnd(lastLength, ' ') + (a.customerID ||  '').padEnd(idLength, ' '),
          bStr = b.firstName.padEnd(firstLength, ' ') + (b.lastName ||  '').padEnd(lastLength, ' ') + (b.customerID ||  '').padEnd(idLength, ' ');
          return type ===  'asc'  ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
        });
  }
}
/**
Q2. Please sort by ‘profession’ to follow the principle. (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
 */
function sortByType(user) {
  let type = String(arguments[1]).toLowerCase() ===  'desc'  ?  'desc'  :  'asc';
  let sortObj = {
          'systemAnalytics': 0,
          'engineer': 1,
          'productOwner': 2,
          'freelancer': 3,
          'student': 4
        };
        if (Array.isArray(user)) {
          let filterUser =user.sort(function(a, b) {
              let aNum = sortObj[a.profession],
                  bNum = sortObj[b.profession];
              return type ===  'asc'  ? aNum - bNum : bNum - aNum;
          });
          return filterUser
      } 
}
var mergeTwoLists = function(list1, list2) {
  const merged=list1.concat(list2)
  return merged.sort((a,b) =>a-b);
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));
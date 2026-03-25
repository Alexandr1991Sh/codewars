const mergeTwoLists = function (list1, list2) {
    if (!Array.isArray(list1)) return list1 = []
    if (!Array.isArray(list2)) return list2 = []
    return [...list1, ...list2].sort((a, b) => a - b)
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))    // [1,1,2,3,4,4]
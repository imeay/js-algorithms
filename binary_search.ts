/**
 * 二分查找
 * 该方法在编译阶段限定了只能是数字，其他类型会编译报错
 * @param list 数组
 * @param item 需要检查的值
 * @return { count: number, pos: number/null }
 */
const binary_search: <T>(list: T[], item: T) => { count: number, pos?: number } = function (list, item) {
  let low = 0;
  let high = list.length;
  let count = 0;
  while (low <= high) {
    count++;
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess == item) {
      return {count, pos: mid};
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return {count, pos: null};
};

const result = binary_search<number>([1, 2, 3, 4, 5, 6, 7, 8], 9);
console.log("binary_search_result:", result);
const graph:{[key:string]:string[]} = {};
graph['xiaochi'] = ['m', 'n'];
graph['m'] = ['m1', 'm2', 'm3'];
graph['n'] = ['n1', 'n2', 'n3'];
graph['m1'] = ['o'];
graph['n2'] = ['n3'];
graph['n3'] = ['o'];

/**
 * 广度优先搜索
 * 基于js数组的队列特性实现
 * @param name 起始值
 * @param target 目标值
 * @return 返回搜索结果
 */
const bfs:(name: string, target:string) => boolean = function (name, target) {
  let searched:string[] = [];
  let search_queue = graph[name] || [];
  while (search_queue.length > 0) {
    const p = search_queue.pop();
    if (searched.indexOf(p) == -1) {
      if (p == target) {
        return true;
      } else {
        search_queue = search_queue.concat(graph[p]);
        searched.push(p);
      }
    }
  }
  return false;
};

const bfs_result = bfs('xiaochi', 'o');
console.log(bfs_result); // true

const bfs_result_2 = bfs('xiaochi', 'x');
console.log(bfs_result_2); // false

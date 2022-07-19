const json = {
  a: { b: { c: 1 } },
  d: [1, 2],
};

const dfs = (node,path) =>{
  console.log(node,path);
  Object.keys(node).forEach(key=>{
    dfs(node[key],path.concat(key))
  })
}

dfs(json,[])
// 双指针维护滑动窗口

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let res = 0
    const map =new Map()
    for(let right = 0; right < s.length; right++){
        // map.get(s[right]) >= left
        // 字典里面有 && 在left的右侧
        if(map.has(s[right]) && map.get(s[right]) >= left){
          left = map.get(s[right]) + 1
        }
        res = Math.max(res, right-left+1);
        map.set(s[right], right)
    }
    return res
};

// 时间复杂度O(n)
// 空间复杂度O(m)

// 测试用例

// 'abba'
// 'abbcdefa'
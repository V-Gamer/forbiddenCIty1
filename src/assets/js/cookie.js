// 设置cookie的方法
export function setCookie(name,value,expire) {
  // 声明时间
  var date=new Date()
  date.setSeconds(date.getSeconds()+expire)
  // 设置cookie保存的名字
  document.cookie=name+ "="+escape(value)+"; expires="+date.toGMTString()
  console.log(document.cookie)
}

// 获取cookie
export function getCookie(name){
  // 若cookie的数量大于0
  if (document.cookie.length>0){
      // 在cookie下查找我们要查找的cookie名
      let begin=document.cookie.indexOf(name + "=")
      // 若查找到了该cookie名
      if (begin!=-1){ 
        // 则c_strat等于其本身加查询的cookie的名字再加1
          begin=begin + name.length+1 
          // 从c_start开始查找
          let end=document.cookie.indexOf(";",begin)
          if (end==-1) end=document.cookie.length
              return unescape(document.cookie.substring(begin,end))
          } 
      }
  return ""
}

// 删除cookie
export function delCookie(name){
  setCookie(name, "", -1)
}
export function debounce(func,time=200){

  let timer;

  return (...args)=>{
    timer&&clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
      timer = null;
    }, time);
  }

}

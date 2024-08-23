export function generate(){
    const subset = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let ans = "";
    for(let i = 0 ; i < 5 ; i++){
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}
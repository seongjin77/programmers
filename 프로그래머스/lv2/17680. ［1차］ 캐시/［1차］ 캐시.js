function solution(cacheSize, cities) {
    var answer = 0;
    const cache = new Set();
    
    cities.forEach(i => {
        const city = i.toUpperCase();
        
        if(cache.has(city)){
            answer++
            cache.delete(city)
            cache.add(city)
        }
        else{
            answer += 5
            cache.add(city)
            if(cacheSize < cache.size){
                cache.delete(cache.values().next().value)
            }
        }
    })
    
    
    
    return answer;
}
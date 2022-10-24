function solution (id_pw, db) {
    let result ='fail';
    db.map(data => {
        let checkedId = id_pw[0] === data[0]
        let checkedPw = id_pw[1] === data[1]
       if(checkedId && checkedPw) {
            result = 'login'
       } else if (checkedId && !checkedPw) {
           result = 'wrong pw'
       }
    })
    return result
}

function solution(id_pw, db) {
    const [ userId, userPw ] = id_pw;
    for (const [ dbId, dbPw ] of db) {
        if (userId === dbId && userPw === dbPw) return "login";
        else if (userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}
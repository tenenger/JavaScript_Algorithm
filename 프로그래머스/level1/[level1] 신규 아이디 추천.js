function solution(new_id) {
    let answer = '';
    const speicalRegex = /[^0-9a-z-._]/g;
    const succesivedotsRegex = /\.{2,}/g;
    const firstLastDotRegex = /^\.|\.$/g;
    
    
    answer = new_id.toLowerCase();
    
    answer = answer.replace(speicalRegex, '')
    
    answer = answer.replace(succesivedotsRegex, '.')
    
    answer = answer.replace(firstLastDotRegex, '')
    
    answer.length === 0 ? answer += 'a' : ''
    
    answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
    
    answer = answer.replace(firstLastDotRegex, '');
    
    answer = answer.length <= 2 ? answer + answer[answer.length - 1].repeat(3-answer.length) : answer
    
    return answer;
}
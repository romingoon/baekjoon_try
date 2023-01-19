class Solution {
    boolean solution(String s) {
        
        int p = 0;
        int y = 0;
        s = s.toLowerCase();
        boolean answer = true;
        
        for(int i = 0; i < s.length(); i+=1){
            char c = s.charAt(i);
            if(c == 'p'){
                p++;
            }else if(c == 'y'){
                y++;
            }
        }
        answer = p == y ? true : false;
        return answer;
    }
}
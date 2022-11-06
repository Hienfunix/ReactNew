    //Lấy giá trị key từ Local Storage khi loading lại trang web
    export const getKeyLocalStore=(key,initialValue,message,action1,action2,action3) => {
        if(!localStorage.hasOwnProperty(key)){ //Nếu người dùng chưa có key Local Storage thì tạo key 
            localStorage.setItem(key,initialValue);
            return action2
        } 
        if(localStorage.key===''){ //nếu người dùng đã có key nhưng chưa có dữ liệu thì thông báo trên console.log
            console.log(message)
            return action3
        } 
        else {return action1}; //nếu có dữ liệu rồi thì thực thi lệnh
    }
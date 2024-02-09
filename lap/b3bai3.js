function kt(){
    while(true){
        var sotrungthuong = Math.floor(Math.random() * 2);
        var doan = prompt("Hãy Đoán Xem");
        if(parseInt(sotrungthuong)==doan){
            alert("Đã Trúng Thưởng");
            break
    } else{
        alert("Yêu cầu nhập lại");
    }
    }
    }
    kt()
    document.write(sotrungthuong);

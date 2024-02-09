// Lấy các phần tử cần thiết từ DOM
var menuTitle = document.getElementById("menuTitle");
var menuList = document.getElementById("menuList");

// Thêm sự kiện "click" cho tiêu đề menu
menuTitle.addEventListener("click", function() {
    // Toggle hiển thị của danh sách menu
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
});
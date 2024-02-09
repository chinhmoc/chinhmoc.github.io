function validateForm() {
    var ho = document.getElementById('ho').value;
    var ten = document.getElementById('ten').value;
    var soDienThoai = document.getElementById('soDienThoai').value;

    if (ho === '' || ten === '' || soDienThoai === '') {
        alert('Vui lòng điền đầy đủ thông tin Họ, Tên và Số điện thoại.');
        return false;
    }

    // Kiểm tra số điện thoại có 10 chữ số
    if (soDienThoai.length !== 10 || isNaN(soDienThoai)) {
        alert('Số điện thoại không hợp lệ.');
        return false;
    }

    return true; 
}
</script>
document.getElementById('card-class').addEventListener('input', function () {
  document.getElementById('display-card-class').textContent = this.value.toUpperCase() || 'A1.B2.D55';
});

document.getElementById('card-name').addEventListener('input', function () {
  document.getElementById('display-card-name').textContent = this.value.toUpperCase() || 'NGUYỄN VĂN A';
});

document.getElementById('card-address').addEventListener('input', function () {
  document.getElementById('display-card-address').textContent = this.value || 'Phường X, Quận Y, Thành phố Z';
});

document.getElementById('card-sex').addEventListener('select', function () {
  document.getElementById('display-card-sex').textContent = this.value || 'Nam / Nữ';
});

document.getElementById('card-dob').addEventListener('input', function () {
  const dateValue = this.value;
  
  if (dateValue) {
    const [year, month, day] = dateValue.split('-');
    document.getElementById('display-card-dob').textContent = `${day}/${month}/${year}`;
  } else {
    document.getElementById('display-card-dob').textContent = 'dd/mm/yyyy';
  }});

document.getElementById('card-email').addEventListener('input', function () {
  document.getElementById('display-card-email').textContent = this.value || 'example@mail.com';
});

document.getElementById('card-phone').addEventListener('input', function () {
  document.getElementById('display-card-phone').textContent = this.value || '0123456789';
});

document.getElementById('card-sex').addEventListener('change', function() {
  var selectedSex = this.options[this.selectedIndex].value;
  document.getElementById('display-card-sex').textContent = selectedSex === "" ? "Nam / Nữ" : this.options[this.selectedIndex].text;
});

document.getElementById('card-avatar').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.alt = 'Selected Avatar';
          
          // Xóa ảnh cũ nếu có
          const displayCardAvatar = document.getElementById('display-card-avatar');
          displayCardAvatar.innerHTML = '';
          displayCardAvatar.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("card-name").value.trim();
  const dob = document.getElementById("card-dob").value;
  const phone = document.getElementById("card-phone").value.trim();
  const email = document.getElementById("card-email").value.trim();
  const address = document.getElementById("card-address").value.trim();
  const sex = document.getElementById("card-sex").value.trim();
  const avatar = document.getElementById("card-avatar").files.length;

  let errorMsg = "";

  if (!name || !dob || !phone || !email || !address || !sex || avatar === 0) {
      errorMsg = "Bạn cần nhập đầy đủ thông tin!";
  } else if (!/^[a-zA-ZÀÁẢÃẠĂẮẰẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢĐÚÙỦŨỤƯỨỪỬỮỰỲÝỶỸỴàáảãạăắằẳẵặâầấẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợđúùủũụưứừửữựỳýỷỹỵ\s]+$/.test(name)) {
      errorMsg = "Họ và tên không hợp lệ!";
  } else if (!/^\d{10}$/.test(phone)) {
      errorMsg = "Số điện thoại không hợp lệ!";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMsg = "Email không hợp lệ!";
  }

  const notification = document.getElementById("notification");
  const notificationText = document.getElementById("notification-text");
  
  if (errorMsg) {
      notificationText.textContent = errorMsg;
      notification.style.backgroundColor = "var(--alert)";
  } else {
      notificationText.textContent = "Cập nhật thông tin thành công!";
      notification.style.backgroundColor = "var(--success)";
  }

  notification.classList.remove("hidden");

  setTimeout(() => {
      notification.classList.add("hidden");
  }, 2000); // Thông báo tự tắt sau 2 giây
});

# Bem

- tiêu chuẩn đặt tên class khi viết css

# Ý nghĩa

- Viết tắt của: Block Element Modifier
- Block
- Element: Thành phần trong khối
- Modifier: Bổ sung ý nghĩa cho `Block` hoặc `Element`

# Tại sao phải dùng BEM?

- Mỗi người đặt 1
- Members đặt class trùng nhau, CSS đè lên nhau

# Cú pháp

- .block
- .block\_\_element

- .block--modifier
- .block\_\_element--modifier

# Tính ứng

- Xây dựng layout website
- Xây dựng thành phần trên website

# Ưu điểm

- Tính rõ ràng
- Tái sử dụng dễ dàng
- Giúp cả team làm việc với nhau dễ dàng
- Tính moudle, không lo CSS của class này bị ảnh hưởng lên CSS của class khác

# Nhược điểm

- Tên class dài
- Một số người cho là xấu

# Khi nào dùng BEM cho phù hợp?

- Dự án nhiều members
- Dự án lớn, số lượng pages nhiều hoặc số lượng các thần phần trên giao diện nhiều

# Thực hành

- Làm button
- Làm message
- Làm 1 thành phần trên website

     <!-- Info Toast Message -->

        <div class="toast toast--info">
          <div class="toast__icon">
            <i class="fa-regular fa-circle-check"></i>
          </div>
        <div class="toast__body">
          <h3 class="toast__title">Info</h3>
          <p class="toast__message">BEAR___?</p>

        </div>
        <div class="toast__close">
          <span class="toast__close-icon"></span>
          <i class="fa-sharp fa-solid fa-xmark"></i>
      </div>
      </div>

  </div>
      <!-- Warning Toast Message -->
        <div class="toast toast--warning">
          <div class="toast__icon">
            <i class="fa-regular fa-circle-check"></i>
          </div>
        <div class="toast__body">
          <h3 class="toast__title">Warning</h3>
          <p class="toast__message">BEAR___?</p>

        </div>
        <div class="toast__close">
          <span class="toast__close-icon"></span>
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
      </div>

  </div>
      <!-- Error Toast Message -->
        <div class="toast toast--error">
          <div class="toast__icon">
            <i class="fa-regular fa-circle-check"></i>
          </div>
       
        <div class="toast__body">
          <h3 class="toast__title">Error</h3>
          <p class="toast__message">BEAR___?</p>
        </div>
        <div class="toast__close">
          <span class="toast__close-icon"></span>
           <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
      </div>
   </div>

# 🎂 Món Quà Sinh Nhật 06/11 — Nàng Tiên Nụ & Bức Thư Tình Cho Em ✨

Trang web chúc mừng sinh nhật **ngày 06/11** dành riêng cho người yêu, kết hợp giữa phong cách **Neon Aurora & Nàng Tiên Nụ Đáng Yêu**, chiếc **bánh kem sinh nhật tương tác thổi nến ước nguyện**, **hoa & bong bóng pastel lơ lửng**, cùng **khung ảnh kỷ niệm và bức thư tình đánh máy (Typewriter)** nắn nót, lãng mạn.

---

## ✨ Những điểm nổi bật & Hiệu ứng đặc biệt

1. **Nàng Tiên Nụ Đội Vương Miện Sinh Nhật (Fairy Mascot)**:
   - Nàng tiên hoa Nụ đội vương miện công chúa đính ngọc lấp lánh với nhiều biểu cảm:
     - `wave`: vẫy tay chào đón nồng nhiệt.
     - `shy`: nghiêng đầu thẹn thùng, má ửng hồng.
     - `talk`: miệng nhấp nháy phát biểu theo từng dòng chữ.
     - `wink`: nháy mắt bung ngôi sao vàng lấp lánh.
     - `happy`: cười tít mắt trăng khuyết khi bạn nữ vui.

2. **Hành Trình Kể Chuyện Sinh Nhật 06/11 (Birthday Storyline)**:
   - Bầu trời đêm cực quang lung linh với chữ phát sáng neon (`.w` popping glow words).
   - Các phân cảnh nghệ thuật:
     - 🎂 **06/11**: Con số ngày sinh nhật rực rỡ neon kèm pháo hoa sao.
     - 🕯️ **Bánh kem 3 tầng & Thổi nến ước nguyện**: Bánh kem dâu tây phô mai lung linh với 3 ngọn nến đang cháy. **Bạn gái có thể chạm vào bánh để thổi nến**, nến sẽ tắt kèm làn khói phép thuật, pháo hoa trái tim nổ tung và lời chúc thành hiện thực!
     - 💖 **Sức khỏe & Năng lượng**: Trái tim hồng đập nhịp cùng vệt sóng ECG màu ngọc bích.
     - 🌙 **Bình yên & May mắn**: Đóa sen trăng thanh tao trên mặt hồ gợn sóng.
     - 🦋 **Tự do & Rực rỡ**: Đàn bướm dạ quang bay lượn trên bầu trời sao.
     - 💕 **Tình yêu trọn vẹn**: Vòng tròn tình yêu quay quanh tâm trái tim lớn.
     - 💐 **Bó hoa sinh nhật kỳ diệu**: Từng cánh hoa bung nở rực rỡ kèm ruy băng vàng kim.

3. **Câu Hỏi Tương Tác Sinh Nhật Ngọt Ngào**:
   - Nụ hỏi: *"Hôm nay sinh nhật nè, công chúa có thấy mình là cô gái hạnh phúc nhất hông? 🥰"*
   - Hai lựa chọn: **"Có, hạnh phúc lắmm! 🥰"** hoặc **"Siêu hạnh phúc luônn! 💖"** — Bấm nút nào cũng bung pháo hoa và nhận được lời khen ngọt ngào trước khi mở bức thư bí mật.

4. **Khung Ảnh Kỷ Niệm & Bức Thư Tình Sinh Nhật (Typewriter)**:
   - **Ảnh kỷ niệm**: Tự động load ảnh từ thư mục `assets/` (hiện đang dùng ảnh `assets/a62152f6-465a-42f5-a1d0-0ec2eaac4a73.jpg`).
   - Tag trên ảnh: `06 • 11 • 2026` & `"Chúc mừng sinh nhật công chúa nhỏ của anh! 🎂"`.
   - **Bức thư tình sinh nhật**: Từng dòng chữ được nắn nót gõ ra nhịp nhàng với nhịp ngắt nghỉ tự nhiên, chan chứa tình yêu thương và lời hứa chở che từ bạn trai.
   - Nút **"💖 Bắn tim chúc mừng"** và **"🎂 Thổi nến tuổi mới"**.

5. **Âm Nhạc "Từng Ngày Yêu Em" (Bùi Trường Linh)**:
   - Bản nhạc gốc lãng mạn du dương được phát ngay khi chạm mở tiệc sinh nhật.

6. **Hiệu Ứng Trái Tim, Cánh Hoa Rơi & Bong Bóng Sinh Nhật**:
   - Cánh hoa hồng bay chao nghiêng 3D.
   - Những quả bóng bay pastel & ngôi sao vàng nhẹ nhàng bay lên.
   - **Interactive Touch Trail**: Lướt ngón tay hoặc chuột trên màn hình sẽ thả ra hàng loạt trái tim hồng bay lên lấp lánh theo chuyển động tay.

---

## 🛠️ Hướng dẫn đổi ảnh hoặc tên người nhận

1. **Đổi ảnh kỷ niệm**:
   - Thả ảnh của bạn vào thư mục `assets/`.
   - Trong file [`script.js`](script.js), cập nhật dòng:
     ```javascript
     photoPath: "assets/tên-ảnh-của-bạn.jpg",
     ```

2. **Đổi tên người nhận & lời chúc**:
   - Mở file [`script.js`](script.js) và sửa trong phần `CONFIG`:
     ```javascript
     const CONFIG = {
       recipientName: "Em", // Đổi thành tên bạn gái (ví dụ "Bé Yêu", "Misaa", "Công Chúa")
       letterTitle: "Gửi em yêu — cô gái tháng 11 tuyệt vời nhất của anh,",
       letterBlocks: [ ... ]
     };
     ```

---

## 🚀 Cách mở và chạy Web

- Nhấp đúp chuột vào file [`index.html`](index.html) để mở trực tiếp trên trình duyệt (Chrome, Safari, Edge) trên cả máy tính lẫn điện thoại!

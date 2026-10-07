# Math object (Đối tượng toán học trong JavaScript)

1. Static Properties (Thuộc tính tĩnh - các hằng số toán học)

- Math.PI: trả về số Pi (xấp xỉ 3.14159)
- Math.E: trả về hằng số Euler / cơ số logarit tự nhiên (xấp xỉ 2.718)
- Math.LN2: trả về logarit tự nhiên của 2 (ln(2), xấp xỉ 0.693)
- Math.LN10: trả về logarit tự nhiên của 10 (ln(10), xấp xỉ 2.302)
- Math.LOG2E: trả về logarit cơ số 2 của e (xấp xỉ 1.442)
- Math.LOG10E: trả về logarit cơ số 10 của e (xấp xỉ 0.434)
- Math.SQRT1_2: trả về căn bậc hai của 1/2 (xấp xỉ 0.707)
- Math.SQRT2: trả về căn bậc hai của 2 (xấp xỉ 1.414)

2. Static Methods (Phương thức tĩnh)

# Nhóm bản hay dùng nhất

- Math.round(): làm tròn đến số nguyên gần nhất
- Math.ceil(): làm tròn lên số nguyên gần nhất (trần)
- Math.floor(): làm tròn xuống số nguyên gần nhất (sàn)
- Math.trunc(): cắt bỏ phần thập phân, chỉ giữ lại phần nguyên
- Math.abs(): trả về giá trị tuyệt đối (luôn dương)
- Math.random(): trả về số ngẫu nhiên từ 0 đến bé hơn 1 [0, 1)
- Math.min(): trả về số nhỏ nhất trong các số truyền vào
- Math.max(): trả về số lớn nhất trong các số truyền vào
- Math.pow(): tính lũy thừa (ví dụ: Math.pow(x, y) = x^y)
- Math.sqrt(): tính căn bậc hai
- Math.cbrt(): tính căn bậc ba
- Math.sign(): trả về dấu của số (-1: số âm, 0: số không, 1: số dương)

# Nhóm Lượng giác tính bằng Radian)

- Math.sin(): tính sin của một góc
- Math.cos(): tính cos của một góc
- Math.tan(): tính tan của một góc
- Math.asin(): tính arcsin (nghịch đảo của sin)
- Math.acos(): tính arccos (nghịch đảo của cos)
- Math.atan(): tính arctan (nghịch đảo của tan)
- Math.atan2(): tính góc theta từ tọa độ (y, x)

# Nhóm Lượng giác Hyperbolic

- Math.sinh(): tính hyperbolic sin
- Math.cosh(): tính hyperbolic cos
- Math.tanh(): tính hyperbolic tan
- Math.asinh(): tính nghịch đảo hyperbolic sin
- Math.acosh(): tính nghịch đảo hyperbolic cos
- Math.atanh(): tính nghịch đảo hyperbolic tan

# Nhóm Mũ và Logarit

- Math.exp(): tính e^x
- Math.expm1(): tính (e^x) - 1
- Math.log(): tính logarit tự nhiên ln(x)
- Math.log1p(): tính ln(1 + x)
- Math.log2(): tính logarit cơ số 2
- Math.log10(): tính logarit cơ số 10

# Nhóm Hình học & Số nhị phân / Độ chính xác

- Math.hypot(): tính căn bậc hai tổng bình phương các số (tính cạnh huyền)
- Math.imul(): nhân 2 số nguyên 32-bit theo kiểu C/C++
- Math.clz32(): đếm số lượng bit 0 đứng đầu ở dạng nhị phân 32-bit
- Math.fround(): chuyển đổi sang số thực dấu phẩy động 32-bit (float)
- Math.f16round(): làm tròn sang định dạng nửa độ chính xác 16-bit float
- Math.sumPrecise(): tính tổng chính xác cao của một mảng số (tránh sai số dấu phẩy động)

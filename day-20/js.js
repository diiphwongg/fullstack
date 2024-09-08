// bai 1
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var group = field.split(".");
  var errorGroup = errors[group[0]];

  if (!errorGroup) {
    return null;
  }

  if (group.length > 1) {
    return errorGroup[group[1]] || null;
  }

  if (errorGroup.required) {
    return errorGroup.required;
  }

  for (var key in errorGroup) {
    if (key !== "required" && errorGroup[key]) {
      return errorGroup[key];
    }
  }

  return null;
}

console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique"));

// bai 2
function createCustomer(name, age, address) {
  return {
    name: name,
    age: age,
    address: address,
  };
}

function createCustomers(customers) {
  const result = customers.map((customer) => {
    const shortName =
      customer.name.split(" ").slice(0, -1).join(" ") +
      " " +
      customer.name.split(" ").pop();
    return {
      ...customer,
      shortName: shortName,
    };
  });

  result.sort((a, b) => a.age - b.age);

  return result;
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);

console.log(result);

// bai 3

let users = [];

function createUser(name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
}

function register(name, password, email) {
  if (!name || !password || !email) {
    console.log("Lỗi: Tất cả các thông tin phải được cung cấp.");
    return;
  }

  const user = createUser(name, password, email);

  users.push(user);
  console.log("Đăng ký thành công!");
  return user;
}

function login(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    console.log("Đăng nhập thành công!");
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
    return null;
  }
}

register("Nguyen Van A", "password123", "nguyenvana@gmail.com");
register("Nguyen Van B", "password456", "nguyenvanb@gmail.com");

console.log(users);

const user1 = login("nguyenvana@gmail.com", "password123");
console.log(user1);

const user2 = login("nguyenvanb@gmail.com", "wrongpassword");
console.log(user2);

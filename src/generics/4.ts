type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user: User = {
  name: "John",
  surname: "Doe",
  email: "user@mail",
  password: "password123",
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  return { ...user, ...initialValues };
}

createOrUpdateUser({
  email: "user1@mail.com",
  password: "password1123",
});

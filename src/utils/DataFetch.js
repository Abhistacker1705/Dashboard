import axios from "axios";

export async function getData() {
  const response = await axios.get(
    "https://api.jsonbin.io/v3/b/64e1316e9d312622a393c25d"
  );
  return response;
}

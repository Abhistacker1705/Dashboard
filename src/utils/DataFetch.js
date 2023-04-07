import axios from "axios"

export async function getData() {
	const response = await axios.get("https://api.jsonbin.io/v3/b/642fe0b2c0e7653a059f6dd5")
	return response
}

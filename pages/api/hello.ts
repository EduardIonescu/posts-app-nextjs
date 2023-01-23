import { NextApiRequest, NextApiResponse } from "next";
// req = HTTP incoming message, res = HTTP server response
export default function handler(_:NextApiRequest, res:NextApiResponse) {
	res.status(200).json({ text: "Hello" });
	//if (req.method === "POST") {
		// Process a POST request
	//} else {
		// Handle any other HTTP method
//	}
}

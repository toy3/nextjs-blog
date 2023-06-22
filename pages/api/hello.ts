import { NextApiRequest, NextApiResponse } from "next";

// req = HTTP incoming message, res = HTTP server response
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: "Hello" });
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         // Process a POST request
//     } else {
//         // Handle any other HTTP method
//     }
// }
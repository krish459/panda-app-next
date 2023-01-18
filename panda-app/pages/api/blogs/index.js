// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { blogsdata } from "@/blogdata";

export default function handler(req, res) {
  res.status(200).json(blogsdata);
}

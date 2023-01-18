import { blogsdata } from "../../../blogdata";

export default function handler({ query: { id } }, res) {
  // console.log(id);
  const filtered = blogsdata.filter((blogsdata) => blogsdata.id === id);
  // const filtered = blogsdata[0];
  // console.log(filtered);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `blogdata with the id ${id} not found!` });
  }
}

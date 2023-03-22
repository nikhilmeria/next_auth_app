export default function formHandler(req, res) {
 if (req.method === "POST") {
  console.log("body1: ", req.body.name);
  console.log("body2: ", req.body.no);
  console.log("body3: ", req.body.serv);
  console.log("body3: ", req.body.address);

  res.status(201).json({data: "Form processing by api"});
 }
}

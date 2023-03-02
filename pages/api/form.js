export default function formHandler(req, res) {
 if (req.method === "POST") {
  console.log("body1: ", req.body.myName);
  console.log("body2: ", req.body.myPhn);
  console.log("body3: ", req.body.myServ);

  res.status(201).json({data: "Form processing sucessful"});
 }
}

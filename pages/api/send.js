export default function handler(req,res){
  if(req.method === 'POST'){
    const data = req.body
    console.log('Simulated email send:', data)
    // In a real app you'd integrate with an email provider here.
    return res.status(200).json({ok:true})
  }
  res.status(405).json({error:'Method not allowed'})
}

import { services } from '../../lib/services'
import { useRouter } from 'next/router'
export default function ServicePage(){
  const router = useRouter()
  const { slug } = router.query
  const svc = services.find(s => s.id === slug) || {title:'Service', desc:''}

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name');
    const phone = fd.get('phone');
    const notes = fd.get('notes');
    // simulate API send
    try{
      await fetch('/api/send', {method:'POST', body: JSON.stringify({name,phone,notes,service:svc.title}), headers:{'Content-Type':'application/json'}})
    }catch(e){console.error(e)}
    const text = `Hello DEBO team, my name is ${name}. I want to request the ${svc.title} service. Notes: ${notes || '-'}.`
    const wa = `https://wa.me/905376085033?text=${encodeURIComponent(text)}`
    window.open(wa, '_blank')
  }

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-2xl font-bold text-navy mb-4">{svc.title}</h1>
        <p className="text-gray-700 mb-6">{svc.desc}</p>
        <form onSubmit={handleSubmit} className="max-w-md space-y-3">
          <label className="block"><span className="text-sm">Full name</span><input name="name" required className="mt-1 w-full border rounded p-2"/></label>
          <label className="block"><span className="text-sm">Phone number</span><input name="phone" required className="mt-1 w-full border rounded p-2"/></label>
          <label className="block"><span className="text-sm">Additional notes</span><textarea name="notes" className="mt-1 w-full border rounded p-2"/></label>
          <button type="submit" className="btn-primary">Request This Service</button>
        </form>
      </div>
    </div>
  )
}

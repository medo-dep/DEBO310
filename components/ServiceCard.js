import Link from 'next/link'
export default function ServiceCard({s}){
  return (
    <Link href={`/services/${s.id}`}>
      <a className="block p-6 border rounded-lg hover:shadow-md transition">
        <h3 className="font-bold text-navy mb-2">{s.title}</h3>
        <p className="text-sm text-gray-600">{s.desc}</p>
      </a>
    </Link>
  )
}

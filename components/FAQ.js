export default function FAQ({items}){
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((it,idx)=> (
        <details key={idx} className="border rounded-md p-3">
          <summary className="font-semibold text-navy cursor-pointer">{it.q}</summary>
          <div className="mt-2 text-gray-700">{it.a}</div>
        </details>
      ))}
    </div>
  )
}

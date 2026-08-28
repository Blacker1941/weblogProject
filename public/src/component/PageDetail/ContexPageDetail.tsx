import React from 'react'

function ContexPageDetail(props) {
  return (
      <section className="prose prose-slate mt-10 max-w-none text-right">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
             { props.title}
            </h2>

            <p className="text-[16px] leading-9 text-slate-600"> 
              {props.content}
            </p>

          </section>
  )
}

export default ContexPageDetail
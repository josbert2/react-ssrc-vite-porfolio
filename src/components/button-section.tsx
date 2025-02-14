import React from 'react'


interface buttonSectionProps {
    title: string
}
function buttonSection(
    props: buttonSectionProps
) {
  return (
    <div className="framer-3R4K1 italic text-framer mb-0 text-gray-500 text-title-h3 text-3xl font-bold" data-border="true">
        {props.title}
    </div>
  )
}

export default buttonSection
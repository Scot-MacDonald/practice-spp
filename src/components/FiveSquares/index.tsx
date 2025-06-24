import React from 'react'

const items = [
  {
    title: 'dagnä',
    description: [
      'Deutsche Arbeitsgemeinschaft niedergelassener Ärzte in der Versorgung HIV-Infizierter',
    ],
  },
  {
    title: 'DAIG',
    description: ['Deutsche AIDS-Gesellschaft e.V.'],
  },
  {
    title: 'bng',
    description: ['Berufsverband Niedergelassener', 'Gastroenterologen Deutschlands e.V.'],
  },
  {
    title: 'AK AIDS',
    description: ['Arbeitskreis AIDS niedergelassener', 'Ärzte Berlin e.V.'],
  },
  {
    title: 'DGI',
    description: ['Deutsche Gesellschaft für', 'Infektologie e.V.'],
  },
]

export default function FiveSquares() {
  // Break items into chunks of 2
  const rows = []
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3))
  }

  return (
    <div className="container">
      <div className="page-with-header mb-6">
        <h1 className="page-header ">Wir sind Mitglied:</h1>
      </div>

      <div className="flex flex-col pb-4">
        {rows.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-x-4 lg:gap-x-8 xl:gap-x-8 justify-end"
          >
            {/* Blank columns for lg and up */}
            <div className="hidden lg:block"></div>

            {/* Items */}
            {pair.map((item, i) => (
              <div
                key={i}
                className="relative bg-white border-t border-gray-200 p-3 flex flex-col justify-between min-h-[100px] hover:bg-[#f0f8ec] transition-colors"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {item.description.map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

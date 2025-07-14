// // import { Metadata } from 'next'
// // import configPromise from '@payload-config'
// // import { getPayload } from 'payload'
// // import { draftMode } from 'next/headers'
// // import React, { cache } from 'react'
// // import { generateMeta } from '@/utilities/generateMeta'
// // import { TypedLocale } from 'payload'
// // import { PayloadRedirects } from '@/components/PayloadRedirects'
// // import type { Page as PageType } from '@/payload-types'
// // import { RenderHero } from '@/heros/RenderHero'
// // import { OpeningHours } from '@/components/OpeningHours'
// // import Time from '@/components/Time'

// // type Args = {
// //   params: Promise<{
// //     locale: TypedLocale
// //   }>
// // }

// // export default async function TestPage({ params: paramsPromise }: Args) {
// //   const { locale = 'en' } = await paramsPromise
// //   const slug = 'testpage'
// //   const url = '/' + slug

// //   const page = await queryPage({
// //     slug,
// //     locale,
// //   })

// //   if (!page) {
// //     return <PayloadRedirects url={url} />
// //   }

// //   const { hero } = page

// //   return (
// //     <article className="pb-24">
// //       <PayloadRedirects disableNotFound url={url} />

// //       {/* Render the hero section from Payload */}
// //       <RenderHero {...hero} />

// //       {/* Your custom test layout */}
// //       <div className="page-with-header mx-8">
// //         <h1 className="page-header ">Herzlich Willkommen in Ihrer Infektionspraxis SPP-Mitte</h1>
// //       </div>
// //       <div className="w-full  grid grid-cols-12 ">
// //         <div className="col-span-8 px-8 ">
// //           <h2 className="text-xl font-bold mb-4">Sprechzeiten</h2>
// //         </div>
// //         <div className="col-span-4 px-8">
// //           <h2 className="text-xl font-bold mb-4">Latest News</h2>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-3 w-full border-t border-gray-300">
// //         <div className="z-30 border-r border-gray-300 p-8">
// //           <h2 className="text-xl font-bold mb-4 ">18-10-2025</h2>
// //           <p>
// //             unsere Praxis bleibt am 07. Juni geschlossen. In akuten Notfällen wenden Sie sich bitte
// //             an den KV-Notdienst (Tel 116 117) oder an die nächstgelegene Rettungsstelle. Vielen Dank
// //             für Ihr Verständnis. Ihr Praxisteam SPP-Mitte
// //           </p>
// //         </div>
// //         <div className="border-r border-gray-300 p-8">
// //           <h2 className="text-xl font-bold mb-4">18-10-2025</h2>
// //           <p className="">
// //             unsere Praxis bleibt am 07. Juni geschlossen. In akuten Notfällen wenden Sie sich bitte
// //             an den KV-Notdienst (Tel 116 117) oder an die nächstgelegene Rettungsstelle. Vielen Dank
// //             für Ihr Verständnis. Ihr Praxisteam SPP-Mitte
// //           </p>
// //         </div>
// //         <div className="p-8">
// //           <h2 className="text-xl font-bold mb-4 ">Open</h2>
// //           <OpeningHours />
// //           <Time />
// //         </div>
// //       </div>

// //       <div className="w-full h-[70vh] grid grid-cols-12 border-t border-gray-300">
// //         <div className="col-span-8 p-8 border-r border-gray-300">
// //           <h2 className="text-2xl font-bold mb-4">8-column section</h2>
// //           <p>Testing wide layout options here.</p>
// //         </div>
// //         <div className="col-span-4 p-8">
// //           <h2 className="text-2xl font-bold mb-4">Practice</h2>
// //           <p>
// //             Our Practice Dies ist die Webseite der SPP-Mitte am Oranienburger Tor in Berlin. Wir
// //             sind eine Schwerpunktpraxis für Infektions- und Lebererkrankungen und sind vor allem
// //             spezialisiert auf HIV-Medizin und die Therapie von Hepatitis-Erkrankungen. Um
// //             Wartezeiten soweit wie möglich zu vermeiden bitten wir Sie immer einen Termin zu
// //             vereinbaren: entweder online, via mail oder telefonisch unter 030-282 50 52.
// //           </p>
// //           <p>
// //             Wir sind eine Terminpraxis. Wenn Sie einen Termin haben und pünktlich gekommen sind, ist
// //             unser Anspruch, dass Sie möglichst bald nach dem vereinbarten Zeitpunkt aufgerufen
// //             werden. Auch kurzfristig können sogenannte Kurztermine online oder über die Praxis
// //             gebucht werden.
// //           </p>
// //           <p>
// //             Gegenseitige Akzeptanz und Respekt Unser Anspruch ist, dass in unserer Praxis allen
// //             Menschen gleich begegnet wird, unabhängig von Krankheit, Behinderung, Geschlecht,
// //             Herkunft, Sprache, Hautfarbe, sexueller Orientierung, Religionszugehörigkeit,
// //             Krankenversicherung uvm. Wir behandeln unsere Patient*innen respektvoll und eben diesen
// //             Respekt wünschen wir uns auch von ihnen. Diskriminierung und Grenzüberschreitungen
// //             jedweder Art haben in unserer Praxis keinen Platz!
// //           </p>
// //         </div>
// //       </div>
// //       <div className="w-full  grid grid-cols-12 border-t border-gray-300">
// //         {/* 4-column section on the LEFT */}
// //         <div className="col-span-4 p-8 border-r border-gray-300">
// //           <h2 className="text-2xl font-bold mb-4">Our Team</h2>
// //           <p>
// //             Meet our dedicated team members who are committed to providing excellent care and
// //             support for our patients.
// //           </p>
// //         </div>

// //         {/* 8-column section on the RIGHT with 4 team members */}
// //         <div className="col-span-8 p-8 grid grid-cols-4 gap-4">
// //           {/* Team member 1 */}
// //           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
// //             <img
// //               src="/api/media/file/Wagner_Isabel.webp"
// //               alt="Team Member 1"
// //               className=" mb-2 object-cover"
// //             />
// //             <h3 className="font-bold">Dr. Alice Example</h3>
// //             <p className="text-sm text-gray-600">Infectious Disease Specialist</p>
// //           </div>

// //           {/* Team member 2 */}
// //           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
// //             <img
// //               src="/api/media/file/grimmroland.webp"
// //               alt="Team Member 2"
// //               className=" mb-2 object-cover"
// //             />
// //             <h3 className="font-bold">Dr. Bob Example</h3>
// //             <p className="text-sm text-gray-600">Hepatology Expert</p>
// //           </div>

// //           {/* Team member 3 */}
// //           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
// //             <img
// //               src="/api/media/file/klausengerd.webp"
// //               alt="Team Member 3"
// //               className=" mb-2 object-cover"
// //             />
// //             <h3 className="font-bold">Dr. Carol Example</h3>
// //             <p className="text-sm text-gray-600">HIV Medicine Specialist</p>
// //           </div>

// //           {/* Team member 4 */}
// //           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
// //             <img
// //               src="/images/team/member4.jpg"
// //               alt="Team Member 4"
// //               className="w-24 h-24 rounded-full mb-2 object-cover"
// //             />
// //             <h3 className="font-bold">Dr. Dave Example</h3>
// //             <p className="text-sm text-gray-600">Practice Manager</p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full h-[70vh] grid grid-cols-12 border-t border-gray-300">
// //         <div className="col-span-4 p-8 border-r border-gray-300">
// //           <h2 className="text-2xl font-bold mb-4">Practice</h2>
// //           <div className="max-w-none prose dark:prose-invert text-gray-500 text-[14px] mb-4">
// //             <p className="col-start-2">
// //               In der SPP-Mitte bieten wir Ihnen ein breites medizinisches Leistungsspektrum mit
// //               Schwerpunkt auf Infektions- und Lebererkrankungen. Unsere erfahrenen Ärzt*innen
// //               betreuen Sie umfassend – sowohl hausärztlich als auch spezialmedizinisch.
// //             </p>
// //             <p className="col-start-2">Wir sind spezialisiert auf:</p>
// //             <p className="col-start-2">
// //               <strong>Hausärztliche Versorgung</strong> bei akuten und chronischen Beschwerden sowie
// //               Vorsorge
// //             </p>
// //             <p className="col-start-2">
// //               <strong>Infektiologie</strong> – moderne Diagnostik und Therapie infektiöser
// //               Erkrankungen
// //             </p>
// //             <p className="col-start-2">
// //               <strong>HIV / AIDS</strong> – ganzheitliche Betreuung und antiretrovirale Therapie
// //             </p>
// //             <p className="col-start-2">
// //               <strong>Hepatitis</strong> – fundierte Behandlung und langfristige Begleitung bei
// //               Hepatitis A, B und C
// //             </p>
// //             <p className="col-start-2">
// //               <strong>STI / STD</strong> – diskrete Beratung und Behandlung sexuell übertragbarer
// //               Infektionen
// //             </p>
// //             <p className="col-start-2">
// //               Alle Bereiche sind miteinander vernetzt – für eine individuelle und kontinuierliche
// //               Versorgung auf dem neuesten Stand der Medizin.
// //             </p>
// //           </div>
// //         </div>
// //         <div className="col-span-8 p-8 border-r border-gray-300">
// //           <h2 className="text-2xl font-bold mb-4">8-column section</h2>
// //           <p>Testing wide layout options here.</p>
// //         </div>
// //       </div>
// //       <div className="w-full h-[20vh] grid grid-cols-4 border-t border-gray-300">
// //         <div className="page-with-header mx-8">
// //           <h1 className="page-header ">write a title here</h1>
// //         </div>
// //         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
// //           <h2 className="text-xl font-bold mb-4">Column 1</h2>
// //           <p>Content for the first column goes here.</p>
// //         </div>
// //         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
// //           <h2 className="text-xl font-bold mb-4">Column 2</h2>
// //           <p>Content for the second column goes here.</p>
// //         </div>
// //         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
// //           <h2 className="text-xl font-bold mb-4">Column 3</h2>
// //           <p>Content for the third column goes here.</p>
// //         </div>
// //         <div className="px-8 flex flex-col justify-center">
// //           <h2 className="text-xl font-bold mb-4">Column 4</h2>
// //           <p>Content for the fourth column goes here.</p>
// //         </div>
// //       </div>
// //     </article>
// //   )
// // }

// // export async function generateMetadata({ params }: Args): Promise<Metadata> {
// //   const { locale = 'en' } = await params
// //   const slug = 'testpage'

// //   const page = await queryPage({
// //     locale,
// //     slug,
// //   })

// //   return generateMeta({ doc: page })
// // }

// // const queryPage = cache(async ({ locale, slug }: { locale: TypedLocale; slug: string }) => {
// //   const { isEnabled: draft } = await draftMode()

// //   const payload = await getPayload({ config: configPromise })

// //   const result = await payload.find({
// //     collection: 'pages',
// //     draft,
// //     limit: 1,
// //     overrideAccess: draft,
// //     locale,
// //     where: {
// //       slug: {
// //         equals: slug,
// //       },
// //     },
// //   })

// //   return result.docs?.[0] || null
// // })

// import { Metadata } from 'next'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { draftMode } from 'next/headers'
// import React, { cache } from 'react'
// import { generateMeta } from '@/utilities/generateMeta'
// import { TypedLocale } from 'payload'
// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import type { Page as PageType } from '@/payload-types'
// import { RenderHero } from '@/heros/RenderHero'
// import { OpeningHours } from '@/components/OpeningHours'
// import Time from '@/components/Time'

// type Args = {
//   params: Promise<{
//     locale: TypedLocale
//   }>
// }

// export default async function TestPage({ params: paramsPromise }: Args) {
//   const { locale = 'en' } = await paramsPromise
//   const slug = 'testpage'
//   const url = '/' + slug

//   const page = await queryPage({
//     slug,
//     locale,
//   })

//   if (!page) {
//     return <PayloadRedirects url={url} />
//   }

//   const { hero } = page

//   return (
//     <article className="pb-24">
//       <PayloadRedirects disableNotFound url={url} />

//       {/* Render the hero section from Payload */}
//       <RenderHero {...hero} />

//       {/* Your custom test layout */}
//       <div className="page-with-header mx-8">
//         <h1 className="page-header ">Herzlich Willkommen in Ihrer Infektionspraxis SPP-Mitte</h1>
//       </div>
//       <div className="w-full  grid grid-cols-12 ">
//         <div className="col-span-8 px-8 ">
//           <h2 className="text-xl font-bold mb-4">Sprechzeiten</h2>
//         </div>
//         <div className="col-span-4 px-8">
//           <h2 className="text-xl font-bold mb-4">Latest News</h2>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 w-full 0">
//         <div className="z-30  p-8">
//           <h2 className="text-xl font-bold mb-4 ">18-10-2025</h2>
//           <p>
//             unsere Praxis bleibt am 07. Juni geschlossen. In akuten Notfällen wenden Sie sich bitte
//             an den KV-Notdienst (Tel 116 117) oder an die nächstgelegene Rettungsstelle. Vielen Dank
//             für Ihr Verständnis. Ihr Praxisteam SPP-Mitte
//           </p>
//         </div>
//         <div className=" p-8">
//           <h2 className="text-xl font-bold mb-4">18-10-2025</h2>
//           <p className="">
//             unsere Praxis bleibt am 07. Juni geschlossen. In akuten Notfällen wenden Sie sich bitte
//             an den KV-Notdienst (Tel 116 117) oder an die nächstgelegene Rettungsstelle. Vielen Dank
//             für Ihr Verständnis. Ihr Praxisteam SPP-Mitte
//           </p>
//         </div>
//         <div className="p-8">
//           <h2 className="text-xl font-bold mb-4 ">Open</h2>
//           <OpeningHours />
//           <Time />
//         </div>
//       </div>
//       <div className="page-with-header mx-8">
//         <h2 className="page-header ">The Practice</h2>
//       </div>
//       <div className="w-full h-[70vh] grid grid-cols-12 ">
//         <div className="col-span-8 p-8 ">
//           <h2 className="text-2xl font-bold mb-4">8-column section</h2>
//           <p>Testing wide layout options here.</p>
//         </div>
//         <div className="col-span-4 p-8">
//           <h2 className="text-2xl font-bold mb-4">Practice</h2>
//           <p>
//             Our Practice Dies ist die Webseite der SPP-Mitte am Oranienburger Tor in Berlin. Wir
//             sind eine Schwerpunktpraxis für Infektions- und Lebererkrankungen und sind vor allem
//             spezialisiert auf HIV-Medizin und die Therapie von Hepatitis-Erkrankungen. Um
//             Wartezeiten soweit wie möglich zu vermeiden bitten wir Sie immer einen Termin zu
//             vereinbaren: entweder online, via mail oder telefonisch unter 030-282 50 52.
//           </p>
//           <p>
//             Wir sind eine Terminpraxis. Wenn Sie einen Termin haben und pünktlich gekommen sind, ist
//             unser Anspruch, dass Sie möglichst bald nach dem vereinbarten Zeitpunkt aufgerufen
//             werden. Auch kurzfristig können sogenannte Kurztermine online oder über die Praxis
//             gebucht werden.
//           </p>
//           <p>
//             Gegenseitige Akzeptanz und Respekt Unser Anspruch ist, dass in unserer Praxis allen
//             Menschen gleich begegnet wird, unabhängig von Krankheit, Behinderung, Geschlecht,
//             Herkunft, Sprache, Hautfarbe, sexueller Orientierung, Religionszugehörigkeit,
//             Krankenversicherung uvm. Wir behandeln unsere Patient*innen respektvoll und eben diesen
//             Respekt wünschen wir uns auch von ihnen. Diskriminierung und Grenzüberschreitungen
//             jedweder Art haben in unserer Praxis keinen Platz!
//           </p>
//         </div>
//       </div>
//       <div className="page-with-header mx-8">
//         <h2 className="page-header ">Unser Ärzt:innen</h2>
//       </div>
//       <div className="w-full  grid grid-cols-12">
//         {/* 4-column section on the LEFT */}
//         <div className="col-span-4 p-8">
//           <p>
//             Meet our dedicated team members who are committed to providing excellent care and
//             support for our patients.
//           </p>
//         </div>

//         {/* 8-column section on the RIGHT with 4 team members */}
//         <div className="col-span-8 p-8 grid grid-cols-4 gap-4">
//           {/* Team member 1 */}
//           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
//             <img
//               src="/api/media/file/Wagner_Isabel.webp"
//               alt="Team Member 1"
//               className=" mb-2 object-cover"
//             />
//             <h3 className="font-bold">Dr. Alice Example</h3>
//             <p className="text-sm text-gray-600">Infectious Disease Specialist</p>
//           </div>

//           {/* Team member 2 */}
//           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
//             <img
//               src="/api/media/file/grimmroland.webp"
//               alt="Team Member 2"
//               className=" mb-2 object-cover"
//             />
//             <h3 className="font-bold">Dr. Bob Example</h3>
//             <p className="text-sm text-gray-600">Hepatology Expert</p>
//           </div>

//           {/* Team member 3 */}
//           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
//             <img
//               src="/api/media/file/klausengerd.webp"
//               alt="Team Member 3"
//               className=" mb-2 object-cover"
//             />
//             <h3 className="font-bold">Dr. Carol Example</h3>
//             <p className="text-sm text-gray-600">HIV Medicine Specialist</p>
//           </div>

//           {/* Team member 4 */}
//           <div className="border rounded-lg p-4 flex flex-col items-center text-center">
//             <img
//               src="/images/team/member4.jpg"
//               alt="Team Member 4"
//               className="w-24 h-24 rounded-full mb-2 object-cover"
//             />
//             <h3 className="font-bold">Dr. Dave Example</h3>
//             <p className="text-sm text-gray-600">Practice Manager</p>
//           </div>
//         </div>
//       </div>
//       <div className="page-with-header mx-8">
//         <h2 className="page-header ">Unsere Fachgebiete im Überblick</h2>
//       </div>
//       <div className="w-full h-[70vh] grid grid-cols-12 ">
//         <div className="col-span-4 p-8 ">
//           <div className="max-w-none prose dark:prose-invert mb-4">
//             <p className="col-start-2">
//               In der SPP-Mitte bieten wir Ihnen ein breites medizinisches Leistungsspektrum mit
//               Schwerpunkt auf Infektions- und Lebererkrankungen. Unsere erfahrenen Ärzt*innen
//               betreuen Sie umfassend – sowohl hausärztlich als auch spezialmedizinisch.
//             </p>
//             <p className="col-start-2">Wir sind spezialisiert auf:</p>
//             <p className="col-start-2">
//               <strong>Hausärztliche Versorgung</strong> bei akuten und chronischen Beschwerden sowie
//               Vorsorge
//             </p>
//             <p className="col-start-2">
//               <strong>Infektiologie</strong> – moderne Diagnostik und Therapie infektiöser
//               Erkrankungen
//             </p>
//             <p className="col-start-2">
//               <strong>HIV / AIDS</strong> – ganzheitliche Betreuung und antiretrovirale Therapie
//             </p>
//             <p className="col-start-2">
//               <strong>Hepatitis</strong> – fundierte Behandlung und langfristige Begleitung bei
//               Hepatitis A, B und C
//             </p>
//             <p className="col-start-2">
//               <strong>STI / STD</strong> – diskrete Beratung und Behandlung sexuell übertragbarer
//               Infektionen
//             </p>
//             <p className="col-start-2">
//               Alle Bereiche sind miteinander vernetzt – für eine individuelle und kontinuierliche
//               Versorgung auf dem neuesten Stand der Medizin.
//             </p>
//           </div>
//         </div>
//         <div className="col-span-8 p-8 border-r border-gray-300">
//           <h2 className="text-2xl font-bold mb-4">8-column section</h2>
//           <p>Testing wide layout options here.</p>
//         </div>
//       </div>
//       <div className="w-full h-[20vh] grid grid-cols-4 ">
//         <div className="page-with-header mx-8">
//           <h1 className="page-header ">write a title here</h1>
//         </div>
//         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
//           <h2 className="text-xl font-bold mb-4">Column 1</h2>
//           <p>Content for the first column goes here.</p>
//         </div>
//         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
//           <h2 className="text-xl font-bold mb-4">Column 2</h2>
//           <p>Content for the second column goes here.</p>
//         </div>
//         <div className="px-8 border-r border-gray-300 flex flex-col justify-center">
//           <h2 className="text-xl font-bold mb-4">Column 3</h2>
//           <p>Content for the third column goes here.</p>
//         </div>
//         <div className="px-8 flex flex-col justify-center">
//           <h2 className="text-xl font-bold mb-4">Column 4</h2>
//           <p>Content for the fourth column goes here.</p>
//         </div>
//       </div>
//     </article>
//   )
// }

// export async function generateMetadata({ params }: Args): Promise<Metadata> {
//   const { locale = 'en' } = await params
//   const slug = 'testpage'

//   const page = await queryPage({
//     locale,
//     slug,
//   })

//   return generateMeta({ doc: page })
// }

// const queryPage = cache(async ({ locale, slug }: { locale: TypedLocale; slug: string }) => {
//   const { isEnabled: draft } = await draftMode()

//   const payload = await getPayload({ config: configPromise })

//   const result = await payload.find({
//     collection: 'pages',
//     draft,
//     limit: 1,
//     overrideAccess: draft,
//     locale,
//     where: {
//       slug: {
//         equals: slug,
//       },
//     },
//   })

//   return result.docs?.[0] || null
// })

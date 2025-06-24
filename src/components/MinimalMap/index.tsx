'use client'

import { useEffect, useState } from 'react'
import FiveSquares from '../FiveSquares'

type Props = {
  lat: number
  lng: number
}

export default function LocationSection({ lat, lng }: Props) {
  const [Map, setMap] = useState<React.ReactNode>(null)

  useEffect(() => {
    const loadMap = async () => {
      const { MapContainer, TileLayer, Marker } = await import('react-leaflet')
      const L = await import('leaflet')
      await import('leaflet/dist/leaflet.css')

      const dotIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="dot"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })

      const imageIcon = L.icon({
        iconUrl: 'media/S-Bahn-Logo.svg.webp',
        iconSize: [20, 20],
        iconAnchor: [15, 15],
        className: 'image-marker',
      })

      const imageIconU = L.icon({
        iconUrl: 'media/U-Bahn.svg',
        iconSize: [20, 20],
        iconAnchor: [15, 15],
        className: 'image-marker',
      })

      setMap(
        <MapContainer
          center={[lat, lng]}
          zoom={16}
          zoomControl={true}
          scrollWheelZoom={false}
          dragging={true}
          doubleClickZoom={false}
          style={{ height: '450px', width: '100%', borderRadius: '12px', zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; <a href='https://carto.com/'>CARTO</a>"
          />
          <Marker position={[lat, lng]} icon={dotIcon} />
          <Marker position={[52.52497770786654, 13.392909433053319]} icon={imageIcon} />
          <Marker position={[52.52552931610739, 13.387399706552674]} icon={imageIconU} />
        </MapContainer>,
      )
    }

    loadMap()
  }, [lat, lng])

  return (
    <>
      <div className=" page-with-header">
        <h1 className="page-header">Visit us</h1>
      </div>
      <h2 className="text-md font-semibold pb-8">Öffentliche Verkehrsmittel:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm mb-10">
        <div className="flex flex-col">
          <strong className="mb-1">U-Bahn</strong>
          <span>Linie U6</span>
          <span>Haltestelle Oranienburger Tor</span>
        </div>
        <div className="flex flex-col">
          <strong className="mb-1">Straßenbahn (Tram)</strong>
          <span>Linien M1, M5, 12</span>
          <span>Haltestelle Oranienburger Tor</span>
        </div>
        <div className="flex flex-col">
          <strong className="mb-1">S-Bahn</strong>
          <span>Linien S1, S2</span>
          <span>Haltestelle Oranienburger Straße</span>
          <span>Linien S5, S7, S75, S9</span>
          <span>Haltestelle Friedrichstraße</span>
        </div>
        <div className="flex flex-col">
          <strong className="mb-1">Bus</strong>
          <span>Linie 147</span>
          <span>Haltestelle Friedrichstraße / Reinhardtstraße</span>
          <span>Linie 142</span>
          <span>Haltestelle Torstraße / U Oranienburger Tor</span>
        </div>
      </div>

      <div>{Map || <div>Loading map…</div>}</div>

      <div className="container">
        <FiveSquares />
      </div>
    </>
  )
}

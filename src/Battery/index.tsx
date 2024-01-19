import { useEffect, useState } from 'react'

export default function Battery() {
  const [batteryLevel, setBatteryLevel] = useState(0)
  const [isCharging, setIsCharging] = useState(false)

  const updateBatteryInfo = async() => {
    const battery = await navigator.getBattery()

    const angkaBattery = (battery.level * 100).toFixed(0)

    setBatteryLevel(+angkaBattery)

    setIsCharging(battery.charging)

    battery.addEventListener('levelchange', () => {
      setBatteryLevel(+angkaBattery)
    })

    battery.addEventListener('chargingchange', () => {
      setIsCharging(battery.charging)
    })
  }

  useEffect(() => {
    updateBatteryInfo()
  }, [])

  return (
    <section>
        <div>Battery {batteryLevel} %🔋</div>
        <div>Charging {isCharging ? '⚡⚡ 🔋' : '❌'}</div>
    </section>
  )
}

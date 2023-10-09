import { IconMission } from './assets/Icons'

const Mission = () => {
  return (
    <section className='bg-primary text-white flex flex-col justify-center items-center gap-6 lg:gap-3 py-12 lg:py-24'>
        <IconMission className='fill-white w-16'/>
        <h3 className='text-3xl font-bold'>Nuestra Misión</h3>
        <p className='max-w-3xl px-8 mx-auto text-lg text-center'>
           Nuestra misión es simple, pero fundamental: proteger lo que más valoras.
           Ya sea tu hogar, tu familia, tu negocio o tu patrimonio, trabajamos incansablemente para ofrecerte opciones de seguro personalizadas que se ajusten a tu estilo de vida y te proporcionen la paz mental que necesitas.
        </p>
    </section>
  )
}

export default Mission